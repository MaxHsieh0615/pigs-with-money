--Create users
INSERT INTO Users (email,password,account_type,parent_email,createdAt,updatedAt) VALUES ('dennist82@yahoo.com','$2a$10$uTnGJTs0UgN14e/iyxRaAOq112cpsz/.H.whhCBffvNimrIscWrwa','parent',null,sysdate(),sysdate());

--Create Jobs
insert into jobs (title,description, budget,status, date_assigned, date_completed,createdAt,updatedAt,requestorEmail)values
('Clean Room','Pick up all your dirty clothes off the floor.',10,'open',sysdate(),null,sysdate(),sysdate(),'dennist82@yahoo.com');