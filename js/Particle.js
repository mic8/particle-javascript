class Particle {
    constructor(canvas, ctx, mass) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.mass = mass;
        this.radius = this.mass * 16;
        let randomX = Math.floor(Math.random() * (this.canvas.width - (this.radius * 2))) + this.radius,
            randomY = Math.floor(Math.random() * (this.canvas.height - (this.radius * 2))) + this.radius;
        this.position = new Vector(randomX, randomY);
        let stateX = Math.floor(Math.random() * 2),
            stateY = Math.floor(Math.random() * 2);
        this.velocity = new Vector(stateX ? 1: -1, stateY ? 1: -1);
    }

    getPosition() {
        return this.position;
    }

    update() {
        let randomX = Math.floor(Math.random() * 2),
            randomY = Math.floor(Math.random() * 2);

        let acceleration = new Vector(Math.floor(Math.random() * randomX ? 9 : -9) * 0.001, Math.floor(Math.random() * randomY ? 9 : -9) * 0.001);

        this.velocity.add(acceleration);
        this.position.add(this.velocity);
    }

    check() {
        if (this.position.x < this.radius || this.position.x > this.canvas.width - this.radius) {
            this.velocity.x *= -1;
        }

        if (this.position.y < this.radius || this.position.y > this.canvas.height - this.radius) {
            this.velocity.y *= -1;
        }
    }

    draw() {
        this.update();

        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        this.ctx.closePath();
    }
}