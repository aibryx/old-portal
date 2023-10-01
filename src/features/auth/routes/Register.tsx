import { RegisterForm } from '../components/RegisterForm/RegisterForm.jsx';
import { useState } from 'react';
import { ConfirmEmailForm } from '@/features/auth/components/ConfirmEmailForm/ConfirmEmailForm.tsx';

export const Register = () => {
	const [emailForConfirm, setEmailForConfirm] = useState<string>('');

	return emailForConfirm ? <ConfirmEmailForm email={emailForConfirm}/> : <RegisterForm setEmail={setEmailForConfirm}/>;
};
