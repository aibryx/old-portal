import { LoginForm } from '../components/LoginForm';
import { useNavigate } from 'react-router';

export const Login = () => {
	const navigate = useNavigate();
	return <LoginForm onSuccess={() => navigate('/articles')} />;
};
