import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { getLocalStorage } from '../../common/localStorage'
import { LayoutProfile } from '../../domain/enum/LayoutProfile'
import { LayoutProps } from '../../domain/props/LayoutProps'
import { Content } from '../../styles/Content'
import { ContainerLinks, ContainerLogo, HeaderWrapper } from './HeaderStyles'

const Header = ({ layoutProfile }: LayoutProps) => {
    let auth = getLocalStorage("auth", "role");
    let username = getLocalStorage("username");


    return (
        <HeaderWrapper>
            <ul>
                <Content maxWidth={false} justify={"space-between"}>

                    <ContainerLogo>

                        <NavLink className="logo" to={"/login"}>
                            <Logo />
                        </NavLink>

                        <NavLink to={"/main"}>
                            <p>{auth == 1 ? "Administrador" : "Usuário"} | {username}</p>
                        </NavLink>

                    </ContainerLogo>

                    <ContainerLinks>
                        {layoutProfile === LayoutProfile.private &&
                            <>
                                <NavLink to={"/patients"}><li>Pacientes </li></NavLink>
                                <NavLink to={"/dentists"}><li>Dentistas</li></NavLink>
                                <NavLink to={"/specialties"}><li>Especialidades</li></NavLink>
                                <NavLink to={"/treatments"}><li>Tratamentos</li></NavLink>
                            </>
                        }
                        <NavLink to={"/appointments"}><li>Consultas</li></NavLink>
                    </ContainerLinks>

                </Content>
            </ul>
        </HeaderWrapper>
    )
}

export default Header