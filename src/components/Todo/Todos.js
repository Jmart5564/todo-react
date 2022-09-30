import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useTodos } from '../../hooks/useTodos';
import { createTodo, deleteTodo, toggleTodo } from '../../services/todos';



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

  const handleCompleteTodo = async ({ id, complete }) => {
    await toggleTodo(id, !complete);
    setTodos(prev => prev.map(todo => todo.id === id ? 
      { ...todo, complete: !todo.complete } : todo));
  };

  const handleDeleteTodo = async (id) => {
    const deletedItem = await deleteTodo(id);
    setTodos((prevState) => prevState.filter((prevTodo) => prevTodo.id !== deletedItem.id));
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
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <button onClick={() => handleDeleteTodo(todo.id)}>
            X
            </button>
            <input type="checkbox"
              checked={todo.complete}
              onChange={() => handleCompleteTodo(todo)} />
            {todo.description}
          </label>
        </div>
      ))}
    </div>
  );
}