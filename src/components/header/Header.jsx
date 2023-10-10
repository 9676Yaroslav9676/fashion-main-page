import logoImg from './../../img/icons/logo.svg'
import './Header.css'


const Header = () => {
 return (
    <header className='header'>
        <div className='container'>
         <div className='header__row'>
           <div className='header__logo'>
             <img src={logoImg} alt="Logo" />
             <span>Fashion</span>
           </div>
           <nav className='header__nav'>
               <ul>
                <li><a href="#!">CATALOUGE</a></li>
                <li><a href="#!">FASHION</a></li>
                <li><a href="#!">FAVORITE</a></li>
                <li><a href="#!">LIFESTYLE</a></li>
                <li><a href="#!" className='header__nav-btn'>SIGN UP</a></li>
               </ul>
           </nav>
         </div>
        </div>
    </header>
 )
}

export default Header