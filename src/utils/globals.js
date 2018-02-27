import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, IndexRoute, IndexRedirect, Link, browserHistory } from 'react-router';
/**
 * 全局变量
 */
window.React = React;
window.ReactDOM = ReactDOM;
window.Component = Component;
/**
 * 路由
 */
window.Link = Link;
window.Router = Router;
window.Route = Route;
window.IndexRoute = IndexRoute;
window.IndexRedirect = IndexRedirect;
window.History = browserHistory;
/*
redux
*/
window.connect = connect;
window.bindActionCreators = bindActionCreators;

