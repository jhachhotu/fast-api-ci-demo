from fastapi import FastAPI
from app.database.session import engine
from app.database.base import Base
from app.models import user, queue
from app.auth.routes import router as auth_router
from app.users.routes import router as users_router
from app.queue.routes import router as queue_router
app = FastAPI(title="Smart Queue Management System")

Base.metadata.create_all(bind=engine)

app.include_router(auth_router)
app.include_router(users_router)
app.include_router(queue_router)


@app.get("/")
def root():
    return {"message": "Smart Queue Backend Running"}
