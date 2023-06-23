CREATE OR ALTER PROCEDURE downVote(
@id VARCHAR (255),
@answerID VARCHAR (255),
@userID VARCHAR (255)
)
AS
BEGIN

    UPDATE votes
	SET isUpvoted=0 
	WHERE isUpvoted=1 AND answerID=@answerID AND id=@id AND userID=@userID
END