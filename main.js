"use strict";
var FireworkMain;
(function (FireworkMain) {
    window.addEventListener("load", handleLoad);
    -let;
    form: HTMLFormElement;
    let url;
    "https://7c8644f9-f81d-49cd-980b-188357469b6.fr.bw-cloud-instance.org/the43439/mingidb.php";
    let ParticleCount = document.getElementById("particleCount");
    let ParticleSize = document.getElementById("Particle");
    let FireworkColor = document.getElementById("FirewrokColor");
    let FireworkSize = document.getElementById("FireworkSize");
    let saveButton = document.getElementById("save");
    let deleteButton = document.getElementById("delete");
    let canvas;
    let ctx;
    let fireworks = [];
    function handleLoad() {
        console.log("Firework Simulation Loaded");
        canvas = document.getElementById("simulationCanvas");
        ctx = canvas.getContext("2d");
        canvas.addEventListener("click", createFirework);
    }
    function createFirework(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.ClientY - rect.top;
        const color = document.getElementById("FireworkColor").value;
        const size = parseInt(document.getElementById("FireworkSize").value);
        const particleCount = parseInt(document.getElementById("particleCount").value);
        const firework = new Firework(x, y, size, color, particleCount);
        fireworks.push(firework);
        console.log("Firework created", firework);
        function animate() {
            ctx.clearReact(0, 0, canvas.width, canvas.height);
            fireworks.forEach((fw) => {
                fw.update();
                fw.draw(ctx);
            });
            requestAnimationFrame(animate);
        }
        animate();
    }
})(FireworkMain || (FireworkMain = {}));
//# sourceMappingURL=main.js.map