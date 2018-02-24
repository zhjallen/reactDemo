// 多语言支持
import {
    addLocaleData,
    IntlProvider
} from 'react-intl';
// 多语言定义
import enLocale from './intl/en-US';
import cnLocale from './intl/zh-CN';

// 读取多语言配置
const isZhCN =
    (typeof localStorage !== 'undefined' && localStorage.getItem('locale') === 'zh-CN') ||
    (navigator.language === 'zh-CN');
const appLocale = isZhCN ? cnLocale : enLocale;
addLocaleData(appLocale.data);
const appRoute = ( 
    <IntlProvider 
    locale = {appLocale.locale} 
    messages = {appLocale.messages}>
    <Router history={History}>

    </Router>
    </IntlProvider>
)
export default appRoute;
