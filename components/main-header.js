import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink href="/news">News</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink href="/archive">Archive</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
