from sqlalchemy.orm import Session
from .database import SessionLocal
from fastapi import Depends
import stripe
import boto3
import os

# stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

# def get_stripe_client():
#   """Provides a single Stripe client instance to be used across different services."""
#   return stripe

def get_db():
  db = SessionLocal()
  try:
    yield db
    
  finally:
    db.close()