# Api de gerenciamento de agenda.
Api RestFull com CRUD(inserir, atualizar,listar e deletar).

## Índice
1. [Informações do projeto](#informacao-do-peojeto)
2. [Funcionabilidades](#suncionabilidade)
3. [Tecnologia usadas](#tecnologia-usadas)
4. [Dependências](#dependencias)
5. [Como iniciar o projeto](#como-iniciar-o-projeto)
6. [Codigos de status HTTP](#codigo-de-status-http)
7. [Formato das informações ](#formato-das-informacoes)
8. [Endpoints](#endpoints)
9. [Criado por](#criado-por)

## Informações do projeto.
* **Versão**: 1.0.0
* **Status**: concluído.
* **Licensa**: MIT

## Funcionabilidades
* `GET /` - Rota inicial.
* `GET /pessoa` - Listar todas as pessoas.
* `POST /pessoa` - Adicionar pessoa.
* `GET /pessoa/{id}` - Selecionar pessoa.
* `GET /pessoa/{id}` - Buscar pessoa.
* `PUT /pessoa/{id}` - Atualizar pessoa.
* `DELETE /pessoa/{id}` - deletar pessoa.

### Tratamento de erro nas rotas
* **Rotas não encontradas**
* Retorna`404 Not Found`com uma mensagem de erro.
Exemplo:
```json
{
  "message": "Rota não encontrada "
}
```

## Tecnologia Usadas
As seguintes tecnologias foram usadas, certifique-se que já estão instaladas para roda o projeto em questão.
* [Node.js](https://nodejs.org/pt) - Ambiente execução Javascript.
* [Express.js](https://expressjs.com/) - Framework web javascript.
* [Typescript](https://www.typescriptlang.org/) - Linguagem que adiciona tipagem ao Javascript.
* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação.
* [ECMAScript](https://ecma-international.org/publications-and-standards/standards/ecma-262/) - Especificação da linguagem Javascript.

## Dependências
* `express` - (versão: ^5.1.0) - Framework web para Node js.
* `nodemon` - (versão: ^3.1.10) - Utilitário para facilitar o processo de desenvolvimento.
* `cors` - (versão: ^2.8.5) - Controlador de acesso de recursos.
* `dotenv` - (versão: ^17.2.1) - Carregar variáveis do ambiente.
* `ts-node` - (versão: ^10.9.2) - Interpretador typescript.

## Como iniciar o projeto
Certifique que tenha o `npm` ou `yarn` instalado.
1. clone o repositório.
```bash
 git clone <url-desse-projeto>
```
2. instale as dependências.
  ```bash
  #usando o npm.
   npm install
  ```
  ```bash
  #usando o yarn.
   yarn install
  ```

3. Crie e configure o `.env`.
   ```dotent
    PORT=<port-da-sua-escolha>
   ```
5. O projeto tem os seguintes scripts:
   ```json
   "scripts": {
      "dev": "nodemon --exec ts-node src/server.ts",
      "build": "tsc",
      "start": "npm run build && node dist/server.js"
    }
   ```
6. Rode o projeto.
   ```bash
   #usando npm.
   npm run start
   ```
   ```bash
   #usando o yarn.
   yarn start
   ```

## Código de status HTTP 
Os seguintes códigos estão na API.

### Em caso de sucesso:
 * `200` - Sucesso.
 * `201` - Sucesso ao alterar.
 * `204` - Sucesso ao deletar.
  
### Em caso de falha ou error.
 * `404` - Não Encontrado.
 * `500` - Problema no servidor/API.

## Formato das informações.
Abaixo segue os tipos de cada propriedade dos usuários para fins de orientar melhor o entendimento das informações:
  ```typescript
    interface IPessoa {
      id: number;
      nome: string;
      telefone: string;
      email: string;
      endereco: string;
      dataNascimento?: Date;
      ativo: boolean;
      senha: string;
      data: {
        createdAt: Date;
        updatedAt?: Date
      }
    }
  ```


## Endpoints
* **exemplos de resposta das requisições**

### Endpoin `/`
* **Descrição**: Rota principal.
* **Método**: `GET`
* **Exemplo da requisição**
  ```bash
    GET /
  ```
* **Resposta da requisição**
  ```json
     GET /
     {
       "message": "Api Agenda"
     }
  ```
  
### Endpoint `rota encontrada`
* **Descrição**: Rota não encontrada.
* **Exemplo da requisição**
  ```
    /<rota nao existente>
  ```
* **Resposta da requisição**
  ```json
    {
      "message": "Rota não encontrada"
    }
  ```
  
### Endpoint `/pessoa`
* **Descrição**: Listar pessoa.
* **Método**: `GET`
* **Exemplo da requisição**
  ```bash
    GET /pessoa
  ```
* **Resposta da requisição**
  ```json
  {
    "message": "Get Pessoa",
    "inf": [
      {
        "id": 1,
        "nome": "Joao",
        ... mais informações 
      }
    ]
  }
  ```
  
### Endpoint `/pessoa`
* **Descrição**: Adicionar pessoas.
* **Método**: POST
* **Requisitos**
  * `nome`(obrigatório): nome.
  * `telefone`(obrigatório): telefone.
  * `email`(obrigatório): email.
  * `endereco`(obrigatório): endereço.
  * `dataNascimento`(opcional): data de nascimento.
  * `ativo`(obrigatório): se o usuário a conta esta ativa.
  * `senha`(obrigatório): senha da conta.
* **Exemplo da requisição**
  ```bash
  POST /pessoa
  #As informações não irão via url
  ```
* **Resposta da requisição**
  * Em caso de Sucesso.
    ```json
      "Content-type": "application/json"
      {
        "message": "Adicionado com sucesso"
      }
    ```
  * Em caso de erro.
    ```json
      {
        "message": 'Erro ao adicionar pessoa',
        "error": error
      }
    ```
    
### Endpoint `/pessoa/{id}
* **Descrição**: Buscar por pessoa.
* **Método**:  `GET`
* **Parâmetro**:
  * `id`(obrigatório): ID da pessoa.
* **Exemplo da requisição**
  ```bash
    GET /pessoa/1
  ```
* **Resposta da requisição**
  * Em caso de sucesso.
    ```json
      "Content-type": "application/json"
      {
        "message": "searchPessoa",
        "id": 1,
        "dado": {
          "id": 1,
          "nome": "Joao",
          ...mais informações.
      }
    ```
  * Em caso de erro.
    ```json
      {
        "message": "Pessoa não encontrada",
        "id": <id-informado>
      }
    ```
### Endpoint `pessoa/{id}
* **Descrição**: Atualizar pessoa.
* **Método**: PUT
* **Parâmetro**
  * `id`(obrigatório): Id da pessoa.
* **Requisitos**
  * `nome`(obrigatório): nome.
  * `telefone`(obrigatório): telefone.
  * `email`(obrigatório): email.
  * `endereco`(obrigatório): endereço.
  * `dataNascimento`(opcional): data de nascimento.
  * `ativo`:(obrigatório): se o usuário a conta esta ativa.
  * `senha`(obrigatório): senha da conta.
* **Exemplo da requisição**
  ```bash
    PUT pesssoa/1
    ## As informações nao vão pela URL.
  ```
* **Resposta da requisição**
  * Em caso de sucesso.
  ```json
      PUT /pessoa/{id}
      "Content-type": "application/json",
      {
        "message": "Update pessoa"
      }
  ```
  * Em caso de erro
  ```json
    {
      "message": "Pessoa não encontrada"
    }
  ```
### Endpoint `/pessoa/{id}`
* **Descrição**: Excluir pessoa.
* **Método**: DELETE
* **Parâmetro**:
  * `id`(obrigatório): ID do usuário.
* **Exemplo da requisição**
  ```bash
    DELETE /pessoa/1
  ```
* **Resposta da requisição**
  * Em caso de sucesso.
    ```json
      "Content-type": "application/json"
      {
        "message": 
      }
    ```
  * Em caso de erro
    ```json
      {
        "message": "Pessoa não encontrada",
        "route": "deletar pessoa"
      }
    ```
## Criado por
* **Nome**: Bruno Pessoa
* **Área**: Desenvolver NodeJs|Typescript|Javascript
* **Formado**: UNIGRANDE - Universidade da grande Fortaleza.
* **Curso**: Sistemas para Internet.
* **Git Hub**: [github.com/BrunoPessoa097](https://github.com/BrunoPessoa097/api-agenda.git)
* **LinkedIn**: [www.linkedin.com/in/bruno-pesoa-097](https://www.linkedin.com/in/bruno-pessoa-097/)

## License
Esse projeto esta sobre a licença `MIT` ©Bruno Pessoa - 2025.