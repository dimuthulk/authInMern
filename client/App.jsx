import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./src/components/Main";
import Signup from "./src/components/Singup";
import Login from "./src/components/Login";


function App() {
	const user = localStorage.getItem("name");
	return (
		<Routes>
			{user && <Route path="/" element={<Main />} />}
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
