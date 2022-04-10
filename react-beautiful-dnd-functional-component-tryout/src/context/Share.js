import React from 'react';
import initialData from 'src/initial-data';

let ShareContext = React.createContext();

export default function ShareContextProvider({ children }) {
  let [state, setState] = React.useState(initialData);

  const handleColumnEditClick = (e, column_id) => {
    alert(`handleColumnEditClick ${column_id}`);
  };
  const handleColumnDeleteClick = (e, column_id) => {
    alert(`handleColumnDeleteClick ${column_id}`);

    let new_columns = {};
    Object.keys(state.columns).forEach((k) => {
      if (k !== column_id) {
        new_columns[k] = state.columns[k];
      }
    });
    let new_column_order = state.columnOrder.filter((co) => co !== column_id);

    setState({ ...state, columns: new_columns, columnOrder: new_column_order });
  };

  const handleItemEditClick = (e, item_id) => {
    alert(`handleItemEditClick ${item_id}`);
  };
  const handleItemDeleteClick = (e, item_id) => {
    alert(`handleItemDeleteClick ${item_id}`);
  };

  return (
    <ShareContext.Provider
      value={{
        handleColumnEditClick,
        handleColumnDeleteClick,
        handleItemEditClick,
        handleItemDeleteClick,
        state,
        setState,
      }}>
      {children}
    </ShareContext.Provider>
  );
}

export { ShareContext };
