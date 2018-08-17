/*
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById("app");


const renderCounterApp = () => {
    const templateTwo = (
        <div>  
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    
    
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

*/

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
       
        // default state object
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        //confirm count is a number and not NaN
        // true if not a number - flipped
        if (!isNaN(count)) {
            this.setState(() => ({count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {

        // store in local storage
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
        

    }

    handleAddOne() {
        //prevState - previous state value
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });

        
    }

    handleMinusOne() {
        //prevState - previous state value
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        
        this.setState(() => {
            return {
                count: 0
            };
        });       


        //this.setState(() => {
        //    count: 0
        //});

        //this.setState(() => {
        //     count: this.state.count + 1
        //});



    }


    render() {
        return(
            <div>
                
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}



// could provide a value like "<Counter count={-10}/>"
ReactDOM.render(<Counter />, document.getElementById("app"));