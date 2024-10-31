const Photo = ({ dados, setFotoAmpliada }) => {
    return (
        <div className="foto" onClick={() => setFotoAmpliada(dados)}>
            <img src={dados.urls.small}></img>
        </div>
    );
};

export default Photo;
