FROM python:3.7

WORKDIR /usr/src/server
ADD requirements.txt .
RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]