from fastapi import FastAPI

app = FastAPI(
    title="MediMind AI API",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {"message": "MediMind AI Backend Running"}