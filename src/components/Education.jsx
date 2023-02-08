import { useSelector } from "react-redux";

const Education = () => {
    const {education} = useSelector((state) => state.cv.CV);
    return (
        <div>
            {education.map((edu) => (
                <ul key={JSON.stringify(edu)}>
                    <li>{edu.name}</li>
                    <li>{edu.where}</li>
                    <li>{edu.date}</li>
                </ul>
            ))}
        </div>
    )
    
};

export default Education;