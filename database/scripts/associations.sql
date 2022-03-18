USE UNIVERSITY;

ALTER TABLE `groups`
  ADD CONSTRAINT FK_groups_facultet_id_facultets_id
    FOREIGN KEY(facultet_id) REFERENCES facultets(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE;

ALTER TABLE students
  ADD CONSTRAINT FK_students_group_id_groups_id
    FOREIGN KEY(group_id) REFERENCES `groups`(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE;

      -- add trigers that transfomation a password to a hash




