from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import example_router  # Import your routers here

app = FastAPI()

# CORS middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI backend!"}

# Include your routers
app.include_router(example_router)  # Replace with your actual router

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)