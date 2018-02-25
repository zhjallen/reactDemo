import React, { Component } from 'react';

class ModuleRoute extends Component {
     constructor(props) {
        super();
    }
    createRouteFromReactElement(element, parentRoute) {
        if ((parentRoute) && (parentRoute.added !== true)) {
          //注册当前路由信息到全局的集合中
          if(window.modules==undefined) window.modules=[];
  
          window.modules.push({
            parentpath:parentRoute.path,
            menu:element.props.menu,
          });
          // 添加实际的路由
          const route = (
            //------------------此部分可以修改-------------------
            <Route added={true} {...element.props}>
              {element.props.children}
            </Route>
            //--------------------------------------------------
          );
          parentRoute.children.push(route);
        }
      }
      render() {
          console.log(this.props,'porps')
          return(
            <div>{this.createRouteFromReactElement(this.props.component,this.props.component)}</div>
          )
      }
} 
export default ModuleRoute;
