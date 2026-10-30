"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SITE = {
  bookingUrl: "/agendar",
  whatsappNumber: "5515988311292",
  phone: "(15) 98831-1292",
  instagram: "https://instagram.com/barbertatui",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Exemplo,+123,+Centro,+Tatuí,+SP",
};

const services = [
  ["Corte masculino", "R$ 45", "Do clássico ao contemporâneo"],
  ["Barba", "R$ 35", "Desenho e acabamento"],
  ["Corte + barba", "R$ 70", "Experiência completa Barbearia Tatuí"],
  ["Degradê", "R$ 50", "Precisão em cada detalhe"],
  ["Corte infantil", "R$ 40", "Cuidado e tranquilidade"],
  ["Sobrancelha", "R$ 15", "O detalhe que faz diferença"],
];

const gallery = [
  [
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=82",
    "Acabamento de barba",
  ],
  [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=82",
    "Ambiente da barbearia",
  ],
  [
    "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1000&q=82",
    "Corte moderno",
  ],
  [
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=82",
    "Experiência Completa",
  ],
];

const team = [
  [
    "Caio Martins",
    "Especialista em degradê",
    "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Rafael Lima",
    "Cortes clássicos e barba",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Lucas Mendes",
    "Visagismo e cortes modernos",
    "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=700&q=80",
  ],
];

const reviews = [
  [
    "Matheus R.",
    "Corte impecável e atendimento muito bom. Ambiente leve e equipe atenciosa.",
  ],
  [
    "Bruno S.",
    "Meu degradê ficou exatamente como eu queria. Já virou minha barbearia em Tatuí.",
  ],
  [
    "André L.",
    "Pontualidade, cuidado nos detalhes e uma experiência excelente do começo ao fim.",
  ],
];

const faqs = [
  [
    "Preciso agendar horário?",
    "Recomendamos o agendamento para garantir seu horário, principalmente nos períodos de maior movimento.",
  ],
  [
    "Como faço meu agendamento?",
    "Clique em qualquer botão de agendamento do site, escolha o serviço e selecione o melhor horário para você.",
  ],
  [
    "Vocês atendem crianças?",
    "Sim. Temos corte infantil disponível entre nossos serviços.",
  ],
  [
    "Quais formas de pagamento são aceitas?",
    "Trabalhamos com as principais formas de pagamento. Se precisar confirmar uma opção específica, fale com nossa equipe antes da visita.",
  ],
  [
    "Onde fica a barbearia?",
    "Estamos na Rua Exemplo, 123, no Centro de Tatuí/SP. Use o botão “Como chegar” para abrir a rota.",
  ],
];

const Arrow = () => <span aria-hidden>↗</span>;

const Book = ({
  className = "button primary",
  label = "Agendar horário",
}: {
  className?: string;
  label?: string;
}) => (
  <Link className={className} href={SITE.bookingUrl}>
    {label} <Arrow />
  </Link>
);


export default function Home() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("revealed"),
        ),
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));

    const onScroll = () => setScrolled(window.scrollY > 36);

    addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      removeEventListener("scroll", onScroll);
    };
  }, []);


  return (
    <main>
      <header className={scrolled ? "header scrolled" : "header"}>
        <a className="brand" href="#inicio">
          <span className="brandMark">T</span>

          <span>
            BARBEARIA
            <br />
            <b>TATUÍ</b>
          </span>
        </a>

        <nav
          className={menu ? "nav open" : "nav"}
          aria-label="Navegação principal"
        >
          <a href="#sobre" onClick={() => setMenu(false)}>
            Sobre
          </a>

          <a href="#servicos" onClick={() => setMenu(false)}>
            Serviços
          </a>

          <a href="#galeria" onClick={() => setMenu(false)}>
            Trabalhos
          </a>

          <a href="#unidade" onClick={() => setMenu(false)}>
            Unidade
          </a>

          <Link
            className="mobileBooking"
            href={SITE.bookingUrl}
            onClick={() => setMenu(false)}
          >
            Agendar horário
          </Link>
        </nav>

        <div className="headerActions">
          <Book className="button primary headerCta" />

          <button
            className="menuButton"
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-label="Abrir menu"
          >
            <i />
            <i />
          </button>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="heroBackground">
          <picture>
            <source srcSet="/barbearia-hero-bg.webp" type="image/webp" />
            <img
              src="/barbearia-hero-bg.jpg"
              alt="Barbeiro realizando acabamento de barba na Barbearia Tatuí"
              className="heroImg"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="heroOverlay" />
        </div>

        <div className="heroGrid" />

        <div className="heroContent">
          <div className="heroSubtitle">— MAIS QUE UM CORTE, UMA ATITUDE.</div>

          <h1>
            ESTILO.
            <br />
            SEU HORÁRIO.
            <br />
            <em>SUA BARBEARIA.</em>
          </h1>

          <p>
            Cortes atuais, barba impecável e uma experiência premium no coração
            de Tatuí.
          </p>

          <div className="heroButtons">
            <Book label="Agendar horário" />

            <a className="heroPlayBtn" href="#sobre" aria-label="Conheça nossa barbearia">
              <span className="heroPlayCircle" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="heroPlayText">Conheça nossa barbearia</span>
            </a>
          </div>

          <div className="heroMeta">
            <span>SEG — SÁB</span>
            <i />
            <span>CENTRO, TATUÍ</span>
            <i />
            <span>ATENDIMENTO COM HORA MARCADA</span>
          </div>
        </div>

        <div className="heroBottomBar">
          <div className="socialProof">
            <div>
              <strong>4,9</strong>
              <span className="stars">★★★★★</span>
            </div>

            <p>
              no Google
              <br />
              <b>+160 avaliações</b>
            </p>

            <span className="proofLine" />

            <p>
              Atendimento que
              <br />
              <b>Tatuí recomenda.</b>
            </p>
          </div>

          <div className="heroDiferenciais">
            <div className="diferencialItem">
              <span className="diferencialIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </span>
              <span>Profissionais Especializados</span>
            </div>

            <div className="diferencialDivider" />

            <div className="diferencialItem">
              <span className="diferencialIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l4 6-10 12L2 9z" />
                  <path d="M12 21L8 9h8z" />
                  <path d="M2 9h20" />
                </svg>
              </span>
              <span>Produtos de Alta Qualidade</span>
            </div>

            <div className="diferencialDivider" />

            <div className="diferencialItem">
              <span className="diferencialIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>Localização Privilegiada</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-hidden>
        <div>
          CORTE • BARBA • ESTILO • PRECISÃO • ATITUDE • CORTE • BARBA • ESTILO •
          PRECISÃO • ATITUDE •
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="sectionNumber">01 — SOBRE</div>

        <div className="aboutCopy reveal">
          <div className="eyebrow">
            <span /> Mais que um corte
          </div>

          <h2>
            AQUI, SEU ESTILO
            <br />
            ENTRA <em>EM CENA.</em>
          </h2>

          <div className="aboutStats">
            <div>
              <strong>4,9</strong>
              <span>NO GOOGLE</span>
            </div>

            <div>
              <strong>+160</strong>
              <span>AVALIAÇÕES</span>
            </div>

            <div>
              <strong>01</strong>
              <span>EXPERIÊNCIA</span>
            </div>
          </div>
        </div>

        <div className="aboutText reveal">
          <p>
            Nascida em Tatuí, a Barbearia Tatuí une técnica, personalidade e
            atendimento sem formalidade. Um espaço para desacelerar, trocar ideia
            e sair com a melhor versão do seu estilo.
          </p>

          <p className="muted">
            Sem excessos. Sem personagem. Só trabalho bem-feito, ambiente leve e
            atenção em cada detalhe.
          </p>

          <a className="textLink" href="#galeria">
            CONHEÇA NOSSO ESPAÇO <Arrow />
          </a>
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="sectionTop">
          <div>
            <div className="sectionNumber">02 — SERVIÇOS</div>

            <h2>
              ESCOLHA SEU
              <br />
              <em>PRÓXIMO VISUAL.</em>
            </h2>
          </div>

          <p>
            Do acabamento clássico ao degradê preciso. Escolha seu serviço e
            reserve seu horário.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service, index) => (
            <article
              className={`serviceCard reveal ${
                index === 2 ? "popular" : ""
              }`}
              key={service[0]}
            >
              {index === 2 && (
                <span className="popularTag">MAIS PEDIDO</span>
              )}

              <span className="cardNumber">0{index + 1}</span>

              <h3>{service[0]}</h3>

              <p>{service[2]}</p>

              <div>
                <strong>{service[1]}</strong>

                <Link
                  href={`/agendar?servico=${encodeURIComponent(service[0])}`}
                  aria-label={`Agendar ${service[0]}`}
                >
                  <span>AGENDAR</span>
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallerySection" id="galeria">
        <div className="sectionTop">
          <div>
            <div className="sectionNumber">03 — NOSSO TRABALHO</div>

            <h2>
              RESULTADO QUE
              <br />
              <em>FALA POR SI.</em>
            </h2>
          </div>

          <a
            className="textLink"
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
          >
            VER NO INSTAGRAM <Arrow />
          </a>
        </div>

        <div className="gallery">
          {gallery.map(([src, alt], index) => (
            <figure
              className={`galleryItem g${index + 1} reveal`}
              key={src}
            >
              <img src={src} alt={alt} loading="lazy" />

              <figcaption>
                <span>0{index + 1}</span>
                {alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section teamSection">
        <div className="sectionNumber">04 — EQUIPE</div>

        <div className="sectionTop">
          <h2>
            CONHEÇA
            <br />
            <em>NOSSO TIME.</em>
          </h2>

          <p>
            Técnica, atenção e personalidade para encontrar o visual que combina
            com você.
          </p>
        </div>

        <div className="teamGrid">
          {team.map(([name, specialty, photo], index) => (
            <article className="teamCard reveal" key={name}>
              <div className="teamPhoto">
                <img
                  src={photo}
                  alt={`Foto de ${name}`}
                  loading="lazy"
                />

                <span>0{index + 1}</span>
              </div>

              <div className="teamDetails">
                <div>
                  <h3>{name}</h3>
                  <p>{specialty}</p>
                </div>

                <Link
                  href={`/agendar?profissional=${encodeURIComponent(name)}`}
                  aria-label={`Agendar com ${name}`}
                >
                  AGENDAR <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews">
        <div className="reviewsHead reveal">
          <div>
            <div className="sectionNumber">05 — AVALIAÇÕES</div>

            <h2>
              QUEM VEM,
              <br />
              <em>RECOMENDA.</em>
            </h2>
          </div>

          <div className="scoreLockup">
            <span className="stars">★★★★★</span>

            <div>
              <strong>4,9</strong>
              <p>NO GOOGLE</p>
            </div>

            <b>
              +160
              <br />
              <small>AVALIAÇÕES</small>
            </b>
          </div>
        </div>

        <div className="reviewCards">
          {reviews.map(([name, text], index) => (
            <article className="reviewCard reveal" key={name}>
              <div className="reviewCardTop">
                <span className="stars">★★★★★</span>
                <i>0{index + 1}</i>
              </div>

              <blockquote>“{text}”</blockquote>

              <div className="reviewAuthor">
                <span>{name.slice(0, 1)}</span>

                <p>
                  <b>{name}</b>
                  <small>CLIENTE BARBEARIA TATUÍ</small>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reviewFooter">
          <p>Opiniões que constroem nossa reputação todos os dias.</p>

          <a
            className="button outline"
            href="#"
            aria-label="Ver avaliações no Google"
          >
            Ver avaliações no Google <Arrow />
          </a>
        </div>
      </section>

      <section className="bookingSection">
        <div className="bookingGlow" />
        <div className="bookingRings" />
        <div className="bookingCut cutOne" />
        <div className="bookingCut cutTwo" />

        <div className="eyebrow">
          <span /> Seu horário, do seu jeito
        </div>

        <h2>
          SEU PRÓXIMO CORTE
          <br />
          <em>COMEÇA AQUI.</em>
        </h2>

        <p>Escolha o melhor horário e deixe o resto com a gente.</p>

        <Book
          className="button primary big"
          label="Agendar meu horário"
        />

        <small>RÁPIDO • SIMPLES • ONLINE</small>
      </section>

      <section className="section location" id="unidade">
        <div className="locationInfo">
          <div className="sectionNumber">06 — UNIDADE</div>
          <div className="unitBadge">UNIDADE 01</div>

          <h2>
            BARBEARIA
            <br />
            <em>TATUÍ.</em>
          </h2>

          <address>
            Rua Exemplo, 123
            <br />
            Centro — Tatuí/SP
          </address>

          <a
            className="textLink"
            href={`tel:+${SITE.whatsappNumber}`}
          >
            {SITE.phone}
          </a>

          <div className="hours">
            <p>
              <span>Segunda a sábado</span>
              <b>09h — 19h30</b>
            </p>

            <p>
              <span>Domingo</span>
              <b>09h — 12h</b>
            </p>
          </div>

          <a
            className="button outline"
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Como chegar <Arrow />
          </a>
        </div>

        <div className="mapPlaceholder">
          <div className="mapGrid" />
          <span className="pin">T</span>

          <p>
            BARBEARIA TATUÍ
            <br />
            <small>CENTRO — TATUÍ/SP</small>
          </p>
        </div>
      </section>

      <section className="section faq">
        <div>
          <div className="sectionNumber">07 — DÚVIDAS</div>

          <h2>
            PERGUNTAS
            <br />
            <em>FREQUENTES.</em>
          </h2>
        </div>

        <div className="faqList">
          {faqs.map(([question, answer], index) => (
            <article
              className={faq === index ? "faqItem active" : "faqItem"}
              key={question}
            >
              <button
                onClick={() =>
                  setFaq(faq === index ? null : index)
                }
                aria-expanded={faq === index}
              >
                <span>{question}</span>
                <b>{faq === index ? "−" : "+"}</b>
              </button>

              <div>
                <p>{answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="footerTop">
          <a className="brand footerBrand" href="#inicio">
            <span className="brandMark">T</span>

            <span>
              BARBEARIA
              <br />
              <b>TATUÍ</b>
            </span>
          </a>

          <h3>
            O SEU ESTILO
            <br />
            NÃO ESPERA.
          </h3>

          <Book />
        </div>

        <div className="footerGrid">
          <div>
            <b>NAVEGAÇÃO</b>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Trabalhos</a>
            <a href="#unidade">Unidade</a>
          </div>

          <div>
            <b>CONTATO</b>

            <a href={`tel:+${SITE.whatsappNumber}`}>
              {SITE.phone}
            </a>

            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
            >
              @barbertatui
            </a>

            <p>
              Rua Exemplo, 123
              <br />
              Centro — Tatuí/SP
            </p>
          </div>

          <div>
            <b>HORÁRIOS</b>

            <p>
              Seg — Sáb: 09h às 19h30
              <br />
              Dom: 09h às 12h
            </p>
          </div>
        </div>

        <div className="projectNotice">
          Projeto demonstrativo. Alguns preços, profissionais, depoimentos e
          informações apresentados são ilustrativos.
        </div>

        <div className="footerBottom">
          <p>© 2026 Barbearia Tatuí.</p>
          <a href="#">Política de privacidade</a>
        </div>
      </footer>

      <a
        className="whatsapp"
        href={`https://wa.me/${SITE.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
      >
        WA
      </a>

      <Link className="mobileSticky" href={SITE.bookingUrl}>
        AGENDAR HORÁRIO <Arrow />
      </Link>
    </main>
  );
}