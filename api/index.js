import GameApi from './game/index.js'
import UserApi from './user/index.js'
// const url = 'https://test.docater1.cn';
const url = '';
const Api = {
	game: new GameApi(url),
	user: new UserApi(url)
}

export default Api