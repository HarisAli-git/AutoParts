use autoparts;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
photo_url VARCHAR(255) NOT NULL,
full_name VARCHAR(55) NOT NULL,
token VARCHAR(3555) NOT NULL,
token_expiry DATETIME
);

CREATE TABLE products (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sku VARCHAR(100) UNIQUE,
description TEXT,
price DECIMAL(10, 2),
stock_quantity INT DEFAULT 0,
category_id INT,
subcategory_id INT,
brand VARCHAR(100),
model VARCHAR(100),
year INT,
image_url VARCHAR(255),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (category_id) REFERENCES categories(id),
FOREIGN KEY (subcategory_id) REFERENCES categories(id)
);

CREATE TABLE categories (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
parent_id INT DEFAULT NULL,
FOREIGN KEY (parent_id) REFERENCES categories(id) ON DELETE CASCADE
);

select * from users;
select * from products;
select * from categories;