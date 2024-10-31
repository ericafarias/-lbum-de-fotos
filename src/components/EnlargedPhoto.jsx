const EnlargedPhoto = ({ foto, setFotoAmpliada }) => {
    if (!foto || !foto.urls) {
        return null;
    }
    return (
        <div
            className="fotoAmpliadaBacdrop"
            onClick={() => setFotoAmpliada(null)}
        >
            <div className="fotoAmpliadaContainer">
                <img src={foto.urls.regular} />
            </div>
        </div>
    );
};

export default EnlargedPhoto;
