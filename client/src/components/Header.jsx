import "./Header.css"
import pro2 from "../assets/bbg.jpg"
const Header = () => {return (<div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src={pro2} alt="background" className="headerImg" />
        </div>)}
export default Header