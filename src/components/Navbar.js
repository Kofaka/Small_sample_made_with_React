import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

import './Navbar.css';

const Navbar = ({list, activeItemId}) => (
    <nav className="navbar-wrapper">
        <ul className="navbar-list">
            {list && list.map(item => (
                <li
                    className={
                        classNames(
                            'navbar-list-item',
                            {'navbar-list-item_active': (item.id === activeItemId)}
                        )
                    }
                    key={item.id}
                >
                    <Link
                        className="navbar-list-item__link"
                        to={item.id}
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default Navbar;