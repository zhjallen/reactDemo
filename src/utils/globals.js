import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, Link, browserHistory } from 'react-router';
/**
 * 全局变量
 */
window.React = React;
window.ReactDOM = ReactDOM;
/**
 * 路由
 */
window.Link = Link;
window.Router = Router;
window.Route = Route;
window.IndexRoute = IndexRoute;
// window.RootRoute = RootRoute;
// window.ModuleRoute = ModuleRoute;
window.IndexRedirect = IndexRedirect;
window.History = browserHistory;

