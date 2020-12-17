para ejecutar el programa se debe:
-iniciar el server del backend por consola: npm start.
-iniciar el server del lado del frontend en una nueva consola y repetir el comando: npm start.
-server del backend:
  -se inicia en el puerto 4000.
  -'/': los usuarios que se agregan desde el fron end son creados, guardados y listados.
  -funcionamiento:
    -index.js: ejecuta el servidor y la conexion a la base de datos.
    -app.js: declaracion del servidor y configuraciones del mismo.
    -rutes.js: establece cada ruta del server y la funcion que se ejecuta al ir a cada ruta.
    -dbConnection.js: declara la base de datos y la configuracion de la misma.
    -userModel.js: declara la estructura que tendra cada dato de la base de datos.
    -userMondel.controller.js: es el controlador de userModel.js, en este se establece cada metodo que se ejecutara al dirigirse a        unaruta. 

-server del frontend:
  -se inicia en el puerto 3000.
  -tiene 2 url:
    -'/': por defecto, muestra el login(incompleto, ya que solo es la vista, no se conecta con el backend).
    -'/createuser': contiene el formulario para cargar nombres de usuario y los lita, se conecta con el backend.
    -componentes react:
      -login.js: componente que simularia el login de un admin, no fue terminado.
      -UserCard.js: contiente el formulario y cada vez que se agrega un usuario, este se conecta con el backend y crea un nuevo             usuario. Este componente tambien lista los usuarios creados en la base de daros
