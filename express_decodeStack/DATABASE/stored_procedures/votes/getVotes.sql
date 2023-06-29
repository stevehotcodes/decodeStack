CREATE OR ALTER PROCEDURE getUpVotes(
@answerID VARCHAR(255)
)
AS 
BEGIN
	SELECT COUNT (isUpvoted) FROM votes
	WHERE answerID=@answerID and isUpvoted=1
END
