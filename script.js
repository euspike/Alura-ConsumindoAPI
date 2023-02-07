async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var enderecoConvertido = await consultaCEP.json();

        //Caso o CEP não exista
        if (enderecoConvertido.erro) {
            throw Error ('CEP não existente')
        }
        //Campos para ser Auto-preenchidos
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')

        //Definindo para o campo especifico o valor, passando e puxando da API(EX: enderecoConvertido.localidade.)
        
        cidade.value = enderecoConvertido.localidade;
        logradouro.value = enderecoConvertido.logradouro;
        estado.value = enderecoConvertido.uf;
        bairro.value = enderecoConvertido.bairro;

        console.log(enderecoConvertido);
        return enderecoConvertido;
    }catch (erro){
        mensagemErro.innerHTML = '<p>CEP Inválido, tente novamente </p>'
        console.log(erro);
    }
}



var cep = document.querySelector('#cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))



