CREATE OR ALTER PROCEDURE downVote(
@answerID VARCHAR(255),
@userID VARCHAR(255),
@id VARCHAR (255)
)
AS
BEGIN
	INSERT INTO votes (id,answerID,userID,isUpvoted)
	VALUES (@id,@answerID,@userID,0)
END