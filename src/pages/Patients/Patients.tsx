import React, { useContext } from 'react'
import { PatientContext } from '../../context/PatientContext';

const Patients = () => {
    const { allPatients, setFormPatient, formPatient, savePatient } = useContext(PatientContext);
    console.log(allPatients);


    return (
        <>
            <form onSubmit={(e) => savePatient(e)}>
                <>
                    <label htmlFor="fullName">Nome completo</label>
                    <input type="name" name="fullName" id="fullName" onChange={(e) => setFormPatient({ ...formPatient, ["fullName"]: e.target.value })} />

                    <label htmlFor="birthdate">Nascimento</label>
                    <input type="date" name="birthdate" id="birthdate" onChange={(e) => setFormPatient({ ...formPatient, ["birthdate"]: e.target.value })} />

                    <label htmlFor="cpfNumber">CPF</label>
                    <input type="number" name="cpfNumber" id="cpfNumber" onChange={(e) => setFormPatient({ ...formPatient, ["cpfNumber"]: e.target.value })} />

                    <label htmlFor="telephoneNumber">Celular</label>
                    <input type="number" name="telephoneNumber" id="telephoneNumber" onChange={(e) => setFormPatient({ ...formPatient, ["telephoneNumber"]: e.target.value })} />

                    <label htmlFor="emailAddress">Email</label>
                    <input type="email" name="emailAddress" id="emailAddress" onChange={(e) => setFormPatient({ ...formPatient, ["emailAddress"]: e.target.value })} />

                    <label htmlFor="mainAddress">Endereço</label>
                    <input type="text" name="mainAddress" id="mainAddress" onChange={(e) => setFormPatient({
                        ...formPatient, address: {
                            ...formPatient.address, mainAddress: e.target.value
                        }
                    })} />

                    <label htmlFor="numberAddress">Número</label>
                    <input type="text" name="numberAddress" id="numberAddress" onChange={(e) => setFormPatient({
                        ...formPatient, address: {
                            ...formPatient.address, numberAddress: e.target.value
                        }
                    })} />

                    <label htmlFor="neighborHood">Bairro</label>
                    <input type="text" name="neighborHood" id="neighborHood" onChange={(e) => setFormPatient({
                        ...formPatient, address: {
                            ...formPatient.address, neighborHood: e.target.value
                        }
                    })} />

                    <label htmlFor="complementInfo">Complemento</label>
                    <input type="text" name="complementInfo" id="complementInfo" onChange={(e) => setFormPatient({
                        ...formPatient, address: {
                            ...formPatient.address, complementInfo: e.target.value
                        }
                    })} />

                    <label htmlFor="zipCode">CEP</label>
                    <input type="text" name="zipCode" id="zipCode" onChange={(e) => setFormPatient({
                        ...formPatient, address: {
                            ...formPatient.address, zipCode: e.target.value
                        }
                    })} />

                    <button type="submit">Salvar</button>
                </>
            </form>
        </>
    )
}

export default Patients