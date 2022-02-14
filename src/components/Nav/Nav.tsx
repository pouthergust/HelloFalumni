import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import userIcon from '../../assets/account_circle.svg'
import menuIcon from '../../assets/sandwich.svg'
import closeIcon from '../../assets/close.svg'
import ellipse from '../../assets/Ellipse.svg'

function Nav() {
    const options: string[] = ['alunos', 'cursos', 'turmas']
    const [ isMenuExpanded, setIsMenuExpanded] = useState(false);

    const linkStyle = {
      textDecoration: 'none',
      color: '#fff'
    }

    const hiddenNav = {
      transform: 'translateY(-55px)'
    }

  return (
    <div className="c-navigation__background --expanded" style={isMenuExpanded ? {} : hiddenNav}>
      <nav className="c-navigation">
        <ul className="c-navigation__list">
          {options.map((element, index) => {
            return (
              <>
                <li key={index}><Link style={linkStyle} to={element} >{element}</Link></li>
                <img src={ellipse} alt="bullet" />
              </>
            )
          })}
          <li><Link style={linkStyle} to="/login">sair</Link></li>
        </ul>
      </nav>
      <div className="divider --nav"></div>
      <div className="c-menu">
        <img width="45px" src={userIcon} alt="imagem do usuario" />
        <div className="c-menu__userInfo">
          <h2 className="c-menu__greetings">Olá, Fabiana</h2>
          <span className="c-menu__occupation">Professora</span>
        </div>
        <button className="c-button --ter" onClick={() => setIsMenuExpanded(!isMenuExpanded)}>
          <img src={isMenuExpanded ? closeIcon : menuIcon} alt="menu Toggle" />
        </button>
      </div>
    </div>
  );
}

export default Nav;