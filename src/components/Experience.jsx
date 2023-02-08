import { useSelector } from "react-redux";

const Experience = () => {
    const {experience} = useSelector((state) => state.cv.CV);

    return (
        <div>
            {experience.map(expe => (
            <ul key={JSON.stringify(expe)}>
                <li>{expe.name}</li>
                <li>{expe.date}</li>
                <li>{expe.where}</li>
                <li>{expe.description}</li>
            </ul>
            ))}
        </div>
    )
};

export default Experience;