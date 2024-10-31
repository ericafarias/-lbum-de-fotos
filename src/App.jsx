import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotosList";
import EnlargedPhoto from "./components/EnlargedPhoto";
import axios from "axios";

import { useEffect, useState } from "react";

function App() {
    const [query, setQuery] = useState("");
    const [categoria, setCategoria] = useState("");
    const [fotos, setFotos] = useState([]);
    const [fotoAmpliada, setFotoAmpliada] = useState(null);
    const [activateSearch, setActivateSearch] = useState(false);

    const fetchData = async ({ query, categoria }) => {
        const apiKey = import.meta.env.VITE_UNSPLASH_KEY_API;
        console.log(apiKey);
        if (query || categoria) {
            let seachQuery = query;
            if (query && categoria) {
                seachQuery = `${query} ${categoria}`;
            } else if (categoria) {
                seachQuery = categoria;
            }

            try {
                const response = await axios.get(
                    `https://api.unsplash.com/search/photos`,
                    {
                        params: {
                            query: seachQuery,
                            client_id: apiKey,
                        },
                    }
                );
                if (
                    response.status === 200 &&
                    response.data &&
                    response.data.results
                ) {
                    setFotos(response.data.results);
                }
            } catch (error) {
                console.log("Ocorreu um erro ao buscar as fotos", error);
            }
            return;
        }
        try {
            const response = await axios.get(
                `https://api.unsplash.com/photos/random`,
                {
                    params: {
                        client_id: apiKey,
                        count: 12,
                    },
                }
            );
            if (response.status === 200 && response.data) {
                setFotos(response.data);
            }
        } catch (error) {
            console.log(
                "Ocorreu um erro ao buscar as fotos aleatórias: ",
                error
            );
        }
    };

    useEffect(() => {
        fetchData({ query, categoria });
    }, []);

    useEffect(() => {
        if (activateSearch) {
            fetchData({ query, categoria });
            setActivateSearch(false);
        }
    }, [activateSearch]);
    return (
        <div className="container">
            <SearchBar
                setQuery={setQuery}
                setCategoria={setCategoria}
                setActivateSearch={setActivateSearch}
            />
            <PhotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
            {EnlargedPhoto && (
                <EnlargedPhoto
                    foto={fotoAmpliada}
                    setFotoAmpliada={setFotoAmpliada}
                />
            )}
        </div>
    );
}

export default App;
