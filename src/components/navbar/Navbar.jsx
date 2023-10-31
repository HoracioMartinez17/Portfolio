import './navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="wrapper">
        <span>Horacio Dev</span>
        <div className="social">
            <a href="instagram.com"><img src="/facebook.png" alt="" /></a>
            <a href="instagram.com"><img src="/instagram.png" alt="" /></a>
            <a href="instagram.com"><img src="/youtube.png" alt="" /></a>
        </div>
       </div>
    </div>
  )
}
