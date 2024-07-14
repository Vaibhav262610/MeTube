import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-12 flex">
        <Sidebar />
        {/* <h1 className="text-white">sidebar</h1> */}
        <Feed />
      </div>
    </>
  );
}

export default App;
