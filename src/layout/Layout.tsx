import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { LayoutProfile } from "../domain/enum/LayoutProfile"
import { LayoutProps } from "../domain/props/LayoutProps"

const Layout = ({ layoutProfile }: LayoutProps) => {
    return (
        <>
            {layoutProfile === LayoutProfile.private && <Header />}
            <Outlet />
            {layoutProfile === LayoutProfile.public && <Footer />}
        </>
    )
}

export default Layout
