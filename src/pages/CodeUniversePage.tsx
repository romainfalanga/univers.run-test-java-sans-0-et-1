import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Layers, Zap, Cpu, Globe } from 'lucide-react';

export const CodeUniversePage: React.FC = () => {
  const location = useLocation();

  // Données pour les cascades classiques (observables)
  const pairedClassicalCascadeItems = [
    {
      universal: {
        level: "Échelle macroscopique",
        scale: "10<sup>-4</sup> m à 1 m",
        desc: "Ce que nous voyons : humains, objets, monde visible",
        connection: "→ Formé par l'assemblage de milliards de molécules organisées",
        color: "bg-purple-900/40 border-purple-400"
      },
      computer: {
        level: "Interface utilisateur",
        desc: "Ce que nous voyons : humains, objets, monde visible",
        connection: "→ Formé par l'assemblage de milliards de vues organisées",
        color: "bg-purple-900/40 border-purple-400"
      }
    },
    {
      universal: {
        level: "Échelle moléculaire",
        scale: "10<sup>-9</sup> à 10<sup>-6</sup> m",
        desc: "Assemblages d'atomes : ADN, protéines, matériaux",
        connection: "→ Propriétés émergentes par liaison d'atomes spécifiques",
        color: "bg-blue-900/40 border-blue-400"
      },
      computer: {
        level: "Vues",
        desc: "Un fragment de l'interface utilisateur fonctionnant avec sa propre logique",
        connection: "→ Chaque vue est construite à partir de plusieurs packages",
        color: "bg-blue-900/40 border-blue-400"
      }
    }
  ];

  // Données pour les cascades quantiques (en superposition)
  const pairedQuantumCascadeItems = [
    {
      universal: {
        level: "Échelle atomique",
        scale: "10<sup>-10</sup> m",
        desc: "Briques de la matière : hydrogène, carbone, fer",
        connection: "→ Formés par l'assemblage de protons, neutrons et électrons",
        color: "bg-green-900/40 border-green-400"
      },
      computer: {
        level: "Packages",
        desc: "Regroupement de logiques réunies dans un même ensemble pour en créer une plus grandes",
        connection: "→ Chaque package est construit à partir de plusieurs classes",
        color: "bg-green-900/40 border-green-400"
      }
    },
    {
      universal: {
        level: "Échelle nucléaire",
        scale: "10<sup>-15</sup> m",
        desc: "Cœur des atomes : protons et neutrons",
        connection: "→ Constitués de quarks liés par des gluons",
        color: "bg-yellow-900/40 border-yellow-400"
      },
      computer: {
        level: "Classes",
        desc: "Structure qui définit l'état et les comportements d'un élément",
        connection: "→ Chaque classe est composée de fonctions et de variables",
        color: "bg-yellow-900/40 border-yellow-400"
      }
    },
    {
      universal: {
        level: "Échelle des particules fondamentales",
        scale: "10<sup>-18</sup> m",
        desc: "Constituants ultimes révélés par mesure : quarks, leptons, bosons",
        connection: "→ Révélées comme briques ultimes de l'univers",
        color: "bg-orange-900/40 border-orange-400"
      },
      computer: {
        level: "Fonctions et variables",
        desc: "Les fonctions décrivent des actions, les variables stockent des données",
        connection: "→ Révélées comme briques ultimes du code",
        color: "bg-orange-900/40 border-orange-400"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden pt-24 sm:pt-28">
      <div 
        className="min-h-screen relative z-10"
      >
        {/* Effets d'arrière-plan améliorés */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-indigo-900/30 z-0"></div>
        
        {/* Grille quantique subtile */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.03)_50%,transparent_75%)] bg-[length:80px_80px] opacity-60 z-0 animate-pulse"></div>
        
        {/* Page d'introduction */}
        <div className="w-full flex items-start justify-center p-4 sm:p-6 relative z-20">
          <div className="max-w-4xl mx-auto w-full text-center">
            
            {/* Titre principal */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_40px_rgba(6,182,212,1)] mb-4 sm:mb-6 leading-tight tracking-wide neon-glow">
                Le code de l'univers
              </h1>
            </div>

            {/* Contenu d'introduction consolidé */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {/* Bloc principal d'introduction */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl floating-card">
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed font-medium">
                    Imaginons que l'univers fonctionne avec du code informatique.
                  </p>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed font-medium">
                    Chaque échelle de l'univers correspond à une couche qui encapsule la suivante.
                  </p>
                  
                  <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-yellow-400/40 glow-border-yellow">
                    <p className="text-base sm:text-lg lg:text-xl text-yellow-100 leading-relaxed font-semibold">
                      Ce que nous voyons à l'échelle humaine : "le monde macroscopique" est une interface utilisateur : le rendu final d'un immense processus d'encapsulation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section des Cadres Supérieurs - nouvelle section */}
            <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-gray-400/50 shadow-2xl mb-6 sm:mb-8 floating-card">
              <div className="flex items-center mb-4 sm:mb-6">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-gray-400 animate-pulse" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-300">
                  Le cadre supérieur
                </h2>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 font-medium">
                Avant d'explorer les échelles qui composent la réalité, il faut comprendre qu'elles ne peuvent exister que parce qu'il y a un <strong className="text-white">cadre supérieur</strong> qui les contient et les rend possibles.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {/* Cadre Universel : Tissu de l'espace-temps */}
                <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-blue-400/40 shadow-xl">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-blue-400" />
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-300">
                      Le tissu de l'espace-temps
                    </h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                    <p className="font-medium">
                       Le tissu de l'espace-temps est le cadre fondamentale dans lequel la matière prend forme. C'est la toile décrite par la relativité générale d'Einstein : un maillage invisible qui relie l'espace et le temps en une seule structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cascade des échelles - Section ajoutée */}
            <div className="bg-gradient-to-br from-emerald-900/60 to-teal-900/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-emerald-400/50 shadow-2xl mb-6 sm:mb-8 floating-card glow-border-emerald">
              <div className="flex items-center mb-4 sm:mb-6">
                <Layers className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-emerald-400 animate-pulse" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-300 neon-text-emerald">
                  La Cascade des Échelles
                </h2>
              </div>
              
              {/* Première partie : Échelles "classiques" observables */}
              {/* Desktop Layout - Échelles classiques */}
              <div className="hidden md:grid">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 items-stretch">
                  {/* Headers */}
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   🌌 Cascade Universelle
                  </h3>
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   💻 Cascade Informatique
                  </h3>
                  
                  {/* Paired items */}
                  {pairedClassicalCascadeItems.map((pair, index) => (
                    <React.Fragment key={index}>
                      <div className={`p-2 sm:p-3 rounded-lg border-l-4 ${pair.universal.color} flex flex-col justify-center`}>
                        <div className="font-bold text-white text-xs sm:text-sm">
                          {pair.universal.level}
                          <span className="text-cyan-300 font-mono ml-2" dangerouslySetInnerHTML={{ __html: pair.universal.scale }}></span>
                        </div>
                        <div className="text-gray-300 text-xs mt-1">{pair.universal.desc}</div>
                        {pair.universal.connection && (
                          <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                            {pair.universal.connection}
                          </div>
                        )}
                      </div>
                      <div className={`p-2 sm:p-3 rounded-lg border-l-4 ${pair.computer.color} flex flex-col justify-center`}>
                        <div className="font-bold text-white text-xs sm:text-sm">{pair.computer.level}</div>
                        <div className="text-gray-300 text-xs mt-1">{pair.computer.desc}</div>
                        {pair.computer.connection && (
                          <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                            {pair.computer.connection}
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Mobile Layout - Échelles classiques */}
              <div className="grid md:hidden grid-cols-1 gap-4 sm:gap-6 mb-6">
                {/* Cascade Universelle */}
                <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                 🌌 Cascade Universelle
                </h3>
                {pairedClassicalCascadeItems.map((pair, index) => (
                  <div key={`universal-${index}`} className={`p-2 sm:p-3 rounded-lg border-l-4 ${pair.universal.color} flex flex-col justify-center`}>
                    <div className="font-bold text-white text-xs sm:text-sm">
                      {pair.universal.level}
                      <span className="text-cyan-300 font-mono ml-2" dangerouslySetInnerHTML={{ __html: pair.universal.scale }}></span>
                    </div>
                    <div className="text-gray-300 text-xs mt-1">{pair.universal.desc}</div>
                    {pair.universal.connection && (
                      <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                        {pair.universal.connection}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Cascade Informatique */}
                <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                 💻 Cascade Informatique
                </h3>
                {pairedClassicalCascadeItems.map((pair, index) => (
                  <div key={`computer-${index}`} className={`p-2 sm:p-3 rounded-lg border-l-4 ${pair.computer.color} flex flex-col justify-center`}>
                    <div className="font-bold text-white text-xs sm:text-sm">{pair.computer.level}</div>
                    <div className="text-gray-300 text-xs mt-1">{pair.computer.desc}</div>
                    {pair.computer.connection && (
                      <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                        {pair.computer.connection}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Paragraphe de transition : Superposition Quantique */}
              <div className="bg-gradient-to-r from-indigo-900/60 to-purple-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 border-indigo-400/50 shadow-2xl mb-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-indigo-300 text-center mb-3 sm:mb-4">
                  Transition vers la Superposition Quantique
                </h3>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                  <p>
                    À partir de l'échelle atomique (~10⁻¹⁰ m), tout change : nous entrons dans le domaine de la <strong className="text-purple-300">superposition quantique</strong>.
                  </p>
                  <p>
                    <strong className="text-cyan-300">Dans l'univers :</strong> à cette échelle, les entités physiques (atomes, électrons, particules) existent dans plusieurs états à la fois. Dans l'<strong className="text-purple-300">expérience de la double fente</strong>, par exemple, un électron ou un atome passe simultanément par les deux fentes, créant des interférences avec lui-même. Leur existence est une <strong className="text-yellow-300">probabilité</strong> diffuse jusqu'à ce qu'une observation ou une mesure "effondre" cette superposition en un état défini.
                  </p>
                  <p>
                    <strong className="text-green-300">Dans le code :</strong> En suivant cette logique, l'organisation des packages qui produisent les vues n'existe pas sous une forme unique et figée. Elle se déploie comme un ensemble de <strong className="text-yellow-300">probabilités</strong> d'agencements de packages possibles. Ce n'est qu'au moment où l'on observe cette organisation que les packages prennent une configuration particulière.

De même, les classes qui composent un package n'existent pas à l'avance sous une seule écriture. Ils sont une <strong className="text-yellow-300">probabilité</strong> parmi une infinité de manières de produire le même rendu. Ce n'est qu'au moment où l'on "ouvre" le package et que l'on regarde sous son capot que le code se matérialise dans une version précise, comme si l'acte d'observation faisait émerger une implémentation unique parmi toutes les possibilités.
                  </p>
                </div>
              </div>

              {/* Deuxième partie : Échelles en "superposition quantique" */}
              {/* Desktop Layout - Échelles quantiques */}
              <div className="hidden md:grid">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
                  {/* Headers */}
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   🌌 Cascade Universelle (Suite)
                  </h3>
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   💻 Cascade Informatique (Suite)
                  </h3>
                  
                  {/* Paired items */}
                  {pairedQuantumCascadeItems.map((pair, index) => (
                    <React.Fragment key={index}>
                      <div className={`p-2 sm:p-3 rounded-lg border-l-4 ${pair.universal.color} flex flex-col justify-center`}>
                        <div className="font-bold text-white text-xs sm:text-sm">
                          {pair.universal.level}
                          {pair.universal.scale && <span className="text-cyan-300 font-mono ml-2" dangerouslySetInnerHTML={{ __html: pair.universal.scale }}></span>}
                        </div>
                        <div className="text-gray-300 text-xs mt-1">{pair.universal.desc}</div>
                        {pair.universal.connection && (
                          <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                            {pair.universal.connection}
                          </div>
                        )}
                      </div>
                      <div className={`p-2 sm:p-3 rounded-lg border-l-4 ${pair.computer.color} flex flex-col justify-center`}>
                        <div className="font-bold text-white text-xs sm:text-sm">{pair.computer.level}</div>
                        <div className="text-gray-300 text-xs mt-1">{pair.computer.desc}</div>
                        {pair.computer.connection && (
                          <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                            {pair.computer.connection}
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              {/* Mobile Layout - Échelles quantiques */}
              <div className="grid md:hidden grid-cols-1 gap-4 sm:gap-6 mb-6">
                {/* Cascade Universelle (Suite) */}
                <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                 🌌 Cascade Universelle (Suite)
                </h3>
                {pairedQuantumCascadeItems.map((pair, index) => (
                  <div key={`quantum-universal-${index}`} className={`p-2 sm:p-3 rounded-lg border-l-4 ${pair.universal.color} flex flex-col justify-center`}>
                    <div className="font-bold text-white text-xs sm:text-sm">
                      {pair.universal.level}
                      {pair.universal.scale && <span className="text-cyan-300 font-mono ml-2" dangerouslySetInnerHTML={{ __html: pair.universal.scale }}></span>}
                    </div>
                    <div className="text-gray-300 text-xs mt-1">{pair.universal.desc}</div>
                    {pair.universal.connection && (
                      <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                        {pair.universal.connection}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Cascade Informatique (Suite) */}
                <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                 💻 Cascade Informatique (Suite)
                </h3>
                {pairedQuantumCascadeItems.map((pair, index) => (
                  <div key={`quantum-computer-${index}`} className={`p-2 sm:p-3 rounded-lg border-l-4 ${pair.computer.color} flex flex-col justify-center`}>
                    <div className="font-bold text-white text-xs sm:text-sm">{pair.computer.level}</div>
                    <div className="text-gray-300 text-xs mt-1">{pair.computer.desc}</div>
                    {pair.computer.connection && (
                      <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                        {pair.computer.connection}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 bg-gradient-to-r from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border-l-4 border-cyan-400">
                <p className="text-xs sm:text-sm lg:text-base text-cyan-100 leading-relaxed font-medium">
                <strong className="text-cyan-300">Chaque couche encapsule la suivante :</strong> L'interface utilisateur que nous voyons est générée à partir des vues, elles-mêmes issues de packages, résultant de classes qui sont faites de fonctions et variables.
                
                De la même façon, notre échelle macroscopique est constitué de molécules, elles-mêmes faites d'atomes, formés de nucléons, composés de particules fondamentales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};