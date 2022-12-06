import { NavLink } from 'react-router-dom'
import { Nav } from './HeaderStyles'

const Header = () => {
    return (
        <Nav>
            <ul>
                <NavLink to={"/patients"}><li>Pacientes</li></NavLink>
                <NavLink to={"/dentists"}><li>Dentistas</li></NavLink>
                <NavLink to={"/specialties"}><li>Especialidades</li></NavLink>
                <NavLink to={"/treatments"}><li>Tratamentos</li></NavLink>
                <NavLink to={"/appointments"}><li>Consultas</li></NavLink>
            </ul>
        </Nav>
    )
}

export default Header