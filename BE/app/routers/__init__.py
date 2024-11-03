from .products import router as products_router
from .services import router as services_router
from fastapi import APIRouter

router = APIRouter()

router.include_router(products_router, prefix="/products", tags=["products"])
router.include_router(services_router, prefix="/services", tags=["services"])