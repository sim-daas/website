from fastapi import FastAPI, Form, Query, HTTPException, Depends
from pymongo import MongoClient
from pydantic import BaseModel, EmailStr
import os
from datetime import datetime
from typing import Optional
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from any IP address or domain
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# MongoDB client setup (replace with your MongoDB URI)
MONGO_URI = os.getenv('MONGO_URI')
client = MongoClient(MONGO_URI)
db = client["your_database"]
user = db["user_data"]



class User(BaseModel):
    name: str
    username: str
    password: str
    Calculus: int
    Optimization_Techniques: int
    Quantum_Mechanics: int
    OOPs: int
    Signals_and_Systems: int
    Intro_to_AI_and_ML: int
    Introduction_to_IoT: int
    Design_and_Prototyping: int
    Communication_Strategies: int
    _3D_Printing: int
    Management_of_Wealth: int

@app.get("/get_user", response_model=User)
def get_user(name: str, pswd: str):
    user_data = user.find_one({"name": name,"password": pswd}, {"_id": 0})
    if not user_data:
        raise HTTPException(status_code=404, detail="User not found")
    return user_data






@app.post("/update_user", response_model=User)
def update_user(name: str, pswd: str, updated_data: User):
    user_data = user.find_one({"name": name, "password": pswd})
    if not user_data:
        raise HTTPException(status_code=404, detail="User not found")

    # Prepare the update payload
    updated_payload = updated_data.dict(exclude_unset=True)

    # Update the user data in MongoDB
    result = user.update_one(
        {"name": name, "password": pswd},
        {"$set": updated_payload}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="User not found for update")
    
    # Fetch and return the updated user data
    updated_user_data = user.find_one({"name": name, "password": pswd}, {"_id": 0})
    return updated_user_data
