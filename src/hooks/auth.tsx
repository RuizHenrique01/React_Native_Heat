import React, { createContext, useContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';

const CLIENT_ID = '';
const SCOPE = '';

type User = {
    id: string;
    name: string;
    avatar_url: string;
    login: string;
}

type AuthContextData = {
    user: User | null;
    isSignIning: boolean;
    sigIn: () => Promise<void>;
    sigOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

type AuthResponse = {
    token: string;
    user: User;
}

type AuthorizationResponse = {
    params: {
        code?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isSignIning, setIsSignIning] = useState(false);

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`

    async function sigIn() {

    }

    async function sigOut() {

    }

    return (
        <AuthContext.Provider value={{
            sigIn,
            sigOut,
            user,
            isSignIning,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };