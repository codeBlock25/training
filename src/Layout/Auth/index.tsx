import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../Context/store";
import { useEffect } from "react";

export default function AuthLayout() {
  const navigate = useNavigate();
  const {
    auth: { isAuthenticated },
  } = useSelector((state: RootState) => state);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <section
      className="w-[calc(100vw-10px)] h-[calc(100vh-10px)] bg-gray-200 flex m-[5px] rounded-3xl p-[10px]"
      style={{
        boxShadow:
          "0 0 20px 0px rgba(255,255,255,0.2), 0 0 40px 5px rgba(255,255,255,0.4), 0 0 0 30px rgba(0,0,0,1)",
      }}
    >
      <section className="flex-1 flex justify-center items-center">
        <img
          src="/assets/images/WeSt.png"
          alt="auth"
          className="w-2/3 h-2/3 object-cover rounded-3xl"
        />
      </section>
      <section className="w-1/3 max-w-[600px] min-w-[280px] h-full flex flex-col bg-white rounded-3xl items-center pt-[100px] overflow-hidden overflow-y-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[60px] h-[60px] flex mb-11 fill-white bg-black rounded-2xl p-2"
        >
          <path d="M4 18V14.3C4 13.4716 3.32843 12.8 2.5 12.8H2V11.2H2.5C3.32843 11.2 4 10.5284 4 9.7V6C4 4.34315 5.34315 3 7 3H8V5H7C6.44772 5 6 5.44772 6 6V10.1C6 10.9858 5.42408 11.7372 4.62623 12C5.42408 12.2628 6 13.0142 6 13.9V18C6 18.5523 6.44772 19 7 19H8V21H7C5.34315 21 4 19.6569 4 18ZM20 14.3V18C20 19.6569 18.6569 21 17 21H16V19H17C17.5523 19 18 18.5523 18 18V13.9C18 13.0142 18.5759 12.2628 19.3738 12C18.5759 11.7372 18 10.9858 18 10.1V6C18 5.44772 17.5523 5 17 5H16V3H17C18.6569 3 20 4.34315 20 6V9.7C20 10.5284 20.6716 11.2 21.5 11.2H22V12.8H21.5C20.6716 12.8 20 13.4716 20 14.3Z"></path>
        </svg>
        <Outlet />
      </section>
    </section>
  );
}
