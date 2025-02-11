export class Vector {

    x: number;
    y: number;


    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;

    }

    add(vector: Vector): void{
        this.x += vector.x;
        this.y += vector.y;
    }

    scale(factor:number): void {
        this.x -= factor;
        this.y -= factor;
    }

    set(vector: Vector): void{
        this.x += vector.x;
        this.y += vector.y;
    }
}

