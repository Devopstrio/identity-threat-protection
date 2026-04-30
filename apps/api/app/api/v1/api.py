from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, policies, risk, protection, response, sessions, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(policies.router, prefix="/policies", tags=["policies"])
api_router.include_router(risk.router, prefix="/risk", tags=["risk"])
api_router.include_router(protection.router, prefix="/protection", tags=["protection"])
api_router.include_router(response.router, prefix="/response", tags=["response"])
api_router.include_router(sessions.router, prefix="/sessions", tags=["sessions"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
