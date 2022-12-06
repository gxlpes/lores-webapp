import React, { useContext } from 'react'
import { PatientContext } from '../../context/PatientContext';
import { SpecialtyContext } from '../../context/SpecialtyContext';

const Specialties = () => {
    const { allSpecialties, saveMethodItem, setFormSpecialty, formSpecialty, deleteMethodItem } = useContext(SpecialtyContext);

    return (
        <>
            <form onSubmit={(e) => saveMethodItem(e)}>
                <>
                    <label htmlFor="fullName">Título</label>
                    <input type="name" name="fullName" id="fullName" onChange={(e) => setFormSpecialty({ ...formSpecialty, ["title"]: e.target.value })} />

                    <button type="submit">Salvar</button>
                </>
            </form>

            {typeof allSpecialties == "string" ? (<p>Opa, sem especialidade</p>) : (<>
                {
                    allSpecialties!.map((el: any) => (
                        <>
                            <p>{el.title}</p>
                            <a style={{ cursor: "pointer" }} onClick={() => deleteMethodItem(el.id)}>Excluir</a>
                        </>
                    ))
                }</>)
            }

        </>
    )
}

export default Specialties;