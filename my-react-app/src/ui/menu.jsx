import React from 'react';
import { Link } from 'react-router-dom';
import * as dataService from '../../src/core/dataService';


class Menu extends React.Component {
    state = { menuItems: [] };

    componentDidMount() {
        dataService.get('/menu.json')
            .then(res => this.setState({ menuItems: res.data }))
            .catch(err => console.log('error', err))
    }

    render() {
        return (
            <ul className="navbar-nav mr-auto">
                {
                    this.state.menuItems.map(
                        menu =>
                            <li className="nav-item active" key={menu.menuText}>
                                <Link className="nav-link" to={menu.menuLink}>
                                    {menu.menuText}
                                </Link>
                            </li>
                    )
                }
            </ul>
        );
    }
}

export default Menu;