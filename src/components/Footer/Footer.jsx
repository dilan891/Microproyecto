import { Link, useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import { 
    HOME_URL,
    LOGIN_URL,
    REGISTER_URL,
    PROFILE_URL,
    MOVIELIST_URL
} from "../../constants/urls";
import { useUserContext } from "../../contexts/UserContext";

export function Footer() {
    const navigate = useNavigate();
    const { user, isLoadingUser } = useUserContext();

    const handleLogout = async () => {
        await logout(() => navigate(HOME_URL));
    };
    return (
        <footer className={styles.container}>
            <div className={styles.socialMedia}>
                <h1 className={styles.subtitle}>Redes Sociales</h1>
                <ul className={styles.list}>
                    <li className={styles.items}>

                    </li>
                    <li className={styles.items}>
                        
                    </li>
                    <li className={styles.items}>
                        
                    </li>
                    <li className={styles.items}>
                        
                    </li>
                    <li className={styles.items}>
                        
                    </li>
                    <li className={styles.items}>
                        
                    </li>
                </ul>
            </div>
            <div className={styles.location}>
                <h1 className={styles.subtitle}>Mi Ubicación</h1>
                <p className={styles.info}>Caracas, Venezuela</p>
            </div>
            <div className={styles.winodws}>
                <h1 className={styles.subtitle}>De Interés</h1>
                {!isLoadingUser && (
                    <ul className={styles.list}>
                    {!!user ? (
                        <>
                            <ul className={styles.list}>
                                <li className={styles.items}>
                                    <Link to={MOVIELIST_URL}>
                                        <span>Películas</span>
                                    </Link>
                                </li>
                                <li className={styles.items}>
                                    <Link to={PROFILE_URL}>
                                    <span className={styles.userName}>Perfil</span>
                                    </Link>
                                </li>
                                <li className={styles.items}>
                                    <span className={styles.usuario} onClick={handleLogout}>Salir</span>
                                </li>
                            </ul> 
                        </>
                    ) : (
                        <>
                        <ul className={styles.list}>
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
                        </>
                    )}
                    </ul>
                )}
            </div>
        </footer>
    )
}