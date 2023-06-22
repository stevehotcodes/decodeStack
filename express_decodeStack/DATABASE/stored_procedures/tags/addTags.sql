CREATE OR ALTER PROCEDURE addTag(
@id VARCHAR (255),
@tagTitle VARCHAR (MAX),
@questionID VARCHAR(255))
AS
BEGIN 
	INSERT INTO tags(id, tagTitle,questionID)
	VALUES(@id,@tagTitle,@questionID)
END
