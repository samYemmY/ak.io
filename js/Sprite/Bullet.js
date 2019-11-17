import {Sprite} from "./Sprite.js";
import {CollisionHandler} from "../CollisionHandler.js";
import {Polygon} from "./Polygon.js";

export class Bullet extends Sprite
{
    constructor(spriteHandler, direction, rotation)
    {
        super(spriteHandler);

        this.LAYERS = [CollisionHandler.LAYERS.BULLET];
        this.OBJECTNAME = "Bullet";

        this.direction = direction;
        this.rotation = rotation;
        this.width = 5;
        this.height = 0.5;
        this.damage = 5;
        this.polygon = new Polygon(Polygon.Bullet);
    }

    draw(ctx)
    {
        super.draw(ctx);
        ctx.stroke();
    }

    onCollide(other)
    {
        this.spriteHandler.remove(this);
    }

    onPostUpdate(camera, map)
    {
        if (!camera.containsPosition(this.position) || !map.containsPosition(this.position))
        {
            this.spriteHandler.remove(this);
        }
    }
}