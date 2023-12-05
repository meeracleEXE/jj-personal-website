import { PageContextProvider } from './usePageContext';
import './PageShell.css';
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
				<div class='socials'>
					<a class='button-link' target='_blank' href='https://www.linkedin.com/in/jw27180/'>
						<img src={linkedin} alt='linkedin logo'/>
					</a>
					<a class='button-link' target='_blank' href='https://www.github.com/meeracleEXE'>
						<img src={github} alt='github logo'/>
					</a>
				</div>
				<ul>
					<li>
						<img style={{marginBottom:0}} src={locationIcon} alt='location icon'/>
					</li>
					<li>
					<p>Athens, GA</p>
					</li>
					<li>
					<img style={{marginBottom:0}} src={mailIcon} alt='location icon'/>
					</li>
					<li>
					<a id='mail' href='mailto:junjiewong.99@gmail.com'>
					junjiewong.99@gmail.com
					</a>
					</li>
				</ul>
				<a href='/pages/assets/RESUME (CS) - Jun Jie Wong.pdf' download='Jun Jie Wong - RESUME' id='dl'>Download CV</a>
			</nav>
			<nav id='nav'>
				<a href="#about-me-section">
					About Me
				</a>
				<a href="#project-section">
					Projects
				</a>
				<a href="#exp-section">
					Experience
				</a>
				<a href="#academic-section">
					Academic
				</a>
			</nav>
		</header>
	);
}
