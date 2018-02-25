export default class Dashboard extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                {this.props.children || '主界面'}
            </div>
        );
    }
}