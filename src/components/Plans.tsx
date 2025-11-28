import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Plano Mensal",
      price: "R$ 30,00",
      period: "/mês",
      discount: "",
      link: "https://pay.cakto.com.br/63fngnf_474367",
      features: [
        "Acesso completo",
        "Qualidade Full HD",
        "Todos os canais",
        "Filmes e séries ilimitados",
        "Suporte 24/7",
      ],
    },
    {
      name: "Plano 3 Meses",
      price: "R$ 75,00",
      period: "/3 meses",
      discount: "17% de desconto",
      link: "https://pay.cakto.com.br/sdiwvpd",
      popular: true,
      features: [
        "Acesso completo",
        "Qualidade Full HD",
        "Todos os canais",
        "Filmes e séries ilimitados",
        "Suporte prioritário",
        "Economia de R$ 15",
      ],
    },
    {
      name: "Plano 6 Meses",
      price: "R$ 150,00",
      period: "/6 meses",
      discount: "17% de desconto",
      link: "https://pay.cakto.com.br/kjbf84t",
      features: [
        "Acesso completo",
        "Qualidade Full HD",
        "Todos os canais",
        "Filmes e séries ilimitados",
        "Suporte prioritário",
        "Economia de R$ 30",
      ],
    },
    {
      name: "Plano Anual",
      price: "R$ 250,00",
      period: "/ano",
      discount: "31% de desconto",
      link: "https://pay.cakto.com.br/kjbf84t",
      features: [
        "Acesso completo",
        "Qualidade Full HD",
        "Todos os canais",
        "Filmes e séries ilimitados",
        "Suporte VIP",
        "Economia de R$ 110",
      ],
    },
  ];

  return (
    <section id="planos" className="py-12 sm:py-16 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            Escolha seu <span className="text-primary">plano</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Pague menos, assista mais. Sem taxas escondidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`gradient-card p-6 sm:p-8 rounded-xl border-2 transition-smooth animate-fade-in relative ${
                plan.popular
                  ? "border-primary md:scale-105 shadow-2xl glow-primary"
                  : "border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-hero px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                {plan.discount && (
                  <span className="text-primary text-sm font-semibold">
                    {plan.discount}
                  </span>
                )}
                <div className="mt-4">
                  <span className="text-4xl sm:text-5xl font-black">{plan.price}</span>
                  <span className="text-sm sm:text-base text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="hero"
                className="w-full text-base sm:text-lg py-5 sm:py-6"
                asChild
              >
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  Assinar Agora
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA para Revendedores */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="gradient-card p-6 sm:p-8 md:p-10 rounded-xl border-2 border-primary text-center animate-fade-in glow-primary">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
              Quer ser um <span className="text-primary">revendedor</span>?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
              Ganhe dinheiro revendendo nossos planos! Entre em contato e descubra as vantagens exclusivas.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 h-auto"
              asChild
            >
              <a href="https://wa.me/5534972488793?text=Olá! Tenho interesse em ser revendedor" target="_blank" rel="noopener noreferrer">
                Falar com Suporte
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
