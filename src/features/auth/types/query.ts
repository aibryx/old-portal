export type SignUpQuery = SignInQuery & {
    email: string;
};

export type SignInQuery = {
    username: string;
    password: string;
};
