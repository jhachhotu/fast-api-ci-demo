from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import SessionLocal
from app.auth.dependencies import get_current_user, require_role
from app.models.user import User
from app.queue.service import join_queue, get_current_serving, get_user_token, serve_next

router = APIRouter(prefix="/queue", tags=["Queue"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 🟢 USER: Join queue
@router.post("/join")
def join(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    token = join_queue(db, current_user.id)
    return {
        "token_number": token.token_number,
        "status": token.status
    }


# 🟢 USER: Check status
@router.get("/status")
def status(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    current = get_current_serving(db)
    user_token = get_user_token(db, current_user.id)

    return {
        "current_token": current.token_number if current else None,
        "your_token": user_token.token_number if user_token else None,
        "status": user_token.status if user_token else None
    }


# 🔵 STAFF: Serve next token
@router.post("/next")
def next_token(
    db: Session = Depends(get_db),
    staff: User = Depends(require_role("staff"))
):
    token = serve_next(db)
    if not token:
        return {"message": "No tokens in queue"}
    return {"serving_token": token.token_number}
