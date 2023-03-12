import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { 
    HOME_URL,
    LOGIN_URL,
    REGISTER_URL,
    PROFILE_URL,
    MOVIELIST_URL
} from "../../constants/urls";
import React, {useState, useEffect} from "react";
import { useUserContext } from "../../contexts/UserContext";
import { logout } from "../../firebase/auth";

export function Navbar() {

    const navigate = useNavigate();
    const { user, isLoadingUser,name } = useUserContext();

    const handleLogout = async () => {
        await logout(() => navigate(HOME_URL));
    };

    const [isOpen, setIsOpen] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
        setIsOpen(!isOpen);
    }

    useEffect(() => {

    const changeWidth = () => {
        setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

    }, [name])

    return (
                
            <nav>
                <Link to={HOME_URL}>
                    <h1>Movie+</h1> 
                </Link>
                {!isLoadingUser && (
                    <ul className={styles.list}>
                    {!!user ? (
                        <>
                        
                        {(toggleMenu || screenWidth > 650) && (
                            <ul className={styles.list} id={styles.list}>
                                <li className={styles.items}>
                                    <Link to={MOVIELIST_URL}>
                                        <span>Películas</span>
                                    </Link>
                                </li>
                                <li className={styles.items}>
                                    <Link to={PROFILE_URL}>
                                    <div className={styles.userAvatar} />
                                    </Link>
                                </li>
                                <li className={styles.items}>
                                    <Link to={PROFILE_URL}>
                                    <span className={styles.userName}>{(user.displayName == null)?name:user.displayName}</span>
                                    </Link>
                                </li>
                                <li className={styles.items}>
                                    <span className={styles.usuario} onClick={handleLogout}>Salir</span>
                                </li>
                            </ul> 
                        )}
                        </>
                    ) : (
                        <>
                        
                        {(toggleMenu || screenWidth > 650) && (
                        <ul className={styles.list} id={styles.list}>
                            <li className={styles.items}>
                                <Link to={HOME_URL}>
                                    <span>Inicio</span>
                                </Link>
                            </li>
                            <li className={styles.items}>
                                <Link to={LOGIN_URL}>
                                    <span>Iniciar sesión</span>
                                </Link>
                            </li>
                            <li className={styles.items}>
                                <Link to={REGISTER_URL}>
                                    <span>Registro</span>
                                </Link>
                            </li>
                        </ul>
                        )}
                        </>
                    )}
                    </ul>
                )}

                <div className={styles.mobile} onClick={toggleNav}>
                    <i id="bar" className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                            
            </nav>
    )
}