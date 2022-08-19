export function valida(input) {
    const tipoDeInput = input.dataset.tipo // Pega o tipo do input.

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) { 
        // Vai adicionar a estlização mostrando que tem algo de errado.
        input.parentElement.classList.remove("input-container--invalido")
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        // Volta pra estilização original.
        input.parentElement.classList.add("input-container--invalido")
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const mensagensDeErro = { // Vai mostrar a mensagem específica de cada input.
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },

    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMissmatch: 'O email digitado não é válido.'
    },

    senha: {
        valueMissing: 'O campo senha não pode estar vazio.',
    },

    dataNascimento: {
        valueMissing: 'O campo data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior de 18 anos para se cadastrar.'
    },

    cpf: {
        valueMissing: 'O campo do cpf não pode estar vazio.',
        customError: 'O cpf digitado não é válido.'
    },

    cep: {
        valueMissing: 'O campo de cep não pode estar vazio.',
        patternMismatch: 'O cep digitado não é válido.',
        customError: 'Não foi possível buscar o CEP.'
    },

    logradouro: {
        valueMissing: 'O campo logradouro não pode estar vazio.'
    },

    cidade: {
        valueMissing: 'O campo cidade não pode estar vazio.'
    },

    estado: {
        valueMissing: 'O campo estado não pode estar vazio.'
    },

    preco: {
        valueMissing: 'O campo preço não pode estar vazio.'
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input), // Valida a data de nascimento.
    cpf:input => validaCpf(input),
    cep:input => recuperarCEP(input)
}

const tiposDeErro = [
    'valueMissing',
    'typeMissMatch',
    'customError'
]

function mostraMensagemDeErro(tipoDeInput, input) { // Pega as mensagens de erro.
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) { // Se for verdadeiro, ele vai colocar a mensagem de erro baseado no objeto que contém as mensagens.
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value) // Data do input
    let mensagem = '' // String vazia.

    if(!maiorQue18(dataRecebida)) { // Se a pessoa não for maior que 18, ela receberá essa mensagem.
        mensagem = "Você deve ser maior de 18 anos para se cadastrar."
    }

    input.setCustomValidity(mensagem) // Mostra a mensagem que foi criada no if.
}

function maiorQue18(data) {
    const dataAtual = new Date() // Data atual.
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()) // Dia, mês e ano.

    return dataMais18 <= dataAtual // Retorna a idade da pessoa.
}

function validaCpf(input) {
    const cpfFormatado = input.value.replace(/\D/g, '') // Substitui tudo que não é número.
    let mensagem = ''

    if(!checaCpfRepetido(cpfFormatado) || !checaEstruturaCpf(cpfFormatado)) { // Se o cpf não estiver válido, vai mostrar essa mensagem.
        mensagem = 'O cpf digitado não é válido.'
    }

    input.setCustomValidity(mensagem)
}

function checaCpfRepetido(cpf) { // Vai checar se tem algum número repetido no cpf.
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfValido = true

    valoresRepetidos.forEach(valor => {
        if(valor == cpf) { // Se for igual ao cpf vai retornar falso.
            cpfValido = false
        }
    })

    return cpfValido
}

function checaEstruturaCpf(cpf) {
    const multiplicador = 10

    return checarDigitoVerificador(cpf, multiplicador)
}

function checarDigitoVerificador(cpf, multiplicador) {

    if(multiplicador >= 12) {
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    
    for (let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador++
    }

    if (digitoVerificador == confirmaDigito(soma)) {
        return checarDigitoVerificador(cpf, multiplicador + 1)           
    }

    return false
}

function confirmaDigito(soma) {
    return 11 - (soma % 11)
}

function recuperarCEP(input) {
    const cep = input.value.replace(/\D/g, '')
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    }

    if(!input.validity.patternMismatch && !input.validity.valueMissing) {
        fetch(url,options).then(
            response => response.json()
        ).then(
            data => {
                if(data.erro) {
                    input.setCustomValidity('Não foi possível buscar o CEP.')
                    return
                }
                input.setCustomValidity('')
                preencheCamposComCEP(data)
                return
            }
        )
    }
}

function preencheCamposComCEP(data) {
    const logradouro = document.querySelector('[data-tipo="logradouro"]')
    const cidade = document.querySelector('[data-tipo="cidade"]')
    const estado = document.querySelector('[data-tipo="estado"]')

    logradouro.value = data.logradouro
    cidade.value = data.localidade
    estado.value = data.uf
}