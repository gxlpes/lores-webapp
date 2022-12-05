import React, { useContext } from 'react'
import { DentistContext } from '../../context/DentistContext'

const Dentists = () => {
    const { allDentists } = useContext(DentistContext);

    return (
        <>
            {
                allDentists.map((el: any) => (
                    <p>{el.person.fullName}</p>
                ))
            }
            < div > Dentists</div >
        </>
    )
}

export default Dentists