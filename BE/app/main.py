from dotenv import load_dotenv
import uvicorn
import os

load_dotenv()

PORT = os.getenv("PORT")

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=int(PORT or 8000), reload=True)