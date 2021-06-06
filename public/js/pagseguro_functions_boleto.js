
function proccessPayment(buttonTarget)
{
    let data = {
        hash: PagSeguroDirectPayment.getSenderHash(),
        _token: csrf
    };

    $.ajax({
        type: 'POST',
        url: urlProccess,
        data: data,
        dataType: 'json',
        success: function(res) {
            //buttonTarget.removeEventListener("click", function(event));
            buttonTarget.disabled = true;
            buttonTarget.innerHTML = 'Imprimir Boleto';
            buttonTarget.onclick = function(event) { event.preventDefault(); window.open(res.data.link, "_blank");};
            //buttonTarget.onclick = function() { event.preventDefault();  alert('clicked');};

           // var link = document.createElement('a');
            //    link.appendChild(document.createTextNode("Hi"));
             //   link.setAttribute('href', "#");
              //  link.onclick= function() {link.appendChild(document.createTextNode("Clicked"));}

               // document.getElementById("x").appendChild(link);

            toastr.success(res.data.message, 'Sucesso');
            window.location.href = `${urlThanks}?order=${res.data.order}&type=boleto&link=${res.data.link}`;
            //console.log (res);
        },
        error: function(err) {
            //buttonTarget.disabled = false;
            buttonTarget.innerHTML = 'Aguarde...';

            let message = JSON.parse(err.responseText);
            let messages = err.responseText;
 
            try {
                if (message.data.message.error.length > 1) {
                    for(let i in message.data.message.error) {
                        document.querySelector('div.msg').innerHTML += showErrorMessages(errorsPagseguro(message.data.message.error[i].code,message.data.message.error[i].message));
                    }
                } else {
                    document.querySelector('div.msg').innerHTML = showErrorMessages(errorsPagseguro(message.data.message.error.code,message.data.message.error.message));
                }
            } catch (errox) {
                document.querySelector('div.msg').innerHTML = showErrorMessages('Erro de conexão. Tentando Novamente em 3 segundos...');

                setTimeout(function () {
                        proccessPayment(submitButton);
                }, 3000);

                console.log(message);

            }
        }
    });
}


function showErrorMessages(message)
{
    return `
        <div class="alert alert-danger">${message}</div>
    `;
}

function errorsPagseguro(code,message)
{
    switch(code) {
        case "53017":
            return 'Seu Cpf cadastrado na loja é inválido!';
        break;

        default:
            return code + ' - ' + message;
    }
}


function errorsMapPagseguroJS(code)
{
    switch(code) {
        case "10000":
            return 'Bandeira do cartão inválida!';
        break;

        case "10001":
            return 'Número do Cartão com tamanho inválido!';
        break;

        case "10002":
        case  "30405":
            return 'Data com formato inválido!';
        break;

        case "10003":
            return 'Código de segurança inválido';
        break;

        case "10004":
            return 'Código de segurança é obrigatório!';
        break;

        case "10006":
            return 'Tamanho do código de segurança inválido!';
        break;

        default:
            return 'Houve um erro na validação do seu cartão de crédito!';
    }
}



