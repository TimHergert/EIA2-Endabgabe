"use strict";
class Particle {
    x;
    y;
    size;
    color;
    velocityX;
    velocityY;
    lifetime;
    particleCount;
    constructor(x, y, size, color, count) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.particleCount = count;
        this.velocityX = (Math.random() - 0.5) * 4;
        this.velocityY = (Math.random() - 0.5) * 4;
        this.lifetime = 100;
    }
    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.lifetime--;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
//# sourceMappingURL=particle.js.map