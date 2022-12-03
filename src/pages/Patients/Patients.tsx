import React, { useContext } from 'react'
import { PatientContext } from '../../context/PatientContext';

const Patients = () => {
    const { getAllPatients } = useContext(PatientContext);

    return (
        <div>Patients</div>
    )
}

export default Patients