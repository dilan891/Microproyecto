import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../contexts/UserContext";
import styles from "../Layout/Layout.module.css";

export function Layout() {
    return (
        <UserContextProvider>
          <main>
              <Navbar />
              <section className={styles.body}>
                <Outlet />
              </section>
              <Footer />
          </main>
        </UserContextProvider>
        
      );
}