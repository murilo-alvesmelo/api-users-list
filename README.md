<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# API - Nest JS
 
Api que alimenta o projeto [react-native-crud](https://github.com/murilo-alvesmelo/react-native-crud)


## Rodando localmente

Clone o projeto

```bash
  $ git clone https://github.com/murilo-alvesmelo/api-users-list
```

Entre no diretório do projeto

```bash
  $ cd react-native-crud-backend
```

Instale as dependências

```bash
  $ npm install
```

Inicie a aplicação

```bash
  $ npm run start
```


## Stack utilizada

**Back-end:** NestJS(Node, Express), TypeORM

## Entidades do banco de dados

Para essa aplicação e criada uma integração com um servidor de banco de dados Postgres no localhost da sua maquina:

**Entidades da tabela Produtos:**

```javascript

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

    @Entity('users')
    export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    avatarUrl: string;
    }
```

### Rotas do CRUD de users
#### Retorna todos os produtos cadastrados na API
```http
   GET http://localhost:3000/users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `user` | `object` | **Obrigatório**. Objeto user|


#### Envia os parâmetros para API para o cadastro do produto
```http
   POST http://localhost:3000/users
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user`   | `object` | **Obrigatório**. Objeto user|

#### Faz uma atualização no campo escolhido do user 
```http
   PUT http://localhost:3000/users/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user`   | `object` | **Obrigatório**. Objeto user|
| `id`      | `number` | **Obrigatório**. O ID do user que você quer  |

#### Deleta o produto pelo ID

```http
   DELETE http://localhost:3000/users/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user`   | `object` | **Obrigatório**. Objeto user|
| `id`      | `number` | **Obrigatório**. O ID do user que você quer  |

## Autores

- [@murilo-alvesmelo](https://github.com/murilo-alvesmelo)


## Licença
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[MIT](https://choosealicense.com/licenses/mit/)
