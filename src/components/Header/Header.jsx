import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
            <NavLink to="/vars" className="app-nominalo" activeClassName="app-active">ВАРИАНТЫ НАБОРА КУПЮР</NavLink>
            <NavLink to="/note" className="app-note" activeClassName="app-active">ВЫЗОВ СПРАВКИ</NavLink>
            <NavLink to="/app-input" className="app-input-navi" activeClassName="app-active">ГЛАВНАЯ СТРАНИЦА</NavLink>
        </header>
    )
}

export default Header

