from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class Category(Base):
  __tablename__ = 'categories'
  id = Column(Integer, primary_key=True, index=True)
  name = Column(String(255), unique=True, index=True, nullable=False)
  parent = relationship('Category', remote_side=[id], backref='subcategories')
  parent_id = Column(Integer, ForeignKey('categories.id', ondelete='CASCADE'), nullable=True)

  def __repr__(self):
      return (f"<Categories(id={self.id}, name='{self.name}', "f"parent_id='{self.parent_id}")