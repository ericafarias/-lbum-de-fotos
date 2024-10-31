import Photo from "./Photo";

const PhotoList = ({ fotos, setFotoAmpliada }) => {
    return (
        <div className="album">
            {fotos.map((foto) => (
                <Photo
                    key={foto.id}
                    dados={foto}
                    setFotoAmpliada={setFotoAmpliada}
                />
            ))}
        </div>
    );
};

export default PhotoList;
