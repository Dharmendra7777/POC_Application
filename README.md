# POC_Application
It gives POC for applicaiton

Steps which I've used to create the POC. Basically I've created 2 directoies
1. frontend :- frontend contains Design of appllication which is using Html, Angular, Css
*mkdir frontend*
2. backend :- backend contains Server side code which is using Django, Django Rest Framework
*mkdir backend*

**1.frontend**

*Pre-Requisite :-*
1. Node Server (8.11.4), npm (5.6.0) should be installed
2. Angular 4, Angular CLI should be installed

To Create new project :- ng new frontend

switch to frontend directory :- cd frontend/

To Compile and run the server (Default port is 4200) :- ng serve

*To Run server by host and port specification :-* ng serve --port 4201

To Create new component :- 

*ng g component user_cmp*
```
CREATE src/app/user-cmp/user-cmp.component.css (0 bytes)
CREATE src/app/user-cmp/user-cmp.component.html (27 bytes)
CREATE src/app/user-cmp/user-cmp.component.spec.ts (636 bytes)
CREATE src/app/user-cmp/user-cmp.component.ts (276 bytes)
UPDATE src/app/app.module.ts (402 bytes)
````

To Create new service :- 
*ng g service user_service*
```
CREATE src/app/user-service.service.spec.ts (405 bytes)
CREATE src/app/user-service.service.ts (140 bytes)
```

Install Bootstrap :- 
*npm install --save bootstrap*

Configurat *bootstrap.min.css* file path in *angular.json* file under the "styles" section :-
```
 "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ]
 ```
 
**How To Test Angular App without backend(server) by using Dummy data sets**

For that We can use *json-server*. *How to install json-server :-*  
```sudo npm install -g json-server (It is listening on Port 3000)```

Create *db.json* file inside any place then swtich to respecite directory and run below command :-
```json-server --watch db.json```

**2. backend**


*Pre-Requisite:-*
1. Python 3.5 should be installed
2. virtualenv should be installed

We need to create virtual environment

How to create virutal environment :- 
```virtualenv poc_virtual_env```

Activate created virutal environment :- 
```source poc_virtual_env/bin/activate ```

switch to backend directory :- cd backend/

create App :- 
```python manage.py startapp user_app```

create migration script :- 
```python manage.py makemigrations user_app```

Migrate model to database :- 
```python manage.py migrate```

**3. Integrate frontend(Angular) with backend(DRF)**

We need to instal python CORS package using below command:-
```pip install django-cors-headers```

Following changes have been made in *settings.py* file

add it to your installed apps:
```
INSTALLED_APPS = (
    ...
    'corsheaders',
    ...
)
```
We will also need to add a middleware class to listen in on responses:
```
MIDDLEWARE = [  # Or MIDDLEWARE_CLASSES on Django < 1.10
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]
```
CorsMiddleware should be placed as high as possible, especially before any middleware that can generate responses such as Django's CommonMiddleware or Whitenoise's WhiteNoiseMiddleware. If it is not before, it will not be able to add the CORS headers to these responses

*add Below flags*
```CORS_ORIGIN_ALLOW_ALL = True```
CORS_ALLOW_CREDENTIALS = False
