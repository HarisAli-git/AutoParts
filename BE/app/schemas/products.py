from pydantic import BaseModel
from datetime import datetime


class ProductResponse(BaseModel):
  id: int
  sku: str
  year: int
  model: str
  name: str
  brand: str
  price: float
  user_id: int
  image_url: str
  category_id: int
  description: str
  stock_quantity: int
  subcategory_id: int
  created_at: datetime
  updated_at: datetime