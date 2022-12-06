import { useContext } from 'react';
import { DentistContext } from '../../context/DentistContext';
import FormDentist from './FormDentist';

const Dentists = () => {
    const { allDentists, deleteMethodItem } = useContext(DentistContext);

    return (
        <>
            <>
                <FormDentist />
            </>
            {typeof allDentists == "string" ? (<p>Opa, sem dentista</p>) : (<>
                {
                    allDentists!.map((el: any) => (
                        <>
                            <p>{el.person.fullName}</p>
                            <a style={{ cursor: "pointer" }} onClick={() => deleteMethodItem(el.id)}>Excluir</a>
                        </>
                    ))
                }</>)
            }
            < div > Dentists</div >
        </>
    )
}

export default Dentists