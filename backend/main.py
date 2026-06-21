from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    query: str

@app.get("/")
def home():
    return {"message": "ValkeyMind Backend Running"}

@app.post("/translate")
def translate(data: QueryRequest):
    return {
        "user_query": data.query,
        "sql": "SELECT * FROM users WHERE id=1",
        "valkey_command": "HGETALL users:1"
    }