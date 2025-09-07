import { Icon } from "@iconify/react/dist/iconify.js";
import { useSidebar } from "../../store/useSidebar";
import "./sidebar.css";
import clsx from "clsx";
import { Link } from "@tanstack/react-router";

const Sidebar = () => {
  const { isOpen } = useSidebar((state) => state);

  return (
    <aside
      className={clsx(
        "sidebar-container",
        isOpen ? "sidebar-open animate" : "sidebar-closed animate"
      )}
    >
      <nav className="main-navigation">
        <div className="navigation-item">
          <Link to="/">
            <div className="icon">
              <Icon icon="fa:home" />
            </div>
            <span className="onExpanded">Home</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;
