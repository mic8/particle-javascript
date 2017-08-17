class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
    }

    static sub(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }

    mult(n) {
        this.x *= n;
        this.y *= n;
    }

    static mult(v, n) {
        return new Vector(v.x * n, v.y * n);
    }

    div(n) {
        this.x /= n;
        this.y /= n;
    }

    static div(v, n) {
        return new Vector(v.x / n, v.y / n);
    }

    mag() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    normalize() {
        let mag = this.mag();

        if (mag !== 0) {
            this.div(mag);
        }
    }

    limit(max) {
        if (this.mag() > max) {
            this.normalize();
            this.mult(max);
        }
    }
}