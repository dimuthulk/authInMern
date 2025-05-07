import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";


const Main = () => {
		const handleLogout = () => {
			localStorage.removeItem("token");
			window.location.reload();
		};

		return (
			<div className={styles.main_container}>
				<nav className={styles.navbar}>
					<h1>Welcome</h1>
					<button className={styles.white_btn} onClick={handleLogout}>
						Logout
					</button>
				</nav>
				<p>Hello !</p>
			</div>
		);
	};

export default Main;
