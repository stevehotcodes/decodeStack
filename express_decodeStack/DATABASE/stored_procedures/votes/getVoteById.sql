CREATE OR ALTER PROCEDURE getVoteByAnswerId(
@answerID VARCHAR(255),
@userID VARCHAR(255)
)
AS 
BEGIN
	SELECT * FROM votes
	WHERE answerID=@answerID AND userID=@userID

END
