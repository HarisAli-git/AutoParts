from sqlalchemy import Column, Integer, String, Text, DECIMAL, ForeignKey, TIMESTAMP, create_engine
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Product(Base):
  __tablename__ = 'products'

  year = Column(Integer, nullable=True)
  name = Column(String(255), nullable=False)
  description = Column(Text, nullable=True)
  price = Column(DECIMAL(10, 2), nullable=False)
  stock_quantity = Column(Integer, default=0)
  brand = Column(String(100), nullable=True)
  model = Column(String(100), nullable=True)
  sku = Column(String(100), unique=True, nullable=False)
  id = Column(Integer, primary_key=True, autoincrement=True)
  image_url = Column(String(255), nullable=True)
  subcategory = relationship('Category', backref='products')
  created_at = Column(TIMESTAMP, default=datetime.utcnow, nullable=False)
  subcategory_id = Column(Integer, ForeignKey('categories.id'), nullable=False)
  updated_at = Column(TIMESTAMP, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)


  def __repr__(self):
    return (f"<Product(id={self.id}, name='{self.name}', sku='{self.sku}', price={self.price}, "
            f"stock_quantity={self.stock_quantity}, subcategory_id={self.subcategory_id}, brand={self.brand}, "
            f"model='{self.model}', year={self.year})>")

