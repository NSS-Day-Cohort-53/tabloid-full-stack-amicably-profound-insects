USE [Tabloid]
GO

ALTER TABLE UserProfile
ADD IsDeactivated BIT NOT NULL
CONSTRAINT D_UserProfile_Deactivated DEFAULT 0 WITH VALUES
