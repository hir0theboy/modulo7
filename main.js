        function validarFormulario(event) {
            event.preventDefault(); // Impede a atualização da página
        
            let campoA = parseInt(document.getElementById("campoA").value);
            let campoB = parseInt(document.getElementById("campoB").value);
        
            if (campoA > campoB) {
            document.getElementById('erro').innerHTML = "ERRO: B precisa ser maior que A"
            setTimeout(function() {
                location.reload()
            }, 1000)
            } else {
            document.getElementById("mensagem").innerHTML = "Formulário válido!";
            setTimeout(function() {
                location.reload()
            }, 1000)
        }
        }