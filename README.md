# Api de gerenciamento de agenda.
Api RestFull com CRUD(inserir, atualizar,listar e deletar).

## Índice
1. [Informações do projeto](#informacao-do-peojeto)
2. [Funcionabilidades](#suncionabilidade)
3. [Tecnologia usadas](#tecnologia-usadas)
4. [Trecho do código para ter atenção](#trecho-do-cpdigo-para-ter-atencao)
5. [Dependências](#dependencias)
6. [Como iniciar o projeto](#como-iniciar-o-projeto)
7. [Codigos de status HTTP](#codigo-de-status-http)
8. [Formato das informações ](#formato-das-informacoes)
9. [Endpoints](#endpoints)
10. [Criado por](#criado-por)

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

## Trechos do código para ter atenção.
Os trechos abaixo foram habilitado, usando `cors`, `helmet` e `permissionsPolicy` para melhor segurança da api, onde a mesma foi testada no site [segurity headers](https://securityheaders.com/), onde a mesma garantiu nota A em todos os requisitos(teste efetuado em: 22/08/2025) garantindo as melhores práticas no quesito segurança. Dependendo da configuração e/ou versao do `NodeJS` ou de outro gerenciador como `npm` ou `yarn`, poderá ocasionar algum erro, necessitando olhar as seguintes configurações e fazer as alterações e/ou desativando(a API continua funciona sem essas configurações ativa no código) rodando normalmente, mas sem os requisitos de segurança no qual a mesma foi submetida.

* A configuração do cors.
  * foi construida da seguinte lógica.
  ```typescript
    app.use(cors({
      origin: ['http://localhost:3000'], /// Rotas que sao permitidas do front-end
      methods: ['GET','POST','PUT','DELETE'] //Métodos permitido.
    })
    );
  ```
  * Para adicionar mais rotas segue o explo abaixo:
  ```typescript
    app.use(cors({
      origin: ['http://localhost:3000','<nova-rota>']
    }))
  ```

* A política de permissão é importada, e recebe uma variavel`politics` contendo as configurações, onde se encontra no seguinte caminho abaixo para qualquer análise `src/config/segure/politics`.
 ```typescript
   import permissionsPolicy from 'permissions-policy';

  app.use(permissionsPolicy({
    features: politics
  }));
 ```

## Tecnologia Usadas
As seguintes tecnologias foram usadas, certifique-se que já estão instaladas para roda o projeto em questão.
* [Node.js](https://nodejs.org/pt) - Ambiente execução Javascript.
* [Express.js](https://expressjs.com/) - Framework web javascript.
* [Typescript](https://www.typescriptlang.org/) - Linguagem que adiciona tipagem ao Javascript.
* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação.
* [ECMAScript](https://ecma-international.org/publications-and-standards/standards/ecma-262/) - Especificação da linguagem Javascript.
* [Helmet](https://helmetjs.github.io/) - Middleware para segurança.

## Dependências
* `express` - (versão: ^5.1.0) - Framework web para Node js.
* `nodemon` - (versão: ^3.1.10) - Utilitário para facilitar o processo de desenvolvimento.
* `cors` - (versão: ^2.8.5) - Controlador de acesso de recursos.
* `dotenv` - (versão: ^17.2.1) - Carregar variáveis do ambiente.
* `ts-node` - (versão: ^10.9.2) - Interpretador typescript.
* `helmet` - (versão: ^8.1.0) - Middleware para segurança.
* `cors` - (versão: ^2.8.5) - Mecanismo de segurança que permite acessar requisição de uma origem diferente.

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
        **... mais informações**
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