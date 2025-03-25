
CREATE DATABASE tienda;
USE tienda;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(255) UNIQUE NOT NULL,
    fecha_nac DATE NOT NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    created DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE compras (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_producto INT NOT NULL,
    fecha_compra DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    cantidad INT NOT NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto) ON DELETE CASCADE
);

INSERT INTO usuarios (nombre, apellido, correo, fecha_nac) 
VALUES ('Juan', 'Perez', 'juan.perez@mail.com', '1990-01-01');

INSERT INTO productos (nombre_producto, precio, stock) 
VALUES ('Laptop', 1200.00, 10), ('Mouse', 25.00, 50);

INSERT INTO compras (id_usuario, id_producto, fecha_compra, cantidad)
VALUES (LAST_INSERT_ID(), 1, NOW(), 2), (LAST_INSERT_ID(), 2, NOW(), 1);
