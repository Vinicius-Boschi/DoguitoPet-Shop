import { clienteService } from "../service/cliente-service.js"

( async () => {
    const pegaURL = new URL(window.location)
    const id = pegaURL.searchParams.get('id')
    
    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')
    
    try { // Se funcionar, aparece as informações.
        const dados = await clienteService.detalhaCliente(id) // Pega o id da página.
        // Mostra os inputs com os valores já preenchidos da api.
        inputNome.value = dados.nome
        inputEmail.value = dados.email
    }
    catch (erro) { // Se não ele redireciona para a página de erro.
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }

    // Função para editar as informações do cliente.
    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault() // Previne o comportamento padrão do formulário.
        try {
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value) // Atualiza as infos do
            window.location.href = "../telas/edicao_concluida.html" // Quando concluído ele direciona para a página de edição concluída.    
        }
        catch (erro) { // Se não ele redireciona para a página de erro.
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    })
})()