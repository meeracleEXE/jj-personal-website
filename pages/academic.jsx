import './card/card.css'

export default function Academic() {
    const eduList = [
        {
            name: 'University of Georgia, Athens, GA',
            degree: 'B.S. in Computer Science',
            date:'December 2023',
            awards: 'Dean\'s list (Fall 2021, Fall 2022), Presidential Scholar (Spring 2023)',
            scholarship: 'OGE International Student Tuition Award (2022-2024)',
            GPA: '3.72'
        },
        {
            name: 'Green River College, Auburn, WA',
            degree: 'Associate in Computer Science, Physics, Engineering',
            date:'June 2021',
            GPA: '3.89 (Honors)'
        }
    ];

    return(
        <div class='edu-grid'>
                {eduList.map((item) => 
                <>
                    <h2 id='date'>{item.date}</h2>
                    <div id='square-card-edu'>
                    <h1>{item.name}</h1>
                    <h2>{item.degree}</h2>
                    {item.awards !== undefined && <h2>{item.awards}</h2>}
                    {item.scholarship !== undefined && <h2>{item.scholarship}</h2>}
                    <h2>GPA: {item.GPA}</h2>
                    </div>
                    
                </>
                )}
        </div>
    );
}