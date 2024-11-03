from pydantic import BaseModel
from typing import List

class SelectOptionsResponse(BaseModel):
  year: List[int]
  model: List[str]
  brand: List[str]
  main_category: List[str]