type Audio = 'JAP' | 'ESP' | 'ENG'
type Quality = '4K' | '1080p' | '720p'
type Status = boolean
type Sub = 'EspLat' | 'Eng' | 'Multi' | 'No'

export type Anime = {
	title: string
	description: string
	poster: string
	audio: Audio
	sub?: Sub
	quality: Quality
	status: Status
}

const animes: Array<Anime> = [
	{
		title: 'Chainsaw Man',
		description:
			'La vida de pobreza de Denji cambia para siempre cuando se fusiona con su nueva mascota Pochita; una mezcla de perro y sierra mecánica.',
		poster: '/cOyU8ScRGKXChrRsxdrt6nYkzFh.jpg',
		audio: 'JAP',
		quality: '1080p',
		status: true,
	},
	{
		title: 'Kiseijuu Sei no Kakuritsu',
		description:
			'Una especie de alienígenas parásitos desciende a la Tierra y se infiltra rápidamente en la humanidad introduciéndose en el cerebro de objetivos vulnerables.',
		poster: '/2ngHwPQhHGPpLkLQd2MTAI3iXPq.jpg',
		status: false,
		audio: 'JAP',
		sub: 'EspLat',
		quality: '1080p',
	},
	{
		title: 'One Punch Man',
		description:
			'Saitama es un héroe que sólo se convirtió en héroe por diversión. Sin embargo, tras tres años de entrenamiento especial, se ha vuelto tan fuerte que es prácticamente invencible.',
		poster: '/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg',
		audio: 'JAP',
		sub: 'No',
		quality: '1080p',
		status: true,
	},
	{
		title: 'Cyberpunk: Edgerunners',
		description:
			'En una distopía plagada de corrupción e implantes cibernéticos, un talentoso pero imprudente chico de la calle se esfuerza por convertirse en un forajido mercenario: un edgerunner.',
		poster: '/4CgMd3q8vy4bodVqS2Mp9epORmU.jpg',
		audio: 'JAP',
		sub: 'Multi',
		quality: '1080p',
		status: false,
	},
	{
		title: 'Isekai Ojisan',
		description:
			'Después de estar en coma durante 17 años, el tío de Takafumi, de mediana edad, se despierta de repente hablando un idioma irreconocible y con poderes mágicos.',
		poster: '/vXWyuYKxGs7Lu0lIKyOMG5ZNIK.jpg',
		audio: 'JAP',
		sub: 'Multi',
		quality: '1080p',
		status: true,
	},
	{
		title: 'SpyXFamily',
		description:
			'Todo el mundo tiene una parte de sí mismos que no puede mostrar a los demás. En una era en la que las naciones de todo el mundo se encuentran involucradas en una feroz guerra.',
		poster: '/vaIREdPGZOnW9Jrs86mheVVlIQQ.jpg',
		audio: 'JAP',
		sub: 'Multi',
		quality: '1080p',
		status: true,
	},
]

export default animes
