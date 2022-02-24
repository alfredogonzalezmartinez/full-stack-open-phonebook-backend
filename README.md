# Backend de la agenda telefónica

Solución de los [ejercicios 3.1.-3.6.](https://fullstackopen.com/es/part3/node_js_y_express#ejercicios-3-1-3-6), [ejercicios 3.7.-3.8.](https://fullstackopen.com/es/part3/node_js_y_express#ejercicios-3-7-3-8), [ejercicios 3.9.-3.11.](https://fullstackopen.com/es/part3/implementacion_de_la_aplicacion_en_internet#ejercicios-3-9-3-11), [ejercicio 3.12.](https://fullstackopen.com/es/part3/guardando_datos_en_mongo_db#ejercicio-3-12) [ejercicios 3.13.-3.14.](https://fullstackopen.com/es/part3/guardando_datos_en_mongo_db#ejercicios-3-13-3-14) y [ejercicios 3.15.-3.18.](https://fullstackopen.com/es/part3/guardando_datos_en_mongo_db#ejercicios-3-15-3-18) del curso Full Stack open 2021

## Aplicación

Para el funcionamiento de la aplicación es necesario contar con una base de datos [MongoDB](https://www.mongodb.com/) e instalar las dependencias.

### Variables de entorno

- **`MONGODB_URI`** URI para conectarse a la base de datos.

- **`PORT`** Puerto en el que se inicia el servidor. Por defecto, 3001.

### Dependencias

Use el comando `npm install` instalar las dependencias.

Para instalar también las dependencias de desarrollo utilice el comando `npm install --production=false`.

### Scripts

- **`npm start`** Inicia la aplicación.

- **`npm run dev`** Inicia la aplicación en modo desarrollo.

### Endpoints

```
GET    /info
GET    /api/persons
GET    /api/persons/:id
POST   /api/persons
PUT    /api/persons/:id
DELETE /api/persons/:id
```

- **`GET /info`** Devuelve la cantidad de contactos y la fecha de la solicitud en formato HTML.

- **`GET /api/persons`** Devuelve todos los contactos en formato JSON.

- **`GET /api/persons/:id`** Devuelve el contacto con la id especificada en formato JSON.

- **`POST /api/persons`** Añade un nuevo contacto y lo devuelve en formato JSON. Las propiedades `name` y `number` son requeridas.

- **`PUT /api/persons/:id`** Actualiza el contacto con la id especificada y lo devuelve en formato JSON.

- **`DELETE /api/persons/:id`** Elimina el contacto con la id especificada.

## Proceso

Para resolver los ejercicios se han realizado los siguientes pasos:

1. Inicialización del proyecto.

   ```
   mkdir full-stack-open-phonebook-backend
   cd full-stack-open-phonebook-backend
   git init
   npm init
   echo "node_modules" > .gitignore
   ```

2. Instalación de [Express](https://expressjs.com/) y [nodemon](https://github.com/remy/nodemon).

   ```
   npm install -E express
   npm install -E --save-dev nodemon
   ```

3. Adición de scripts en `package.json`

   ```
   "start": "node src/index.js",
   "dev": "nodemon src/index.js"
   ```

4. Creación de `index.js` en el directorio `src`.

5. Implementación del código necesario para enviar todos los contactos cuando se haga una petición `GET` al endpoint `/api/persons`.

6. Implementación del código necesario para enviar la cantidad de contactos y la fecha actual cuando se haga una petición `GET` al endpoint `/info`.

7. Implementación del código necesario para enviar un contacto específico cuando se haga una petición `GET` al endpoint `/api/persons/:id`.

8. Implementación del código necesario para eliminar un contacto específico cuando se haga una petición `DELETE` al endpoint `/api/persons/:id`.

9. Implementación del código necesario para añadir un nuevo contacto cuando se haga una petición `POST` al endpoint `/api/persons`.

10. Instalación de [morgan](https://github.com/expressjs/morgan).

    ```
    npm install -E morgan
    ```

11. Implementación del middleware morgan para registrar en consola las peticiones al servidor.

12. Instalación de [cors](https://github.com/expressjs/cors).

    ```
    npm install -E cors
    ```

13. Implementación del middleware cors para permitir solicitudes desde cualquier origen.

14. Copia de una build del [frontend de la agenda telefónica](https://github.com/alfredogonzalezmartinez/full-stack-open/tree/main/part2/phonebook) con rutas relativas para el consumo de la API.

15. Implementación para servir los archivos estaticos de la build.

16. Despliegue de la aplicación en [Heroku](https://heroku.com).

    ```
    echo "web: npm start" > Procfile
    heroku create
    git checkout -b main
    git add .
    git commit -m "Agregar Ejercicios 3.9.-3.11."
    git push heroku main
    ```

17. Creación de un clúster en [MongoDB Atlas](https://www.mongodb.com/atlas/database).

18. Instalación de [Mongoose](https://mongoosejs.com/) y [dotenv](https://github.com/motdotla/dotenv).

    ```
    npm install -E mongoose dotenv
    ```

19. Creación de un archivo `.env` con la variable de entorno `MONGODB_URI` y adición de este al `.gitignore`.

    ```
    echo "MONGODB_URI=your.mongodb.uri" > .env
    echo ".env" >> .gitignore
    ```

20. Configuración de la conexión a la base de datos con Mongoose.

21. Creación del modelo `Person` para definir la estructura de los contactos.

22. Implementación de la obtención de los contactos desde la base de datos.

23. Implementación del guardado de los contactos en la base de datos.

24. Implementación del borrado de los contactos en la base de datos.

25. Remplazo de la build del frontend de para que funcione el borrado.

26. Adición de un middleware para manejar los errores

27. Implementación de la actualización del contacto en la base de datos cuando se haga una petición `PUT` al endpoint `/api/persons/:id`.
