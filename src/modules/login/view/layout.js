export default class Layout extends Component {
    constructor(props) {
        super();
    }
    render() {
        console.log(this.props, 'propslayout')
        return (
            <div>
                <span>loginLayout</span>
                {this.props.children || 'children为空'}
            </div>
        );
    }
}
