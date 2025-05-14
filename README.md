# API de Gerenciamento de Alunos, Cursos e Matrículas

API REST para gerenciamento de alunos, cursos e matrículas, com operações CRUD, listagem paginada e consultas específicas.

*Node versão 20.10*

## Inicialiazação de Projeto
1. **Rodar o comando de Docker que está alocado na porta 3306**

```bash
docker compose up -d
```
---
2. **Baixar os pacotes do projeto**
```bash
yarn 
```
---
3. **Rodar o comando para rodar as migrations**
```bash
yarn migration:run
```
---
4. **Rodar o comando para inicializar o serviço**
```bash
yarn dev
```

## Coleção Postman
Na raiz do projeto, existe o arquivo API.postman_collection com as rotas já configuradas para importação no Postman, facilitando os testes.

1. Executando Testes com Postman

2. Importe o arquivo API.postman_collection para o Postman.

3. Execute as requisições conforme necessidade.

## Base URL
`http://localhost:3333`

---

## Recursos

### Alunos

| Método | Endpoint           | Descrição                     |
|--------|--------------------|-------------------------------|
| POST   | `/alunos`          | Criar novo aluno              |
| POST   | `/alunos/list`     | Listar alunos paginados       |
| POST   | `/alunos/count`    | Contar alunos conforme filtro |
| GET    | `/alunos/:id`      | Obter aluno por ID            |
| PUT    | `/alunos`          | Atualizar dados do aluno      |
| DELETE | `/alunos/:id`      | Deletar aluno por ID          |

#### Exemplo de criação (POST `/alunos`)

```json
{
  "nome": "Nome 2",
  "email": "email@example.com",
  "data_nascimento": "2025-05-14"
}
```

---

### Cursos

| Método | Endpoint        | Descrição                     |
|--------|-----------------|-------------------------------|
| POST   | `/cursos`       | Criar novo curso              |
| POST   | `/cursos/list`  | Listar cursos paginados       |
| POST   | `/cursos/count` | Contar cursos conforme filtro |
| GET    | `/cursos/:id`   | Obter curso por ID            |
| PUT    | `/cursos`       | Atualizar dados do curso      |
| DELETE | `/cursos/:id`   | Deletar curso por ID          |

#### Exemplo de criação (POST `/cursos`)

```json
{
  "nome": "Nome Curso 2",
  "descricao": "Descrição do curso"
}
```

---

### Matrículas

| Método | Endpoint                                 | Descrição                              |
|--------|-----------------------------------------|----------------------------------------|
| POST   | `/matriculas`                            | Criar nova matrícula                   |
| POST   | `/matriculas/list`                       | Listar matrículas paginadas            |
| POST   | `/matriculas/count`                      | Contar matrículas conforme filtro      |
| GET    | `/matriculas/:id`                        | Obter matrícula por ID                 |
| GET    | `/matriculas/getCursosByAluno/:aluno_id` | Listar cursos matriculados por aluno   |
| GET    | `/matriculas/getAlunosByCurso/:curso_id` | Listar alunos matriculados em um curso |
| PUT    | `/matriculas`                            | Atualizar matrícula                    |
| DELETE | `/matriculas/:id`                        | Deletar matrícula por ID               |

#### Exemplo de criação (POST `/matriculas`)

```json
{
  "aluno_id": "5d5dc827-7e58-4c37-a46f-c2a7bf846531",
  "curso_id": "57ad3834-2b3c-4696-9ecf-54fcb9fecdf2"
}
```

## getCursosByAluno
Listagem de cursos por alunos 

Exemplo de paramns 
```
http://localhost:3333/matriculas/getCursosByAluno/5d5dc827-7e58-4c37-a46f-c2a7bf846531
```

Que retornará um json
```json
  {
    "statusCode": 200,
    "data": [
        {
            "id": "ff2fc674-1965-48d3-87eb-770bdb537b9a",
            "nome": "Nome Curso 1",
            "descricao": "descricao"
        },
        {
            "id": "57ad3834-2b3c-4696-9ecf-54fcb9fecdf2",
            "nome": "Nome Curso 2",
            "descricao": "descricao"
        }
    ]
}
```

## getAlunosByCurso
Listagem de Alunos por Cursos 

Exemplo de paramns 
```
http://localhost:3333/matriculas/getAlunosByCurso/baae4443-8658-4a79-a8ea-f92ba3ee6ba7
```

Que retornará um json
```json
  {
      "statusCode": 200,
      "data": [
          {
              "id": "6769ab8d-4be6-4801-9d95-73c4e401eb7a",
              "nome": "Nome 1",
              "email": "email1@teste.com",
              "data_matricula": "2025-05-14T03:00:00.000Z"
          },
          {
              "id": "6769ab8d-4be6-4801-9d95-73c4e401eb7a",
              "nome": "Nome 2",
              "email": "email2@teste.com",
              "data_matricula": "2025-05-14T03:00:00.000Z"
          },
          {
              "id": "6769ab8d-4be6-4801-9d95-73c4e401eb7a",
              "nome": "Nome 3",
              "email": "email3@teste.com",
              "data_matricula": "2025-05-14T03:00:00.000Z"
          }
      ]
  }
```


