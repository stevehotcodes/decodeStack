CREATE OR ALTER PROCEDURE updateStackOverflowUser(
@id VARCHAR (255),
@userName VARCHAR (MAX),
@email VARCHAR (MAX),
@password VARCHAR (MAX)
)
AS 
BEGIN
	UPDATE stackOverflowUsers
	SET userName=@userName , email=@email
	WHERE isDeleted=0 AND id=@id
END