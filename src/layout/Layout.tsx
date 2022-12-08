import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import { LayoutProfile } from "../domain/enum/LayoutProfile"
import { LayoutProps } from "../domain/props/LayoutProps"

const Layout = ({ layoutProfile }: LayoutProps) => {
    return (
        <>
            {layoutProfile === LayoutProfile.private && <Header />}
            <Outlet />
        </>
    )
}

export default Layout
