import './NavBar.css';
import logo from './f1_logo.svg';
function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-fixed">
                <div class="container-fluid">
                    <img className="logo" src={logo} ></img>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-3 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Race Results</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Standings</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Schedule</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">News</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;