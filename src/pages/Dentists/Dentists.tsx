import React, { useContext } from 'react'
import { DentistContext } from '../../context/DentistContext'
import FormDentist from './FormDentist';

const Dentists = () => {
    const { allDentists } = useContext(DentistContext);

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
                        </>
                    ))
                }</>)
            }
            < div > Dentists</div >
        </>
    )
}

export default Dentists