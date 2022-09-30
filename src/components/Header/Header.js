import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return (
    <div className='header'>
      <div className='doit'>
        <img src={`${process.env.PUBLIC_URL}/images/doit.gif`}/>
      </div>
      <h1 className='header-h1'>Just Do It {user.email.substring(0, user.email.lastIndexOf('@'))}!</h1>
      {user && (
        <div>
          <div className='username'>hello {user.email.substring(0, user.email.lastIndexOf('@'))}</div>
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      )}
    </div>
  );
}