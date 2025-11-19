
export interface IPot {
    id: string;
    title: string;
    description?: string;

    earnedValue: number;
    goal: number;

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

export interface IOptionsInputAccordion {
    option?: string;
    name: string,
    color?: string,
    use: boolean
}

export interface ITinyLine {
    name: string,
    R$: number
}

export interface IUpdate {
    id: string;
    date: string;
    value: number;
}



export interface IGuestUser {
    user: {
        id: string,
        login: string,
        name: string,
    }

    pots: IGuestPot[]
}

export interface IGuestPot {
    updates: IUpdate[];
    pot: IPot; 
    lastUpdate: string; 
}
