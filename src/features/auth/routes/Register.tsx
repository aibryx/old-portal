import { RegisterForm } from '../components/RegisterForm/RegisterForm.jsx';
import { ConfirmEmailForm } from '@/features/auth/components/ConfirmEmailForm/ConfirmEmailForm.tsx';
import { useRegisterStore } from "@/store/store.ts";

export const Register = () => {
	const email = useRegisterStore(state => state.registerInfo.email);

	return email ? <ConfirmEmailForm email={email}/> : <RegisterForm/>;
};
