/*
    ===== Código de TypeScript =====
*/
interface IReproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:IDetalles
}
interface IDetalles{
    autor:string;
    anio:number;
}

const reproductor: IReproductor = {
    volumen:90,
    segundo:36,
    cancion: "Mess",
    detalles:{
        autor:'Ed Sheeran',
        anio:2015
    }
}

const {volumen,segundo, cancion, detalles } = reproductor
const {autor, anio } = detalles 

/*console.log('El volumen actual de: ', volumen);
console.log('El Segundo actual de: ', segundo);
console.log('El cancion actual de: ', cancion);
console.log('El autor actual de: ', autor);
console.log('El anio actual de: ', anio);*/

const dbz: string[] = ['Goku','Vegeta','Trunks'];
console.log('El autor actual de: ', autor);
