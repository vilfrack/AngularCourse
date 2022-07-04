/*
    ===== Código de TypeScript =====
*/
export interface Producto {
    desc:string,
    precio:number
}

const telefono: Producto = {
    desc:'Iphone',
    precio: 550
}
const tablet: Producto = {
    desc:'Ipad Air',
    precio: 350
}

export function calculaISV(productos: Producto[]): [number,number]{
    let total = 0;
    productos.forEach( ({precio})=>{
        total += precio;
    })
    return [total,total * 0.15]
}

const articulos = [telefono, tablet]

const [total, isv] = calculaISV(articulos);

console.log('total:',total);
console.log('isv:',isv);