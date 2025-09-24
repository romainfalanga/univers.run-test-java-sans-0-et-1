import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Layers, Zap, Cpu, Globe } from 'lucide-react';

export const CodeUniversePage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div 
        className="min-h-screen relative z-10"
      >
        {/* Effets d'arrière-plan améliorés */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-indigo-900/30 z-0"></div>
        
        {/* Grille quantique subtile */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.03)_50%,transparent_75%)] bg-[length:80px_80px] opacity-60 z-0 animate-pulse"></div>
        
        {/* Page d'introduction */}
        <div className="w-full flex items-start justify-center p-4 sm:p-6 pt-4 relative z-20">
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
                    Chaque couche correspond à une échelle qui encapsule la suivante.
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                
                {/* Cadre Informatique : Appareil électronique */}
                <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-purple-400/40 shadow-xl">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Cpu className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-purple-400" />
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-purple-300">
                      Le serveur
                    </h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                    <p className="font-medium">
                      Le serveur est le cadre fondamental dans lequel le code prend forme. Il contient toutes les couches de la cascade informatique et maintient l'ensemble de la hierarchie, rendant possible l'existence de chaque niveau.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-gray-900/60 to-slate-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-l-4 border-gray-400">
                <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed font-medium">
                  <strong className="text-white">Point clé :</strong> Ces cadres supérieurs ne sont pas des "échelles" au sens où nous l'entendons dans la cascade qui suit. Ils sont les <strong className="text-gray-300">fondations</strong> qui permettent à toutes les échelles d'exister et d\'interagir. Dans l\'analogie, le tissu de l\'espace-temps et le serveur jouent le même rôle : ils sont les <strong className="text-gray-300">cadres universels</strong> qui contiennent, relient et font vivre l’ensemble de la structure.

                </p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   🌌 Cascade Universelle
                  </h3>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { 
                        level: "Échelle macroscopique", 
                        scale: "10<sup>-4</sup> m à 1 m", 
                        desc: "Ce que nous voyons : humains, objets, monde visible", 
                        connection: "→ Formé par l'assemblage de milliards de molécules organisées",
                        color: "bg-purple-900/40 border-purple-400" 
                      },
                      { 
                        level: "Échelle moléculaire", 
                        scale: "10<sup>-9</sup> à 10<sup>-6</sup> m", 
                        desc: "Assemblages d'atomes : ADN, protéines, matériaux", 
                        connection: "→ Propriétés émergentes par liaison d'atomes spécifiques",
                        color: "bg-blue-900/40 border-blue-400" 
                      }
                    ].map((item, index) => (
                      <div key={index} className={`p-2 sm:p-3 rounded-lg border-l-4 ${item.color} min-h-[60px] sm:min-h-[70px] flex flex-col justify-center`}>
                        <div className="font-bold text-white text-xs sm:text-sm">
                          {item.level}
                          <span className="text-cyan-300 font-mono ml-2" dangerouslySetInnerHTML={{ __html: item.scale }}></span>
                        </div>
                        <div className="text-gray-300 text-xs mt-1">{item.desc}</div>
                        {item.connection && (
                          <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                            {item.connection}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   💻 Cascade Informatique
                  </h3>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { 
                        level: "Interface utilisateur", 
                        desc: "Ce que nous voyons : humains, objets, monde visible", 
                        connection: "→ Elle est composée de plusieurs vues.",
                        color: "bg-purple-900/40 border-purple-400" 
                      },
                      { 
                        level: "Vue / Scène", 
                        desc: "Un fragment de l’interface utilisateur fonctionnant avec sa propre logique", 
                        connection: "→ Chaque vue est construite à partir de plusieurs packages.",
                        color: "bg-blue-900/40 border-blue-400" 
                      }
                    ].map((item, index) => (
                      <div key={index} className={`p-2 sm:p-3 rounded-lg border-l-4 ${item.color} min-h-[60px] sm:min-h-[70px] flex flex-col justify-center`}>
                        <div className="font-bold text-white text-xs sm:text-sm">{item.level}</div>
                        <div className="text-gray-300 text-xs mt-1">{item.desc}</div>
                        {item.connection && (
                          <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                            {item.connection}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
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
                    <strong className="text-cyan-300">Dans l'univers :</strong> à cette échelle, les entités physiques (atomes, électrons, particules) existent dans plusieurs états à la fois. Dans l'<strong className="text-purple-300">expérience de la double fente</strong>, par exemple, un électron ou un atome passe simultanément par les deux fentes, créant des interférences avec lui-même. Leur existence est une <strong className="text-yellow-300">probabilité</strong> diffuse jusqu'à ce qu\'une observation ou une mesure "effondre" cette superposition en un état défini.
                  </p>
                  <p>
                    <strong className="text-green-300">Dans le code :</strong> En suivant cette logique, l'organisation des packages qui produisent les Vues n'existe pas sous une forme unique et figée. Elle se déploie comme un ensemble de <strong className="text-yellow-300">probabilités</strong> d'agencements de packages possibles. Ce n\'est qu\'au moment où l\'on observe cette organisation que les packages prennent une configuration particulière.

De même, les classes qui composent un package n'existent pas à l\'avance sous une seule écriture. Ils sont une <strong className="text-yellow-300">probabilité</strong> parmi une infinité de manières de produire le même rendu. Ce n\'est qu\'au moment où l\'on \"ouvre\" le package et que l\'on regarde sous son capot que le code se matérialise dans une version précise, comme si l\'acte d\'observation faisait émerger une implémentation unique parmi toutes les possibilités.
                  </p>
                </div>
              </div>

              {/* Deuxième partie : Échelles en "superposition quantique" */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Cascade Universelle (Physique) - Suite */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   🌌 Cascade Universelle (Suite)
                  </h3>
                  {[
                    {
                      level: "Échelle atomique",
                      scale: "10<sup>-10</sup> m",
                      desc: "Briques de la matière en superposition quantique : hydrogène, carbone, fer",
                      connection: "→ Formés par l'assemblage de protons, neutrons et électrons",
                      color: "bg-green-900/40 border-green-400"
                    },
                    {
                      level: "Échelle nucléaire",
                      scale: "10<sup>-15</sup> m",
                      desc: "Cœur des atomes révélé par observation : protons et neutrons",
                      connection: "→ Constitués de quarks liés par des gluons",
                      color: "bg-yellow-900/40 border-yellow-400"
                    },
                    {
                      level: "Échelle des particules fondamentales",
                      scale: "10<sup>-18</sup> m",
                      desc: "Constituants ultimes révélés par mesure : quarks, leptons, bosons",
                      connection: "→ Révélées comme briques ultimes",
                      color: "bg-orange-900/40 border-orange-400"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`p-2 sm:p-3 rounded-lg border-l-4 ${item.color} min-h-[60px] sm:min-h-[70px] flex flex-col justify-center mb-2 sm:mb-3`}>
                      <div className="font-bold text-white text-xs sm:text-sm">
                        {item.level}
                        {item.scale && <span className="text-cyan-300 font-mono ml-2" dangerouslySetInnerHTML={{ __html: item.scale }}></span>}
                      </div>
                      <div className="text-gray-300 text-xs mt-1">{item.desc}</div>
                      {item.connection && (
                        <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                          {item.connection}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Cascade Informatique (Logicielle) - Suite */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   💻 Cascade Informatique (Suite)
                  </h3>
                  {[
                    {
                      level: "Package",
                      desc: "Un regroupement de logiques réunies dans un même ensemble pour créer une logique plus grande",
                      connection: "→ Chaque package est construit à partir de plusieurs classes.",
                      color: "bg-green-900/40 border-green-400"
                    },
                    {
                      level: "Classe",
                      desc: "Une structure qui définit l’état et les comportements d’un élément",
                      connection: "→ Chaque classe est composée de méthodes, de fonctions et de variables",
                      color: "bg-yellow-900/40 border-yellow-400"
                    },
                    {
                      level: "Méthodes, Fonctions et Variables",
                      desc: "Les méthodes ou fonctions décrivent des actions, les variables stockent des données",
                      connection: "→ Ce sont les briques ultimes",
                      color: "bg-orange-900/40 border-orange-400"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`p-2 sm:p-3 rounded-lg border-l-4 ${item.color} min-h-[60px] sm:min-h-[70px] flex flex-col justify-center mb-2 sm:mb-3`}>
                      <div className="font-bold text-white text-xs sm:text-sm">{item.level}</div>
                      <div className="text-gray-300 text-xs mt-1">{item.desc}</div>
                      {item.connection && (
                        <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                          {item.connection}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Échelle de Planck - section séparée */}
              <div className="mt-4 sm:mt-6">
                <div className="p-2 sm:p-3 rounded-lg border-l-4 bg-red-900/40 border-red-400 min-h-[60px] sm:min-h-[70px] flex flex-col justify-center">
                  <div className="font-bold text-white text-xs sm:text-sm">
                    Échelle de Planck
                    <span className="text-cyan-300 font-mono ml-2" dangerouslySetInnerHTML={{ __html: "10<sup>-35</sup> m" }}></span>
                  </div>
                  <div className="text-gray-300 text-xs mt-1">L'échelle de Planck est la limite ultime de la réalité : à cette échelle, l'espace, le temps et la matière cessent d'avoir une signification</div>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 bg-gradient-to-r from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border-l-4 border-cyan-400">
                <p className="text-xs sm:text-sm lg:text-base text-cyan-100 leading-relaxed font-medium">
                <strong className="text-cyan-300">Chaque couche encapsule la suivante :</strong> L'interface utilisateur que nous voyons est générée à partir des vues, elles-mêmes issues de packages, résultant de classes qui sont faites de fonctions, variables et méthodes.

De la même façon, notre corps est constitué de molécules, elles-mêmes faites d'atomes, formés de nucléons, composés de particules fondamentales.
                </p>
              </div>
            </div>
            {/* Section Modifier la Réalité */}
            <div className="bg-gradient-to-r from-indigo-900/60 to-purple-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-indigo-400/50 shadow-2xl mb-6 sm:mb-8 floating-card">
              <div className="flex items-center mb-4 sm:mb-6">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-indigo-400 animate-pulse" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-indigo-300">
                  Modifier la Réalité
                </h2>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                <p>
                  Si l'univers est fait de code informatique, modifier des variables, fonctions ou méthodes depuis cette échelle engendrerait les compilations couche par couche des échelles supérieures, jusqu'à modifier les vues, ce qui modifierait ensuite l'interface utilisateur (notre échelle macroscopique).
                </p>
                <p>
                  Une entité capable de manipuler directement des particules fondamentales, pourrait le temps d'une fraction de seconde, figer les probabilités de chaque échelle. Chaque Classe, Package ou Vue modifié existerait alors pleinement, avant de redevenir incertain l'instant suivant. L'interface utilisateur, elle, resterait stable, mais sous le capot, les échelles de la mécanique quantique retourneraient à leur état de probabilités.
                </p>
                <p>
                  Une telle puissance permettrait de créer ce que l'on veut, à condition que ce que l'on souahite créer existe déjà dans l'univers (pour la cascade informatique inversé). Dans l'exemple qui suit, nous allons voir la cascade des échelles inversée pour la création d'un téléphone.
                </p>
              </div>
            </div>

            {/* La Cascade Inversée */}
            <div className="bg-gradient-to-br from-emerald-900/60 to-teal-900/50 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-emerald-400/50 shadow-2xl mb-6 sm:mb-8 floating-card glow-border-emerald">
              <div className="flex items-center mb-4 sm:mb-6">
                <Layers className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-emerald-400 animate-pulse" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-300 neon-text-emerald">
                  La Cascade Inversée
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-200 mb-4">
                    🌌 Cascade Universelle
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      { level: "Particules", desc: "Manipulation des milliards de milliards de fermions et de bosons", color: "bg-red-900/40 border-red-400" },
                      { level: "Nucléons", desc: "Des milliards de milliards de protons et neutrons se combinent", color: "bg-yellow-900/40 border-yellow-400" },
                      { level: "Atomes", desc: "Des centaines de milliards d'atomes acquièrent de nouvelles propriétés", color: "bg-green-900/40 border-green-400" },
                      { level: "Molécules", desc: "Des dizaines de milliards de molécules interagissent différemment", color: "bg-blue-900/40 border-blue-400" },
                      { level: "Macroscopique", desc: "Un téléphone complet apparaît dans la réalité", color: "bg-purple-900/40 border-purple-400" }
                    ].map((item, index) => (
                      <div key={index} className={`p-3 rounded-lg border-l-4 ${item.color} min-h-[80px] flex flex-col justify-center`}>
                        <div className="font-bold text-white text-sm">{item.level}</div>
                        <div className="text-gray-300 text-xs mt-1">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-200 mb-4">
                    💻 Cascade Informatique
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      { level: "Fonctions, Variables et Méthodes", desc: "Manipulation de milliards de milliards de Fonctions, Variables et Méthodes.", color: "bg-red-900/40 border-red-400" },
                      { level: "Classes", desc: "Des milliards de Classes émergent de l'organisation des Fonctions, Variables et Méthodes et définissent des structures nouvelles.", color: "bg-yellow-900/40 border-yellow-400" },
                      { level: "Packages", desc: "Des centaines de millions de Packages regroupent les Classes et structurent leur organisation.", color: "bg-green-900/40 border-green-400" },
                      { level: "Vues", desc: "Des millions de Vues se combinent, chacune issue de l'organisation des Packages.", color: "bg-blue-900/40 border-blue-400" },
                      { level: "Interface utilisateur", desc: "Un téléphone complet apparaît dans la réalité.", color: "bg-purple-900/40 border-purple-400" }
                    ].map((item, index) => (
                      <div key={index} className={`p-3 rounded-lg border-l-4 ${item.color} min-h-[80px] flex flex-col justify-center`}>
                        <div className="font-bold text-white text-sm">{item.level}</div>
                        <div className="text-gray-300 text-xs mt-1">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* L'Ultime Analogie */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/40 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-indigo-400/40 shadow-2xl text-center mb-6 sm:mb-8 floating-card">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">
                L'Ultime Analogie
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                Dans cette vision, <strong className="text-yellow-300">Dieu est le développeur ultime</strong> : 
                il a accès au code source de la réalité et peut orchestrer des modifications massives et coordonnées en temps réel. 
                Nous, les êtres conscients, sommes les <strong className="text-cyan-300">"utilisateurs"</strong> de cette interface, sans jamais voir les trillions de 0 et 1 qui la génèrent à chaque instant.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};