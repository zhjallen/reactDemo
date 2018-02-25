// 多语言支持
// import { addLocaleData, IntlProvider } from 'react-init'
// // 多语言定义
// import enLocale from './intl/en-US';
// import cnLocale from './intl/zh-CN';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';
import LoginRouter from './modules/login/router';
import Dashboard from './modules/dashboard/view/dashboard';


// 读取多语言配置
// const isZhCN =
//     (typeof localStorage !== 'undefined' && localStorage.getItem('locale') === 'zh-CN') ||
//     (navigator.language === 'zh-CN');
// const appLocale = isZhCN ? cnLocale : enLocale;
// addLocaleData(appLocale.data);

const appRoute = (
    // <Provider>
    <Router history={browserHistory}>
        <Route path='/' component={Dashboard}>
            {LoginRouter}
        </Route>
    </Router>
    // </Provider>
);
export default appRoute;
