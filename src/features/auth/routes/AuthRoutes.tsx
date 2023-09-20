import { Route, Routes } from 'react-router-dom';
import { Register } from './Register.tsx';
import { Login } from './Login.tsx';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="register" element={<Register />} />
			<Route path="login" element={<Login />} />
		</Routes>
	);
};
