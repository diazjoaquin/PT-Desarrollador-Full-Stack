# Prueba Técnica para Desarrollador Full Stack

_Este proyecto es una aplicación web de gestión de proyectos, donde los usuarios pueden crear proyectos, asignar tareas, y gestionar el progreso del trabajo. La aplicación incluye autenticación con JWT y un sistema de permisos basado en roles._

## Tecnologías Utilizadas
* Backend: NestJS (Node.js Framework)
* Frontend: React con Vite
* Base de Datos: PostgreSQL
* Autenticación: JWT (JSON Web Token)
* Contenedores: Docker

## Requisitos Previos

_para ejecutar ésta aplicación necesitas tener previamente instalado:_

* Docker desktop.
* Node.js (Version 16.0 o superior)
* Git

## Instrucciones de Configuración

### Clonar el repositorio.

```bash
git clone https://github.com/diazjoaquin/PT-Desarrollador-Full-Stack.git
cd PT-Desarrollador-Full-Stack
```
### Backend (Nest.js)
#### Instalacion de dependencias
----

```bash
cd api
npm install
```

### Configuración del archivo .env
En la carpeta api crea un archivo .env a partir del archivo .env.dist y asignale los valores apropiados a cada variable de entorno.

#### Levanta el proyecto con docker.
El backend esta configurado para levantarse con Docker. Para levantarlo utiliza el siguiente comando:

```bash
docker-compose up -d
```

Esto iniciará el contenedor con la base de datos postgreSQL. Una vez levantado el contenedor deberás utilizar el siguiente comando:

```bash
npm run start:dev
```
Esto iniciará el contenedor con la base de datos PostgreSQL y el backend de NestJS.

____

### Front-End (React con Vite)
#### Instalacion de dependencias
----
Desde la carpeta raíz:
```bash
cd ui
npm install
```

#### Configuración del archivo .env
Crea un archivo .env en la carpeta frontend con el siguiente contenido:
```bash
VITE_API_URL=http://localhost:5000
```
En mi caso el backend esta levantado en el PORT: 5000, si lo levantas en un puerto distinto deberías mofificar la variable de entorno con el puerto seleccionado.

#### Iniciar el servidor de desarrollo

```bash
npm run dev
```
El frontend debería estar disponible en http://localhost:5173.

### Base de datos
La base de datos PostgreSQL está incluida en el archivo docker-compose.yml. Cuando ejecutes docker-compose up, se creará automáticamente una base de datos llamada projects_db.

Para acceder a la base de datos, puedes usar pgAdmin o cualquier otra herramienta de administración de PostgreSQL con las credenciales definidas en el archivo .env.

### Endpoinst de la API.
La API está protegida con autenticación JWT. A continuación, se muestra una lista de los endpoints disponibles:

#### Proyectos
**-GET /projects:** Obtener todos los proyectos.
**GET /projects/{id}:** Obtener un proyecto específico.
**POST /projects:** Crear un nuevo proyecto (Solo Admin).
**PUT /projects/{id}:** Actualizar un proyecto existente (Solo Admin).
**DELETE /projects/{id}:** Eliminar un proyecto (Solo Admin).
#### Tareas
**POST /tasks:** Crear una nueva tarea.
**PATCH /tasks/{id}:** Actualizar el estado de una tarea.
**GET /tasks?project_id={id}:** Obtener tareas filtradas por proyecto.
#### Autenticación
Para autenticar usuarios, se debe utilizar JWT. El backend cuenta con los siguientes endpoints de autenticación:

**POST /auth/register:** Registrar un nuevo usuario.
**POST /auth/login:** Iniciar sesión y obtener un token JWT.
El token JWT debe ser incluido en el encabezado de las solicitudes como Authorization: Bearer <token> para acceder a los endpoints protegidos.

Sistema de Permisos
El sistema de permisos está basado en roles:

**Admin:** Puede gestionar todos los proyectos y tareas.
**Usuario Regular:** Solo puede gestionar las tareas dentro de los proyectos en los que está asignado.



