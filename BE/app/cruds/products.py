from sqlalchemy.orm import selectinload, Session
from sqlalchemy.exc import SQLAlchemyError
from app.models import Product, Category
from fastapi import HTTPException


async def get_products(db: Session):
  try:
    products = db.query(Product).options(selectinload(Product.category)).all()
    print(products)
    return products
    
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")
  

async def get_distinct_years_models_brands(db: Session):
  try:
    results = db.query(
      Product.year, Product.model, Product.brand
      ).distinct().all()
  
    return results

  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")
  

def get_distinct_years(db: Session):
  try:
    results = db.query(Product.year).distinct().all()
    return results

  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")
  

def get_brands_by_year(db: Session, year: int):
  try:
    results = db.query(Product.year).filter(Product.year == year).all()
    return results

  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")
  

async def get_product_by_id(productId: int, db: Session):
  try:
    products = db.query(Product).filter(Product.id == productId).all()
    return products
    
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")


async def get_products_by_categories(productId: int, categories: str, db: Session):
  try:
    products = db.query(Product).filter(Product.id == productId).first()
    return products
    
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")


async def search_products(db: Session, brand: str = None, model: str = None, year: int = None, main_category_name: str = None):
  try:
    query = db.query(Product)

    if main_category_name:
      main_category = (
        db.query(Category)
        .filter(Category.name == main_category_name)
        .filter(Category.parent_id.is_(None))
        .first()
      )
          
      if not main_category:
        raise HTTPException(status_code=404, detail="Main category not found")
          
      query = query.join(Product.subcategory).filter(Category.id == main_category.id)

    if brand:
      query = query.filter(Product.brand == brand)

    if model:
      query = query.filter(Product.model == model)

    if year:
      query = query.filter(Product.year == year)

    products = query.all()

    if not products:
      raise HTTPException(status_code=404, detail="No products found matching the criteria")

    return products

  except SQLAlchemyError as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")


async def get_products_by_category_and_subcategory(productId: int, categoryName: str, db: Session):
  try:
    product = (
      db.query(Product)
      .join(Product.subcategory)
      .filter(Product.id == productId)
      .filter(
        (Category.name == categoryName) |
        (Category.parent.has(name=categoryName))
      )
      .first()
    )
        
    if not product:
      raise HTTPException(status_code=404, detail="Product not found in the specified category or subcategory")
      
    return product

  except SQLAlchemyError as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")