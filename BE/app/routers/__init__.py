from .products import products as products_router
from .users import users as users_router
from fastapi import APIRouter

router = APIRouter()

router.include_router(products_router, prefix="/users", tags=["users"])
router.include_router(products_router, prefix="/products", tags=["products"])