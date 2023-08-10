import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

export const NavBar = () => {
  const handleContactClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className={style.container}>
      <Link to="/" className={style.Link}>Home</Link>
      <p onClick={handleContactClick} className={style.PLink}>Contacts</p>
      <Link to="/gallery" className={style.Link}>Gallery</Link>
      <Link to="/about" className={style.Link}>About</Link>
    </div>
  );
}
