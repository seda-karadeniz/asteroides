import ship from './ship'

const main = {
    mainElt: null,
    canvasElt: null,
    canvasEltDimensions : {
        width: 640,
        height: 480,
    },
    ctx: null,

    init(){
        this.mainElt = document.getElementById('asteroids');
        document.body.removeChild(this.mainElt);

        this.canvasElt = document.createElement('canvas');
        document.body.insertAdjacentElement('afterbegin', this.canvasElt);
        this.canvasElt.width = this.canvasEltDimensions.width;
        this.canvasElt.height = this.canvasEltDimensions.height;

        this.ctx = this.canvasElt.getContext('2d');
        this.ctx.strokeStyle = '#fff';

        ship.init(this.canvasElt, this.ctx);
        this.animate();

    },
    animate() {
        window.requestAnimationFrame(() =>{
            this.animate();
        } ); /*demander au systeme de rappler la fonction animate lorsque lopportuneiter de fr le rendu sera de nouveau disponible a mettre au debut de lanimtaion
     permet egalement de mettre en pause lanimation par exmple lorsque la personne est sur un autre onglet (economiser des resources*/
        this.ctx.clearRect(0,0, this.canvasElt.width, this.canvasElt.height);
        ship.update();
    }
}
main.init();

const asteroidSize = 20;

function asteroidDraw(){
    ctx.save();
    ctx.rotate(0.1);
    ctx.translate(50,50);
    ctx.strokeRect(-asteroidSize/2,-asteroidSize/2, asteroidSize, asteroidSize);
    ctx.restore();
}

