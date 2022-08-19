<div align=center>
  <img src="https://user-images.githubusercontent.com/74377158/185704715-0ab8b1db-55bb-47a0-b1e4-689c16642661.svg
" width=150>
</div>

<h3> :dart: Objetivos do site</h3>
Projeto que consiste em aprender e entender melhor o famoso CRUD.

# <h3> :pencil: Tela de cadastro</h3> 
![cadastro](https://user-images.githubusercontent.com/74377158/185705874-1393a9a1-c5db-41c5-ad49-bef7ed5081bd.jpg)

# <h3> :pencil: Cadastrar produto</h3>  
![cadastrar_produto](https://user-images.githubusercontent.com/74377158/185706041-878403af-1796-4997-bef6-ffeade1c2afe.jpg)

# <h3> :pencil: Lista de clientes</h3>  
![lista_de_clientes](https://user-images.githubusercontent.com/74377158/185706080-c4a50c29-624c-470a-8586-6a91472ea0d4.jpg)

# <h3> :pencil: Editar a lista de clientes</h3>  
![editar_cliente](https://user-images.githubusercontent.com/74377158/185706225-d6ef85f1-ba42-48a4-a4a0-9fd01b6afc2b.jpg)

# <h3> :pencil: Criar novo cliente</h3> 
![novo_cliente](https://user-images.githubusercontent.com/74377158/185706319-506412c4-4e72-44b4-a59e-cbc9b5f1c36a.jpg)

# <h3> :file_folder: Acessar o projeto</h3>
No terminal, clone o projeto:

```
git clone https://github.com/Vinicius-Boschi/DoguitoPet-Shop.git
```

# <h3> :wrench: Abrir e rodar o projeto</h3>
No terminal com o projeto clonado, use esse comando dentro da pasta admin para ele gerar um link pra você poder visualizar ele na web.

```
$ browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html
```

E depois use esse outro comando também na pasta admin para rodar a api do site.

```
$ npx json-server --watch db.json
```

# <h3> :x: Erros possíveis </h3>
O projeto necessita da instalação do json server, para instalar coloque este código no terminal do vscode.
```
$ npm install -g json-server
```

Depois do json instalado, ele necessita de um arquivo chamado db.json para ele salvar as informações, crie um arquivo deste com as seguintes informações:

```
{
  "profile": [
    {
      "nome": "João Augusto",
      "email": "joaoguto@email.com",
      "id": 1
    }
  ]
}
```

E caso o projeto acuse um erro de CORS, instale a dependência do browser-sync.

```
$ npm install -g browser-sync
```

# <h3> :heavy_check_mark: Status do Projeto:</h3>
![Badge Concluido](https://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=blue&style=for-the-badge)

# <h3> :hammer: Funcionalidades do projeto</h3>
- `Funcionalidade 1`: Cadastro.
- `Funcionalidade 2`: Cadastro de produto.
- `Funcionalidade 3`: Cadastro de cliente com nome e email.
- `Funcionalidade 4`: Editar/excluir perfil do cliente.

# <h3> :notebook_with_decorative_cover: Tecnologia usadas:</h3>

* <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="javascript">
* <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html">
* <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css">

# <h3> :computer: Desenvolvedores:</h3>
[<img src="https://user-images.githubusercontent.com/74377158/173900850-b6afcc77-36a5-4254-b63f-983397918d54.jpg" width=130><br><sub>Vinícius Boschi</sub>](https://github.com/Vinicius-Boschi)

# <h3> :bangbang: Licença:</h3>
<p> Todos os direitos reservados :copyright: 2022 - Doguito Pet-Shop
