import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import useLoginStore from "../store/useLoginStore";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function Login() {
  const { user, login, logout, isModalOpen, toggleModal } = useLoginStore();
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!validateEmail(email)) {
      setErrors({ email: "Email xato kiritildi" });
      toast.error("Email xato kiritildi");
      return;
    }

    if (password?.length < 5) {
      setErrors({ password: "Parol xato kiritildi" });
      toast.error("Parol 5 ta belgidan kichik bo'lishi mumkin emas");
      return;
    }

    login({ email, password });
    toast.info("Loged succesfuly");
    setErrors({ email: "", password: "" });
    event.target.reset();
  };

  return (
    <div className="container min-h-screen flex items-center justify-center">
      <Toaster position="top-right" />

      {!user ? (
        <button
          onClick={toggleModal}
          className="bg-black text-white px-6 py-2 rounded-lg  transition"
        >
          Kirish
        </button>
      ) : (
        <button
          onClick={logout}
          className="bg-black text-white px-6 py-2 rounded-lg  transition"
        >
          Chiqish
        </button>
      )}

      {isModalOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 flex items-center justify-center"
          onClick={toggleModal}
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="bg-black shadow-2xl  rounded-xl p-6 w-full max-w-md"
          >
            <h2 className="text-2xl text-white font-bold mb-4">Kirish</h2>

            <div className="mb-4 text-white">
              <label className=" text-2xl  mb-1">Email</label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Emailingizni kiriting"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-6 text-white">
              <label className=" text-2xl  mb-1">Parol</label>
              <input
                name="password"
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Parolingizni kiriting"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={toggleModal}
                className="flex-1 px-4 py-2 bg-white text-black rounded-lg hover:opacity-60"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-white text-black rounded-lg "
              >
                Kirish
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
