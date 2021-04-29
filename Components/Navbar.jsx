import Link from "next/link"
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    const router = useRouter()
    const isActive = (route) => {
        if (route === router.pathname) {
            return `${styles.active}`
        }
        else ""
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="">
                    <Link href="/"><a className={`${styles.link__text} ${isActive("/")}`}>Home</a></Link>
                    <Link href="/profile"><a className={`${styles.link__text} ${isActive("/profile")}`} >Profile</a></Link>
                    <Link href="/admin/product/new"><a className={`${styles.link__text} ${isActive("/admin/product/new")}`} >Create Product</a></Link>
                </div>
                <div>
                    <Link href="/"><a className="navbar-brand" >Shop</a></Link>
                </div>
                <div className="" >
                    <Link href="/login"><a className={`nav-link text-dark ${isActive("/login")}`} >Login</a></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
