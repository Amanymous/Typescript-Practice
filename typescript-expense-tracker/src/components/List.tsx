import React from 'react';
import { AppContext } from './context';
import { Types } from './Reducer';

export const List = () => {
  const [form, setForm] = React.useState({
    name: '',
    price: 0,
  });
  const { state, dispatch } = React.useContext(AppContext);
  const handleForm = (type: string, value: string) => {
    setForm((form) => ({
      ...form,
      [type]: value,
    }));
  };
  const createItem = () => {
    dispatch({
      type: Types.Create,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: form.name,
        price: form.price,
      },
    });
  };
  const deleteItem = (id: number) => {
    dispatch({
      type: Types.Delete,
      payload: {
        id,
      },
    });
  };
  return (
    <div>
      <br />
      <input
        value={form.name}
        onChange={(e) => {
          handleForm('name', e.target.value);
        }}
        placeholder="Name"
      />
      <br />

      <input
        value={form.price}
        type="number"
        onChange={(e) => {
          handleForm('price', e.target.value);
        }}
        placeholder="Price"
      />
      <br />

      <button className="add-items" onClick={createItem}>
        Add Items
      </button>
      <br />

      <div style={{ marginTop: 20 }}>
        {state.items.map((c) => (
          <div>
            <span>
              <h3>{c.name}</h3>
            </span>
            <br />
            <span>
              <h3>{c.price}</h3>
            </span>
            <br />
            <button onClick={() => deleteItem(c.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
