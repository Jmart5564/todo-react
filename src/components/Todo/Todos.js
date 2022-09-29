import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useTodos } from '../../hooks/useTodos';
import { createTodo } from '../../services/todos';



export default function Todos() {
  const { user } = useContext(UserContext);
  const [description, setDescription] = useState('');
  const { todos, setTodos } = useTodos();

  if (!user) {
    return <Redirect to='/auth/sign-in' />;
  }

  const handleNewTodo = async () => {
    try {
      await createTodo(description);
      setTodos((prev) => [...prev, { description }]);
      setDescription('');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleNewTodo}>Add Todo</button>
      </div>
      {todos.map((item) => (
        <div key={item.id}>
          <label>
            <input type="checkbox" />
            {item.description}
          </label>
        </div>
      ))}
    </div>
  );
}