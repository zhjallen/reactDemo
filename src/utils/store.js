import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './middlewares/promiseMiddleware';

// 什么是reducer?
// 1.Reducer
// Reducer是一种累积回调，回调函数的返回值为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供
// 在REDUX中，整个的状态就相当于从[初始状态]merge一个[action.state]从而得到一个新的状态
// 随着action的不断传入（发生），不断的得到新的状态的过程
// 2.Middleware
// Middleware主要是负责改变Store中的dispatch方法
// 从而能处理不同类型的 action 输入，得到最终的action 对象,action最终会被reducer处理


// thunkMiddleware使action创建函数可以返回一个function代替一个action对象
/*
export default function thunkMiddleware({ dispatch, getState }) {
  return next => 
     action => 
       typeof action === ‘function’ ? 
         action(dispatch, getState) :  
         next(action);  //交给后续的middleware处理
}
*/

// ------------------此部分可以修改-------------------
export const defaultMiddlewares = [applyMiddleware(thunkMiddleware, promiseMiddleware({ promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR'] }))];
//--------------------------------------------------
export default function createStoreWithMiddleware(middlewares = []) {
    return (...args) => {
        return compose(
            ...defaultMiddlewares,
            window.devToolsExtension ? window.devToolsExtension() : f => f,
        )(createStore)(...args);
    };
}
