import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Client Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <p className="text-lg">
          <span className="font-semibold">Name:</span>
        </p>
        <p className="text-lg">
          <span className="font-semibold">Address:</span>
        </p>
        <p className="text-lg">
          <span className="font-semibold">Status:</span>
        </p>
        <p className="text-lg">
          <span className="font-semibold">Phone Numbers:</span>
        </p>
        <p className="text-lg">
          <span className="font-semibold">Business Type:</span> 
        </p>
        <p className="text-lg">
          <span className="font-semibold">Client Type:</span> 
        </p>
        <p className="text-lg">
          <span className="font-semibold">Category:</span> 
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Detail;
