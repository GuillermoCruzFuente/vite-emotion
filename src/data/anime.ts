type Audio = 'JAP' | 'ESP' | 'ENG'
type Quality = '4K' | '1080p' | '720p'
type Status = 'Emision' | 'Finalizado'
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
			'La vida de pobreza de Denji cambia para siempre cuando se fusiona con su nueva mascota Pochita; una mezcla de perro y sierra mecánica. Ahora vive en la gran ciudad y es oficialmente un cazador de demonios. Sin embargo, deberá aprenderlo todo sobre su nuevo trabajo y sus nuevos superpoderes.',
		poster: '/cOyU8ScRGKXChrRsxdrt6nYkzFh.jpg',
		audio: 'JAP',
		quality: '1080p',
		status: 'Emision',
	},
	{
		title: 'Kiseijuu: Sei no Kakuritsu',
		description:
			'Una especie de alienígenas parásitos desciende a la Tierra y se infiltra rápidamente en la humanidad introduciéndose en el cerebro de objetivos vulnerables; seres insaciables que adquieren el control total de su huésped y son capaces de transformarse para alimentarse de presas desprevenidas.',
		poster: '/2ngHwPQhHGPpLkLQd2MTAI3iXPq.jpg',
		status: 'Finalizado',
		audio: 'JAP',
		sub: 'EspLat',
		quality: '1080p',
	},
	{
		title: 'One Punch Man',
		description:
			'Saitama es un héroe que sólo se convirtió en héroe por diversión. Sin embargo, tras tres años de entrenamiento especial, se ha vuelto tan fuerte que es prácticamente invencible. De hecho, es demasiado fuerte: incluso sus oponentes más poderosos son eliminados de un solo golpe, y resulta que ser devastadoramente poderoso es en realidad un poco aburrido. Con su pasión por ser un héroe perdida junto con su pelo, y aún así enfrentándose a nuevos enemigos cada día, ¿cuánto tiempo más podrá seguir adelante?',
		poster: '/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg',
		audio: 'JAP',
		sub: 'No',
		quality: '1080p',
		status: 'Finalizado',
	},
]

export default animes
