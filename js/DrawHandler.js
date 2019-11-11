import {Vector} from "./Vector.js"
import {Map} from "./Map.js";

export class DrawHandler
{
    constructor(game)
    {
        this.game = game;
        this.canvas = $("#canvas")[0];
        this.canvas.width = window.innerWidth - 4;
        this.canvas.height = window.innerHeight - 4;
        this.ctx = this.canvas.getContext("2d");
    }

    draw(sprites)
    {
        let ctx = this.ctx;
        ctx.clearRect(0, 0, this.game.map.width, this.game.map.height);
        ctx.drawImage(this.game.map.image, 0, 0);

        for (let sprite of sprites)
        {
            ctx.save();
            ctx.translate(sprite.position.x, sprite.position.y);
            ctx.rotate(sprite.rotation);
            ctx.scale(sprite.scale, sprite.scale);
            sprite.draw(ctx);
            ctx.restore();
        }
    }
}