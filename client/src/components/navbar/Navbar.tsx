import "./navbar.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="title">
          <button className="sidebar-toggle">
            <Icon icon="streamline-ultimate:money-wallet-open" />
          </button>
          <h1>SmartMoney</h1>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
