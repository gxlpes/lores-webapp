import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { PatientContext } from '../../context/PatientContext';
import { PersonPayload } from '../../domain/payload/PersonPayload';

const PatientsForm = () => {
    const { allPatients, setFormPatient, formPatient, saveMethodItem } = useContext(PatientContext);

    return (
        <form onSubmit={(e) => saveMethodItem(e)}>
            <>
                <label htmlFor="fullName">Nome completo</label>
                <input type="name" name="fullName" id="fullName" defaultValue={formPatient.person?.fullName ?? null} onChange={(e) => setFormPatient({ ...formPatient, ["fullName"]: e.target.value })} />

                <label htmlFor="birthdate">Nascimento</label>
                <input type="date" name="birthdate" id="birthdate" value={formPatient.person?.birthdate ?? null} onChange={(e) => setFormPatient({ ...formPatient, ["birthdate"]: e.target.value })} />

                <label htmlFor="cpfNumber">CPF</label>
                <input type="name" name="cpfNumber" id="cpfNumber" value={formPatient.person?.cpfNumber ?? null} onChange={(e) => setFormPatient({ ...formPatient, ["cpfNumber"]: e.target.value })} />

                <label htmlFor="telephoneNumber">Celular</label>
                <input type="number" name="telephoneNumber" id="telephoneNumber" value={formPatient.person?.telephoneNumber ?? null} onChange={(e) => setFormPatient({ ...formPatient, ["telephoneNumber"]: e.target.value })} />

                <label htmlFor="emailAddress">Email</label>
                <input type="email" name="emailAddress" id="emailAddress" value={formPatient.person?.emailAddress ?? null} onChange={(e) => setFormPatient({ ...formPatient, ["emailAddress"]: e.target.value })} />

                <label htmlFor="mainAddress">Endereço</label>
                <input type="text" name="mainAddress" id="mainAddress" value={"null"} onChange={(e) => setFormPatient({
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
        </form>)
}

export default PatientsForm;