import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
CA_PEM_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "ca.pem")

ssl_args = {
    "ssl": {
        "ca": CA_PEM_PATH
    }
}

Base = declarative_base()
engine = create_engine(DATABASE_URL, connect_args=ssl_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
