import './card.css'

export default function Card({proj, project, setProject}) {
    return(
        project !== proj.id ? 
        <div class='card-wrapper' onClick={() => setProject(proj.id)}>
            <h1>{proj.title}</h1>
        </div> : 
        <div class='card-wrapper expanded' onClick={() => setProject(-1)}>
            <h1>{proj.title}</h1>
            <div class='card-content'>
            <h3>{proj.description}</h3>
            <p>Tools: {proj.tools}</p>
            <p>Role: {proj.role}</p>
            <p>Functionality: {proj.functionality}</p>
            <div class='video-container'>
            {proj.videoList.map((vid) =>(
                <video width='48%' src={vid} autoplay muted loop controls>
                </video>
            ))}
            </div>
            </div>
        </div>
    );
}