from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.queue import QueueToken


def get_next_token_number(db: Session) -> int:
    last_token = db.query(func.max(QueueToken.token_number)).scalar()
    return 1 if last_token is None else last_token + 1


def join_queue(db: Session, user_id: int):
    token_number = get_next_token_number(db)

    token = QueueToken(
        token_number=token_number,
        user_id=user_id,
        status="waiting"
    )

    db.add(token)
    db.commit()
    db.refresh(token)
    return token


def get_current_serving(db: Session):
    return (
        db.query(QueueToken)
        .filter(QueueToken.status == "serving")
        .order_by(QueueToken.token_number)
        .first()
    )


def get_user_token(db: Session, user_id: int):
    return (
        db.query(QueueToken)
        .filter(
            QueueToken.user_id == user_id,
            QueueToken.status.in_(["waiting", "serving"])
        )
        .order_by(QueueToken.token_number)
        .first()
    )


def serve_next(db: Session):
    current = get_current_serving(db)
    if current:
        current.status = "done"

    next_token = (
        db.query(QueueToken)
        .filter(QueueToken.status == "waiting")
        .order_by(QueueToken.token_number)
        .first()
    )

    if next_token:
        next_token.status = "serving"

    db.commit()
    return next_token
