from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

dbURL = f'postgresql://postgres:postgres@192.168.80.2:5432/db'

app.config['SQLALCHEMY_DATABASE_URI'] = dbURL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

def option_todo(id): 
  return '', 204 
 
app.add_url_rule('/', view_func=option_todo, provide_automatic_options=False, methods=['OPTIONS']) 
app.add_url_rule(r'/api/week', view_func=option_todo, provide_automatic_options=False, methods=['OPTIONS']) 
app.add_url_rule(r'/api/analysis', view_func=option_todo, provide_automatic_options=False, methods=['OPTIONS']) 

@app.after_request
def after_request(response):
  response.headers['Access-Control-Allow-Methods']='*'
  response.headers['Access-Control-Allow-Origin']='*'
  response.headers['Vary']='Origin'
  return response

db = SQLAlchemy(app)
ma = Marshmallow(app)

from api import routes
