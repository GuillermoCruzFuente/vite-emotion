import { css } from '@emotion/react'

const cardStatus = css({
	position: 'absolute',
	zIndex: '1',
	top: '0px',
	right: '0px',
	backgroundColor: '#190423',
	boxShadow: '0px 0px 16px #000',
	padding: '0.25rem 1rem',
	borderRadius: '0px 0px 0px 0.75rem',
	fontWeight: '900',
	fontSize: '0.6rem',
	display: 'flex',
	alignItems: 'center',
})

const circleStatus = css({
	width: 8,
	height: 8,
	borderRadius: '100%',
	marginRight: '0.25rem',
	backgroundColor: 'var(--status-color)',
})

type Status = {
	status: boolean
}

const AnimeStatus = ({ status }: Status) => {
	const computeCircleColor = () => (status ? '#28C641' : '#C62828')

	const computeText = () => (status ? 'En Emisión' : 'Finalizado')

	return (
		<div css={cardStatus}>
			<span
				css={circleStatus}
				style={{
					['--status-color' as any]: computeCircleColor(),
				}}
			/>
			<p>{computeText()}</p>
		</div>
	)
}

export default AnimeStatus
