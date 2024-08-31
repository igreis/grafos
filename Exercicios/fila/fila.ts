import no from './No';

class Fila<T> {

    primeiro: no<T> | null;
    ultimo: no<T> | null;
    atual: no<T> | null;

    constructor() {
        this.primeiro = null;
        this.ultimo = null;
        this.atual = null;
    }   

    push(valor: number) {
        const novo = new no(valor); 
        if (!this.ultimo) {    
            this.primeiro = novo;
            this.ultimo = this.primeiro;
        } else {
            if(this.ultimo) {
                console.log()
                this.ultimo.proximo = novo;
            }     
            this.ultimo = novo;
        }
    }

    pop() {
        if(this.primeiro?.proximo) {
            this.primeiro = this.primeiro.proximo;
        }
    }

    print() {
        this.atual = this.primeiro;
        while(this.atual) {
            console.log(this.atual?.info);
            this.atual = this.atual?.proximo;    
        }
    }
}

export default Fila;