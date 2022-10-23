import { css } from '@emotion/react'

type ChipType = {
	children: string
}

const chipStyle = css({
	backgroundColor: '#210B38',
	color: '#C3A1E8',
	width: 'fit-content',
	padding: '0.25rem 0.5rem',
	fontWeight: '900',
	fontSize: '0.55rem',
	borderRadius: '1rem',
	boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.15)',
})

const Chip = ({ children }: ChipType) => {
	return <div css={chipStyle}>{children}</div>
}

export default Chip
