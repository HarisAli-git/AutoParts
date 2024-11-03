from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class ProductResponse(BaseModel):
  id: int
  sku: str
  year: int
  model: str
  name: str
  brand: str
  price: float
  image_url: str
  category_id: int
  description: str
  stock_quantity: int
  subcategory_id: int
  created_at: datetime
  updated_at: datetime

class ProductSearch(BaseModel):
  year: Optional[int] = None,
  brand: Optional[str] = None,
  model: Optional[str] = None,
  sub_category_name: Optional[str] = None,
  main_category_name: Optional[str] = None,