CREATE DATABASE chat;
USE chat;

CREATE TABLE usuario (
    usr_id INT AUTO_INCREMENT,
    usr_apelido VARCHAR(30) NOT NULL,
    usr_login VARCHAR(30) NOT NULL UNIQUE,
    usr_senha VARCHAR(255) NOT NULL,
    CONSTRAINT usr_usr_id PRIMARY KEY (usr_id)
)ENGINE=INNODB;

CREATE TABLE mensagem (
    msg_id INT AUTO_INCREMENT,
    usr_remetente INT NOT NULL,
    usr_destinatario INT NOT NULL,
    msg_texto TEXT NOT NULL,
    msg_data INT(11) NOT NULL,
    CONSTRAINT msg_msg_id PRIMARY KEY (msg_id),
    CONSTRAINT msg_usr_remetente FOREIGN KEY (usr_remetente) REFERENCES usuario (usr_id),
    CONSTRAINT msg_usr_destinatario FOREIGN KEY (usr_destinatario) REFERENCES usuario (usr_id)
)ENGINE=INNODB;