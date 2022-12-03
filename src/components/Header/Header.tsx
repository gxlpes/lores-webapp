import { NavLink } from 'react-router-dom'
import { Nav } from './HeaderStyles'

const Header = () => {
    return (
        <Nav>
            <ul>
                <NavLink to={"/schedule"}><li>Agenda</li></NavLink>
                <NavLink to={"/patients"}><li>Pacientes</li></NavLink>
                <NavLink to={"/dentists"}><li>Dentistas</li></NavLink>
            </ul>
        </Nav>
    )
}

export default Header