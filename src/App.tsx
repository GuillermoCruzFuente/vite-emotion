//emotion
import { css } from '@emotion/react'
import animesData from './data/anime'
import AnimeCard from './components/AnimeCard'

const completeContainer = css({
	minHeight: '100vh',
	paddingBlock: '0px',
})

const containerCenter = css({
	color: '#fff',
	width: '100%',
	display: 'flex',
	flexFlow: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	paddingBlock: '5rem',
})

const cardsContainer = css({
	width: '75%',
	margin: '0 auto',
	display: 'grid',
	gridAutoRows: 'auto',
	gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
	gap: '3rem',
})

const bigTitleStyle = css({
	fontSize: 'clamp(1.5rem, 7vw, 5rem)',
	lineHeight: '1.3',
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
		<>
			<header css={[containerCenter, completeContainer]}>
				<h1 css={bigTitleStyle}>Lorem ipsum dolor sit</h1>

				<p css={textStyle}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
					est ducimus incidunt adipisci delectus exercitationem molestias vel
					officia rerum aspernatur.
				</p>
			</header>
			<main css={[containerCenter, { backgroundColor: '#27042D' }]}>
				<h1 css={bigTitleStyle}>List</h1>
				<div css={cardsContainer}>
					{animesData.map((anime) => {
						return <AnimeCard key={anime.title} {...anime} />
					})}
				</div>
			</main>
		</>
	)
}

export default App
