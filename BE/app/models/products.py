from sqlalchemy import Column, Integer, String, Text, DECIMAL, ForeignKey, TIMESTAMP, create_engine
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base

class Product(Base):
  __tablename__ = 'products'

  id = Column(Integer, primary_key=True, index=True)
  name = Column(String(255), nullable=False)
  sku = Column(String(100), unique=True)
  description = Column(Text)
  price = Column(DECIMAL(10, 2))
  stock_quantity = Column(Integer, default=0)
  category_id = Column(Integer, ForeignKey('categories.id'))
  subcategory_id = Column(Integer, ForeignKey('categories.id'))  # Use a self-reference

  brand = Column(String(100))
  model = Column(String(100))
  year = Column(Integer)
  image_url = Column(String(255))
  created_at = Column(TIMESTAMP, server_default=func.now())
  updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())

  # Relationships
  category = relationship('Category', foreign_keys=[category_id], back_populates='products')
  subcategory = relationship('Category', foreign_keys=[subcategory_id], back_populates='subcategory_products')

  def __repr__(self):
    return (f"<Product(id={self.id}, name='{self.name}', sku='{self.sku}', price={self.price}, "
            f"stock_quantity={self.stock_quantity}, subcategory_id={self.subcategory_id}, brand={self.brand}, "
            f"model='{self.model}', year={self.year})>")
