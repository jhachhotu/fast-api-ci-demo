from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
   {"message": "FastAPI CD is working"}

