import { Link } from "react-router-dom";

const Header = () => {
    return (<>
        <header>

            <Link className="logo" to="/">Temi Techevent</Link>

            <input id="nav" type="checkbox" />
            <label htmlFor="nav"></label>

            <nav>
                <ul>
                    {/* <Link to="/one">One</Link> */}
                </ul>
            </nav>

        </header>
    </>);
}

export default Header;