import { Route, Routes } from 'react-router-dom';
import { Register } from './Register.tsx';
import { Login } from './Login.tsx';
import { ResetPassword } from './ResetPassword.tsx';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="register" element={<Register />} />
			<Route path="login" element={<Login />} />
			<Route path="reset/password" element={<ResetPassword />} />
		</Routes>
	);
};
