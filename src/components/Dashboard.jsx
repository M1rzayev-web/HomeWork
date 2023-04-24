import { useKorzinkaContext } from "./Korzinka/KorzinkaContext";
import "./Korzinka/Korzinka.css"
const Dashboard = ({ user }) => {
    const { DeleteAll, totalItems, totalPrice, loading, phoneList } =
      useKorzinkaContext();

    if (loading) {
      return <loading />;
    } else {
      phoneList;
    }
  return (
    <>
      <section className="section">
        <h3>Salom, {user?.name}</h3>
      </section>
      <div className="Magazin">
        <div className="header">
          <h1>UseReducer</h1>
          <span className="Korzinka">
            <i className="fa-solid fa-cart-shopping"></i>
            <p className="total-phone">{totalItems}</p>
          </span>
        </div>
        <div className="main">
          <h3>Your Bag</h3>
          {phoneList}
        </div>
        <div className="Narxlar">
          <h3>Total</h3>
          <p className="qiymatPrice">${totalPrice}</p>
        </div>
        <button className="clearAll" onClick={DeleteAll}>
          ClearAll
        </button>
      </div>
    </>
  );
};

export default Dashboard;
