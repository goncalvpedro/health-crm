# Backend development

```
~~INÍCIO
  |
  v
[1] Inicializar o projeto Node.js
    └─ npm init -y
    └─ Criar pasta: /backend
  |
  v
[2] Instalar dependências
    └─ express, cors, bcrypt, jsonwebtoken, prisma, @prisma/client, dotenv
    └─ npm install express cors bcrypt jsonwebtoken prisma @prisma/client dotenv
  |
  v
[3] Criar estrutura de pastas
    └── backend/
        ├── controllers/
        ├── routes/
        ├── middlewares/
        ├── prisma/
        ├── utils/
        ├── auth/
        └── index.js
  |
  v
[4] Configurar Prisma
    └─ npx prisma init
    └─ Definir models no prisma/schema.prisma
    └─ npx prisma migrate dev --name init
  |
  v
[5] Criar Prisma Client
    └─ backend/prisma/client.js
  |
  v
[6] Criar servidor Express
    └─ backend/index.js
        - Configura express, cors, dotenv, rotas
  |
  v
[7] Criar controlador de usuários (Auth)
    └─ backend/controllers/authController.js
        - registerUser
        - loginUser
  |
  v
[8] Criar rotas de autenticação
    └─ backend/routes/authRoutes.js
        - POST /register
        - POST /login
  |
  v
[9] Criar criptografia de senha
    └─ Utilizar bcrypt
        - hashSync() ao cadastrar
        - compareSync() ao logar
  |
  v
[10] Criar geração de JWT
    └─ backend/utils/jwt.js
        - Funções: generateToken, verifyToken
  |
  v
[11] Criar middleware de autenticação
    └─ backend/middlewares/authMiddleware.js
        - Verifica o token JWT em rotas protegidas
  |
  v~~
[12] Criar controladores principais
    └─ backend/controllers/patientController.js
    └─ backend/controllers/procedureController.js
    └─ backend/controllers/appointmentController.js
  |
  v
[13] Criar rotas principais
    └── backend/routes/patientRoutes.js
        - GET /patients
        - POST /patients
        - GET /patients/:id
    └── backend/routes/procedureRoutes.js
        - CRUD de procedimentos
    └── backend/routes/appointmentRoutes.js
        - CRUD de consultas
  |
  v
[14] Proteger rotas com middleware de auth
    └─ Aplica authMiddleware em rotas sensíveis
  |
  v
[15] Testar todas as rotas com Postman
    └─ Verificar: login, CRUD paciente, CRUD consulta, agendamento
  |
  v
[16] Criar mensagens de erro e middleware global de erros (opcional)
    └─ backend/middlewares/errorHandler.js
  |
  v
[17] Deploy local ou na nuvem (Railway, Render, Heroku, etc.)
    └─ Gerar build para produção
  |
  v
FIM

```