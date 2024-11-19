class No {
    constructor(raiz= null, right = null, left = null) {
        this.raiz = raiz;
        this.right = right;
        this.left = left;
    }

    insert(value) {
        if(!this.raiz) {
            this.raiz = value;
        } else if(value >= this.raiz) {
            if(this.right) {
                this.right.insert(value)
            } else {
                this.right = new No(value)
            }
        } else {
            if(this.left) {
                this.left.insert(value)
            } else {
                this.left = new No(value)
            }
        }
    }
}

export default No;