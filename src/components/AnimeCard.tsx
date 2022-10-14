import { css } from '@emotion/react'
import { FC } from 'react'
import { Anime } from '../data/anime'

//lazy loading the img

const cardContainer = css({
	backgroundColor: '#999',
})

const AnimeCard: FC<Anime> = (anime) => {
	return (
		<article css={cardContainer}>
			<h1>{anime.title}</h1>
			<p>{anime.description}</p>
		</article>
	)
}

export default AnimeCard
