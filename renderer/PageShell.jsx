import { PageContextProvider } from './usePageContext';
import './PageShell.css';
import pdf from '../pages/assets/RESUME (CS) - Jun Jie Wong.pdf'
import pic from '../pages/assets/jjheadshot.jpg'
import linkedin from '../pages/assets/linkedin-icon.png'
import github from '../pages/assets/github-icon.png'
import locationIcon from '../pages/assets/location-icon.png'
import mailIcon from '../pages/assets/mail-icon.png'

export { PageShell };

function PageShell({ pageContext, children }) {
	return (
		<PageContextProvider pageContext={pageContext}>
			<Header url={pageContext.urlPathname} />
			<div style={{minWidth:'310px'}} />
			<main>{children}</main>
		</PageContextProvider>
	);
}

export function Header({ url }) {
	return (
		<header>
			<div id='profile-card'>
				<img src={pic} width='100px' height='100px' alt='head shot of Jun Jie Wong'/>
				<h1>Jun Jie Wong</h1>
				<h3>Aspiring Software/Web Developer</h3>
			</div>
			<nav id='links'>
			<ul>
					<li>
						<img style={{marginBottom:0}} src={locationIcon} alt='location icon'/>
						<p>Athens, GA</p>
					</li>
					<li>
					<img style={{marginBottom:0}} src={mailIcon} alt='location icon'/>
					<a id='mail' href='mailto:junjiewong.99@gmail.com'>
					junjiewong.99@gmail.com
					</a>
					</li>
				</ul>
			</nav>
			<hr id='divider'/>
			<nav id='nav'>
				<a href="#about-me-section">
					About Me
				</a>
				<a href="#academic-section">
					Education
				</a>
				<a href="#project-section">
					Projects
				</a>
				<a href="#exp-section">
					Experience
				</a>
			</nav>
			<a href="https://docs.google.com/document/d/1eUjjUdWct1K2DCnSysC4tHUnC_ohLs_ZwBQajckjXBY/edit?usp=sharing" target='_blank' id='dl'>View CV</a>
			<hr id='divider'/>
			<h1 id='grid-title'>Technical</h1>
			<div class='language-grid'>
			<h2>Java <div class='progress five'></div></h2>
			<h2>React <div class='progress five'></div></h2>
			<h2>HTML <div class='progress four'></div></h2>
			<h2>CSS <div class='progress four'></div></h2>
			<h2>Javascript <div class='progress four'></div></h2>
			<h2>Git <div class='progress four'></div></h2>
			</div>
			<h1 id='grid-title'>Language</h1>
			<div class='language-grid'>
			<h2>English <div class='progress five'></div></h2>
			<h2>Mandarin <div class='progress four'></div></h2>
			<h2>Malay <div class='progress four'></div></h2>
			<h2>German <div class='progress two'></div></h2>
			</div>
			<div class='socials'>
				<a class='button-link' target='_blank' href='https://www.linkedin.com/in/jw27180/'>
					<img src={linkedin} alt='linkedin logo'/>
				</a>
				<a class='button-link' target='_blank' href='https://www.github.com/meeracleEXE'>
					<img src={github} alt='github logo'/>
				</a>
			</div>
		</header>
	);
}
