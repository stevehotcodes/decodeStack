CREATE OR ALTER PROCEDURE deleteStackOverflowUser(@id VARCHAR(255))
AS 
BEGIN 
UPDATE stackOverflowUsers 
SET isDeleted=1 WHERE id=@id AND isDeleted=0;
END