import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useTodos } from '../../hooks/useTodos';



export default function Todos() {
  const { user } = useContext(UserContext);
  const [description, setDescription] = useState('');
  const { items, setItems } = useTodos();

  if (!user) {
    return <Redirect to='/auth/sign-in' />;
  }

  return (
    <div>
      <input
        type='text'
        value={description}
      />
      <button>Add Todo</button>
    </div>
  );
}