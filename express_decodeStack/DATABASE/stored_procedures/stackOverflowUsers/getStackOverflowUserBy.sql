
CREATE OR ALTER PROCEDURE getUserBy(@filter_type VARCHAR(10), @filter_value VARCHAR(200))
AS
BEGIN
  IF @filter_type='id'
  BEGIN
    SELECT * FROM stackOverflowUsers WHERE  id=@filter_value AND isDeleted=0
  END
  ELSE IF @filter_type='email'
  BEGIN
	SELECT * FROM stackOverflowUsers WHERE  email=@filter_value AND isDeleted=0
  END
END