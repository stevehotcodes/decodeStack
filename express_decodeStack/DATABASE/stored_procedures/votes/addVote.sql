CREATE OR ALTER PROCEDURE addVote(
@answerID VARCHAR(255),
@userID VARCHAR(255),
@id VARCHAR (255)
)
AS
BEGIN
	 
	
	UPDATE votes
	SET isUpvoted=1 ,userID=@userID
	WHERE isUpvoted=0 AND answerID=@answerID AND id=@id

END