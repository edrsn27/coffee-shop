import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className='flex justify-between m-4'>
      DISEÑO
      <ul className='flex justify-between'>
        <li className='mr-10'>Products</li>
        <li className='mr-10'>About</li>
        <li className='mr-10'>Contact</li>
      </ul>
    </nav>
  )
}
