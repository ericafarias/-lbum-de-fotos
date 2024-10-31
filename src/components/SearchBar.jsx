import { useState } from "react";
const SearchBar = ({ setQuary, setCategoria, setActivateSearch }) => {
    const [localQuery, setLocalQuery] = useState("");
    const categorias = [
        "Natureza",
        "Pessoas",
        "Tecnologias",
        "Animail",
        "Esporte",
    ];
    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Pesquisar fotos..."
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
            />
            <button
                onClick={() => {
                    setLocalQuery(localQuery);
                    setActivateSearch(true);
                }}
            >
                Pesquisar
            </button>
            <select
                onChange={(e) => {
                    setCategoria(e.target.value);
                    setActivateSearch(true);
                }}
            >
                <option value="">Todas as categorias</option>
                {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                        {categoria}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SearchBar;
