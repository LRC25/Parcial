const form = document.getElementById('form');
const inputs = document.querySelectorAll("#form input");
const icons = document.querySelectorAll("#form i");
const message = document.querySelectorAll("#form h6");

//Se utilizan algunas expresiones regulares para verificar los campos
const expresiones = {
 
    icon: /^(b|incorrect)/,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message:  /^m/
}

 // Verificar que los campos estén correctos
const campos = {
    nombre: false,
    telefono: false,
    email: false,
}




const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            const nombre = document.getElementById('nombre');
            const nombreV = nombre.value.trim();
            if(nombreV.length == 0 ){
                document.getElementById("m1").style.display="block";
                document.getElementById("b1").style.display="none";
                document.getElementById("incorrect1").style.display="block";
                document.getElementById("m2").style.display="none";
                campos.nombre = false;
            }
            else if (nombreV.length > 0 && nombreV.length < 25 ) {
                document.getElementById("m1").style.display="none";
                document.getElementById("b1").style.display="block";
                document.getElementById("m2").style.display="none";
                document.getElementById("incorrect1").style.display="none";
                campos.nombre = true;
            }

            else if (nombreV.length > 25 ) {
                document.getElementById("m1").style.display="none";
                document.getElementById("m2").style.display="block";
                document.getElementById("b1").style.display="none";
                document.getElementById("incorrect1").style.display="block";
                campos.nombre = false;
            }
        break;
 
        case "email":
            const email = document.getElementById('email');
            const emailV = email.value.trim();
        if(expresiones.email.test(emailV) ){
            document.getElementById("m10").style.display="none";
            document.getElementById("b7").style.display="block";
            document.getElementById("incorrect7").style.display="none";
        }
        
        else{
            document.getElementById("m10").style.display="block";
            document.getElementById("b7").style.display="none";
            document.getElementById("incorrect7").style.display="block";
        };

        break;
        
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

 //Verificación al enviar el formulario



// Ocultar los íconos y los mensajes al presionar el botón "borrar"
form.addEventListener("reset", (e) => {
    icons.forEach((i) => {
        if(expresiones.icon.test(i.id))
        i.style.display="none";
    });

    message.forEach((h6) => {
        if(expresiones.message.test(h6.id))
        h6.style.display="none"
    });
});








    
      // Or with jQuery
    
      $(document).ready(function(){
        $('.datepicker').datepicker();
      });
      function guardar(){
   
        var t = document.getElementById("answer").value;
        var fila="<tr><td>"+t+"</td><td>"+""+"</td><td>";
    
        document.getElementById("table").innerHTML = fila;
        document.getElementById("editar").style.display="block"  ;
        document.getElementById("porcentaje").style.display="block"  ;
        
    }


    function resultado(){
   
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;
        var result="<tr><td>"+nombre+"</td><td>"+email+"</td><td>"+telefono+"</td><td>";
    
        document.getElementById("tablita").innerHTML = result;
    }


    

