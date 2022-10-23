import { css } from '@emotion/react'
import { FC } from 'react'
import { Anime } from '../data/anime'
import downloadIcon from '../static/img/icons/download.svg'
import AnimeStatus from './AnimeStatus'
import Chip from './Chip'

/**
 * @TODO lazy loading the img
 */
const cardContainer = css(
	{
		backgroundColor: '#380768',
		borderRadius: '0.75rem',
		boxShadow: '0px 0px 10px #000',
		overflow: 'hidden',
		transition: 'box-shadow 200ms',
		display: 'flex',
		flexFlow: 'column',
	},
	css`
		&:hover {
			box-shadow: 0px 0px 20px #000;
		}

		&:hover > div img.card-img {
			transform: scale(1.075);
		}
	`
)

const flexCenter = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})

const cardImgContainer = css(
	{
		overflow: 'hidden',
		aspectRatio: '6/8',
		width: '100%',
		backgroundColor: 'tomato',
		position: 'relative',
		zIndex: '0',
	},
	flexCenter
)

const cardImage = css({
	position: 'absolute',
	transition: 'transform 200ms',
})

const cardDetailsContainer = css({
	padding: '1rem',
	flexGrow: '1',
	lineHeight: '1.3',
	hyphens: 'auto',
	textAlign: 'justify',
	display: 'flex',
	flexFlow: 'column',
})

const cardDescriptionContainer = css(
	{
		fontSize: '0.75rem',
		color: '#C3A1E8',
		marginBottom: '1rem',
	},
	// { color: '#fff' }
)

const cardTitle = css({
	fontSize: '1rem',
	fontWeight: '900',
	zIndex: '1',
	position: 'absolute',
	bottom: '-2px',
	backgroundColor: '#000000cc',
	boxShadow: '0px 0px 32px #000',
	width: '100%',
	padding: '1rem',
	paddingBottom: 'calc(1rem + 2px)',
	textAlign: 'center',
	backdropFilter: 'blur(2px)',
})

const cardLink = css(
	{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		color: '#fff',
		fontWeight: '900',
		fontSize: '0.75rem',
		backgroundColor: '#6B17C5',
		textDecoration: 'none',
		padding: '0.75rem',
		textAlign: 'center',
		//this property allow us to put the button at the very bottom, giving the card a constant height.
		marginTop: 'auto',
		borderRadius: '0.75rem',
		transition: 'box-shadow 200ms, background-color 200ms',
	},
	css`
		&:hover {
			box-shadow: 0px 0px 16px rgba(61, 14, 128, 1);
			background-color: #7a0eed;
		}

		&:hover > img {
			transform: rotate(-90deg);
		}
	`
)

const download = css({
	width: '1.25rem',
	height: '1.25rem',
	marginRight: '0.5rem',
	transition: 'transform 500ms',
	transitionTimingFunction: 'cubic-bezier(0.73, -0.58, 0.26, 1.5)',
})

const chipContainer = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	// backgroundColor: '#222',
})

const AnimeCard: FC<Anime> = (anime) => {
	const TOTAL_CHARACTERS = 100

	const computeTextDesciption = () => {
		const cut = anime.description.split('').slice(0, TOTAL_CHARACTERS + 1)
		return cut.reduce((a, b) => a + b).concat('...')
	}

	return (
		<article css={cardContainer}>
			<div css={cardImgContainer}>
				<AnimeStatus status={anime.status} />
				<h1 css={cardTitle}>{anime.title}</h1>
				<img
					src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${anime.poster}`}
					alt={anime.title}
					css={cardImage}
					className='card-img'
				/>
			</div>

			<div css={cardDetailsContainer}>
				<div css={cardDescriptionContainer}>
					<div css={chipContainer}>
						<Chip>{anime.audio}</Chip>
						<Chip>{anime.quality}</Chip>
						<Chip>{anime.status ? 'emisión' : 'finalizado'}</Chip>
						<Chip>{anime.sub ? anime.sub : 'noSub'}</Chip>
					</div>
					<p css={{ marginTop: '0.75rem' }}>{computeTextDesciption()}</p>
				</div>

				<a href={`#${anime.title}-xd`} css={cardLink}>
					<img src={downloadIcon} alt='download' css={download} />
					descargar capítulos
				</a>
			</div>
		</article>
	)
}

export default AnimeCard
