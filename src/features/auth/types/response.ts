export type UserResponse = {
    content: {
        id: string;
        username: string;
        email: string;
        first_name?: string | null;
        last_name?: string | null;
        role: {
            id: string;
            title: string;
            access?: string[] | null;
        };
        state: 0 | 1 | 2 | 3;
        created_at: string;
    } | null;
    error: {
        type: 1 | 2;
        content: any;
    } | null;
};
