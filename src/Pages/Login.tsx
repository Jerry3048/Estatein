import { useState } from "react";
import { useNavigate } from "react-router";

interface LoginFormData {
  email: string;
  password: string;
}

function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Admin credentials (in production, use a backend API)
  const ADMIN_EMAIL = "arewatolulope5@gmail.com";
  const ADMIN_PASSWORD = "admin123";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (
        formData.email === ADMIN_EMAIL &&
        formData.password === ADMIN_PASSWORD
      ) {
        // Store user info in localStorage
        const user = {
          email: formData.email,
          isAdmin: true,
          uid: "admin-user-001",
        };
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/Admindashboard");
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-600 to-purple-900 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="admin@estatein.com"
              className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          {error && (
            <div className="px-4 py-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-10 p-4 bg-gray-100 rounded-lg text-center text-sm text-gray-700 space-y-1">
          <p className="font-semibold mb-2">Demo Credentials:</p>
          <p>Email: admin@estatein.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
