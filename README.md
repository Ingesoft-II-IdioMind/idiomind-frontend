

# IdioMind



IdioMind es una plataforma de aprendizaje de idiomas que ayuda a los usuarios a mejorar sus habilidades lingüísticas en inglés, italiano, alemán y francés. La aplicación ofrece una experiencia integrada con herramientas avanzadas para la traducción en tiempo real, la creación de flashcards, la toma de notas y una variedad de ejercicios de gramática y fonética.

Tabla de Contenidos
Características
Tecnologías Utilizadas
Requerimientos del Sistema
Instalación
Uso
Contribuciones
Licencia
# Características
Traducción en tiempo real de palabras y frases dentro de documentos.
Creación de flashcards personalizadas.
Toma de notas en documentos.
Ejercicios de gramática y fonética.
Biblioteca personal de documentos.
Blog educativo con artículos y recursos.
Planes de suscripción con características premium.
# Tecnologías Utilizadas
Frontend
Next.js: Framework de React para aplicaciones web.
TypeScript: Lenguaje de programación que extiende JavaScript.
SCSS: Preprocesador CSS.
Vercel: Plataforma para desplegar aplicaciones Next.js.
Redux: Biblioteca para el manejo del estado de la aplicación.
Fontawesome: Biblioteca de iconos vectoriales.
React-pdf: Herramienta para visualizar documentos PDF en aplicaciones React.
Zod: Biblioteca para la validación de esquemas.
react-toastify: Biblioteca para mostrar notificaciones.
Backend
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express.js: Framework para aplicaciones web en Node.js.
MongoDB: Base de datos NoSQL.
Control de Versiones
Git: Sistema de control de versiones.
GitHub: Plataforma para alojar repositorios Git.
Requerimientos del Sistema
Requerimientos de Hardware
Servidor: Dispositivo con capacidad de correr el proyecto de forma local.
Cliente: Dispositivo con conexión a internet, navegador moderno (Chrome, Firefox, Safari, Edge).
Requerimientos de Software
Servidor: Node.js, MongoDB, Docker (opcional para despliegue).
Cliente: Navegador web compatible con HTML5 y JavaScript.
Instalación
Clonar el Repositorio

sh
Copiar código
git clone https://github.com/tu_usuario/idiomind.git
cd idiomind
Instalar Dependencias

Frontend
sh
Copiar código
cd idiomind-frontend
npm install
Backend
sh
Copiar código
cd ../idiomind-backend
npm install
Configurar Variables de Entorno

Crear un archivo .env en ambos directorios (idiomind-frontend y idiomind-backend) y configurar las variables necesarias. Ejemplo:

sh
Copiar código
# .env para idiomind-frontend
NEXT_PUBLIC_API_URL=http://localhost:3001

# .env para idiomind-backend
MONGODB_URI=mongodb://localhost:27017/idiomind
JWT_SECRET=your_jwt_secret
Iniciar la Aplicación

Frontend
sh
Copiar código
cd idiomind-frontend
npm run dev
Backend
sh
Copiar código
cd ../idiomind-backend
npm start
Uso
Abrir el navegador y navegar a http://localhost:3000 para acceder a la interfaz de usuario.
Registrarse o iniciar sesión para acceder a todas las funcionalidades.
Explorar las secciones de la plataforma, como la biblioteca de documentos, el creador de flashcards y el blog educativo.
Contribuciones
Las contribuciones son bienvenidas. Para contribuir, sigue estos pasos:

Haz un fork del repositorio.
Crea una rama con una nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).
Realiza los cambios necesarios y haz commits (git commit -m 'Agrega nueva funcionalidad').
Envía los cambios a tu repositorio (git push origin feature/nueva-funcionalidad).
Abre un Pull Request en GitHub.
Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.