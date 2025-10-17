import { Button } from "@/components/ui/button";
import goldflixLogo from "@/assets/goldflix-logo.jpg";

const Header = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={goldflixLogo} alt="GOLDFLIX" className="h-10 sm:h-12 w-auto" />
        </div>
        
        <Button 
          variant="hero" 
          size="default"
          className="text-sm sm:text-base px-4 sm:px-6"
          onClick={scrollToPlans}
        >
          Assinar Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
