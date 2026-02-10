from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
   return {"message": "CD AUTO DEPLOY VERIFIED"}


# cd is working 
