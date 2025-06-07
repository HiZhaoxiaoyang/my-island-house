FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Install system dependencies (now includes pkg-config)
RUN apt-get update && \
    apt-get install -y gcc python3-dev libmariadb-dev pkg-config && \
    rm -rf /var/lib/apt/lists/*

# Copy the application code
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Command to run the application
CMD ["python", "app.py"]