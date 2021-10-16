# ChildrenKnow
 Website for courses for children, django + vue2.
 
# Running the server
Creating a virtual environment python
 > python -m venv env
 
 Use the command (for Linux) to activate the virtual environment:

 > source PRG1/bin/activate

 For Windows the command will look like this

 > env/Scripts/activate.bat
 > pip3 install -r bakend/requirements.txt (There is no such file yet)

 Migrating to the database
 > python manage.py makemigrations 
 > python manage.py migrate        
 > python manage.py runserver

# Running the client
 > npm --prefix frontend install
 > npm --prefix frontend run build
 > npm --prefix frontend run server

Project in development
