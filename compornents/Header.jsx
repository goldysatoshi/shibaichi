import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  const [active, setActive] = useState(false);
  
  const classToggle = () => {
      setActive(!active)
    }

  return (
    <div className='header'>
        <h1>柴一建設</h1>
        <div className="menuber">
            <nav>
                <ul className='pcmenu'>
                    <li><Link to={'/'}>ホーム</Link></li>
                    <li><Link to={'/recruitment/'}>採用情報</Link></li>
                    <li><Link to={'/company/'}>会社概要</Link></li>
                    <li><Link to={'/inquiry/'}>問い合わせ</Link></li>
                </ul>
                  <div className={`mobilemenu ${active ? "active" : ""}`}
                  onClick={classToggle}>
                    <span className={`${active ? "active" : ""}`}></span>
                    <span className={`${active ? "active" : ""}`}></span>
                    <span className={`${active ? "active" : ""}`}></span>
                    <ul className={`mobilemenulist ${active ? "active" : ""}`}>
                    <li><Link to={'/'}>ホーム</Link></li>
                    <li><Link to={'/recruitment/'}>採用情報</Link></li>
                    <li><Link to={'/company/'}>会社概要</Link></li>
                    <li><Link to={'/inquiry/'}>問い合わせ</Link></li>
                </ul>
                 </div>
            </nav>
        </div>

    </div>
  )
}

export default Header;