# README

## Pasos a seguir para correr la aplicación:

### Gestor y Base de datos

* Primero hay que crear una base de datos cuyo nombre debe ser "db_challenge_delhugo"

* Luego actualizar la contraseña que usted usa en su gestor de bases de datos en el campo corespondiente del archivo dbConfig.js que se encuentra en la ruta back/src/config



### Backend
* Instalar las siguientes dependendias: express, mysql2, cors, dotenv, bcrypt, jsonwebtoken, cookie-parser.
```
 cd back
 npm i express mysql2 cors dotenv bcrypt jsonwebtoken cookie-parser
```   

* Para levantar la DB, desde el repositorio
```
 npm run dev
```   

El mismo código va a crear las dos tablas en la base de datos. Una para el usuario y otra para los players (jugadores). Las tablas no tienen relacion por que no tenia sentido que la tuvieran para el ejercicio (por como lo plantee)

Para crear un usuario hay que usar postman o insomnia, usando el endpoint "Registro de usuario" que esta en la collecion de los endpoint, en el siquiente link:

https://www.postman.com/telecoms-geoscientist-80019073/challenge-santx-delhugo/collection/ib7hfwm/endpoints-challenge-delhugo?action=share&creator=39629328

Una vez cargado el usuario, faltan cargar los players. Use el archivo csv de los jugadores hombres. Lo tuve que modificar eliminando unos cuantos campos y registros para poder trabajar (no me tiraba tantos registros la compu). Pero dejé un archivo csv con todos los registros, eliminando los mismo campos que en el archivo mencionado anteriormente. Ambos archivos estan en la carpeta docs. Los campos que dejé se pueden ver en el modelo de la tabla players.

No me dio el tiempo para que el archivos csv (cualiquiera de los dos que quieran usar) se cargue solo al correr la aplicación. Asi que deberan hacerlo manualmente, disculpas.

En cuanto a seguridad, use bcrypto para hashear las contraseñas. 

### Frontend
* Instalar las siguientes dependendias: xlsx, chart.js, ngx-pagination.
```
 cd front
 npm i xlsx chart.js ngx-pagination
```  
* Para correr la aplicación 
```
ng serve -o
```  

Los formularios validar reactivamente usando reactive forms. Para proteger las paginas use guards que validan el token del local storage. El diseño en css es simple ya que tambien me falto tiempo. Preferi darle prioridad a las funcionalidades.


## Links: 
### A los endpoints en postman
https://www.postman.com/telecoms-geoscientist-80019073/challenge-santx-delhugo/collection/ib7hfwm/endpoints-challenge-delhugo?action=share&creator=39629328

### Figma
https://www.figma.com/design/5BP1XY4Qi1BzI92DFQN9a2/Dise%C3%B1o_SANTEX_Challenge?m=auto&t=hF86weX1D0GKagrE-1