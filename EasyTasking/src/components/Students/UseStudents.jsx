import { useState, useEffect } from 'react';
import axios from 'axios';

function useStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios('http://localhost:8080/api/students');
      setStudents(result.data);
    }
    fetchData();
  }, []);

  return students;
}

export default useStudents;
