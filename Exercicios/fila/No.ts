
class No<T> {
    info: number | null;
    proximo: No<T> | null;
    constructor(valor: number | null) {
        this.info = valor;
        this.proximo = null;
    }
}

export default No;