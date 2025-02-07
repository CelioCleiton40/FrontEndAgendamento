"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "../../../store/authStore";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function SignupPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const signup = useAuthStore((state) => state.signup);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      signup(name, email, password);
    } else {
      alert("As senhas não coincidem!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col md:flex-row items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Crie sua conta
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Confirmar Senha
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Confirme sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Inscrever-se
          </button>
        </form>

        <div className="mt-8">
          <p className="text-gray-600 text-center">Ou continue com</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition duration-200">
              <FcGoogle size={24} />
            </button>
            <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition duration-200">
              <FaFacebook size={24} className="text-blue-600" />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-600">
          Já tem uma conta?{" "}
          <Link
            href="/auth/login"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Faça login
          </Link>
        </p>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 w-full h-96 relative">
        <Image
          src="https://img.freepik.com/free-photo/young-attractive-woman-shopping-online-using-mobile-phone-with-credit-card-smiling-standing_1258-180497.jpg?t=st=1738951299~exp=1738954899~hmac=49f317d0dff2b556f1e524ce294f5bdf522cdbb52cb18f00a3f9e8cbe43715f3&w=826"
          alt="Signup image"
          layout="responsive"
          width={700}
          height={475}
          className="rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
}
