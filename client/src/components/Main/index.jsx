import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";


const Main = () => {
		const handleLogout = () => {
			localStorage.removeItem("name");
			window.location.reload();
		};

		const [name, setName] = useState("Gest User");
		useEffect(() => {
			const storedName = localStorage.getItem("name");
			if (storedName) {
				setName(storedName);
			}
		}, []);

		return (
			<div className={styles.main_container}>
				<nav className={styles.navbar}>
					<h1>Welcome</h1>
					<button className={styles.white_btn} onClick={handleLogout}>
						Logout
					</button>
				</nav>
				<p>Hello {name}!</p>
			</div>
		);
	};

export default Main;
