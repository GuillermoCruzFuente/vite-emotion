//emotion
import { css } from '@emotion/react'
import animesData from './data/anime'
import AnimeCard from './components/AnimeCard'
import Nav from './components/Nav'

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
	paddingBlock: '3rem',
})

const containerLeftTop = css({
	color: '#fff',
	width: '100%',
	display: 'flex',
	flexFlow: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
})

const cardsContainer = css({
	width: '75%',
	margin: '0 auto',
	display: 'grid',
	gridAutoRows: 'auto',
	gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
	gap: '2rem',
})

const bigTitleStyle = css({
	lineHeight: '1.3',
	backgroundImage: 'linear-gradient(0deg, var(--deep-purple), var(--medium-purple))',
	backgroundSize: '100%',
	backgroundClip: 'text',
	textFillColor: 'transparent',
	filter: 'drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.75))',
})

const bigFont = css({
	fontSize: 'clamp(1.5rem, 7vw, 5rem)',
})

const midFont = css({
	fontSize: 'clamp(1.5rem, 7vw, 3rem)',
})

const carrousel = css({
	width: '100%',
	height: '400px',
	backgroundColor: '#000',
})

const App = () => {
	return (
		<>
			<Nav />
			<header css={[containerLeftTop]}>
				<div css={[carrousel, containerCenter]}>
					<h1>title goes here</h1>
				</div>
			</header>
			<main css={[containerCenter, { backgroundColor: '#27042D' }]}>
				<h1 css={[bigTitleStyle, midFont, { marginBottom: '3rem' }]}>
					Últimos agregados
				</h1>
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
