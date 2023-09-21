import { LoginForm } from '../components/LoginForm/LoginForm.jsx';
import { useNavigate } from 'react-router';

export const Login = () => {
	const navigate = useNavigate();
	const onSuccess = navigate('/articles');
	// @ts-ignore
  return <LoginForm onSuccess={onSuccess} />;
};
