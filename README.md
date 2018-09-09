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

To run server by host and port specification :- ng serve --host 0.0.0.0 –port 4205



==================2. backend==================
Pre-Requisite :- 
1. Python 3.5 should be installed
2. virtualenv should be installed

We need to create virtual environment

How to create virutal environment :- virtualenv poc_virtual_env

Activate created virutal environment :- source poc_virtual_env/bin/activate 

switch to backend directory :- cd backend/
