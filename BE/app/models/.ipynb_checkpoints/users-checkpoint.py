from sqlalchemy import Column, Integer, String, DateTime
from app.database import Base

class User(Base):
    __tablename__ = 'users'
    full_name = Column(String(55), nullable=False)
    token_expiry = Column(DateTime, nullable=False)
    photo_url = Column(String(255), nullable=False)
    id = Column(Integer, primary_key=True, index=True)
    token = Column(String(3555), unique=True, nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)

    def __repr__(self):
        return (f"<User(id={self.id}, full_name='{self.full_name}', 
        "f"email='{self.email}', token={self.token}, "f"token_expiry={self.token_expiry})>")