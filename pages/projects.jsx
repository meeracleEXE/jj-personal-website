import Card from './card/card'
import './projects.css'
import c8cinemaVid1 from './assets/demo_videos/c8_cinema_homepage_checkout_showcase.webm'
import c8cinemaVid2 from './assets/demo_videos/c8_cinema_admin.webm'
import playwiserVid from './assets/demo_videos/playwiser_demo.webm'
import rideUGAVid from './assets/demo_videos/rideUGA_demo.webm'
import { useState } from 'preact/hooks'

export default function Projects() {
    const [project, setProject] = useState(0);
    let projectList = [
        {
            id: 0,
            title: 'C8 Cinemas: Cinema E-Booking Website',
            description: 'Cinema E-Booking system with React frontend, Spring Boot middleware and backend',
            tools: 'React, React Boostrap, Spring Boot, JSON Web Token (JWT), Agile, GitHub',
            role: 'Team Leader, 5 Person team, mainly Front End and Integration',
            functionality: 'Customer and admin accounts, Password Reset, CRUD Movies and Showtimes, Filtering and Searching, Cinema Checkout Process, Promotional Emails',
            videoList: [c8cinemaVid1,c8cinemaVid2]
        },
        {
            id: 1,
            title: 'Playwiser: Game Review Website',
            description: 'Simple CRUD App for adding and displaying game reviews with React frontend, Node and Express Backend, with MongoDB database',
            tools: 'React, Node, Express, JSON Web Token (JWT), BCryptJS Hashing, GitHub',
            role: 'Team Leader, 3 Person team, Full Stack Development',
            functionality: 'Admin accounts, CRUD operations, Searching and Filtering',
            videoList: [playwiserVid]
        },
        {
            id: 2,
            title: 'RideUGA: Rideshare App',
            description: 'Rideshare app with "free" rides made for Android devices',
            tools: 'Android Studio, Java, Agile, Google Map API, GitHub',
            role: '2 Person team, Full Stack Development',
            functionality: 'Admin accounts, CRUD operations, Searching and Filtering',
            videoList: [rideUGAVid]
        }
    ];
    return(
        <section class='project-grid'>
            {projectList.map((proj) => 
                <Card proj={proj} project={project} setProject={setProject}/>
            )}

        </section>
    );
}