# Projeto NestJS - CRUD de UFs, Cidades e Estudantes

Este projeto foi desenvolvido utilizando o framework NestJS com TypeORM e SQLite, com o objetivo de implementar um CRUD completo para as entidades: UF, Cidade e Estudante. Foi adotado o padrão REST, boas práticas de modularização e princípios de Programação Orientada a Objetos com TypeScript.

---

## Integrantes e Matrículas

• Nome: Leonardo Louzada de Melo | Matrícula: UC23100791  

• Nome: Leonardo Rodrigues Amorim Filho | Matrícula: UC23101012

---

## 📁 Estrutura do Projeto

- src/
  - uf/
  - cidade/
  - estudante/
  - app.module.ts
  - main.ts
- db.sqlite
- package.json
- requests.http
- README.md

---

## ✅ Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

- Node.js (versão 16 ou superior)
- npm
- NestJS CLI (instalado globalmente)

Instalação do NestJS CLI:

```bash
npm install -g @nestjs/cli
```

---

## 📦 Instalação do Projeto

Clone o repositório e entre na pasta:

```bash
git clone <URL-do-repositório>
cd projeto-nest-crud
```

Instale as dependências:

```bash
npm install
```

---

## 🚀 Execução do Projeto

Em modo de desenvolvimento:

```bash
npm run start:dev
```

Em modo de produção:

```bash
npm run build
npm run start
```

---

## 🔁 Consumo da API

Utilize a extensão REST Client no VS Code:

1. Instale a extensão "REST Client"
2. Abra o arquivo requests.http
3. Clique em “Send Request” para testar as rotas

---

## ✅ Rotas implementadas

- /uf (GET, POST, PUT, DELETE)
- /cidade (GET, POST, PUT, DELETE)
- /estudante (GET, POST, PUT, DELETE)

---

## 📚 Anotações Técnicas e de Estudo

### Introdução

O NestJS é um framework moderno para Node.js que utiliza TypeScript e é inspirado na arquitetura do Angular. Ele promove escalabilidade e organização através de módulos, serviços, controladores e injeção de dependência.

---

### Criando o Projeto

```bash
nest new projeto-nest-crud
```

O comando acima gera uma estrutura básica do projeto NestJS.

---

### Criando a API com o Gerador

```bash
nest generate resource uf --no-spec
nest generate resource cidade --no-spec
nest generate resource estudante --no-spec
```

Foi escolhida a opção REST API com CRUD completo.

---

### Validação de Dados

Instalação:

```bash
npm install class-validator class-transformer
```

Exemplo de uso no DTO:

```ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUfDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
```

---

### TypeORM e SQLite

Instalação:

```bash
npm install @nestjs/typeorm typeorm sqlite3
```

Configuração em app.module.ts:

```ts
TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Uf, Cidade, Estudante],
  synchronize: true,
}),
```

---

### Injeção de Dependência

Feita automaticamente com @Injectable():

```ts
constructor(private readonly ufService: UfService) {}
```

---

### Lógica na Service

Toda a lógica de acesso a dados é implementada nas classes de serviço usando os repositórios do TypeORM.

---

### Boas Práticas REST

- Utilizar nomes de rotas no plural
- Métodos HTTP apropriados (GET, POST, PUT, DELETE)
- Retorno com status HTTP corretos (201, 404, etc)

---

## Próximos Passos

- Implementar autenticação e autorização
- Criar filtros de busca por parâmetros (ex: listar estudantes de uma cidade)
- Exportar dados para CSV/Excel
- Adicionar testes automatizados

---

## Desafio

- Uma UF possui várias cidades (OneToMany)
- Uma cidade possui vários estudantes (OneToMany)
- Buscar estudantes por cidade e cidades por UF

---

## 🧪 Exemplo de Comando para Criar UF

```http
POST http://localhost:3000/uf
Content-Type: application/json

{
  "nome": "Distrito Federal"
}
```
