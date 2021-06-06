function proccessPayment(token, buttonTarget)
{
    let data = {
        card_token: token,
        hash: PagSeguroDirectPayment.getSenderHash(),
        installment: document.querySelector('select.select_installments').value,
        card_name: document.querySelector('input[name=card_name]').value,
        _token: csrf
    };

    $.ajax({
        type: 'POST',
        url: urlProccess,
        data: data,
        dataType: 'json',
        success: function(res) {

            toastr.success(res.data.message, 'Sucesso');
            window.location.href = `${urlThanks}?order=${res.data.order}&type=cartao`;
        },
        error: function(err) {
            buttonTarget.disabled = false;
            buttonTarget.innerHTML = 'Efetuar Pagamento';

            let message = JSON.parse(err.responseText);
            
            //for(let i in message.data.message.error) {
             //   document.querySelector('div.msg').innerHTML += showErrorMessages(errorsPagseguro(message.data.message.error[i].code,message.data.message.error[i].message));
            //}

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
                    location.reload();//proccessPayment(submitButton);
                }, 3000);
               
                console.log(message);
            }

            console.log (err.responseText);
            //let message = JSON.parse(err.responseText);
            //document.querySelector('div.msg').innerHTML = showErrorMessages(message.data.message.error.message);
        }
    });
}


function getInstallments(amount, brand) {
    PagSeguroDirectPayment.getInstallments({
        amount: amount,
        brand: brand,
        maxInstallmentNoInterest: 0,
        success: function(res) {
            let selectInstallments = drawSelectInstallments(res.installments[brand]);
            document.querySelector('div.installments').innerHTML = selectInstallments;
        },
        error: function(err) {
            console.log(err);
        },
        complete: function(res) {

        },
    })
}

function drawSelectInstallments(installments) {
    let select = '<label>Opções de Parcelamento:</label>';

    select += '<select class="form-control select_installments">';

    for(let l of installments) {
        select += `<option value="${l.quantity}|${l.installmentAmount}">${l.quantity}x de ${l.installmentAmount} - Total fica ${l.totalAmount}</option>`;
    }


    select += '</select>';

    return select;
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

        case "53046":
            return 'O Cpf não é válido!';
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