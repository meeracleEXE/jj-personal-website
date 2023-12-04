import preactLogo from '../assets/preact.svg';
import './style.css';
import Projects from '../projects'

export function Page() {
	return (
		<div class='page-content'>
			<section id='about-me-section'>
				<h1>ABOUT ME</h1>

			</section>
			<section id='project-section'>
				<h1>PROJECTS</h1>
				<Projects/>
			</section>
			<section id='academic-section'>
				<h1>ACADEMIC</h1>
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
