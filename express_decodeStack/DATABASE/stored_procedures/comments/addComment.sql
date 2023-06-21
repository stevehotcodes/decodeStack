CREATE OR ALTER PROCEDURE addComment(
@id VARCHAR (255),
@commentDescription VARCHAR(MAX),
@userID VARCHAR (255),
@answerID VARCHAR (255)
)
AS
BEGIN
	INSERT INTO comments (id,commentDescription,userID,answerID)
	VALUES (@id,@commentDescription,@userID,@answerID)
END