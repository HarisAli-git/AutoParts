from app.middlewares import InputSanitizerMiddleware, QuerySanitizerMiddleware
from fastapi.middleware.cors import CORSMiddleware
from app.routers import router as api_router
from .database import engine, Base
from dotenv import load_dotenv
from fastapi import FastAPI
import os

load_dotenv()
app = FastAPI()
DOCS_URL = os.getenv("DOCS_URL")

origins = [
    "http://44.238.15.252",
    "http://localhost:5174",  
    "http://localhost:5173", 
    "http://127.0.0.1:3000",  
    "http://44.238.15.252:8080",
]

app = FastAPI(docs_url=f"/{DOCS_URL}")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(InputSanitizerMiddleware)
app.add_middleware(QuerySanitizerMiddleware)

Base.metadata.create_all(bind=engine)

app.include_router(api_router)

# Root health check route
@app.get("/")
def read_root():
    return {"message": "Welcome to the API"}

# Startup event
@app.on_event("startup")
async def startup_event():
  return {"Hello World!"}