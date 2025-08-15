export interface IPot {
    id: string;
    title: string;
    description?: string;
    monthlyAmount: number;
    color: string;
}

export interface IUserState {
    user: {
        id: string;
        login: string;
        name: string;
    },
    pots: {
        total: number;
        list: IPot[];
    },
    friends: unknown[],
    budgets: unknown[]
}

export interface RootState {
    user: IUserState;
}

export interface ITheme {
    name: string,
    color: string,
    use: boolean
}
