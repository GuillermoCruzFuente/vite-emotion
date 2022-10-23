import { css } from '@emotion/react'

const navMainContainer = css(
	{
		position: 'fixed',
		width: '100%',
		padding: '0.75rem 3rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		zIndex: '100',
	},
	{
		backgroundColor: '#000000aa',
		backdropFilter: 'blur(10px)',
	}
)

const bigTitleStyle = css({
	lineHeight: '1.3',
	backgroundImage: 'linear-gradient(0deg, var(--deep-purple), var(--medium-purple))',
	backgroundSize: '100%',
	backgroundClip: 'text',
	textFillColor: 'transparent',
	filter: 'drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.75))',
})

const bigFont = css({
	fontSize: 'clamp(1.5rem, 7vw, 2rem)',
})

const linksContainer = css(
	{
		display: 'flex',
	},
	css`
		& > li {
			list-style-type: none;
		}
	`
)

const linkItem = css({
	color: '#fff',
	marginRight: '1rem',
	textDecoration: 'none',
	fontWeight: '900',
	textTransform: 'uppercase',
})

const Nav = () => {
	return (
		<nav css={navMainContainer}>
			<h1 css={[bigTitleStyle, bigFont]}>AnimePost</h1>

			<ul css={linksContainer}>
				<li>
					<a css={linkItem} href='#'>
						inicio
					</a>
				</li>
				<li>
					<a css={linkItem} href='#'>
						series
					</a>
				</li>
				<li>
					<a css={[linkItem, { marginRight: '0' }]} href='#'>
						películas
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
