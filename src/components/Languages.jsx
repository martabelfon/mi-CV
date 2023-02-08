import { useSelector } from "react-redux";

const Languages = () => {
    const {languages} = useSelector((state) => state.cv.CV);
    return(
        <div>
            {languages.map((lang) => (
                <ul key={JSON.stringify(lang)}>
                    <li>{lang.language}</li>
                    <li>{lang.wrlevel}</li>
                    <li>{lang.splevel}</li>
                </ul>
            ))}
        </div>
    )
};

export default Languages;