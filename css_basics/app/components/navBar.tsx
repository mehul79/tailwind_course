import Link from "next/link"

export default function NavBar(){
  
  const nav = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ]
  
  return(
    <div className="navbar-root">
      <div className="logo">Finta</div>
      <div className="links">
        {nav.map((item, idx)=>{
          return(
            <Link href={item.href} key={idx} className="link-items">
              {item.title}
            </Link>
          )
        })}
      <button className="btn">Get Started</button>
      </div>
    </div>
  )
}