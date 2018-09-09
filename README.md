# POC_Application
it gives POC for applicaiton

Steps which I've used to create the POC. Basically I've created 2 directoies
1. frontend :- mkdir frontend
frontend contains Design of appllication which is using Html, Angular, Css
2. backend :- mkdir backend
backend contains Server side code which is using Django, Django Rest Framework

==================1. frontend==================
Pre-Requisite :-
1. Node Server (8.11.4), npm (5.6.0) should be installed
2. Angular 4, Angular CLI should be installed

Create new project :- ng new frontend

switch to frontend directory :- cd frontend/

To compile and run the server (Default port is 4200) :- ng serve

To run server by host and port specification :- ng serve --port 4201

To Create new component :- ng g component user_cmp
```
CREATE src/app/user-cmp/user-cmp.component.css (0 bytes)
CREATE src/app/user-cmp/user-cmp.component.html (27 bytes)
CREATE src/app/user-cmp/user-cmp.component.spec.ts (636 bytes)
CREATE src/app/user-cmp/user-cmp.component.ts (276 bytes)
UPDATE src/app/app.module.ts (402 bytes)
````

To Create new service :- ng g service user_service
```
CREATE src/app/user-service.service.spec.ts (405 bytes)
CREATE src/app/user-service.service.ts (140 bytes)
```
Install Bootstrap :- npm install --save bootstrap 

Configurat boostrap-min.css file path in angular.json file under the "styles" section
```
 "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ]
 ```
How To Test Angular App with Dummy data :- We can use json-server

How to install json-server :- sudo npm install -g json-server (It is listening on Port 3000)

Create db.json file inside any place then swtich to respecite directory and run below command :-
json-server --watch db.json

==================2. backend==================
Pre-Requisite :- 
1. Python 3.5 should be installed
2. virtualenv should be installed

We need to create virtual environment

How to create virutal environment :- virtualenv poc_virtual_env

Activate created virutal environment :- source poc_virtual_env/bin/activate 

switch to backend directory :- cd backend/
