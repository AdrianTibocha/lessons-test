'use client';

import { useState } from 'react';
import api from './services/api';
import { Lesson } from './types/lesson';

export default function Home() {
  const [username, setUsername] = useState('');
  const [lessonId, setLessonId] = useState('');
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [singleLesson, setSingleLesson] = useState<Lesson | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchLessonsByUsername = async () => {
    try {
      const res = await api.get<Lesson[]>(`/lessons/${username}`);
      setLessons(res.data);
      setSingleLesson(null);
      setError(null);
    } catch (err) {
      setError('Usuario no encontrado o error de conexión');
    }
  };

  const fetchLessonById = async () => {
    try {
      const res = await api.get<Lesson>(`/lesson/${lessonId}`);
      setSingleLesson(res.data);
      setLessons([]);
      setError(null);
    } catch (err) {
      setError('Lección no encontrada');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lecciones Completadas</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchLessonsByUsername}>Buscar por usuario</button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="ID de lección"
          value={lessonId}
          onChange={(e) => setLessonId(e.target.value)}
        />
        <button onClick={fetchLessonById}>Buscar por ID</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {lessons.length > 0 && (
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Materia</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson.id}>
                <td>{lesson.id}</td>
                <td>{lesson.subject.name}</td>
                <td>{new Date(lesson.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {singleLesson && (
        <div>
          <h3>Lección encontrada</h3>
          <p><strong>ID:</strong> {singleLesson.id}</p>
          <p><strong>Estudiante:</strong> {singleLesson.student.username}</p>
          <p><strong>Materia:</strong> {singleLesson.subject.name}</p>
          <p><strong>Fecha:</strong> {new Date(singleLesson.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
