import './card.css'

export default function squareCard({exp}){
    return(
        <div class='square-card-wrapper'>
        <h1>{exp.time}</h1>
        <div id='square-card'>
            <div>
            <img height='100px'src={exp.pic} alt='picture experiences'/>
            <h2>{exp.title}</h2>
            <h3>{exp.location}</h3>
            </div>
        </div>
        </div>
    );
}