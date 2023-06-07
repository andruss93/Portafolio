function validarDatos(){
    window.event.preventDefault()
     
    if (document.form.nombre.value=="" ) {
        alert("Campo nombre es obligatorio")  
        document.form.nombre.focus()
    
    }else if (document.form.email.value=="") {
        alert("Campo e-mail es obligatorio")
        document.form.email.focus() 

    }else if (document.form.asunto.value=="" ) {
        alert("Campo Asunto es obligatorio")
        document.form.asunto.focus() 

    }else if (document.form.mensaje.value=="" || document.form.mensaje.value.length <= 50 ){
        alert("Campo Mensaje es obligatorio y debe contener máximo 50 carateres") 
        document.form.mensaje.focus()
      
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        alert("e-mail inválido")
    }
   
}
    document.querySelector('form').addEventListener('submit',validarDatos)

function abrirLink(){
 
}

function enviarCorreo (event){
    event.preventDefault();

    var nombre = document.form.nombre.value;
    var email = document.form.email.value;
    var asunto = document.form.asunto.value;
    var mensaje = document.form.mensaje.value;

    var serviceId = 'default';
    var templateId = "andnemiroff"

    var data ={
        'nombre': nombre,
        'email': email,
        'asunto': asunto,
        'mensaje':mensaje
    }


    fetch('https://api.emailjs.com/api/v1.0/email/send',{
    method:'POST',
    headers:{
        'content-type': 'aplication/json'
    },
    body: JSON.stringify({
        service_id: serviceId,
        templateId: templateId,
        user_id: 'andnemiroff',
        template_params: data
    })
})
    .then(function(response){
        alert('Correo enviado con exito');
        console.log("Correo enviado")
    })
    .catch(function(error){
        alert('Erro al enviar el correo', error)
        console.log("Correo no enviado")
    })
}