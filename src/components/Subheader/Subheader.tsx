
import { useNavigate } from "react-router-dom";
import { LayoutProfile } from "../../domain/enum/LayoutProfile";
import { LayoutProps } from "../../domain/props/LayoutProps";
import { WHITE_COLOR } from "../../styles/constants/colors";
import { Button, Form, Input } from "../../styles/global/GlobalStyles";
import { SubheaderWrapper } from "./SubheaderStyles";

interface Props {
    createNew: () => void;
}

const Subheader = ({ layoutProfile }: LayoutProps) => {
    const navigate = useNavigate();

    return (
        <>
            {LayoutProfile.private ? (

                <SubheaderWrapper>
                    <Button onClick={() => navigate("form/new")}>Cadastrar</Button>
                    {/* <Form padding={false} shadow={false} color={WHITE_COLOR} onSubmit={() => createNew()}>
                    <Input type="text" />
                    <Button type="submit">Buscar</Button>
                </Form> */}
                </SubheaderWrapper>
            ) : undefined}

        </>)
}

export default Subheader