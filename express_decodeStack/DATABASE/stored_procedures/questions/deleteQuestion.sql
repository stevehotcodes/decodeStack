CREATE OR ALTER PROCEDURE deleteQuestion (@id VARCHAR(255))
AS
BEGIN
 UPDATE questions
	 SET isDeleted=1
	 WHERE id=@id AND isDeleted=0 
 END
 