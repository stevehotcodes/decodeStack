CREATE OR ALTER PROCEDURE getAllStackOverflowUsers
AS

BEGIN 
SELECT * FROM stackOverflowUsers WHERE isDeleted=0 AND role!='admin'
END
