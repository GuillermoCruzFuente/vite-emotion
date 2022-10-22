import { css } from '@emotion/react'

const navMainContainer = css(
	{
		position: 'fixed',
		width: '100%',
		padding: '0.75rem 2rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	{
		backgroundColor: '#222',
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
	fontSize: 'clamp(1.5rem, 7vw, 1.5rem)',
})

const linksContainer = css({
	display: 'flex',
})

const linkItem = css({
	color: '#fff',
	marginRight: '1rem',
	textDecoration: 'none',
	listStyle: 'none',
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
