import "./styles/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="container my-5">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Welcome to the catalog!
      </h1>
      <button className="btn btn-primary mt-4">Bootstrap Button</button>
      <button className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded">
        Tailwind Button
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
