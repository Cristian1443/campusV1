// src/App.tsx

import React from 'react';
import CampusVirtualHero from './components/HeroSection';
import CarrerasSection from './components/CarrerasSection';
import ModeloDualSection from './components/ModeloDualSection';
import AdmisionesSection from './components/AdmisionesSection';
import { RecorridoFuturoSection } from './components/RecorridoFuturoSection';
import { StuttgartSection } from './components/StuttgartSection';
import { FUSoftSection } from './components/FUSoftSection';
import { Footer } from './components/Footer';
import './App.css'; // Estilos generales de la app

const App: React.FC = () => {
  return (
    <div className="App">
      {/* El Header podría ir aquí si quieres que sea fijo en toda la página */}
      <main>
        <CampusVirtualHero />
        <CarrerasSection />
        <ModeloDualSection />
        <StuttgartSection />
        <FUSoftSection />
        <RecorridoFuturoSection />
        <AdmisionesSection />
        {/* Aquí puedes agregar el resto de tus secciones */}
        {/* ...otras secciones */}
      </main>
      <Footer />
    </div>
  );
};

export default App;