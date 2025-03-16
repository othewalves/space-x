import { ReactNode, createContext, useState } from "react";

import { FormSchema } from "../validators/form.validator";

export type IUser = Pick<FormSchema, 'name' | 'birthDate' | 'destiny' | 'disease' | 'hasDisease'>;

export interface IUserContext {
    user: IUser;
    setUser: (user: IUser) => void;
}

const defaultUser: IUser = {
    name: '',
    birthDate: new Date('1800-01-01'),
    destiny: '',
    disease: '',
    hasDisease: 'Não',
};


export const UserContext = createContext<IUserContext>({
    user: defaultUser,
    setUser: () => { },
})


export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<IUser>(defaultUser);


    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}