# Sistema de gestão de Carros e Usuários API v1.0.0

UI de sistema para gerenciar o registro de usuários e carros.

---
### Ferramentas

*  [npm](https://www.npmjs.com/)
*  [Angular](https://angular.dev/)
*  [TypeScript](https://www.typescriptlang.org/)
*  [RxJS](https://rxjs-dev.firebaseapp.com/)
*  [PrimeNG](https://primeng.org/)
*  [Moment.js](https://momentjs.com/)
---

### Heroku
Acesse o projeto publicado no Heroku pelo [link](https://sistema-carros-usuarios-ui-ad1b5a295b14.herokuapp.com).

```
login: alice_silva
password: senha123
```

### API
Acesse o repositório da API backend do projeto no [link](https://github.com/devricardorocha/sistema-carros-usuarios).


### Configuração do ambiente

Siga as instruções para configurar o ambiente de desenvolvimento.

#### Instalar dependencias

  Execute o comando abaixo para instalar as dependencias do projeto.
  ```
  npm install
  ``` 

#### Configuração de servidor

  Antes de executar o projeto, certifique-se de que a API esteja sendo disponível e acessível. No arquivo `proxy.config.json`, altere o atributo `target` com o endereço do servidor da API. No nosso caso, o link para a API é https://sistema-carros-usuarios-36f7a5a2f523.herokuapp.com.

  ```
  {
    "/api": {
        "target": "http://localhost:8080",
        "secure": false,
        "logLevel": "debug"
    }
  }
  ```
#### Executar servidor

  Na raiz do projeto, execute o comando:
  ```
  npm run start
  ```
  Após a execução do comando, a aplicação estará disponivel em http://localhost:4200.

#### Gerar build

  Na raiz do projeto, execute o comando:
  ```
  npm run build
  ```

  ## Desenvolvedor
  
   **Ricardo de Lima Rocha**
  *  [Linkedin](https://www.linkedin.com/in/ricardo-de-lima-rocha/)
  *  [GitHub](https://github.com/devricardorocha)
