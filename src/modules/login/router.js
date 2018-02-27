import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Login from './view/login';

// const LoginRouter = {
//     path: 'login',
//     component: Layout,
//     // indexRoute: { component: Home },
//     childRoutes: [
//       { path: 'user', component: Login },
//     //   { path: 'inbox', component: Inbox },
//     ],
//   };

const LoginRouter = (
    <Router>
        <Route path='login'  component={Login}>
        </Route>
    </Router>
);
export default LoginRouter;
