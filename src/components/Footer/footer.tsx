import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-300">Otimizando seu tempo com inteligência artificial.</p>
        </div>
        <div className="flex gap-6 text-white text-2xl">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </Link>
        </div>
        <div className="text-gray-300 text-sm mt-4 md:mt-0">
          © 2025 Agendamento IA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
