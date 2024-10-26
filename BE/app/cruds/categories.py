from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models import Category


async def get_main_categories(db: Session):
  try:
    categories = db.query(Category).filter(Category.parent_id.is_(None)).all()
    return categories
    
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")


async def get_main_categories(db: Session):
  try:
    categories = db.query(Category).filter(Category.parent_id.is_(None)).all()
    return categories
    
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")


async def get_subcategories_by_main_category_name(mainCategoryName: str, db: Session):
  try:
    mainCategory = (
      db.query(Category)
      .filter(Category.name == mainCategoryName)
      .filter(Category.parent_id.is_(None))
      .first()
    )
    
    if not main_category:
      raise HTTPException(status_code=404, detail="Main category not found")

    subcategories = (
      db.query(Category)
      .filter(Category.parent_id == mainCategory.id)
      .all()
    )
    
    if not subcategories:
      raise HTTPException(status_code=404, detail="No subcategories found for the specified main category")

    return subcategories

  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")