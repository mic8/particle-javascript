class ParticleFactory {
    constructor(canvas, ctx, rates, particleCreated) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.rates = rates;
        this.animationFrameId = -1;
        this.particleCreated = particleCreated;
        this.particles = [];
    }

    generate() {
        for (let i = 0; i < this.particleCreated; i++) {
            this.particles.push(new Particle(this.canvas, this.ctx, 0.1));
        }
    }

    drawParticles() {
        if (this.particles.length > 0) {
            for (let i = 0; i < this.particles.length - 1; i++) {
                let curr = this.particles[i];

                curr.update();
                curr.check();
                curr.draw();

                let notCurr = this.particles.filter((item) => {
                    return this.particles.indexOf(item) !== this.particles.indexOf(curr);
                });

                notCurr.forEach((next) => {
                    let dist = Vector.sub(curr.getPosition(), next.getPosition());

                    if (dist.mag() < 100 && dist.mag() > -100) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(curr.getPosition().x, curr.getPosition().y);
                        this.ctx.lineTo(next.getPosition().x, next.getPosition().y);
                        this.ctx.strokeStyle = 'rgba(0, 0, 0, .5)';
                        this.ctx.lineWidth = 0.3;
                        this.ctx.stroke();
                        this.ctx.closePath();
                    }
                });
            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawParticles();

        this.animationFrameId = setTimeout(() => {
            this.draw();
        }, this.rates);
    }

    init() {
        this.generate();
        this.draw();
    }
}