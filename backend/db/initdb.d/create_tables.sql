CREATE TABLE companies (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(128) NOT NULL,
    password VARCHAR(30) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_publisher BOOLEAN NOT NULL,
    is_advertiser BOOLEAN NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT 0,
    is_working BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (id)
);

CREATE TABLE mangaLists (
    id INT NOT NULL AUTO_INCREMENT,
    company_id INT(11) NOT NULL,
    title VARCHAR(256) NOT NULL,
    author VARCHAR(128) NOT NULL,
    summary VARCHAR(4096) NOT NULL,
    volumeone_at VARCHAR(256) NOT NULL,
    volumes INT(11) NOT NULL,
    edition INT(11) NOT NULL,
    is_serialization BOOLEAN NOT NULL,
    genre VARCHAR(256) NOT NULL,
    editor VARCHAR(256),
    picture_url VARCHAR(512),
    others VARCHAR(4096),
    PRIMARY KEY (id),
    FOREIGN KEY (company_id) REFERENCES companies (id)
);

CREATE TABLE advertisementLists (
    id INT NOT NULL AUTO_INCREMENT,
    title_id INT(11) NOT NULL,
    company_id INT(11) NOT NULL,
    comment VARCHAR(128) NOT NULL,
    page INT(11) NOT NULL,
    picture_url VARCHAR(128),
    detail_url VARCHAR(128),
    PRIMARY KEY (id),
    FOREIGN KEY (title_id) REFERENCES mangaLists (id),
    FOREIGN KEY (company_id) REFERENCES companies (id)
);
