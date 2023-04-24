import { useContext, createContext, useState } from "react";
import { ArrayPhone } from "./data";
const KorzinkaContext = createContext();
const KorzinkaProvider = ({ children }) => {
  const [count, setCount] = useState({});
  const [array, setArray] = useState(ArrayPhone);
  const [loading, setLoading] = useState(false);
  const inc = (id) => {
    setCount((prevCount) => ({
      ...prevCount,
      [id]: (prevCount[id] || 0) + 1,
    }));
  };
  const handleDelete = (id) => {
    setArray(array.filter((phone) => phone.id !== id));
    setCount(0);
  };
  const DeleteAll = () => {
    setArray([]);
  };
  const totalItems = Object.values(count).reduce(
    (total, count) => total + count,
    0
  );

  const totalPrice = Object.keys(count).reduce(
    (total, id) =>
      total +
      (count[id] || 0) * array.find((phone) => phone.id === Number(id)).price,
    0
  );
  const phoneList = array.map((phone) => (
    <article className="Phone-item" key={phone.id}>
      <img src={phone.images} alt={phone.name} />
      <div className="card-div">
        <h3>{phone.name}</h3>
        <span className="price">${phone.price}</span>
        <br />
        <button onClick={() => handleDelete(phone.id)}>Remove</button>
      </div>
      <div className="sanovchi">
        <button onClick={() => inc(phone.id)}>+</button>
        <p>{count[phone.id] || 0}</p>
        <button
          onClick={() => {
            if (count[phone.id] > 0) {
              setCount((prevCount) => ({
                ...prevCount,
                [phone.id]: prevCount[phone.id] - 1,
              }));
            }
          }}
        >
          -
        </button>
      </div>
    </article>
  ));
  const obj = {
    inc,
    handleDelete,
    DeleteAll,
    count,
    setCount,
    array,
    totalItems,
    totalPrice,
    loading,
    setLoading,
    phoneList,
  };
  return (
    <KorzinkaContext.Provider value={obj}>{children}</KorzinkaContext.Provider>
  );
};
export const useKorzinkaContext = () => {
  return useContext(KorzinkaContext);
};
export { KorzinkaContext, KorzinkaProvider };
