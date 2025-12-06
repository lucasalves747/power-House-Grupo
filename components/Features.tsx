import React from 'react';
import { Pickaxe, Combine, Bot, Mic, Rocket, Radio } from 'lucide-react';

const features = [
  {
    icon: <Pickaxe className="w-5 h-5 text-white" />,
    color: "from-cyan-400 to-blue-500",
    title: "Idea Mining",
    desc: "Extração profunda das histórias que te transformam em autoridade."
  },
  {
    icon: <Combine className="w-5 h-5 text-white" />,
    color: "from-purple-400 to-pink-500",
    title: "Framework Engineering",
    desc: "Organizar seus insights em um método replicável e único."
  },
  {
    icon: <Bot className="w-5 h-5 text-white" />,
    color: "from-fuchsia-400 to-rose-500",
    title: "AI Production Tracks",
    desc: "Criar livro, palestra, workshop e produto com IA guiada."
  },
  {
    icon: <Mic className="w-5 h-5 text-white" />,
    color: "from-orange-400 to-amber-500",
    title: "Authority Narrative",
    desc: "Definir seu ângulo, identidade e posicionamento de mercado."
  },
  {
    icon: <Rocket className="w-5 h-5 text-white" />,
    color: "from-red-500 to-rose-600",
    title: "Launch Engine",
    desc: "Construir página, promessa, copy e funil de vendas na hora."
  },
  {
    icon: <Radio className="w-5 h-5 text-white" />,
    color: "from-emerald-400 to-teal-500",
    title: "Livestream Strategy",
    desc: "Transformar tudo em audiência e conteúdo com alcance ilimitado."
  }
];

export const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
      {features.map((feature, index) => (
        <div key={index} className="group relative p-8 rounded-[2rem] bg-[#13111a] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
          {/* Hover Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2rem]`} />
          
          <div className={`mb-6 w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform duration-300`}>
            {feature.icon}
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
          <p className="text-gray-400 leading-relaxed text-sm font-light">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};