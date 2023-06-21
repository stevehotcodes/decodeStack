CREATE OR ALTER PROCEDURE getAllAnswers(
@questionID VARCHAR(255))
AS
BEGIN
	SELECT * FROM answers
	WHERE questionID=@questionID
END
