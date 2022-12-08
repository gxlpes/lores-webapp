import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { getLocalStorage } from '../../common/localStorage'
import { Content } from '../../styles/Content'
import { ContainerLinks, ContainerLogo, HeaderWrapper } from './HeaderStyles'

const Header = () => {
    let auth = getLocalStorage("auth", "role");
    let username = getLocalStorage("username");


    return (
        <HeaderWrapper>
            <ul>
                <Content maxWidth={false} justify={"space-between"}>
                    <ContainerLogo>
                        <NavLink className="logo" to={"/main"}>
                            <Logo />
                        </NavLink>
                        <p>{auth == 1 ? "Administrador" : "Usuário"} | {username}</p>
                    </ContainerLogo>
                    <ContainerLinks>
                        <NavLink to={"/patients"}><li>Pacientes </li></NavLink>
                        <NavLink to={"/dentists"}><li>Dentistas</li></NavLink>
                        <NavLink to={"/specialties"}><li>Especialidades</li></NavLink>
                        <NavLink to={"/treatments"}><li>Tratamentos</li></NavLink>
                        <NavLink to={"/appointments"}><li>Consultas</li></NavLink>
                    </ContainerLinks>

                </Content>
            </ul>
        </HeaderWrapper>
    )
}

export default Header