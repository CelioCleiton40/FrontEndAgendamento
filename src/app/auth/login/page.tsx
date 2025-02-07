'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuthStore } from '../../../store/authStore';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Bem vindo de volta
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email ou número de telefone
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your email or phone"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
            Esqueceu sua senha?
          </Link>
        </div>

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
          Não tem uma conta?{' '}
          <Link href="/auth/signup" className="text-blue-600 hover:text-blue-800 font-semibold">
            Inscrever-se
          </Link>
        </p>
      </div>
      <div className="hidden md:block md:w-1/2 lg:w-2/3 ml-6">
        <Image
          src="https://img.freepik.com/free-photo/calendar-agenda-event-meeting-reminder-schedule-graphic-concept_53876-124961.jpg?t=st=1738938760~exp=1738942360~hmac=27015fa3b478fbb65019255df02280423e52521fa8fcd8b2ec11b2d4928e919f&w=740"
          alt="Login image"
          layout="responsive"
          width={700}
          height={475}
          className="rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
}
