export default class Vector {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    add(vector){
        this.x += vector.x;
        this.y += vector.y;
    }
    multiply(factor){
        this.x *= factor;
        this.y *= factor;
    }

    static fromAngle(angle, magnitude){ /*mot clé static si une methode est static alors elle nest pas attaché a une instance mais a la classe alors il nyaura quune copie */
        let mag = 1;
        if(typeof magnitude !== 'undefined'){
            mag = magnitude;
        }
        return new Vector(mag*Math.cos(angle-Math.PI /2), mag*Math.sin(angle-Math.PI /2));
    }
}