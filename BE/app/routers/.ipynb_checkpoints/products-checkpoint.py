from app.schemas import ProductResponse, UpdateUrlsRequest, UpdateSubUrlRequest
from app.utils import get_current_user, CRUDErrorMessages
from fastapi import APIRouter, Depends, HTTPException
from app.cruds import products as products_crud
from app.dependencies import get_db
from sqlalchemy.orm import Session
from typing import List

router = APIRouter()

@router.get("/{product_id}", response_model=List[ProductResponse], dependencies=[Depends(get_current_user)])
async def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
  try:
    products = await products_crud.get_product_by_id(product_id, db)
    return products
  
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail=CRUDErrorMessages.FETCH_ERROR)

@router.get("/{category_id}", response_model=List[ProductResponse], dependencies=[Depends(get_current_user)])
async def get_product_by_category_id(category_id: int, db: Session = Depends(get_db)):
  try:
    products = await products_crud.get_product_by_category_id(category_id, db)
    return products
  
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail=CRUDErrorMessages.FETCH_ERROR)

@router.get("/search?{category_id}&{model}&{year}&{main_category_name}", response_model=List[ProductResponse], dependencies=[Depends(get_current_user)])
async def get_product_by_category_id(category_id: int, db: Session = Depends(get_db)):
  try:
    products = await products_crud.get_product_by_category_id(category_id, db)
    return products
  
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail=CRUDErrorMessages.FETCH_ERROR)