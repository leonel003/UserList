para ejecutar el programa se debe:
-iniciar el server del backend por consola: npm start.
-iniciar el server del lado del frontend en una nueva consola y repetir el comando: npm start.
-el server del backend:
  -se inicia en el puerto 4000.
  -'/': los usuarios que se agregan desde el fron end son creados, guardados y listados

-el server del frontend:
  -se inicia en el puerto 3000.
  -tiene 2 url:
    -'/': por defecto, muestra el login(incompleto, ya que solo es la vista, no se conecta con el backend)
    -'/createuser': contiene el formulario para cargar nombres de usuario y los lita, se conecta con el backend.
