"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import CalendarPicker from '../../../components/Calendar_My/CalendarPicker';
import Footer from '../../../components/Footer/footer';
import ECommerce from '../../../components/Dashboard/E-commerce';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState('cliente'); // Pode ser 'cliente', 'profissional' ou 'admin'

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-3xl font-bold text-blue-600">Dashboard IA</h1>
          <div className="flex gap-4">
            <Link href="/auth/login" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all">
              Entrar
            </Link>
            <Link href="/auth/signup" className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-900 transition-all">
              Criar Conta
            </Link>
          </div>
        </nav>

        {!loading && (
          <MotionDiv
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-1 gap-12 items-center mb-24"
          >
            <div>
              {userType === 'cliente' && (
                <div>
                  <h2 className="text-5xl font-bold mb-6 leading-tight">
                    Bem-vindo, <span className="text-blue-600">Cliente</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Aqui você pode visualizar e agendar seus compromissos.
                  </p>
                  <CalendarPicker />
                  <ECommerce />
                </div>
              )}

              {userType === 'profissional' && (
                <div>
                  <h2 className="text-5xl font-bold mb-6 leading-tight">
                    Bem-vindo, <span className="text-blue-600">Profissional</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Aqui você pode gerenciar seus horários e compromissos.
                  </p>
                  <CalendarPicker />
                </div>
              )}

              {userType === 'admin' && (
                <div>
                  <h2 className="text-5xl font-bold mb-6 leading-tight">
                    Bem-vindo, <span className="text-blue-600">Admin</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Aqui você pode gerenciar os usuários e configurar o sistema.
                  </p>
                  <CalendarPicker />
                </div>
              )}
            </div>
          </MotionDiv>
        )}
      </header>
      <Footer />
    </div>
  );
}
