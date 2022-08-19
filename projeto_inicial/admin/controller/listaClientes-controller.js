import { clienteService } from "../service/cliente-service.js"

// Função para criar o html com as informações.

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
     <td class="td" data-td>${nome}</td>
        <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li>
                <a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a>
            </li>
            <li>
                <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
            </li>
        </ul>
    </td>`
    
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id

    return linhaNovoCliente
}

// Função que remove o cliente.

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento) => {
    let botaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'

    if (botaoDeletar) {
        try {
            const linhaCliente = evento.target.closest('[data-id]') // Elemento pai mais próximo da linha.
            let id = linhaCliente.dataset.id // Passado o id linha.
            await clienteService.removeCliente(id) // Vai remover a linha do cliente.
            linhaCliente.remove() // Remove o cliente da api.
        }
        catch(erro) {
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

// Vai colocar na tela a resposta.

const render = async () => {
    try {
        const listaClientes = await clienteService.listaClientes()
        listaClientes.forEach(elemento => { 
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
        })
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()