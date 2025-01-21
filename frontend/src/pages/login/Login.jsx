import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const process = async () => {
            try {
                const response = await fetch('http://localhost:3000/user/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password
                    }),
                });
                const data = await response.json();
                if (data.error) {
                    alert(data.error);
                }
                else {
                    navigate("/home")
                }
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }
        process();
    }

  return (
    <div className="flex justify-center items-center bg-top  bg-cover  min-h-screen ">
      <div className="  bg-slate-500 shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold  text-black text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 bg-gradient-to-r from-cyan-500 via-cyan-200 to-cyan-500 text-black font-bold rounded-lg hover:opacity-90 transition duration-300">Login
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-black text-sm hover:underline">
            Forgot Password?
          </a>
          <p className="text-black text-sm mt-2">
            Don't have an account?{" "}
            <button className="text-blue-900 hover:underline">
            <Link to="/signup">sign up</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;