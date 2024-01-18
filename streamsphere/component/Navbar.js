import Image from 'next/image'
import Link from 'next/link'
import metamask from '../public/metamask.png'

const Navbar = () => {
  return (
    <div className='container'>
      <h1 className='main'>StreamSphere</h1>
      <div className="sub-container">
        <Link className='link' href='/marketplace'><h2>Marketplace</h2></Link>
        <Link className='link' href='/inventory'><h2>Inventory</h2></Link>
        <Link className='link' href='/dashboard'><h2>Dashboard</h2></Link>
        <div className='wallet'>
            <Image src={metamask} className='image-metamask'/>
            <Link className='link' href='/wallet'><h3>Connect Wallet</h3></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
