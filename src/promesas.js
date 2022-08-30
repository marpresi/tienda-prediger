const listarEstudiantes = (tipoDeUsuario) => {
    const estudiantes = ['Juan','Pedro', 'Mario'];
    return new Promise((resolve, reject) => {

        setTimeout(() => {

        if(tipoDeUsuario === 'profesor'){
            resolve(estudiantes);
        }else{
            reject('No tiene permisos');
        }

        },5000);
    })
}

const aproboCurso = (estudiante) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

        if(estudiante === 'Pedro'){
            resolve('SI');
        }else{
            reject('NO');
        }

        },2000);
    })
}


//console.log(listarEstudiantes('profesor'));
/*forma tradicional*/
// listarEstudiantes('profesor')
// .then((p) => {
//     console.log('ok',p);
//     return p;
// }).catch((err) => {
//     console.log(err);
// })
// .then((p) => {
//     aproboCurso(p[1])
//     .then((q) => {
//         console.log(p[1] + ' aprobado: ' +  q);
//     })
// })
// .catch((err) => {
//     console.log('No aprobado')
// })

// console.log('sigo ejecutando y espero el resultado');

// forma async await

const funcionAsincrona = async () => {
    try{
        const estudiantes = await listarEstudiantes('pfesor');
       console.log('listaod',estudiantes);
    }catch(err) {
        console.log('listaod error', err);
    }
}


funcionAsincrona();