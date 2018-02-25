export default class Layout extends Component {
    constructor(props) {
        super();
    }
    render() {
        console.log(this.props.children, 'props')
        return (
            <div>
                <h1>登录界面</h1>
                {this.props.children || 'children为空'}
            </div>
        );
    }
}
