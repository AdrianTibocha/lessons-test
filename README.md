# 📚 Lessons Tracker

Este proyecto es una aplicación de seguimiento de lecciones completadas por estudiantes, desarrollada con las siguientes tecnologias:

- **Backend**: NestJS + TypeORM + PostgreSQL  
- **Frontend**: Next.js  
- **Base de datos**: PostgreSQL + pgAdmin (vía Docker Compose)

Permite registrar lecciones, consultarlas por estudiante o por ID, y visualizar la información desde una interfaz sencilla.

---

## 🚀 Ejecución del Proyecto

Para ejecutar este proyecto en un entorno local, sigue los pasos descritos a continuación:

### 1. Iniciar la base de datos

Desde la raíz del proyecto, ejecuta:

```bash
docker-compose up -d
```

Esto levantará:

- **PostgreSQL** disponible en `localhost:5432`
- **pgAdmin** (interfaz web) disponible en `localhost:8080`

> ℹ️ El archivo `docker-compose.yml` crea la base de datos, pero **no** las tablas. Estas se generan automáticamente mediante TypeORM cuando se inicia el backend.

---

### 2. Acceder a la interfaz gráfica

Abre tu navegador y entra a:

```
http://localhost:8080
```

Inicia sesión con las credenciales definidas en el archivo `docker-compose.yml` y conéctate al servidor PostgreSQL.

---

### 3. Iniciar el backend

Desde la carpeta `lessons-api` ejecuta:

```bash
npm install
npm run start:dev
```

El backend estará disponible en:

```
http://localhost:3000
```

---

### 4. Iniciar el frontend

Desde la carpeta `frontend-lessons` ejecuta:

```bash
npm install
npm run dev
```

El frontend estará disponible en:

```
http://localhost:3001
```

---

### 5. Insertar datos de prueba

Desde pgAdmin (o cualquier cliente SQL), abre la base de datos y ejecuta el contenido del archivo `execute-schemas.sql` para insertar registros de prueba.


## 🛠️ Tecnologías

- **NestJS** 
- **TypeORM** 
- **Next.js** 
- **Docker Compose** 
- **pgAdmin**

---

## 📄 Licencia

MIT © [Tu Nombre o Equipo]
