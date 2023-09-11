from sqlalchemy import Column, Integer, String, Boolean, DateTime, Date
from pydantic import BaseModel
from db import Base
from db import ENGINE
from datetime import datetime

# テーブル定義
class TestUserTable(Base):
    __tablename__ = 'test_user'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(30), nullable=False)
    email = Column(String(128), nullable=False)

class companiesTable(Base):
    __tablename__ = 'companies'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(30), nullable=False)
    email = Column(String(128), nullable=False)
    password = Column(String(30), nullable=False)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    is_publisher = Column(Boolean, nullable=False)
    is_advertiser = Column(Boolean, nullable=False)
    is_admin = Column(Boolean, default=False, nullable=False)
    is_working = Column(Boolean, default=True, nullable=False)

class mangaListsTable(Base):
    __tablename__ = 'mangaLists'
    id = Column(Integer, primary_key=True, autoincrement=True)
    company_id = Column(Integer, nullable=False)
    title = Column(String(256), nullable=False)
    author = Column(String(256), nullable=False)
    summary = Column(String(4096), nullable=False)
    volumeone_at = Column(Date, nullable=False)
    volumes = Column(Integer, nullable=False)
    edition = Column(Integer, nullable=False)
    is_serialization = Column(Boolean, nullable=False)
    genre = Column(String(256), nullable=False)
    editor = Column(String(256), nullable=True)
    picture_url = Column(String(512), nullable=True)
    others = Column(String(4096), nullable=True)

# モデル定義 
class TestUser(BaseModel):
    id: int
    name: str
    email: str

class companies(BaseModel):
    id: int
    name: str
    email: str
    password: str
    created_at: datetime
    is_publisher: bool
    is_advertiser: bool
    is_admin: bool
    is_working: bool

class mangaLists(BaseModel):
    id: int
    company_id: int
    title: str
    author: str
    summary: str
    volumeone_at: datetime
    volumes: int
    edition: int
    is_serialization: bool
    genre: str
    editor: str
    picture_url: str
    others: str

def main():
    # テーブル構築
    Base.metadata.create_all(bind=ENGINE)

if __name__ == "__main__":
    main()
