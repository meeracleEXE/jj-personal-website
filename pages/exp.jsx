import './exp.css'
import SquareCard from './card/squareCard'
import travelPic from './assets/travel-icon.png'
import applePic from './assets/apple.png'
import globePic from './assets/globe_icon.png'
import notePic from './assets/note-icon.png'

export default function Exp() {
    const expList = [
        {
            title:'Peer Tutor',
            location:'University of Georgia, Athens',
            time:'Sep 2022 - Present',
            pic:notePic
        },
        {
            title:'Teaching Assistant',
            location:'University of Georgia, Athens',
            time:'Jan 2023 - Apr 2023',
            pic:applePic
        },
        {
            title:'Vice President',
            location:'International Student Events',
            time:'Jan 2020 - Dec 2020',
            pic:globePic
        },
        {
            title:'Exchange Student',
            location:'AFS Malaysia to Germany',
            time:'Mar 2017 - Jan 2018',
            pic:travelPic
        },
    ]
    return(
        <div class='exp-grid'>
            {expList.map((exp)=><SquareCard exp={exp}/>)}
        </div>
    );
}