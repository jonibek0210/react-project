import logo from '../img/logo.svg'
import users from '../img/icons/users.svg'

function Header() {
   return (
      <header>
         <div className='header'>
            <div>
               <img className='logo' src={logo} alt=""/>
            </div>
            <div className='block-gradient'>
               <img src={users} alt="" />
               <p>Outsourcing <br /> Team</p>
            </div>
            <nav>
               <ul>
                  <li>home</li>
                  <li>about us</li>
                  <li>expertise</li>
                  <li>sevices</li>
                  <li>cases</li>
               </ul>
            </nav>
            <div className="block-btn">
               <button>contact us</button>
            </div>
         </div>
      </header>
   )
}

export default Header; 