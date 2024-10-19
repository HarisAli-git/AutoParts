from fastapi import APIRouter, Depends, HTTPException
from app.services import authentication as auth_services
from app.cruds import users as users_crud
from fastapi.security import HTTPBearer
from app.utils import get_current_user
from app.schemas import LoginRequest
from app.dependencies import get_db
from sqlalchemy.orm import Session

oauth2_scheme = HTTPBearer()
router = APIRouter()

@router.get("/{email}")
async def verify(email: str, token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
  try:
    resp = await auth_services.verify(email, token, db)
    return resp
  
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="An error occurred while fetching items.")

@router.post("")
async def login(user: LoginRequest, db: Session = Depends(get_db)):
  try:
    resp = await auth_services.login(
      user.email, 
      user.token, 
      user.photo_url, 
      user.full_name, 
      db
    )
    return resp
  
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="An error occurred while fetching items.")
  
