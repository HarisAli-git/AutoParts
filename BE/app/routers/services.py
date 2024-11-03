from fastapi import APIRouter, Depends, HTTPException
from app.schemas import SelectOptionsResponse
from app.services import get_search_options
from app.utils import CRUDErrorMessages
from app.dependencies import get_db
from sqlalchemy.orm import Session

router = APIRouter()

@router.get("/options", response_model=SelectOptionsResponse)
async def fetch_search_options(db: Session = Depends(get_db)):
  try:
    searchOptions = await get_search_options(db)
    return searchOptions
  
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail=CRUDErrorMessages.FETCH_ERROR)