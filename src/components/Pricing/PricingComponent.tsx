import React from "react";
import { Check } from "lucide-react";

const PricingComponent = () => {
  const plans = {
    free: {
      name: "Gratuito",
      price: "0",
      features: [
        "Até 150 agendamentos por mês",
        "Calendário básico",
        "Notificações por email",
        "Relatórios básicos",
        "Suporte básico",
      ],
    },
    premium: {
      name: "Premium",
      price: "99,90",
      features: [
        "Melhores benefícios",
        "Agendamentos ilimitados",
        "Calendário avançado com IA",
        "Notificações por email e SMS",
        "Relatórios detalhados",
        "Suporte prioritário 24/7",
        "Integração com outros apps",
      ],
    },
    callToAction: {
      name: "Plano Básico",
      price: "49,90",
      features: [
        "Até 350 agendamentos por mês",
        "Calendário básico",
        "Notificações por email",
        "Suporte prioritário 24/7",
      ],
    },
  };

  return (
    <div className="w-full py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal
          </h2>
          <p className="text-xl text-gray-600">
            Soluções flexíveis para profissionais de todos os níveis
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plano Gratuito */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plans.free.name}
                </h3>
                <div className="flex justify-center items-baseline">
                  <span className="text-5xl font-extrabold">
                    R$ {plans.free.price}
                  </span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
              </div>

              <div className="space-y-4">
                {plans.free.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Começar Grátis
            </button>
          </div>

          {/* Plano Premium */}
          <div className="bg-blue-600 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {plans.premium.name}
                </h3>
                <div className="flex justify-center items-baseline">
                  <span className="text-5xl font-extrabold text-white">
                    R$ {plans.premium.price}
                  </span>
                  <span className="text-blue-200 ml-1">/mês</span>
                </div>
              </div>

              <div className="space-y-4">
                {plans.premium.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-3" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-8 w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Assinar Premium
            </button>
          </div>

          {/* Plano Call to Action */}
          <div className="bg-green-600 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {plans.callToAction.name}
                </h3>
                <div className="flex justify-center items-baseline">
                  <span className="text-5xl font-extrabold text-white">
                    R$ {plans.callToAction.price}
                  </span>
                  <span className="text-green-200 ml-1">/mês</span>
                </div>
              </div>

              <div className="space-y-4">
                {plans.callToAction.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-3" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-8 w-full bg-white text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
              Assinar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
