from app.cruds import get_distinct_years_models_brands, get_main_categories
from app.schemas import SelectOptionsResponse
from sqlalchemy.orm import Session
from fastapi import HTTPException


async def get_search_options(db: Session):
  try:
    years, models, brands, main_categories = set(), set(), set(), set()

        # Retrieve distinct years, models, and brands
    result = await get_distinct_years_models_brands(db)
    for year, model, brand in result:
        years.add(year)
        models.add(model)
        brands.add(brand)

    # Retrieve distinct main categories
    result = await get_main_categories(db)

    for category in result:
       main_categories.add(category.name)

    print(f"main_categories, {main_categories}")

    # Create and return SelectOptionsResponse directly
    return SelectOptionsResponse(
        year=list(years),
        model=list(models),
        brand=list(brands),
        main_category=list(main_categories)
    )
    
  except Exception as e:
    print(f"An error occurred: {str(e)}")
    raise HTTPException(status_code=500, detail="Internal Server Error")