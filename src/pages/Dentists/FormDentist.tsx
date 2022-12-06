import React, { useContext } from 'react'
import { DentistContext } from '../../context/DentistContext'

const FormDentist = () => {
    const { formDentist, setFormDentist, saveDentist } = useContext(DentistContext)

    return (
        <form onSubmit={(e) => saveDentist(e)}>
            <>
                <label htmlFor="fullName">Número CRO</label>
                <input type="number" name="fullName" id="fullName" onChange={(e) => setFormDentist({ ...formDentist, croNumber: e.target.value })} />

                <label htmlFor="fullName">Nome completo</label>
                <input type="name" name="fullName" id="fullName" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, fullName: e.target.value } })} />

                <label htmlFor="birthdate">Nascimento</label>
                <input type="date" name="birthdate" id="birthdate" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, birthdate: e.target.value } })} />

                <label htmlFor="cpfNumber">CPF</label>
                <input type="number" name="cpfNumber" id="cpfNumber" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, cpfNumber: e.target.value } })} />

                <label htmlFor="telephoneNumber">Celular</label>
                <input type="number" name="telephoneNumber" id="telephoneNumber" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, telephoneNumber: e.target.value } })} />

                <label htmlFor="emailAddress">Email</label>
                <input type="email" name="emailAddress" id="emailAddress" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, emailAddress: e.target.value } })} />

                <label htmlFor="mainAddress">Endereço</label>
                <input type="text" name="mainAddress" id="mainAddress" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, address: { ...formDentist.person.address, mainAddress: e.target.value } } })} />

                <label htmlFor="numberAddress">Número</label>
                <input type="text" name="numberAddress" id="numberAddress" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, address: { ...formDentist.person.address, numberAddress: e.target.value } } })} />

                <label htmlFor="neighborHood">Bairro</label>
                <input type="text" name="neighborHood" id="neighborHood" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, address: { ...formDentist.person.address, neighborHood: e.target.value } } })} />

                <label htmlFor="complementInfo">Complemento</label>
                <input type="text" name="complementInfo" id="complementInfo" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, address: { ...formDentist.person.address, complementInfo: e.target.value } } })} />

                <label htmlFor="zipCode">CEP</label>
                <input type="text" name="zipCode" id="zipCode" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, address: { ...formDentist.person.address, zipCode: e.target.value } } })} />

                <button type="submit">Salvar</button>
            </>
        </form>
    )
}

export default FormDentist