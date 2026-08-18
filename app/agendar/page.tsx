"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const services = [
  "Corte masculino",
  "Barba",
  "Corte + barba",
  "Degradê",
  "Corte infantil",
  "Sobrancelha",
];

const professionals = [
  "Sem preferência",
  "Caio Martins",
  "Rafael Lima",
  "Lucas Mendes",
];

export default function AgendarPage() {
  const [name, setName] = useState("");
  const [service, setService] = useState(() => {
  if (typeof window === "undefined") return "";

  const params = new URLSearchParams(window.location.search);
  const selectedService = params.get("servico");

  return selectedService && services.includes(selectedService)
    ? selectedService
    : "";
});
  const [professional, setProfessional] = useState(() => {
  if (typeof window === "undefined") return "Sem preferência";

  const params = new URLSearchParams(window.location.search);
  const selectedProfessional = params.get("profissional");

  return selectedProfessional &&
    professionals.includes(selectedProfessional)
    ? selectedProfessional
    : "Sem preferência";
});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const phone = "5515999999999";

    const message = `Olá! Meu nome é ${name}.

Gostaria de agendar: ${service}.
Profissional: ${professional}.

Poderiam me informar os horários disponíveis?`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <main className="schedulePage">
   <Link className="scheduleBack" href="/">
  ← VOLTAR
    </Link>

      <section className="scheduleIntro">
        <div className="eyebrow">
          <span /> AGENDE SEU HORÁRIO
        </div>

        <h1>
          SEU PRÓXIMO CORTE
          <br />
          <em>COMEÇA AQUI.</em>
        </h1>

        <p>
          Conte pra gente o que você procura e continue o atendimento pelo
          WhatsApp.
        </p>
      </section>

      <section className="scheduleCard">
        <div className="scheduleStep">
          <span>01</span>
          <p>SEUS DADOS</p>
        </div>

        <form onSubmit={handleSubmit} className="scheduleForm">
          <label>
            SEU NOME
            <input
              type="text"
              placeholder="Como podemos te chamar?"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>

          <label>
            SERVIÇO
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
            >
              <option value="">Escolha seu serviço</option>

              {services.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            PROFISSIONAL
            <select
              value={professional}
              onChange={(event) => setProfessional(event.target.value)}
            >
              {professionals.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className="button primary scheduleSubmit">
            CONTINUAR NO WHATSAPP ↗
          </button>

          <small>
            Você será direcionado ao WhatsApp para confirmar o melhor horário.
          </small>
        </form>
      </section>
    </main>
  );
}