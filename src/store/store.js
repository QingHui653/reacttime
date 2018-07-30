import { combineReducers } from 'redux';

//全局reducer
import isLogin from './indexRedux.js'
//子reducer
import NewsRedux  from './NewsRedux.js'


//合并reducer
var rootRedux = combineReducers({
	isLogin,
	NewsRedux
})

export default rootRedux