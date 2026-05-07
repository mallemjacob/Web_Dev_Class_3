import Greet from './Greet.jsx'
import Button from './Button.jsx'

function App() {
    const toggle = true
    if (toggle) {
        return (
            <div style={{ backgroundColor: 'lightblue' }}>
                <h1>This is my page</h1>
                <p>This is a paraggra</p>
                <Greet />
            </div>
        )
    } else {
        return (
            <div>
                <p>Nothing to display</p>
            </div>
        )
    }
}

export default App
