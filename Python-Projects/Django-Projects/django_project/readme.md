### install python3 
- $>python3 --version 
### install pip3 
- $>pip3 --version 
### install diango 
- $>pip3 install diango 
- $>django-admin 
### create startproject
- $>django-admin startproject django_project 
- $>cd django_project/
### run project
- python3 manage.py runserver

### install more apps under one project
```
more apps share one project, use same manage.py
```
- $>python3 manage.py startapp blog
- settings.py
```
INSTALLED_APPS = [
    'blog.apps.BlogConfig',
]
```
- $>python3 manage.py makemigrations
### migrate DB
- $>python3 manage.py migrate
### createsuperuser
- $>python3 manage.py createsuperuser
### xing/uw..09