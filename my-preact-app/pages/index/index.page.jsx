import './style.css';
import AboutMe from '../aboutme';
import Projects from '../projects';
import Exp from '../exp';
import Academic from '../academic';

export function Page() {
	return (
		<div class='page-content'>
			<section id='about-me-section'>
				<h1>About Me</h1>
				<AboutMe/>
			</section>
			<section id='project-section'>
				<h1>Projects</h1>
				<Projects/>
			</section>
			<section id='exp-section'>
				<h1>Experiences</h1>
				<Exp/>
			</section>
			<section id='academic-section'>
				<h1>Academic</h1>
				<Academic/>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
