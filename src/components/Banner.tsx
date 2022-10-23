import { css } from '@emotion/react'

const bannerStyles = {
	mainContainer: css({
		width: '100%',
		height: '450px',
		backgroundColor: '#222',
		display: 'flex',
		flexFlow: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingInline: '3rem',
	}),
	textDescription: css({
		fontSize: '1rem',
		width: 'min(450px, 100%)',
	}),
}

const Banner = () => {
	return (
		<div css={bannerStyles.mainContainer}>
			<h1>Anime genérico #1</h1>
			<p css={bannerStyles.textDescription}>
				Persona random se muere, renace en otro mundo, hace un harem y es feliz.
			</p>
		</div>
	)
}

export default Banner
