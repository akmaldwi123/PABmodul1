class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        this.setState({count: this.state.count - 1});
    }

    render(){
        return(
            <div>
                <h1>Pengenalan React Tingkat Dasar</h1>
                <h2>Counter</h2>
                <h2>{this.state.count}</h2>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.increment}>+1</button>
            </div>
        );
    }

}
// export default App;
const myElement = <App />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);