import No from "./Arvore"

export const Lista = () => {
    const no = new No();
    no.insert(0)
    no.insert(7)
    no.insert(3)
    no.insert(5)
    no.insert(8)
    no.insert(5)
    no.insert(12)
    
    console.log(no)
    return (
        <h1>lista</h1>
    )
}