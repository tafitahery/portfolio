import './topbar.scss';
import { Person, Mail } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+261 34 52 675 80</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>tafitahery@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
