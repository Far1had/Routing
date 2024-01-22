import { Link } from "react-router-dom";
import "./nav.css"
const Nav = () => {
    return (

            <nav>
                <Link to="/"><button>Home</button>  </Link>
                <Link to="/about"><button>About</button></Link>
                <Link to="/contact"><button>Contact</button></Link>
                <Link to="/userlist"><button>User List</button></Link>
            </nav>
        </>
    );
}

export default Nav;