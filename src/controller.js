const controller ={
    keys: {
        'ArrowUp': -1,

    },
    activeKeys: [],

    init(){
        document.addEventListener('keydown',(e)=>{
            e.preventDefault();/*eviter les comportement par defaut du clavier*/
            e.stopPropagation(); /*permet de dire "on arrete la propagation de levanement, on le consomme et personne dautre ne pourra le consommer*/
            if (Object.keys(this.keys).includes(e.key) && !this.activeKeys.includes(e.key)){ /*rgrde si la touche fait parti de keys si oui l'inclus sinon rien et si la key est deja presente rien fr*/
                this.activeKeys.push(e.key);
            }
            console.log(this.activeKeys);
        })
        document.addEventListener('keyup',(e)=>{
            e.preventDefault();/*eviter les comportement par defaut du clavier*/
            e.stopPropagation(); /*permet de dire "on arrete la propagation de levanement, on le consomme et personne dautre ne pourra le consommer*/
            if (this.activeKeys.includes(e.key)){ /*si le tableau active keys inclu la key presser alor supprime la touche qui a ete presser de active keys*/
                const i = this.activeKeys.indexOf(e.key);
                this.activeKeys.splice(i, 1);
            }
            /*permet de supprimer la touche enfoncer du tableau lorsquon la relache*/
            console.log(this.activeKeys);
        })

   }
}

export default controller