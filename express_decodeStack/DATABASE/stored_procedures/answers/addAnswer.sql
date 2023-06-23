CREATE OR ALTER PROCEDURE addAnswer(
@id VARCHAR (255),
@answerDescription VARCHAR(MAX),
@userID VARCHAR(255),
@questionID VARCHAR(255)

)
AS
BEGIN
	INSERT INTO answers (id,answerDescription,userID,questionID)
	VALUES (@id,@answerDescription,@userID,@questionID)
	
END



