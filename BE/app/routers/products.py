from fastapi import APIRouter, Depends, HTTPException
from app.cruds import products as products_crud
from app.schemas import ProductResponse
from app.utils import CRUDErrorMessages
from app.dependencies import get_db
from sqlalchemy.orm import Session
from typing import List

router = APIRouter()

@router.get("/{product_id}", response_model=List[ProductResponse])
async def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
  try:
    products = await products_crud.get_product_by_id(product_id, db)
    return products
  
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail=CRUDErrorMessages.FETCH_ERROR)

@router.get("/{category_id}", response_model=List[ProductResponse])
async def get_product_by_category_id(category_id: int, db: Session = Depends(get_db)):
  try:
    products = await products_crud.get_product_by_category_id(category_id, db)
    return products
  
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail=CRUDErrorMessages.FETCH_ERROR)

@router.get("/search?{category_id}&{model}&{year}&{main_category_name}", response_model=List[ProductResponse])
async def get_product_by_category_id(brand: str = None, model: str = None, year: int = None, main_category_name: str = None, db: Session = Depends(get_db)):
  try:
    products = await products_crud.search_products(brand, model, year, main_category_name, db)
    return products
  
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail=CRUDErrorMessages.FETCH_ERROR)