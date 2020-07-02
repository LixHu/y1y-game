import GameApi from './game/index.js'

const url = '';
const Api = {
	game: new GameApi(url)
}

export default Api