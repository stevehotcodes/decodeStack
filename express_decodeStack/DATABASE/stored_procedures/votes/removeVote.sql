CREATE OR ALTER PROCEDURE removeVote(
@id VARCHAR (255)
)
AS 
BEGIN
	DELETE FROM votes WHERE id=@id
END