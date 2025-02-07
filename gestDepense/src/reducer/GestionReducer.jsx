import { useReducer } from "react";

const initialState = {
    depenses: [],
    total: 0,
    listcategories: [
        { id: 1, categorie: 'Alimentation' },
        { id: 2, categorie: 'Logement' },
        { id: 3, categorie: 'Transport' },
        { id: 4, categorie: 'Divertissement' },
        { id: 5, categorie: 'Santé' },
        { id: 6, categorie: 'Éducation' },
        { id: 7, categorie: 'Autres' },
    ],
    label: "",
    prix: "",
    categories: "",
};

const calculTotal = (depenses) => {
    return depenses.reduce((acc, dep) => acc + dep.prix, 0);
};

const GetionEtatReducers = (state, action) => {

    switch (action.type) {
        case "ADD":
          const addDepenses = [...state.depenses, action.payload];
          const newTotal = calculTotal(addDepenses);
          return { ...state, depenses: addDepenses, total: newTotal };

        case "SUPP":
          const suppDepenses = state.depenses.filter(dep => dep.id !== action.payload);
          const newTotals = calculTotal(suppDepenses);
          return { ...state, depenses: suppDepenses, total: newTotals };

        case "RESET":
          return { ...state, label: "", prix: "", categories: "" };

        case "SET_LABEL":
          return { ...state, label: action.value };

        case "SET_PRIX":
          return { ...state, prix: action.value };

        case "SET_CATEGORIES":
          return { ...state, categories: action.value };

        default:
          return state;
    }
};

const GetionEtatReducer = () => useReducer(GetionEtatReducers, initialState);

export default GetionEtatReducer;
