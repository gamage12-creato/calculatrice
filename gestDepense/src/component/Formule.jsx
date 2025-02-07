import React from "react";
import GetionEtatReducer from "../reducer/GestionReducer";
import "../CSS/Style.css";  
const Formulaire = () => {
  const [state, dispatch] = GetionEtatReducer();
  const { label, prix, categories, listcategories, depenses } = state;

  const info = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "label":
        dispatch({ type: "SET_LABEL", value });
        break;
      case "prix":
        dispatch({ type: "SET_PRIX", value });
        break;
      case "categories":
        dispatch({ type: "SET_CATEGORIES", value });
        break;
      default:
        break;
    }
  };

  const ajouter = () => {
    if (!label || !prix || !categories) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const nouvelleDepense = {
      id: Date.now(),
      label,
      prix: parseFloat(prix),
      categories,
    };

    dispatch({ type: "ADD", payload: nouvelleDepense });
    dispatch({ type: "RESET" }); 
  };

  const supprimerDepense = (id) => {
    dispatch({ type: "SUPP", payload: id });
  };

  let affichageDepenses;
  if (depenses.length > 0) {
    affichageDepenses = (
      <table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Prix</th>
            <th>Catégorie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {depenses.map((depense) => (
            <tr key={depense.id}>
              <td>{depense.label}</td>
              <td>{depense.prix.toFixed(2)}€</td>
              <td>{depense.categories}</td>
              <td>
                <button onClick={() => supprimerDepense(depense.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    affichageDepenses = <p>Aucune dépense enregistrée.</p>;
  }

  return (
    <div>
      <h2>Formulaire de dépense</h2>

      <label htmlFor="label">Label</label>
      <input
        type="text"
        name="label"
        id="label"
        placeholder="Entrer le label"
        value={label}
        onChange={info}
      />
      <br />

      <label htmlFor="prix">Prix</label>
      <input
        type="number"
        name="prix"
        id="prix"
        placeholder="Entrer le prix"
        value={prix}
        onChange={info}
      />
      <br />

      <label htmlFor="categories">Catégorie</label>
      <select
        id="categories"
        name="categories"
        value={categories}
        onChange={info}
      >
        <option value="">---</option>
        {listcategories.map((cat) => (
          <option key={cat.id} value={cat.categorie}>
            {cat.categorie}
          </option>
        ))}
      </select>
      <br />

      <button onClick={ajouter}>Ajouter</button>

      <div>
        <h3>Dépenses enregistrées :</h3>
        {affichageDepenses}
      </div>
    </div>
  );
};

export default Formulaire;
