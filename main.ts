namespace FireworkMain {

    window.addEventListener("load", handleLoad);-
    let form: HTMLFormElement;
    let url: string "https://7c8644f9-f81d-49cd-980b-188357469b6.fr.bw-cloud-instance.org/the43439/mingidb.php"
    let ParticleCount = document.getElementById ("particleCount") as HTMLInputElement;
    let ParticleSize = document.getElementById ("Particle") as HTMLInputElement; 
    let FireworkColor = document.getElementById ("FirewrokColor") as HTMLInputElement;
    let FireworkSize = document. getElementById ("FireworkSize") as HTMLInputElement; 
    let saveButton = document.getElementById("save");
    let deleteButton = document.getElementById("delete"); 
    

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let fireworks: Firework[] = [];

    function handleLoad(): void{
        console.log ("Firework Simulation Loaded"); 

    
    
    canvas = document.getElementById("simulationCanvas") as HTMLCanvasElement; 
    ctx = canvas.getContext("2d")!;
    


    canvas.addEventListener("click", createFirework);

    }

    function createFirework(event: MouseEvent): void {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.ClientY - rect.top; 


        const color = (document.getElementById("FireworkColor") as HTMLInputElement).value; 
        const size = parseInt((document.getElementById("FireworkSize") as HTMLInputElement).value);
        const particleCount = parseInt((document.getElementById("particleCount") as HTMLInputElement). value); 


        const firework = new Firework (x, y, size, color, particleCount); 
        fireworks.push(firework); 

        console.log("Firework created", firework); 


        function animate(): void {
            ctx.clearReact(0,0, canvas.width, canvas.height); 


            fireworks.forEach((fw) => {
                fw.update();
                fw.draw(ctx);
            });

            requestAnimationFrame(animate);
        }

        animate();    
