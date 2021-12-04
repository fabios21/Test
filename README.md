# Test Full Stack

Este proyecto fue creado con React, Node y PostgreSQL.

## *Pasos para ejecutar el proyecto


## Clonar este repositorio

Enlace para clonar [https://github.com/fabios21/Test.git](https://github.com/fabios21/Test.git)

## Instalar dependencias

En la carpeta "api" ejecutar `npm i`.\
En la carpeta "client" ejecutar `npm i`.

## Crear base de datos e importar datos (PostgreSQL)


### -Crear base de datos en PostgreSQL (Con el nombre de su preferencia)



### -Cargar información (Hay dos opciones, elija la de su preferencia)

#### N° 1 Agregar información por código 
1) Crear tabla
    `CREATE TABLE users ( id SERIAL PRIMARY KEY, img TEXT, name VARCHAR(40), test VARCHAR(40), date VARCHAR(40), amount VARCHAR(40), age VARCHAR(40), status VARCHAR(40), action VARCHAR(40));`
    
2) Agregar información
    `INSERT INTO users (img, name, test, date, amount, age, status, action) VALUES ('http://1.bp.blogspot.com/-uUhIFpoCfFQ/UznL2o99LyI/AAAAAAAAPCc/oL7mirrs3vI/s1600/fotografia-cara-mujer-joven-rostro.jpg', 'Quang Huy', 'SAT', 'Counseling', '$4000', '1 week ago', 'Draft', 'Edit plan'), ('https://blog.hubspot.es/hubfs/mejoresbancosdeimagenesnegativespace.jpeg', 'Huy Tran', 'TOEFL', 'September 2020', '$4000', '4 days ago', 'Draft', 'Edit plan'), ('https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg', 'Cristian Ferrari', 'SAT', 'September 2020', '$4000', '6 hours ago', 'Pending', 'Send reminder'), ('http://1.bp.blogspot.com/-DLEzvn7DmE0/UV3JNoevsbI/AAAAAAAAJXk/aUnoV0oATS0/s1600/hombre-rostro-fotografia-sin-derechos-autor.jpg', 'Luca Nicolas', 'SAT', 'December 2020', '$4000', '3 days ago', 'Pending', 'Send reminder'), ('https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-hombre-sonriendo.jpg?resize=500%2C500&ssl=1', 'John Carraha', 'ACT', 'September 2020', '$4000', '5 min ago', 'Pending', 'Send reminder'), ('http://4.bp.blogspot.com/-vrsBj3YssoM/VO5R0Q0PL3I/AAAAAAAASBM/IcOF9VmaAKA/s1600/retrato-hombre-joven-peque%C3%B1o-rostro-sin-copyright.jpg', 'Nicolas Martignone', 'ACT', 'September 2020', '$4000', '2 days ago', 'Pending', 'Send reminder'), ('https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/hombre-maduro-guapo.jpg?resize=500%2C500&ssl=1', 'Felix Tran', 'TOEFL', 'Octuber 2020', '$4000', '50% (16/32)', 'In progress', 'View plan'), ('http://1.bp.blogspot.com/-uUhIFpoCfFQ/UznL2o99LyI/AAAAAAAAPCc/oL7mirrs3vI/s1600/fotografia-cara-mujer-joven-rostro.jpg', 'Quang Huy', 'SAT', 'Counseling', '$4000', '1 week ago', 'In progress', 'View plan'), ('https://blog.hubspot.es/hubfs/mejoresbancosdeimagenesnegativespace.jpeg', 'Huy Tran', 'TOEFL', 'September 2020', '$4000', '4 days ago', 'In progress', 'View plan'), ('https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg', 'Cristian Ferrari', 'SAT', 'September 2020', '$4000', '6 hours ago', 'In progress', 'View plan'), ('http://1.bp.blogspot.com/-DLEzvn7DmE0/UV3JNoevsbI/AAAAAAAAJXk/aUnoV0oATS0/s1600/hombre-rostro-fotografia-sin-derechos-autor.jpg', 'Luca Nicolas', 'SAT', 'December 2020', '$4000', '3 days ago', 'In progress', 'View plan'), ('https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-hombre-sonriendo.jpg?resize=500%2C500&ssl=1', 'John Carraha', 'ACT', 'September 2020', '$4000', '5 min ago', 'In progress', 'View plan'), ('http://4.bp.blogspot.com/-vrsBj3YssoM/VO5R0Q0PL3I/AAAAAAAASBM/IcOF9VmaAKA/s1600/retrato-hombre-joven-peque%C3%B1o-rostro-sin-copyright.jpg', 'Nicolas Martignone', 'ACT', 'September 2020', '$4000', '2 days ago', 'In progress', 'View plan'), ('https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/hombre-maduro-guapo.jpg?resize=500%2C500&ssl=1', 'Felix Tran', 'TOEFL', 'Octuber 2020', '$4000', '50% (16/32)', 'Completed', 'View plan');`

#### N° 2 Agregar información desde pgAdmin
Carpeta con base de datos [https://drive.google.com/drive/folders/1lkMoFG0_iEI0K_IlW1QrSbMojDbO0QpA?usp=sharing](https://drive.google.com/drive/folders/1lkMoFG0_iEI0K_IlW1QrSbMojDbO0QpA?usp=sharing)

1) En pgAdmin, click derecho a base de datos/ Restore/ 
2) Format: Directory
3) Filename: -Seleccione la carpeta "Backup Test Full Stack"-
4) Click en Restore

## Credenciales PostgresSQL 

En el archivo "api/src/controllers/index.controllers.js" en la linea 3, agregar la información de cuenta de PostgreSQL y el nombre de la base de datos creada por usted.

## Iniciar el servidor

Ejecute `npm run dev`

## Iniciar la interfaz

Ejecute `npm start`

![alt text](https://github.com/fabios21/Test/blob/main/client/public/ImgTest.png?raw=true)
