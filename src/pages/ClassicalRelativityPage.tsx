import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Globe, Target, ArrowRight } from 'lucide-react';

export const ClassicalRelativityPage: React.FC = () => {
  // Force le re-rendu propre de la page
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden pt-24 sm:pt-28">
      {/* Effet de grille futuriste en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      
      {/* Effet de particules en arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        {/* En-tête */}
        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-violet-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(59,130,246,0.8)] mb-3 sm:mb-4 px-2">
            Relativité Classique
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Découvrez comment Einstein a révolutionné notre compréhension de l'espace, du temps et de la gravité
          </p>
        </header>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Introduction générale */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed">
                Albert Einstein a transformé notre vision de l'univers avec deux théories révolutionnaires qui ont redéfini les concepts d'espace, de temps et de gravité.
              </p>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ces découvertes ne sont pas nées du hasard, mais d'une réflexion profonde sur les contradictions entre la mécanique classique et l'électromagnétisme, 
                puis sur la nature même de la gravité. Explorons ensemble ce voyage intellectuel extraordinaire.
              </p>
            </div>
          </div>

          {/* Section Relativité Restreinte */}
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <div className="flex items-center mb-4 sm:mb-6">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-cyan-400" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-300">
                Relativité Restreinte (1905)
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-cyan-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-200 mb-3">Le problème initial</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Einstein s'interrogeait : pourquoi la vitesse de la lumière semble-t-elle constante, peu importe notre mouvement ? 
                  Cette question simple a mené à une révolution conceptuelle.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                <p>
                  <strong className="text-white">Les deux postulats fondamentaux :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Les lois de la physique sont identiques dans tous les référentiels inertiels</li>
                  <li>La vitesse de la lumière dans le vide est constante pour tous les observateurs</li>
                </ul>
                
                <p>
                  <strong className="text-cyan-300">Conséquences révolutionnaires :</strong> Le temps n'est plus absolu ! 
                  Il se dilate avec la vitesse, créant des effets contre-intuitifs mais mesurables.
                </p>
              </div>
              
              <div className="flex justify-center mt-6">
                <Link
                  to="/relativity"
                  className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Calculateur Interactif
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section Relativité Générale */}
          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <div className="flex items-center mb-4 sm:mb-6">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-purple-400" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300">
                Relativité Générale (1915)
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-200 mb-3">L'intuition géniale</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Einstein réalisa que la gravité n'est pas une force, mais une courbure de l'espace-temps. 
                  Une masse déforme le tissu de l'univers comme une boule sur un trampoline.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                <p>
                  <strong className="text-white">Le principe d'équivalence :</strong> 
                  Impossible de distinguer entre accélération et gravité dans un référentiel fermé.
                </p>
                
                <p>
                  <strong className="text-purple-300">Les équations d'Einstein :</strong> 
                  Elles décrivent comment la matière et l'énergie courbent l'espace-temps, 
                  et comment cette courbure guide le mouvement de la matière.
                </p>
                
                <div className="bg-indigo-900/30 p-4 rounded-lg">
                  <p className="text-center font-mono text-lg sm:text-xl text-indigo-200">
                    G<sub>μν</sub> = 8πT<sub>μν</sub>
                  </p>
                  <p className="text-center text-sm text-gray-300 mt-2">
                    "La géométrie de l'espace-temps = Contenu en énergie-matière"
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <Link
                  to="/relativite-generale"
                  className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Explorer la Relativité Générale
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section Horizon des Événements */}
          <div className="bg-gradient-to-br from-gray-900/60 to-black/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-gray-400/30 shadow-2xl">
            <div className="flex items-center mb-4 sm:mb-6">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-gray-400" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300">
                Horizon des Événements
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gray-900/40 p-4 sm:p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">Quand Einstein rencontre l'extrême</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Les équations d'Einstein prédisent des régions où l'espace-temps est si courbé 
                  que même la lumière ne peut s'échapper : les trous noirs.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                <p>
                  <strong className="text-white">L'horizon des événements</strong> marque la frontière de non-retour. 
                  Mais que se passe-t-il exactement à cette limite selon les équations d'Einstein ?
                </p>
                
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30">
                  <p className="text-red-200">
                    <strong>Phénomène fascinant :</strong> À l'horizon, les rôles de l'espace et du temps s'inversent ! 
                    Ce qui était spatial devient temporel, et vice versa.
                  </p>
                </div>
                
                <p>
                  <strong className="text-gray-300">Conséquence dramatique :</strong> 
                  Après l'horizon, toutes les trajectoires mènent inévitablement vers la singularité. 
                  Le futur devient spatial, l'espace devient temporel.
                </p>
              </div>
              
              <div className="flex justify-center mt-6">
                <Link
                  to="/black-hole-concept"
                  className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
                >
                  Visualisation Interactive
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-yellow-400/40 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-4">L'héritage d'Einstein</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
              Ces théories ne sont pas que des curiosités intellectuelles. Elles sont essentielles au fonctionnement du GPS, 
              à la compréhension des étoiles à neutrons, et ouvrent la voie à la détection des ondes gravitationnelles. 
              Einstein nous a montré que l'univers est bien plus étrange et merveilleux que nous l'imaginions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};