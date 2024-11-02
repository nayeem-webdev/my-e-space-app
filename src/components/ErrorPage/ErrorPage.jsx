import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Oops! It looks like the page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
      >
        Go to Home
      </button>
    </div>
  );
};
export default ErrorPage;
