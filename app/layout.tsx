import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
const display=Anton({variable:"--font-display",weight:"400",subsets:["latin"]});
const body=Inter({variable:"--font-body",subsets:["latin"]});
export const metadata:Metadata={title:"Barbearia Tatuí | Barbearia em Tatuí",description:"Cortes masculinos, barba e atendimento moderno no Centro de Tatuí. Conheça a Barbearia Tatui e agende seu horário online.",keywords:["barbearia em Tatuí","corte masculino Tatuí","barba Tatuí","Barbearia Tatui"],openGraph:{title:"Barbearia Tatui | Barbearia em Tatuí",description:"Seu estilo. Seu horário. Sua barbearia.",type:"website",locale:"pt_BR"},icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},other:{"codex-preview":"development"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>}
