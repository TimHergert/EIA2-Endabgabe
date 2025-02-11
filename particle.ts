
class Particle {
    x: number;
    y: number;
    size: number;
    color: string;
    velocityX: number;
    velocityY: number;
    lifetime: number;
    particleCount: number; 

    constructor(x: number, y: number, size: number, color: string, count: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.particleCount = count; 
        

    
        this.velocityX = (Math.random() - 0.5) * 4;
        this.velocityY = (Math.random() - 0.5) * 4;
        this.lifetime = 100;
    }

    update(): void {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.lifetime--;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); 
        ctx.fill();
    }
}
