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
### create models inside models.py
- $>python3 manage.py makemigrations
### sqlmigrate
- python3 manage.py sqlmigrate blog 0001
- python3 manage.py migrate
### sql query
- $>python3 manage.py shell 
```
# Use exit() or Ctrl-D (i.e. EOF) to exit
```
### add models to admin.py
### run project
- python3 manage.py runserver