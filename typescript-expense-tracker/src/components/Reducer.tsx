type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Create = 'CREATE_ITEM',
  Delete = 'DELETE_ITEM',
  Add = 'ADD_ITEM',
}
// ITEM
type ItemType = {
  id: number;
  name: string;
  price: number;
};

type ItemPayLoad = {
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ItemAction = ActionMap<ItemPayLoad>[keyof ActionMap<ItemPayLoad>];

export const ItemReducer = (
  state: ItemType[],
  action: ItemAction | TodoCartActions
) => {
  switch (action.type) {
    case Types.Create: {
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    }
    case Types.Delete:
      return [...state.filter((item) => item.id !== action.payload.id)];
    default:
      return state;
  }
};

type TodoCartPayLoad = {
  [Types.Add]: undefined;
};

export type TodoCartActions = ActionMap<TodoCartPayLoad>[keyof ActionMap<
  TodoCartPayLoad
>];

export const TodoCartReducer = (
  state: number,
  action: ItemAction | TodoCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1;
    default:
      return state;
  }
};
