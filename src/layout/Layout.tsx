import { Outlet, useLocation } from "react-router-dom"
import { getLocalStorage } from "../common/localStorage"
import Header from "../components/Header/Header"
import Subheader from "../components/Subheader/Subheader"
import { LayoutProfile } from "../domain/enum/LayoutProfile"
import { LayoutProps } from "../domain/props/LayoutProps"

const Layout = ({ layoutProfile }: LayoutProps) => {
    const url = useLocation();
    let isAdmin: boolean = (layoutProfile === LayoutProfile.private || getLocalStorage("auth", "role") === 1);

    return (
        <>
            {isAdmin ? <Header layoutProfile={LayoutProfile.private} /> : <Header layoutProfile={LayoutProfile.public} />}
            {isAdmin && url.pathname !== "/main" ? <Subheader layoutProfile={LayoutProfile.private} /> : undefined}
            <Outlet />
        </>
    )
}

export default Layout
