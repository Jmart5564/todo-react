import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';


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
    <div>
      <h1>To Do List For {user.email.substring(0, user.email.lastIndexOf('@'))} </h1>
      {user && (
        <div className="header-wrapper">
          <div>hello {user.email.substring(0, user.email.lastIndexOf('@'))}</div>
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      )}
      <hr></hr>
    </div>
  );
}