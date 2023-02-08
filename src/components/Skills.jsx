import { useSelector } from "react-redux";

const Skills = () => {
    const {skills} = useSelector((state) => state.cv.CV);
    return (
        <div>
            {skills.map((ski) => (
                <ul key={JSON.stringify(ski)}>
                    <li>{ski}</li>
                </ul>
            ))}
        </div>
    )
    
};

export default Skills;