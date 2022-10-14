//emotion
import { css } from '@emotion/react'

const mainStyle = css({
	color: '#fff',
	width: '100%',
	height: '100vh',
	display: 'flex',
	flexFlow: 'column',
	alignItems: 'center',
	justifyContent: 'center',
})

const bigTitleStyle = css({
	fontSize: 'clamp(1.5rem, 7vw, 5rem)',
	lineHeight: '1',
	backgroundImage: 'linear-gradient(45deg, var(--deep-purple), var(--medium-purple))',
	backgroundSize: '100%',
	backgroundClip: 'text',
	textFillColor: 'transparent',
	filter: 'drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.75))',
})

const textStyle = css({
	color: '#999',
	maxWidth: '40%',
	textAlign: 'center',
	marginTop: '2rem',
})

const App = () => {
	return (
		<main css={mainStyle}>
			<h1 css={bigTitleStyle}>AnimePost</h1>

			<p css={textStyle}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est
				ducimus incidunt adipisci delectus exercitationem molestias vel officia
				rerum aspernatur.
			</p>
		</main>
	)
}

export default App
