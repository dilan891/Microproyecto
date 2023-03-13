import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { useState } from "react";
import { HOME_URL, LOGIN_URL, MOVIELIST_URL } from "../../constants/urls";
import {
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase/auth"
import { useUserContext } from "../../contexts/UserContext";
import { Loading } from "../../components/Loading/Loading";

export function Register() {
    const { isLoadingUser } = useUserContext();
    const navigate = useNavigate();
    const [formData, setData] = useState({displayName:""});

    const onSuccess = () => {
        console.log("REGISTER SUCCESS");
        navigate(MOVIELIST_URL);
    };

    const onFail = (_error) => {
        console.log("REGISTER FAILED, Try Again");
    };

    const validateForm = () => {
         console.log(formData.displayName)
        if (formData.email.length == 0) {
            document.getElementById("email").style.border = "2px solid red";
            return false;
        }
        if (formData.password.length < 6) {
            document.getElementById("password").style.border = "2px solid red"; 
            return false;
        }
        if (!formData.displayName) {
            document.getElementById("name").style.border = "2px solid red";
            return false;
        }
        return true;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        else{
             
        await registerWithEmailAndPassword({
        userData: formData,
        onSuccess,
        onFail,
        });
        }
       console.log(formData);
    };

    const handleGoogleClick = async () => {
        await signInWithGoogle({
        onSuccess: () => navigate(MOVIELIST_URL), });
    };

    const onChange = (event) => {
        setData((oldData) => ({
        ...oldData,
        [event.target.name]: event.target.value,
        }));
    };

    if(isLoadingUser) return (<Loading></Loading>)

    return(
        <div className={styles.container}>
            <form className={styles.form}>
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
                    <h1 className={styles.title}>Registrarse</h1>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="name"><span>Ingrese su nombre completo</span></label>
                        <input type="name" name="displayName" id="name" placeholder="Nombre" onChange={onChange}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="email"><span>Ingrese su correo</span></label>
                        <input type="email" name="email" id="email" placeholder="correo@email.com" onChange={onChange}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="password"><span>Ingrese su contraseña</span></label>
                        <input type="password" name="password" id="password" placeholder="********" onChange={onChange}/>
                    </div>
                    <button type="submit" className={styles.submitBtn} onClick={handleSubmit}>Registrarse</button>
                    <button type="button" className={styles.googleBtn} onClick={handleGoogleClick}>Registrarse con Google</button>
                    <Link to={LOGIN_URL} className={styles.redirect}>
                    ¿Ya tines una cuenta? {" "}
                        <span className={styles.txt}>Iniciar Sesión</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}