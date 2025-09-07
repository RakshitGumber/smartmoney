import { Icon } from "@iconify/react/dist/iconify.js";
import { useSidebar } from "../../store/useSidebar";
import "./sidebar.css";
import clsx from "clsx";

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
          <Icon icon="fa:home" />
          <span className="onExpanded">Home</span>
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;
