// function validarDatos(){
//     window.event.preventDefault()
     
//     if (document.form.nombre.value=="" ) {
//         alert("Campo nombre es obligatorio")  
//         document.form.nombre.focus()
    
//     }else if (document.form.email.value=="") {
//         alert("Campo e-mail es obligatorio")
//         document.form.email.focus() 

//     }else if (document.form.asunto.value=="" ) {
//         alert("Campo Asunto es obligatorio")
//         document.form.asunto.focus() 

//     }else if (document.form.mensaje.value=="" || document.form.mensaje.value.length <= 50 ){
//         alert("Campo Mensaje es obligatorio y debe contener minimo 50 carateres") 
//         document.form.mensaje.focus()
      
//     } else if (document.form.email.value.indexOf('@')==-1 ||
//     document.form.email.value.indexOf('.')==-1 ) {
//         alert("e-mail inválido")
//     }
   
// }
//     document.querySelector('form').addEventListener('submit',validarDatos)

    

function abrirLink(){
 
}

function convertirAPDF(){
    html2canvas(document.getElementById('contenidoHTML')).then(function(canvas){
        var imgData = canvas.toDataurl('image/png');
    
        var pdf = new js (PDF);

        pdf.addImage(imgData, 'PNG', 0,0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

        pdf.save('archivo.pdf')
       
    });

}
//document.getElementById('btnConvertirPDF').addEventListener('click', convertirAPDF)

document.addEventListener("DOMContentLoaded",() =>{
    const $boton = document.querySelector ("#btnCrearPdf");
    $boton.addEventListener("click",() => {
        const $elementoParaConvertir = document.body;
        html2pdf()
            .set({
                margin: 1,
                filename: "Cv.pdf",
                image: {
                    type: "jpeg",
                    quality:"0.98",
                },
                html2canvas:{
                    scale: 3,
                    letterRendering:"portrait"
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => alert(err));
    })
    })