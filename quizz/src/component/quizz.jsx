import quizzReducers from "../reducer/quizzReducer"
import Bouton from "./bouton";
import {useEffect} from "react";

const Quiz = () => {
    const [state, dispatch] = quizzReducers();
    const { questions, currentQuestion, score, timeLeft } = state;

    const fonct_payload =(payload)=>{
        dispatch({ type: "REPONSE_QUIZ", payload: payload });
    }

    const fonct =(caseFonct)=>{
        dispatch({ type: caseFonct});
    }

    useEffect(() => {
        if (timeLeft === 0) {
            dispatch({ type: "NEXT_QUIZ" });
            return;
        }

        const timer = setInterval(() => {
            dispatch({ type: "DECREMENTE" });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, currentQuestion]);

    const currentQ = questions[currentQuestion];
    if (currentQuestion >=questions.length) {
        return(
            <>
            <div style={{ textAlign: "center", margin: "20px" }}>
                <h2>Résultat</h2>
                <p>Score final : <strong>{score}</strong>/{questions.length}</p>
            </div>
            <div>
                <Bouton message="Recommencer" onClick={() => fonct("RESET_QUIZ")}/>
            </div>
            </>
        ) 
    }

    return(
        <>
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>Bienvenu au Quizz</h1>
            <div>
                <h2>Question:</h2>
                <h3>{currentQ.question}</h3>
            </div>

            <div>
                <h3>option possible</h3>
                {currentQ.options.map((option, index) =>(
                <Bouton 
                key={index} 
                message={option} 
                onClick={() => fonct_payload(option)}
                />
                ))}
            </div>

            <div>
                <p>Temps restant : <strong>{timeLeft}</strong> secondes</p>
                <Bouton message="Passer a la questions suivante" onClick={() => fonct("NEXT_QUIZ")}/>
            </div>
        </div>
        </>
    );
};

export default Quiz;
