
/** 
Se ejecuta cuando la pagina ha cargado completamente (DOM,CSS,Images,etc....)
En caso deses ejecutar el JS a penas se haya cargado el DOM puedes usar 2 tecnicas secretas:

---> document.addEentListener('DOMContentLoaded',{});
---><script type="module" src="js/inicio.js" defer></script>


*/



window.addEventListener('load', function(){
    
    // referenciar controles del formulario
    //Una const no cambia de valor y pesa menos tiene mejor perfomance que una variable-->var

    const tipoDocumento = this.document.getElementById('tipoDocumento');
    const numeroDocumento = this.document.getElementById('numeroDocumento');
    const password = this.document.getElementById('password');
    const btnIngresar = this.document.getElementById('btnIngresar');
    const msgError = this.document.getElementById('msgError');

    // implementar listener del boton
    btnIngresar.addEventListener('click', function(){

        // validar campos del formulario
        if(tipoDocumento.value === null || tipoDocumento.value.trim() === '' || 
            numeroDocumento.value === null || numeroDocumento.value.trim() === '' || 
            password.value === null || password.value.trim() === '') {
                mostrarAlerta('Error: Debe completar correctamente sus credenciales');
                return;
        }
        ocultarAlerta();
        autenticar();

    });

});

function mostrarAlerta(mensaje) {
    msgError.innerHTML = mensaje;
    msgError.style.display = 'block';
}

function ocultarAlerta() {
    msgError.innerHTML = '';
    msgError.style.display = 'none';
}


//FUNCION ASYNCRONA
async function autenticar(){


  const url='http://localhost:8082/login/autenticar-async';

  
  

    //Definiendo un objeto request
    const request={

        tipoDocumento: tipoDocumento.value,
        numeroDocumento:numeroDocumento.value,
        password:password.value,



    };



    try{

        //me va permitir llamar al servicio
        const response=await fetch(url,{

          method:'POST',
          headers:{
            'Content-Type':'application/json'
          
        
        },

        //Permite convertir un objeto en JSON
        body:JSON.stringify(request)


        });



        if(!response.ok){

           
            mostrarAlerta('Error : Ocurrio un Problema con la Autenticacion')
            throw new Error(`Error: ${response.statusText}`);


        }



        //VALIDAR RESPUESTA


        const result=await response.json();
        console.log('Respuesta del Servidor :',result);

        if(result.codigo === '00'){
            //Stringify--> para convertir de objeto a Json
            //Parse -->Para convertir de Json a Objeto
            localStorage.setItem('result',JSON.stringify(result));

            window.location.replace('principal.html')



        }else{
            mostrarAlerta(result.mensaje)
        }



    }catch(error){


        console.log('Error : Ocurrio un Problema con la Autenticacion',error)

        mostrarAlerta('Error : Ocurrio un Problema con la Autenticacion')


    }
    





}
    




