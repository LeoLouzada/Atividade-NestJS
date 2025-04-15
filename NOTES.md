### Integrantes e Matrículas:
- Nome: Leonardo Louzada de Melo | Matrícula: UC23100791
- Nome: Leonardo Rodrigues Amorim Filho | Matrícula: UC23101012

---

# NOTES.md

## Introdução

O NestJS é um framework para Node.js que utiliza TypeScript e é fortemente inspirado na arquitetura do Angular. É voltado para a construção de aplicações escaláveis do lado do servidor, utilizando padrões como injeção de dependência, módulos, serviços e controladores.

## Criando o Projeto

```bash
npm i -g @nestjs/cli
nest new projeto-crud
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

Selecionamos a opção **REST API** e **Yes** para gerar o CRUD completo (Controller, Service, DTOs, Module).

## Validação de Dados

Instalar `class-validator` e `class-transformer`:

```bash
npm i class-validator class-transformer
```

Utilizar decorators como `@IsString()`, `@IsNotEmpty()` nos DTOs para garantir integridade dos dados.

## TypeORM e SQLite

Instalar dependências:

```bash
npm i --save @nestjs/typeorm typeorm sqlite3
```

Configuração em `app.module.ts`:

```ts
TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Uf, Cidade, Estudante],
  synchronize: true,
}),
```

## Injeção de Dependência

Feita automaticamente pelo NestJS via `@Injectable()`. Os repositórios e serviços são injetados nos controllers:

```ts
constructor(private readonly ufService: UfService) {}
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

Expandir o projeto criando relacionamentos entre as entidades:
- Uma UF possui várias Cidades
- Uma Cidade possui vários Estudantes

Implementar buscas por relação (ex: listar estudantes de uma cidade, cidades de uma UF).

Documentar e testar tudo com REST Client via `requests.http`.
