import { RegisterForm } from '../components/RegisterForm';
import { ConfirmEmailForm } from '@/features/auth/components/ConfirmEmailForm';
import { useRegisterStore } from "@/stores/registerData";

export const Register = () => {
	const email = useRegisterStore(state => state.registerInfo.email);

	return email ? <ConfirmEmailForm email={email}/> : <RegisterForm/>;
};
