import { Link } from "react-router-dom";
import { RegisterFormContent } from "../../Content/Auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="w-3/4 h-fit flex flex-col justify-center items-center px-5">
      <h2 className="font-bold text-3xl mb-2">Register</h2>
      <p className="text-gray-500">Please provide your details.</p>
      <RegisterFormContent />
      <p className="text-gray-500">
        Already have an account?{" "}
        <Link className="text-blue-500 font-semibold" to="/login">
          Login
        </Link>
      </p>
    </main>
  );
}
