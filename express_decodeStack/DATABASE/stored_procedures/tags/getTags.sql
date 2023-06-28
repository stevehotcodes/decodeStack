CREATE OR ALTER PROCEDURE getTags(
    @tagTitle VARCHAR (MAX)

)
AS
BEGIN
    SELECT * FROM tags 
    WHERE tagTitle=@tagTitle
END
