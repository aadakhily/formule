import PerfectScrollbar from "react-perfect-scrollbar";

function SideBar({ children }) {
  return (
    <aside className="min-w-[260px]  h-[92vh]">
      <PerfectScrollbar className="p-3">{children}</PerfectScrollbar>
    </aside>
  );
}

export default SideBar;
