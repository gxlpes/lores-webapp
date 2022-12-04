import React, { useContext } from 'react'
import { PatientContext } from '../../context/PatientContext';

const Patients = () => {
    const { getAllPatients } = useContext(PatientContext);

    (getAllPatients())

    return (
        <div>Patients</div>
    )
}

export default Patients