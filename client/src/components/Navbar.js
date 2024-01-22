import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link>
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;