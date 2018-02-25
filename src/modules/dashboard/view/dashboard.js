export default class Dashboard extends Component {
    constructor(props) {
        super();
    }
    render() {
        console.log(this.props, 'props')
        return (
            <div>
                {this.props.children || '主界面'}
            </div>
        );
    }
}