CREATE OR ALTER PROCEDURE addAnswer(
@id VARCHAR (255),
@answerDescription VARCHAR(MAX),
@userID VARCHAR(255),
@questionID VARCHAR(255)
@voteID VARCHAR (255)

)
AS
BEGIN
	INSERT INTO answers (id,answerDescription,userID,questionID)
	VALUES (@id,@answerDescription,@userID,@questionID)
	
	UPDATE questions
	SET isAnswered=1
	WHERE id=@questionID

	INSERT INTO  votes (id,answerID)
	VALUES (@voteID,@id)
END



