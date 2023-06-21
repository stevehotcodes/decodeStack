CREATE TABLE answers (
id VARCHAR(255) PRIMARY KEY,
answerDescription VARCHAR (MAX)  NOT NULL,
isPrefered INT DEFAULT 0,
userID VARCHAR (255) FOREIGN KEY REFERENCES stackOverflowUsers(id),
questionID VARCHAR(255) FOREIGN KEY REFERENCES questions(id)
);

