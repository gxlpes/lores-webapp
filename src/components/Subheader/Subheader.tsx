
import { useLocation, useNavigate } from "react-router-dom";
import { LayoutProfile } from "../../domain/enum/LayoutProfile";
import { LayoutProps } from "../../domain/props/LayoutProps";
import { Content } from "../../styles/Content";
import { Button } from "../../styles/global/GlobalStyles";
import { SubheaderWrapper } from "./SubheaderStyles";

interface Props {
    createNew: () => void;
}

const Subheader = ({ layoutProfile }: LayoutProps) => {
    const navigate = useNavigate();
    const url = useLocation();

    return (
        <>
            {LayoutProfile.private && url.pathname !== "/main" ? (
                <Content maxWidth={true}>
                    < SubheaderWrapper >
                        <Button onClick={() => navigate(`${url.pathname}/form/new`)}>Cadastrar</Button>

                        {url.pathname === "/specialties" &&
                            <Button onClick={() => navigate(`${url.pathname}/form/specialty/dentist`)}>Associar dentista</Button>
                        }

                        {url.pathname === "/treatments" &&
                            <Button onClick={() => navigate(`${url.pathname}/form/specialty/treatment`)}>Associar especialidade</Button>
                        }

                        {/* <Form padding={false} shadow={false} color={WHITE_COLOR} onSubmit={() => createNew()}>
                    <Input type="text" />
                    <Button type="submit">Buscar</Button>
                </Form> */}

                    </SubheaderWrapper>
                </Content>

            ) : url.pathname == "/main" ? undefined : (
                <p>&nbsp;</p>
            )
            }

        </>)
}

export default Subheader