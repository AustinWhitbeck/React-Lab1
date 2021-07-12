import './Header.css';

interface Props {
    user: string;
}

function Header({user}: Props){
    return (
        <header className="header-container">
            <h1 className="Header">Ice Cream Wars</h1>
            <div className="welcome-user">
                <p>Welcome {user}</p>
            </div>
        </header>
    );
}



export default Header;