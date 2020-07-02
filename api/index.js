import GameApi from './game/index.js'

const url = 'http://fx.com';
const Api = {
	game: new GameApi(url)
}

export default Api