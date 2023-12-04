import { PageContextProvider } from './usePageContext';
import './PageShell.css';

export { PageShell };

function PageShell({ pageContext, children }) {
	return (
		<PageContextProvider pageContext={pageContext}>
			<Header url={pageContext.urlPathname} />
			<main>{children}</main>
		</PageContextProvider>
	);
}

export function Header({ url }) {
	return (
		<header>
			<nav>
				<a href="#about-me-section">
					About Me
				</a>
				<a href="#project-section">
					Projects
				</a>
				<a href="#academic-section">
					Academic
				</a>
			</nav>
		</header>
	);
}
