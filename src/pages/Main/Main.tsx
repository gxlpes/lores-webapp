import { log } from 'console';
import React, { useContext } from 'react'
import { AppointmentContext } from '../../context/AppointmentContext';
import { TreatmentContext } from '../../context/TreatmentContext'

const Main = () => {
    const { allAppointments } = useContext(AppointmentContext);
    console.log(allAppointments);

    return (
        <>
            <div>Main</div>
        </>
    )
}

export default Main