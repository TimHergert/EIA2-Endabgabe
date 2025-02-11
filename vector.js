"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
    scale(factor) {
        this.x -= factor;
        this.y -= factor;
    }
    set(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
}
exports.Vector = Vector;
//# sourceMappingURL=vector.js.map