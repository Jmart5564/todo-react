import { useEffect, useState } from 'react';
import { getTodos } from '../services/todos';



export function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (e) {
            // eslint-disable-next-line no-console
        console.error(e.message);
      }
    };
    fetchTodos();
  }, []);
  return { todos, setTodos };
    
}