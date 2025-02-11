namespace FireworkMain {
  export let Fireworks: Path2D[];
  export let Particle: Path2D[];
}

class Firework {
    x: number;
    y: number;
    size: number;
    color: string;
    particleCount: number;
    explode: string;
    


    constructor(x: number, y:number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.particleCount = ParticleCount;

        export function getFireworkConfig() {
            return {
                size: parseInt((document.getElementById("Fireworksize") as HTMLInputElement).value),
                color: (document.getElementById("FireworkColor") as HTMLInputElement).value,
                particleCount:parseInt((document.getElementById("particleCount")as HTMLInputElement).value)
            };
        }


 
 function.animate(): void {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach(fw => fw.update());
    fireworks.forEach(fw => fw.draw(ctx!));
    requestAnimationFrame(animate);
 }
animate();
    }
}


