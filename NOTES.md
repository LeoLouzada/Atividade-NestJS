### Integrantes e Matrículas:
- Nome: Leonardo Louzada de Melo | Matrícula: UC23100791
- Nome: Leonardo Rodrigues Amorim Filho | Matrícula: UC23101012
- Nome: Mario Eduardo Pereira de Sousa | Matrícula: UC23101279

---

# NOTES.md

## Introdução

O NestJS é um framework para Node.js que utiliza TypeScript e é fortemente inspirado na arquitetura do Angular. É voltado para a construção de aplicações escaláveis do lado do servidor, utilizando padrões como injeção de dependência, módulos, serviços e controladores.

## Criando o Projeto

Comando dentro do diretório do projeto

```bash
nest new .
```
Selecionamos a opção `npm` para escolher o gerenciador de pacostes que iremos utilizar.

Instalação de pacotes

```bash
npm i nanoid@3 sqlite3 typeorm @nestjs/typeorm class-validator class-transformer
```

Ao rodar o comando, o CLI cria a estrutura inicial com:
- pasta `src/` contendo `main.ts`, `app.module.ts`, etc.
- instalação automática das dependências com npm ou yarn.

## Criando a API com o Gerador de Código

```bash
nest generate resource ufs
nest generate resource cidades
nest generate resource estudantes
```

Selecionamos a opção `REST API` e `Yes` para gerar o CRUD completo (Controller, Service, DTOs, Module).

**IMPORTANTE**: para esse projeto usaremos a extensão **REST Cliente** do VS Code para consumirmos nossa API.

## Validação de Dados

Com os pacotes `class-validator` e `class-transformer` já instalados podemos usar a validação de dados na nossa API.

Utilizar decorators como `@IsString()` e `@IsNumber()` nos DTOs para garantir integridade dos dados.

## TypeORM e SQLite

Já com as dependências `@nestjs/typeorm typeorm sqlite3` instaladas:

Configuração em `app.module.ts`:

```ts
TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Uf, Cidade, Estudante],
  synchronize: true,
}),
```
Nas nossas classes **entity** usaremos notações como `@Column()` e `@PrimaryColumn()` para dizer que os atributos são colunas no banco de dados.

Usaremos também a biblioteca já instalada nanoid@3 para gerarmos ids aleatórios:

```ts
const { nanoid } = require("nanoid")

export class Uf {
  ...

  @BeforeInsert()
  generateId(){
    this.id = `dev_${nanoid()}`
  }
}
```

## Injeção de Dependência

Feita automaticamente pelo NestJS via `@Injectable()`. Os repositórios e serviços são injetados nos controllers:

```ts
constructor(private readonly repository: Repository<Cidade>) {}
```

## Lógica na Service

Toda a lógica de negócio, como interação com banco de dados e validações, fica dentro da service:

```ts
async findAll(): Promise<Uf[]> {
  return this.ufRepository.find();
}
```

## Bônus: Boas Práticas REST

- Utilizar nomes de rotas no plural: `/ufs`, `/cidades`, `/estudantes`
- Utilizar corretamente métodos HTTP: GET, POST, PUT, DELETE
- Retornar status HTTP apropriados (201 Created, 404 Not Found, etc)

## Próximos Passos

- Implementar autenticação e autorização
- Validações mais robustas (relacionais)
- Conectar com PostgreSQL
- Testes automatizados

## Desafio!

**LEIA A DOCUMENTAÇÃO DO NEST**
