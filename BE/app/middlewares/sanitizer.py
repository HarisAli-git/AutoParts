from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse
from fastapi import Request, HTTPException
import json

class InputSanitizerMiddleware(BaseHTTPMiddleware):
  async def dispatch(self, request: Request, call_next):
    """
    Middleware to sanitize all request body dynamically.
    """
    from app.utils import sanitize_html, sanitize_sql_input

    bypass_routes = ["/services/stripe/webhook"]
      
    if request.url.path in bypass_routes:
      return await call_next(request)
    
    if request.method in ["POST", "PUT", "PATCH", "DELETE"]:
      body = await request.body()
      
      if not body:
        return await call_next(request)
      
      try:
        json_body = json.loads(body)
        sanitized_body = {}
        
        for key, value in json_body.items():
          if isinstance(value, str):
            sanitized_value = sanitize_html(value)
            sanitized_value = sanitize_sql_input(sanitized_value)
            sanitized_body[key] = sanitized_value
            
          else:
            sanitized_body[key] = value

        sanitized_body_str = json.dumps(sanitized_body)

        request._body = sanitized_body_str.encode("utf-8")

      except (json.JSONDecodeError, ValueError):
        raise HTTPException(status_code=400, detail="Invalid request body detected")

    response = await call_next(request)
    return response


class QuerySanitizerMiddleware(BaseHTTPMiddleware):
  async def dispatch(self, request: Request, call_next):
    """
    Middleware to sanitize all query parameters dynamically.
    """
    from app.utils import sanitize_html, sanitize_sql_input

    bypass_routes = ["/services/stripe/webhook"]
      
    if request.url.path in bypass_routes:
        return await call_next(request)
    
    query_params = request.query_params._dict
    sanitized_params = {}

    for key, value in query_params.items():
      if isinstance(value, str):
        try:
          sanitized_value = sanitize_html(value)
          sanitized_value = sanitize_sql_input(sanitized_value)
          sanitized_params[key] = sanitized_value

        except ValueError:
          sanitized_params[key] = "INVALID"

    if "INVALID" in sanitized_params.values():
      raise HTTPException(status_code=400, detail="Invalid query parameters detected")

    request._query_params = request.query_params.__class__(sanitized_params)

    response = await call_next(request)
    return response