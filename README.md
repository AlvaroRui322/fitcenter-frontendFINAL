# FitCenter

Este proyecto es una aplicación Vue que incluye varias características como autenticación, rutas, componentes reutilizables y vistas para diferentes funcionalidades. A continuación se describe la estructura del proyecto y su funcionalidad.

## Estructura del Proyecto

### Directorio `public`
Contiene archivos estáticos que se sirven directamente al cliente, como imágenes y archivos de configuración.

### Directorio `src`
Es el directorio principal donde se encuentra el código fuente de la aplicación.

#### `assets`
Contiene recursos estáticos como imágenes y archivos CSS.

- `base.css`: Estilos base para la aplicación.
- `logo.svg`: Imagen del logo de la aplicación.
- `main.css`: Estilos principales de la aplicación.
- `styles.css`: Estilos adicionales.
- `vue.svg`: Imagen relacionada con Vue.

#### `components`
Contiene los componentes Vue reutilizables.

- `icons`: Directorio para iconos (si es necesario).
- `AddToRoutineModal.vue`: Componente para añadir ejercicios a una rutina.
- `ExerciseCard.vue`: Componente para mostrar tarjetas de ejercicios.
- `HelloWorld.vue`: Componente de ejemplo.
- `LoginForm.vue`: Formulario de inicio de sesión.
- `NavBar.vue`: Barra de navegación.
- `RegisterForm.vue`: Formulario de registro.
- `TheWelcome.vue`: Componente de bienvenida.
- `WelcomeItem.vue`: Ítem de bienvenida.

#### `router`
Contiene la configuración de las rutas de la aplicación.

- `index.js`: Configuración de las rutas usando Vue Router.

#### `services`
Contiene servicios para interactuar con APIs o lógica de negocio.

- `authService.js`: Servicio para manejar la autenticación.

#### `stores`
Contiene la configuración del almacenamiento global de estado usando Pinia o Vuex.

- `user.js`: Almacenamiento relacionado con el usuario.

#### `views`
Contiene las vistas principales de la aplicación.

- `Contact.vue`: Vista para la página de contacto.
- `CreateRoutine.vue`: Vista para crear una nueva rutina de ejercicios.
- `ExerciseDetail.vue`: Vista para mostrar detalles de un ejercicio específico.
- `Exercises.vue`: Vista para listar todos los ejercicios disponibles.
- `Home.vue`: Vista principal de la página de inicio.
- `Login.vue`: Vista para el inicio de sesión.
- `Profile.vue`: Vista para el perfil del usuario.
- `Register.vue`: Vista para el registro de nuevos usuarios.

## Funcionalidades

### Autenticación
La aplicación incluye un sistema de autenticación con formularios de inicio de sesión y registro. El servicio `authService.js` maneja las solicitudes de autenticación.

### Rutas
Las rutas de la aplicación están configuradas en `router/index.js`. Esto permite la navegación entre diferentes vistas de la aplicación.

### Componentes Reutilizables
La aplicación utiliza varios componentes reutilizables como `NavBar.vue` para la navegación y `ExerciseCard.vue` para mostrar información sobre ejercicios.

### Vistas
Las vistas principales de la aplicación incluyen:

- **Home**: Página principal de la aplicación.
- **Login**: Página para iniciar sesión.
- **Register**: Página para registrarse.
- **Profile**: Página del perfil del usuario.
- **Exercises**: Página para listar ejercicios.
- **ExerciseDetail**: Página para ver detalles de un ejercicio.
- **CreateRoutine**: Página para crear una nueva rutina de ejercicios.
- **Contact**: Página de contacto.

## Estilos
Los estilos de la aplicación están organizados en varios archivos CSS dentro del directorio `assets`. Esto permite una fácil gestión y mantenimiento de los estilos.

## Ejecución del Proyecto
Para ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta el servidor de desarrollo con `npm run dev`.

## Contribución
Si deseas contribuir al proyecto, por favor sigue las guías de contribución y asegúrate de probar tus cambios antes de enviar un pull request.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
