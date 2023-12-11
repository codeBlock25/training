import { Link } from "react-router-dom";
import { LoginFormContent } from "../../Content/Auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="w-3/4 h-fit flex flex-col justify-center items-center px-5">
      <h2 className="font-bold text-3xl mb-2">Login</h2>
      <p className="text-gray-500">Please provide your details.</p>
      <LoginFormContent />
      <p className="text-gray-500">
        Don't have an account?{" "}
        <Link className="text-blue-500 font-semibold" to="/auth/register">
          Register
        </Link>
      </p>
    </main>
  );
}
