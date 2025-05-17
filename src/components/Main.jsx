import "../css/header.css";
import Side from "./Side";
import UserDtails from "./UserDtails";
const Main = () => {
  return (
    <div>
      <main className="main">
        <aside className="sidebar">
          <Side />
        </aside>
        <section className="content">
          <UserDtails />
        </section>
      </main>
    </div>
  );
};

export default Main;
