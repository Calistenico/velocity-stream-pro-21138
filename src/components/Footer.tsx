import { Mail, MessageCircle } from "lucide-react";
import goldflixLogo from "@/assets/goldflix-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo e Descrição */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src={goldflixLogo} alt="GOLDFLIX" className="h-10 sm:h-12 w-auto" />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Sua plataforma completa de streaming com milhares de filmes, séries e canais ao vivo.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contato</h3>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="https://wa.me/553599562676" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:contato@goldflix.com"
                className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>contato@goldflix.com</span>
              </a>
            </div>
          </div>

          {/* Links Legais */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Informações</h3>
            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth">
                Termos de Uso
              </a>
              <a href="#" className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 text-center text-sm sm:text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GOLDFLIX. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
