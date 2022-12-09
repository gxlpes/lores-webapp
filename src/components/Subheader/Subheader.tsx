
import { useNavigate } from "react-router-dom";
import { WHITE_COLOR } from "../../styles/constants/colors";
import { Button, Form, Input } from "../../styles/global/GlobalStyles";
import { SubheaderWrapper } from "./SubheaderStyles";

interface Props {
    createNew: () => void;
}

const Subheader = ({ createNew }: Props) => {
    const navigate = useNavigate();

    return (
        <>
            <SubheaderWrapper>
                <Button onClick={() => navigate("form/new")}>Cadastrar</Button>
                {/* <Form padding={false} shadow={false} color={WHITE_COLOR} onSubmit={() => createNew()}>
                    <Input type="text" />
                    <Button type="submit">Buscar</Button>
                </Form> */}
            </SubheaderWrapper>
        </>)
}

export default Subheader