CREATE OR ALTER PROCEDURE upVote(
@answerID VARCHAR(255),
@userID VARCHAR(255),
@id VARCHAR (255)
)
AS
BEGIN
	 
	
	INSERT INTO votes (id,answerID,userID,isUpvoted)
	VALUES (@id,@answerID,@userID,1)
	

END
