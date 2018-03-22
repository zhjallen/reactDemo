import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Login from './view/login';


const LoginRouter = (
    <Router>
        <Route path='/login' component={Login} />
    </Router>
);
export default LoginRouter;
