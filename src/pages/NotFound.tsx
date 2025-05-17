import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-amber-500 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Non Trouvée</h2>
          <p className="text-lg text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Retour à l'Accueil
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;