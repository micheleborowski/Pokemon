import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>POKEMON</h1>
            <button><Link to="/map">Start</Link></button>
        </div>
    )
}

export default Home;