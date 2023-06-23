CREATE OR ALTER PROCEDURE addStackOverflowUser(
@id VARCHAR(255),
@firstName VARCHAR (MAX),
@lastName VARCHAR (MAX),
@userName VARCHAR(MAX),
@email VARCHAR(MAX),
@password VARCHAR (MAX),
@github VARCHAR (MAX)

 )
AS

BEGIN 
	INSERT INTO stackOverflowUsers(id,firstName,lastName,userName,email,password,github,isActive)
	VALUES (@id,@firstName,@lastName,@userName,@email,@password,@github,1)
END