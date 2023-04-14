
export default function NavBar(props) {
    const {
        setTab,
        tab
    } = props;

    console.log(tab)


    return (
        <nav className="navBar">
            <ul className="nav-links">
                <div className="menu">
                    <li>
                        <a className={`${tab==="general"? "active": ""}`} href="" onClick={(e) => {e.preventDefault(); setTab("general")}}>General</a>
                    </li>
                    <li>
                        <a className={`${tab==="business"? "active": ""}`} href="" onClick={(e) => {e.preventDefault();setTab("business")}}>Business</a>
                    </li>
                    <li>
                        <a className={`${tab==="technology"? "active": ""}`} href="" onClick={(e) => {e.preventDefault(); setTab("technology")}}>Technology</a>
                    </li>
                    <li>
                        <a className={`${tab==="sports"? "active": ""}`} href="" onClick={(e) => {e.preventDefault();setTab("sports")}}>Sports</a>
                    </li>
                </div>
            </ul>
        </nav>
    )
}