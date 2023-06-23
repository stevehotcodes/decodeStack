CREATE OR ALTER PROCEDURE getAQuestionByUserId(@userID VARCHAR (255))
AS

BEGIN

	 SELECT * FROM questions
	 WHERE userID=@userID AND isDeleted=0

END


