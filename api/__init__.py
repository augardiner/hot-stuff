from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

# init app
app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
CORS(app)

# database
# dbEndpoint = os.environ['PG_ENDPOINT']
# dbUser = os.environ['PG_USER']
# dbPass = os.environ['PG_PASS']
# dbName = os.environ['PG_NAME']
# dbURL = f'postgresql://{dbUser}:{dbPass}@{dbEndpoint}/{dbName}'
dbURL = f'postgresql://postgres:postgres@localhost/alexgardiner'

app.config['SQLALCHEMY_DATABASE_URI'] = dbURL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# initialize db and ma
db = SQLAlchemy(app)
ma = Marshmallow(app)

from api import routes
