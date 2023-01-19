import { createContext, useReducer, ReactNode, Reducer, useContext } from 'react';



interface IProps {
    children: ReactNode
}

interface IState {
    product: any
}

const initState: IState = {
    product: null
}

const productContext = createContext<any>({})

