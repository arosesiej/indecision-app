let visibility = false;

// flip from current state to opposite
const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? "Hide details" : "Show details"}
            </button>
            {visibility && (
                <div>
                    <p>Here are some details.</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();


// Ternary operator explanation
// if visibility true - then "hide", if false then "show"

// Logical && operator
// We only want to render one thing
// If visibility is true then display what's contained