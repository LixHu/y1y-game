import GameApi from './game/index.js'
import UserApi from './user/index.js'
const url = 'http://fx.com';
const Api = {
	game: new GameApi(url),
	user: new UserApi(url)
}

export default Api