-- Insertar estudiantes
INSERT INTO student (username) VALUES
  ('alice'),
  ('bob'),
  ('carla');

-- Insertar materias
INSERT INTO subject (name) VALUES
  ('Matemáticas'),
  ('Ciencias'),
  ('Historia'),
  ('Lengua');

-- Insertar lecciones (1 lección por materia para cada estudiante)
-- NOTA: debes revisar que los IDs de estudiantes y materias comienzan en 1

-- Lecciones para alice (student_id = 1)
INSERT INTO lesson (student_id, subject_id, timestamp) VALUES
  (1, 1, '2024-05-01 09:00:00'),
  (1, 2, '2024-05-02 10:00:00'),
  (1, 3, '2024-05-03 11:00:00'),
  (1, 4, '2024-05-04 12:00:00');

-- Lecciones para bob (student_id = 2)
INSERT INTO lesson (student_id, subject_id, timestamp) VALUES
  (2, 1, '2024-05-01 13:00:00'),
  (2, 2, '2024-05-02 14:00:00'),
  (2, 3, '2024-05-03 15:00:00'),
  (2, 4, '2024-05-04 16:00:00');

-- Lecciones para carla (student_id = 3)
INSERT INTO lesson (student_id, subject_id, timestamp) VALUES
  (3, 1, '2024-05-01 17:00:00'),
  (3, 2, '2024-05-02 18:00:00'),
  (3, 3, '2024-05-03 19:00:00'),
  (3, 4, '2024-05-04 20:00:00');
