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
            time:'September 2022 - December 2023',
            pic:notePic
        },
        {
            title:'Teaching Assistant',
            location:'University of Georgia, Athens',
            time:'January 2023 - April 2023',
            pic:applePic
        },
        {
            title:'Vice President',
            location:'International Student Events',
            time:'January 2020 - December 2020',
            pic:globePic
        },
        {
            title:'Exchange Student',
            location:'AFS Malaysia to Germany',
            time:'March 2017 - January 2018',
            pic:travelPic
        },
    ]
    return(
        <div class='exp-grid'>
            {expList.map((exp)=><SquareCard exp={exp}/>)}
        </div>
    );
}