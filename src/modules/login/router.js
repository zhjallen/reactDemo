import { Route, Router, IndexRoute } from 'react-router';
import Layout from './view/layout';
import Login from './view/login';

const LoginRouter = (
    <Router>
        <Route path='/login' component={Layout}>
            {/* <IndexRoute component={Layout} /> */}
            <Route path='/user' component={Login} />
        </Route>
    </Router>
);
export default LoginRouter;
