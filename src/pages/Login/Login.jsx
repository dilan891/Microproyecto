import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import { HOME_URL, REGISTER_URL, MOVIELIST_URL } from "../../constants/urls";
import {
    loginWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase/auth";

export function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const onSuccess = () => {
        navigate(MOVIELIST_URL);
    };

    const onFail = (_error) => {
        console.log("LOGIN FAILED, Try Again");
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        await loginWithEmailAndPassword({ userData: formData, onSuccess, onFail });
    };

    const onChange = (event) => {
        const { name, value } = event.target;

        setFormData((oldData) => ({ ...oldData, [name]: value }));
    };

    const handleGoogleClick = async () => {
        await signInWithGoogle({
        onSuccess: () => navigate(MOVIELIST_URL),
        });
    };

    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.imgContainer}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/microproyecyo.appspot.com/o/Image%202.jpg?alt=media&token=b14aa1e8-9f6c-4680-b81d-fcf6cc3d9986" alt="" />
                </div>
                <div className={styles.formContainer}>
                    <div>
                        <Link to={HOME_URL}>
                            <i className="fa-light fa-x"></i>
                        </Link>
                    </div>
                    <div>
                    <h1 className={styles.title}>Iniciar Sesión</h1>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="email"><span>Ingrese su correo</span></label>
                        <input type="email" name="email" id="email" placeholder="correo@email.com" onChange={onChange}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="password"><span>Ingrese su contraseña</span></label>
                        <input type="password" name="password" id="password" placeholder="********" onChange={onChange}/>
                    </div>

                    <button type="submit" className={styles.submitBtn}>Iniciar Sesión</button>
                    
                    <button type="button" className={styles.googleBtn} onClick={handleGoogleClick}>Inciar Sesión con Google</button>


                    <Link to={REGISTER_URL} className={styles.redirect}>
                    ¿Aún no tines una cuenta? {" "}
                        <span className={styles.txt}>Regístrate</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}