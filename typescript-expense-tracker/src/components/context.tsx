import React, { createContext, useReducer, Dispatch } from 'react';
import {
  ItemReducer,
  TodoCartReducer,
  ItemAction,
  TodoCartActions,
} from './Reducer';

type ItemType = {
  id: number;
  name: string;
  price: number;
};

type InitialStateType = {
  items: ItemType[];
  TodoCart: number;
};

const initialState = {
  items: [],
  TodoCart: 0,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ItemAction | TodoCartActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { items, TodoCart }: InitialStateType,
  action: ItemAction | TodoCartActions
) => ({
  items: ItemReducer(items, action),
  TodoCart: TodoCartReducer(TodoCart, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
