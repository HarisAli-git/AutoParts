import os

class CRUDErrorMessages:
  CREATE_ERROR = "An error occurred while creating item"
  FETCH_ERROR = "An error occurred while fetching items"
  UPDATE_ERROR = "An error occurred while updating item"
  DELETE_ERROR = "An error occurred while deleting item"

class BadRequestErrors:
  USER_NOT_FOUND = "User Not Found"
  PROJECT_NOT_FOUND = "Product Not Found"
  INTERNAL_SERVER_ERROR = "Internal Server Error"
  INSUFFICIENT_CREDITS = "User does not have enough credits" 