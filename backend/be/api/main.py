from fastapi import FastAPI
from db import session
from model import TestUserTable, TestUser, companiesTable, mangaListsTable

app = FastAPI()

# 全会社・アカウント情報一覧取得
@app.get("/companies")
def get_companies_alllist():
    companies = session.query(companiesTable).all()
    return companies

# 出版社情報一覧取得
@app.get("/companies/publisher")
def get_companies_publisherlist():
    companies_publisher = session.query(companiesTable).\
        filter(companiesTable.is_publisher == True).all()
    return companies_publisher

# 広告社情報一覧取得
@app.get("/companies/advertiser")
def get_companies_advertiserlist():
    companies_advertiser = session.query(companiesTable).\
        filter(companiesTable.is_advertiser == True).all()
    return companies_advertiser

# 管理アカウント情報一覧取得
@app.get("/companies/admin")
def get_companies_adminlist():
    companies_admin = session.query(companiesTable).\
        filter(companiesTable.is_admin == True).all()
    return companies_admin

# 全漫画リスト一覧取得
@app.get("/mangaLists")
def get_mangaLists_alllist():
    mangaLists = session.query(mangaListsTable).all()
    return mangaLists

#  下記はサンプル
#　ユーザー情報一覧取得
@app.get("/test_users")
def get_user_list():
    users = session.query(TestUserTable).all()
    return users

# ユーザー情報取得(id指定)
@app.get("/test_users/{user_id}")
def get_user(user_id: int):
    user = session.query(TestUserTable).\
        filter(TestUserTable.id == user_id).first()
    return user


# ユーザ情報登録
@app.post("/test_users")
def post_user(user: TestUser):
    db_test_user = TestUser(name=user.name,
                            email=user.email)
    session.add(db_test_user)
    session.commit()


# ユーザ情報更新
@app.put("/test_users/{user_id}")
def put_users(user: TestUser, user_id: int):
    target_user = session.query(TestUserTable).\
        filter(TestUserTable.id == user_id).first()
    target_user.name = user.name
    target_user.email = user.email
    session.commit()