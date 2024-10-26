from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .products import Product
from app.database import Base

class Category(Base):
  __tablename__ = 'categories'
  
  id = Column(Integer, primary_key=True, index=True)
  name = Column(String(255), nullable=False)
  parent_id = Column(Integer, ForeignKey('categories.id', ondelete="CASCADE"), nullable=True)

  # Self-referencing relationship for subcategories
  subcategories = relationship('Category', backref='parent', remote_side=[id])

  # Products that belong to this category
  products = relationship('Product', foreign_keys=[Product.category_id], back_populates='category')
  subcategory_products = relationship('Product', foreign_keys=[Product.subcategory_id], back_populates='subcategory')

  def __repr__(self):
    return f"<Category(id={self.id}, name='{self.name}', parent_id={self.parent_id})>"