from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from db import session
from model import companiesTable, mangaListsTable, loginCompany, mangaSearch, mangaLists, newManga, putManga

app = FastAPI()

origins = [
    "http://localhost:8080",  # フロントエンドのアドレス
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

# 出版社の管理する漫画一覧情報取得
@app.get("/mangaLists/publisher/{company_id}")
def get_mangaLists_publisher(company_id: int):
    manga_publisher = session.query(mangaListsTable).\
        filter(mangaListsTable.company_id == company_id).all()
    return manga_publisher

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

# ログイン確認
@app.post("/companies")
def companies_logincheck(logincompany: loginCompany):
    companies_server = session.query(companiesTable).\
        filter(companiesTable.email == logincompany.email).first()
    if companies_server == None:
        raise HTTPException(status_code=401, detail="Company not found")
    
    if companies_server.password == logincompany.password:
        return companies_server
    else:
        raise HTTPException(status_code=401, detail="Company not found")

# アカウント情報取得
@app.get("/companies/{company_id}")
def get_company(company_id: int):
    company = session.query(companiesTable).\
        filter(companiesTable.id == company_id).first()
    return company

#　該当漫画の検索とレスポンス
@app.post("/mangaLists")
def manga_search(mangaSearch: mangaSearch):
    if mangaSearch.category != "":
        if mangaSearch.content != "":
            manga_server = session.query(mangaListsTable).\
                filter(mangaListsTable.genre == mangaSearch.category).filter(mangaListsTable.title.like(f"%{mangaSearch.content}%")).all()
            return manga_server
        else:
            manga_server = session.query(mangaListsTable).\
                filter(mangaListsTable.genre == mangaSearch.category).all()
            return manga_server
    else:
        if mangaSearch.content != "":
            manga_server = session.query(mangaListsTable).\
                filter(mangaListsTable.title.like(f"%{mangaSearch.content}%")).all()
            return manga_server
        else:
            raise HTTPException(status_code=401, detail="manga not found")
        
# 該当漫画の単一情報取得
@app.get("/mangaLists/{manga_id}")
def get_manga(manga_id: int):
    manga = session.query(mangaListsTable).\
        filter(mangaListsTable.id == manga_id).first()
    return manga

# 新規漫画の登録作業
@app.post("/mangaLists/register")
def register_manga(manga: newManga):
    new_manga = mangaListsTable(
        company_id=manga.company_id,
        title=manga.title,
        author=manga.author,
        summary=manga.summary,
        volumeone_at=manga.volumeone_at,
        volumes=manga.volumes,
        edition=manga.edition,
        is_serialization=manga.is_serialization,
        genre=manga.genre,
        editor=manga.editor,
        picture_url=manga.picture_url,
        others=manga.others
    )
    session.add(new_manga)
    session.commit()

# 既存漫画の修正作業
@app.put("/mangaLists/{manga_id}")
def put_manga(manga: putManga, manga_id: int):
    target_manga = session.query(mangaListsTable).\
        filter(mangaListsTable.id == manga_id).first()
    target_manga.title = manga.title
    target_manga.author = manga.author
    target_manga.summary = manga.summary
    target_manga.volumeone_at = manga.volumeone_at
    target_manga.volumes = manga.volumes
    target_manga.edition = manga.edition
    target_manga.is_serialization = manga.is_serialization
    target_manga.genre = manga.genre
    target_manga.editor = manga.author
    target_manga.picture_url = manga.picture_url
    target_manga.others = manga.others

    session.commit()


#  下記はサンプル
#　ユーザー情報一覧取得
#@app.get("/test_users")
#def get_user_list():
#    users = session.query(TestUserTable).all()
#    return users

# ユーザー情報取得(id指定)
#@app.get("/test_users/{user_id}")
#def get_user(user_id: int):
#    user = session.query(TestUserTable).\
#        filter(TestUserTable.id == user_id).first()
#    return user

# ユーザ情報登録
#@app.post("/test_users")
#def post_user(user: TestUser):
#    db_test_user = TestUser(name=user.name,
#                            email=user.email)
#    session.add(db_test_user)
#    session.commit()


# ユーザ情報更新
#@app.put("/test_users/{user_id}")
#def put_users(user: TestUser, user_id: int):
#    target_user = session.query(TestUserTable).\
#        filter(TestUserTable.id == user_id).first()
#    target_user.name = user.name
#    target_user.email = user.email
#    session.commit()
