export default class Dashboard extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                {this.props.children || '主界面ee5eedddde5544'}
            </div>
        );
    }
}