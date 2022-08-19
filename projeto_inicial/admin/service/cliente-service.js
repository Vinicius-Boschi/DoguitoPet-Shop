const listaClientes = async () => {
    const resposta = await fetch(`http://localhost:3000/profile`)
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error('Não foi possível listar os clientes.')
}

// Vai criar os novos clientes.
const criaCliente = async (nome, email) => { 
    return fetch(`http://localhost:3000/profile`, { // Retorna a api.
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                nome: nome, 
                email: email
            }
        )
    })
    .then(resposta => {
        if (resposta.ok) {
          return resposta.body // Retorna o conteúdo do body.  
        }
        throw new Error('Não foi possível criar o cliente.')
    })
}

// Vai remover as informações.
const removeCliente = async (id) => { 
    const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    })
    if (!resposta.ok) {
        throw new Error('Não foi possível remover o cliente.')
    }
}

// Edita as informações do cliente.

const detalhaCliente = async (id) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`)
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error('Não foi possível detalhar o cliente.')
}

const atualizaCliente = async (id, nome, email) => {
    await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
}

// Exporta as funções para as outras páginas.

export const clienteService  = { // Exporta as funções para as outras páginas.
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}