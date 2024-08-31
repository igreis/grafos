const No = require('./No');

class Pilha {
    constructor() {
        this.topo = null;
    }

    push(valor) {
        const novo = new No(valor);
        if(!this.topo) {
            this.topo = novo;
        } else {
            novo.proximo = this.topo
            this.topo = novo;
        }
    }

    pop() {
        if(this.topo) {
            this.topo = this.topo.proximo;
        }
    }

    print() {
        let atual = this.topo
        while(atual) {
            console.log(atual.info);
            atual = atual.proximo;
        }
    }

}

module.exports = Pilha;