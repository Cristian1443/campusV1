import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CarrerasSection } from './components/CarrerasSection';
import { ModeloDualSection } from './components/ModeloDualSection';
import { AdmisionesSection } from './components/AdmisionesSection';
import { StuttgartSection } from './components/StuttgartSection';
import { RecorridoFuturoSection } from './components/RecorridoFuturoSection';
import { FUSoftSection } from './components/FUSoftSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CarrerasSection />
        <ModeloDualSection />
        <AdmisionesSection />
        <StuttgartSection />
        <RecorridoFuturoSection />
        <FUSoftSection />
      </main>
      <Footer />
    </div>
  );
}