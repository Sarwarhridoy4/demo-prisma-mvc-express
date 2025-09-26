# Minimal Modular MVC Express + Prisma (TypeScript)

A clean and minimal boilerplate for building scalable **Express.js servers** with **TypeScript**, **Prisma ORM**, and **PostgreSQL** following the **Modular MVC pattern**.

---

## 🚀 Features

- **TypeScript** for type safety
- **Express 5** modular MVC structure
- **Prisma ORM** with PostgreSQL
- **JWT Authentication** ready
- **Bcrypt** for password hashing
- Centralized error handling with `http-status-codes`
- Supports **npm**, **yarn**, **pnpm**, and **bun**

---

## 📂 Folder Structure

```bash
demo-prisma-mvc-express/
├── prisma/
│   └── schema.prisma     # Prisma schema
├── src/
│   ├── config/           # Configs (db, env)
│   ├── modules/          # Features (user, auth, etc.)
│   │   └── user/
│   │       ├── user.controller.ts
│   │       ├── user.service.ts
│   │       ├── user.route.ts
│   │       └── user.model.ts
│   ├── utils/            # Helpers
│   ├── app.ts            # Express app setup
│   └── server.ts         # Server entry point
├── .env                  # Env vars (DATABASE_URL, JWT_SECRET)
├── package.json
└── tsconfig.json
```

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Sarwarhridoy4/demo-prisma-mvc-express.git
cd demo-prisma-mvc-express
```

### Install dependencies

Choose your preferred package manager:

#### Using npm

```bash
npm install
npm run dev
```

#### Using yarn

```bash
yarn
yarn dev
```

#### Using pnpm

```bash
pnpm install
pnpm dev
```

#### Using bun

```bash
bun install
bun run dev
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/demo_db?schema=public"
JWT_SECRET="supersecretkey"
PORT=5000
```

---

## 🗄️ Prisma Setup

1. Generate Prisma Client:

```bash
npx prisma generate
```

2. Run migrations:

```bash
npx prisma migrate dev --name init
```

3. Open Prisma Studio (DB GUI):

```bash
npx prisma studio
```

---

## ▶️ Running the Server

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

### Production

```bash
npm run build && npm start
# or
yarn build && yarn start
# or
pnpm build && pnpm start
# or
bun build && bun start
```

---

## 📌 Example API Request

### Create User

```bash
curl -X POST http://localhost:5000/api/v1/user \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone:"+8801xxxxxxxxx",
    "password": "123456"
  }'
```

### Get All Users

```bash
curl http://localhost:5000/api/v1/user
```

---

## 🔒 Security

- Passwords hashed with `bcryptjs`
- JWT-based authentication
- Centralized error handling

---

## 🛠️ Scripts

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc -p .",
  "start": "node dist/server.js",
  "prisma:migrate": "prisma migrate dev --name init",
  "prisma:studio": "prisma studio"
}
```

---

## ✅ Next Steps

- Add more modules (auth, wallet, transactions)
- Implement request validation (e.g., `zod` or `joi`)
- Add logging (e.g., `winston` or `pino`)
- Dockerize for deployment

---

## 📜 License

MIT © [Sarwar Hossain](https://github.com/Sarwarhridoy4)
