import './card.css'

export default function squareCard({exp}){
    return(
        <div id='square-card'>
            <img height='100px'src={exp.pic} alt='picture experiences'/>
            <div>
            <h1>{exp.title}</h1>
            <h2>{exp.location}</h2>
            <h2>{exp.time}</h2>
            </div>
        </div>
    );
}