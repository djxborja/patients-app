# patients-app
Esta aplicación muestra una lista de pacientes y proporciona información detallada de cada paciente.

La aplicación funcionando la podéis encontrar aquí:

https://djxborja.github.io/patients-app/

## Preparación del entorno de trabajo

Para el desarrollo se ha usado un contenedor Docker con una versión ligera de node y angular 16.2.4.
Se han creado los archivos necesarios en la raiz del proyecto. Siguiendo las buenas prácticas la variable que apunta al volumen del host es parametrizable por cada usuario y no accesible en el repositorio público.
Se ha de crear un archivo .env en el mismo directorio que el archivo docker-compose con la ruta donde el usuario especifica la ruta en la cuál tendrá acceso al proyecto en su equipo:

<code>VOLUME_PATH=ruta_proyecto</code>

