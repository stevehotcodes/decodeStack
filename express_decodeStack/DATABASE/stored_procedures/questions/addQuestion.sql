CREATE OR ALTER PROCEDURE addQuestion(
@id VARCHAR (255),
@questionTitle VARCHAR (MAX),
@questionDescription VARCHAR (MAX),
@questionTag VARCHAR (MAX),
@userID VARCHAR (255),
-- @tagID VARCHAR(255)
)
AS
BEGIN
	INSERT INTO questions (id,questionTitle,questionDescription,questionTag,userID)
	VALUES (@id,@questionTitle,@questionDescription,@questionTag,@userID)

END