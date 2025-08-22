import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API telefone documentação',
      version: '1.0.0',
      description: 'Documentação da API',
      contact: {
        name: 'Bruno Pessoa',
        linkedIn: 'https://www.linkedin.com/in/bruno-pessoa-097'
      }
    }
  },
  apis: ['./src/*.ts','./src/controllers/*.ts'],
}

export default swaggerOptions;