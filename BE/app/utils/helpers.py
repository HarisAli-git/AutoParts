from datetime import datetime
import bleach
import re

ALLOWED_TAGS = []
ALLOWED_ATTRIBUTES = {}

def convert_unix_to_timestamp(unix_timestamp):
  try:
    timestamp = datetime.fromtimestamp(int(unix_timestamp))
    return timestamp.strftime('%Y-%m-%d %H:%M:%S')
  
  except ValueError:
    return "Invalid timestamp"
    

def sanitize_html(input_str: str) -> str:
  """
  Sanitize HTML by removing or escaping unwanted tags and attributes.
  """
  return bleach.clean(input_str, tags=ALLOWED_TAGS, attributes=ALLOWED_ATTRIBUTES)


def sanitize_sql_input(input_str: str) -> str:
  """
  Sanitize SQL input by escaping special characters or rejecting suspicious patterns.
  """
  sql_injection_pattern = re.compile(r"('|\"|;|--|/\*|\*/|xp_|union|select|insert|delete|update|alter|drop)", re.IGNORECASE)
  if sql_injection_pattern.search(input_str):
    raise ValueError("Potential SQL injection detected.")
  return input_str