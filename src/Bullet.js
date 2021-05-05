import Vector from './Vector';
import ship from './ship';

export default class Bullet {
    constructor() {
        this.ctx = ship.ctx;
        this.location = new Vector(ship.location.x, ship.location.y); /*ship.location si on ecrit ca pause probleme car si on change la valeur dans par exmple update risque de changer egalement la valeur dans ship car si en mettant ship.location cela ft reference a lobjet ship donc reference a la valeur qui est stocker dans la memoires */
        this.heading = ship.heading; /*on px lecrire cm ca car cest seuleemnt une valeur scalair et non un objet*/
        this.size = 4;
        this.speed = new Vector(ship.speed.x, ship.speed.y);
        this.acceleration = new Vector.fromAngle(this.heading, 10);
        this.speed.add(this.acceleration);
    }
    update(){
        this.location.add(this.speed);
        this.draw();
    }
    draw(){
        this.ctx.save();
        this.ctx.translate(this.location.x, this.location.y);
        this.ctx.rotate(this.heading);
        this.ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
        this.ctx.restore();
    }
}