import GetionEtatReducer from "../reducer/GestionReducer"
import Formulaire from "./Formule"; 


const GestDepense =()=>{
    const [state, dispatch] = GetionEtatReducer();

    return(
        <>
        <h1>Bienvenu au gestionaire de depense</h1>
        <Formulaire/>
        </>
    )
}

export default GestDepense;