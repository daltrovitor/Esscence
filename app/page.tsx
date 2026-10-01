// Hello World
"use client";

import React, { useState } from "react";
import PRXLogo from "./components/PRXLogo";
import EssenceRoyalleLogo from "./components/EssenceRoyalleLogo";
import IntroSplash from "./components/IntroSplash";
import {
  FileDown,
  Play,
  Share2,
  CheckCircle2,
  Sparkles,
  Users,
  Package,
  ShieldCheck,
  TrendingUp,
  FlaskConical,
  Flame,
  ArrowRight,
  Award,
  DollarSign,
  Scale,
} from "lucide-react";

export default function ProposalPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#C59B27] selection:text-white relative overflow-x-hidden">
      {/* Apresentação Inicial Cinética Estilo ViraWeb (Cadência 0.6s) */}
      <IntroSplash isOpen={showIntro} onClose={() => setShowIntro(false)} />

      {/* ========================================================================= */}
      {/* 1. CABEÇALHO INSTITUCIONAL FIXO (Top Bar)                                 */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Aliança de Logos no Topo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex flex-col items-center">
              <PRXLogo
                size="sm"
                animated={false}
                showSubtitle={false}
                className="w-24 sm:w-28"
              />
              <span className="-mt-1 inline-flex items-center gap-1 text-[8px] font-semibold tracking-wide text-slate-500">
                <img
                  src="https://prx.app.br/brand/prx-app-icon.svg/"
                  alt=""
                  aria-hidden="true"
                  className="h-2.5 w-2.5"
                />
                the next pays
              </span>
            </div>
            <span className="text-slate-300 font-light text-lg sm:text-xl select-none">
              ×
            </span>
            <div className="flex items-center gap-2">
              <EssenceRoyalleLogo size="sm" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-serif font-bold tracking-wider text-slate-900 leading-none">
                  ESSENCE ROYALLE
                </span>
                <span className="text-[10px] font-mono text-[#B48328] uppercase tracking-widest mt-0.5">
                  PRX LAB
                </span>
              </div>
            </div>
          </div>

          {/* Navegação F-Pattern Anchor Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-slate-600">
            <a
              href="#projeto"
              className="hover:text-[#B48328] transition-colors cursor-pointer"
            >
              O Projeto
            </a>
            <a
              href="#forcas"
              className="hover:text-[#B48328] transition-colors cursor-pointer"
            >
              Três Forças
            </a>
            <a
              href="#responsabilidades"
              className="hover:text-[#B48328] transition-colors cursor-pointer"
            >
              Responsabilidades
            </a>
            <a
              href="#modelo-comercial"
              className="hover:text-[#B48328] transition-colors cursor-pointer"
            >
              Modelo Comercial
            </a>
            <a
              href="#por-que-essence-prx"
              className="hover:text-[#B48328] transition-colors cursor-pointer"
            >
              Por Que a Parceria?
            </a>
          </nav>

          {/* Ações Rápidas do Cabeçalho */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setShowIntro(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-sm bg-white transition-all cursor-pointer"
              title="Rever animação de introdução"
            >
              <Play className="w-3.5 h-3.5 text-[#B48328]" />
              <span>Apresentação</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-sm shadow-xs transition-all cursor-pointer"
              title="Salvar proposta comercial em PDF"
            >
              <FileDown className="w-4 h-4 text-[#C59B27]" />
              <span>Exportar PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION — COMPOSIÇÃO EM PADRÃO F                                  */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 border-b border-slate-100 bg-linear-to-b from-slate-50/50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna Dominante (Leitura Principal em F) */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              {/* Badge de Aliança Oficial */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-amber-200/80 bg-amber-50/60 text-[#B48328] text-xs font-mono font-medium tracking-wider uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Proposta de Parceria Estratégica • PRX LAB</span>
              </div>

              {/* Título Monumental Direto */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 uppercase leading-none">
                PRX LAB
              </h1>
              <p className="mt-3 text-lg sm:text-2xl font-semibold tracking-tight text-slate-700">
                <span className="text-[#B48328]">ESSENCE ROYALLE</span> × RAFAEL MOLINA ×{" "}
                <span className="text-[#0B67FF]">PRX</span>
              </p>

              {/* Manchete Central */}
              <div className="mt-8 border-l-4 border-[#B48328] pl-5 sm:pl-6 py-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
                  A próxima geração não quer apenas consumir uma marca. Quer fazer parte dela.
                </h2>
              </div>

              {/* Parágrafo Descritivo da Proposta */}
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                A proposta é criar, junto à <strong>Essence Royalle</strong>, uma linha de suplementação em gummies baseada em drops especiais e edições limitadas cocriadas e assinadas por jovens da <strong>Gen Z</strong>.
              </p>
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                Cada edição terá um novo rosto, uma nova história e uma nova assinatura.
              </p>

              {/* Mantra Visual do Projeto */}
              <div className="mt-8 p-5 sm:p-6 bg-slate-950 text-white rounded-sm w-full max-w-2xl border border-slate-800 shadow-sm">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E6C875] block mb-2">
                  O Conceito Fundamental
                </span>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Você cria. Você assina. Você vira o rótulo.
                </p>
              </div>

              {/* Botões de Ação Primária */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-sm shadow-xs transition-all cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-[#C59B27]" />
                  <span>Salvar Proposta em PDF</span>
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-700 hover:text-slate-950 border border-slate-300 hover:border-slate-400 rounded-sm bg-white transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-slate-500" />
                  <span>{copied ? "Link Copiado!" : "Compartilhar Proposta"}</span>
                </button>
              </div>
            </div>

            {/* Coluna Lateral de Apoio Visual (38.2% - Proporção Áurea) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Card Institucional da Essence Royalle */}
              <div className="p-6 sm:p-8 rounded-sm border border-amber-200/80 bg-linear-to-b from-amber-50/40 via-white to-white shadow-xs flex flex-col items-center text-center">
                <EssenceRoyalleLogo size="lg" className="w-28 h-28 mb-4" />
                <h3 className="text-lg font-serif font-bold text-slate-900 tracking-wide">
                  ESSENCE ROYALLE
                </h3>
                <span className="text-xs font-mono uppercase text-[#B48328] tracking-widest mt-1">
                  Laboratório & Manufatura
                </span>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Autoridade no desenvolvimento e produção de suplementação de alta performance e fórmulas proprietárias.
                </p>

                <div className="w-full mt-6 pt-5 border-t border-amber-100 flex items-center justify-around text-center">
                  <div>
                    <span className="block text-2xl font-black text-slate-900">60%</span>
                    <span className="text-[10px] font-mono uppercase text-slate-500">Essence</span>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div>
                    <span className="block text-2xl font-black text-[#0B67FF]">30%</span>
                    <span className="text-[10px] font-mono uppercase text-slate-500">Molina / PRX</span>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div>
                    <span className="block text-2xl font-black text-[#B48328]">10%</span>
                    <span className="text-[10px] font-mono uppercase text-slate-500">Jovem Creator</span>
                  </div>
                </div>
              </div>

              {/* Card Conceitual do Drop Colecionável */}
              <div className="p-5 rounded-sm border border-slate-200 bg-slate-50/70 text-left">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-500 mb-2">
                  <Package className="w-4 h-4 text-[#B48328]" />
                  <span>Modelo de Drops Exclusivos</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  Produtos colecionáveis em edições limitadas numeradas, unindo suplementação em gummies com cultura jovem autêntica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SEÇÃO: O PROJETO (AS TRÊS FORÇAS)                                       */}
      {/* ========================================================================= */}
      <section id="projeto" className="py-20 border-b border-slate-100 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da Seção */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B48328] font-semibold block mb-2">
              Estrutura Estratégica
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              O PROJETO: PRX LAB
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              A linha <strong>PRX LAB</strong> da Essence Royalle nasce da união simbiótica de três forças complementares do mercado:
            </p>
          </div>

          {/* Grade das Três Forças */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Força 1: Essence Royalle */}
            <div className="p-8 rounded-sm border border-slate-200 hover:border-amber-300 transition-all bg-white shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-amber-50 border border-amber-200 flex items-center justify-center mb-6">
                  <FlaskConical className="w-6 h-6 text-[#B48328]" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  Pilar Industrial
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  ESSENCE ROYALLE
                </h3>
                <p className="text-sm font-semibold text-[#B48328] mb-3">
                  Produto, produção e operação.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Infraestrutura fabril, garantia regulatória da ANVISA, desenvolvimento de fórmulas e excelência logística.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                Capacidade Técnica & Escala
              </div>
            </div>

            {/* Força 2: Rafael Molina + PRX */}
            <div className="p-8 rounded-sm border border-slate-200 hover:border-blue-300 transition-all bg-white shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mb-6">
                  <Flame className="w-6 h-6 text-[#0B67FF]" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  Pilar Cultural & Demanda
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  RAFAEL MOLINA + PRX
                </h3>
                <p className="text-sm font-semibold text-[#0B67FF] mb-3">
                  Conceito, comunicação, acesso à Gen Z e construção de desejo.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ecossistema digital jovem, alcance massivo com a nova geração, presença física em escolas e validação cultural.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                Engajamento & Comunidade
              </div>
            </div>

            {/* Força 3: Gen Z (O Jovem) */}
            <div className="p-8 rounded-sm border border-slate-200 hover:border-emerald-300 transition-all bg-white shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#15803D]" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  Pilar de Autenticidade
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  GEN Z (O Jovem)
                </h3>
                <p className="text-sm font-semibold text-[#15803D] mb-3">
                  Um jovem selecionado para cocriar e assinar cada edição especial.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rosto real, voz da comunidade e identidade própria estampada diretamente no rótulo de cada drop.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                Cocriação & Pertencimento
              </div>
            </div>
          </div>

          {/* Destaque do Manifesto */}
          <div className="mt-12 p-6 sm:p-8 rounded-sm border border-slate-200 bg-slate-50/80 text-center max-w-4xl mx-auto">
            <p className="text-base sm:text-xl font-medium text-slate-800 italic leading-relaxed">
              &ldquo;Mais do que lançar gummies, queremos transformar cada produto em um drop colecionável, desejável e com uma pessoa real por trás.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SEÇÃO: DIVISÃO DE RESPONSABILIDADES                                     */}
      {/* ========================================================================= */}
      <section id="responsabilidades" className="py-20 border-b border-slate-100 bg-slate-50/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B48328] font-semibold block mb-2">
              Governança Operacional
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              DIVISÃO DE RESPONSABILIDADES
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Escopo delimitado de atuação para garantir agilidade e excelência na execução de cada drop.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bloco 1: Essence Royalle */}
            <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    ESSENCE ROYALLE
                  </h3>
                  <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-amber-50 text-[#B48328] border border-amber-200 rounded-sm">
                    Operação & Finanças
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  A Essence será responsável por toda a estrutura operacional e financeira do projeto:
                </p>

                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B48328] shrink-0 mt-0.5" />
                    <span>Produção dos gummies</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B48328] shrink-0 mt-0.5" />
                    <span>Desenvolvimento e adequação das fórmulas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B48328] shrink-0 mt-0.5" />
                    <span>Custos integrais de produção</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B48328] shrink-0 mt-0.5" />
                    <span>Confecção das embalagens e rótulos personalizados</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B48328] shrink-0 mt-0.5" />
                    <span>Gestão de estoque físico</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B48328] shrink-0 mt-0.5" />
                    <span>Plataforma e estrutura de vendas online</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B48328] shrink-0 mt-0.5" />
                    <span>Logística e distribuição de entregas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B48328] shrink-0 mt-0.5" />
                    <span>Faturamento e obrigações fiscais</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B48328] shrink-0 mt-0.5" />
                    <span>Obrigações regulatórias e cumprimento de prazos acordados</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 bg-amber-50/50 p-4 rounded-sm border border-amber-100">
                <span className="text-xs font-semibold text-slate-900 block mb-1">
                  Compromisso Financeiro:
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Todos os custos de produção e operação ficam sob responsabilidade da <strong>Essence Royalle</strong>.
                </p>
              </div>
            </div>

            {/* Bloco 2: Rafael Molina + PRX */}
            <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    RAFAEL MOLINA + PRX
                  </h3>
                  <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-blue-50 text-[#0B67FF] border border-blue-200 rounded-sm">
                    Cultura & Comercial
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Rafael Molina e PRX serão responsáveis pela construção cultural e comercial dos drops:
                </p>

                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5" />
                    <span>Criação e posicionamento do projeto</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5" />
                    <span>Divulgação nas redes sociais de Rafael Molina</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5" />
                    <span>Destaque dos produtos dentro do PRX</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5" />
                    <span>Seleção e convite dos jovens que assinarão cada edição</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5" />
                    <span>Criação de narrativas e produção de conteúdo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5" />
                    <span>Ativações exclusivas em colégios e escolas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5" />
                    <span>Presença em eventos voltados à Gen Z</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5" />
                    <span>Lançamento dos drops e conexões com parceiros e creators</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 bg-blue-50/50 p-4 rounded-sm border border-blue-100">
                <span className="text-xs font-semibold text-slate-900 block mb-1">
                  Trabalho Comercial:
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Construção de tração, desejo e conversão direta para as vendas dos drops da linha.
                </p>
              </div>
            </div>

            {/* Bloco 3: O Jovem (Gen Z) */}
            <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    O JOVEM (GEN Z)
                  </h3>
                  <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-emerald-50 text-[#15803D] border border-emerald-200 rounded-sm">
                    Cocriador do Rótulo
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Cada edição terá um jovem Gen Z escolhido para representar o drop de forma autêntica:
                </p>

                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span>Estampar a embalagem oficial da sua edição</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span>Participação na escolha de elementos da edição</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span>Definição conjunta de conceito, proposta ou identidade</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span>Opinião no direcionamento de sabor (dentro das regras técnicas)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span>Adequação regulatória validada junto à Essence</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 bg-emerald-50/50 p-4 rounded-sm border border-emerald-100">
                <span className="text-xs font-semibold text-slate-900 block mb-1">
                  Evolução do Papel:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-bold">
                  Ele deixa de ser apenas influenciador. Vira parte do produto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SEÇÃO: MODELO COMERCIAL PROPOSTO                                        */}
      {/* ========================================================================= */}
      <section id="modelo-comercial" className="py-20 border-b border-slate-100 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B48328] font-semibold block mb-2">
              Estrutura Financeira
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              MODELO COMERCIAL PROPOSTO
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Para as edições especiais <strong>PRX LAB</strong>, propomos a seguinte divisão do lucro líquido apurado em cada edição:
            </p>
          </div>

          {/* Gráfico Visual de Repartição */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* 60% Essence Royalle */}
            <div className="p-8 rounded-sm border-2 border-slate-900 bg-slate-950 text-white flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E6C875]">
                    Indústria & Operação
                  </span>
                  <Award className="w-5 h-5 text-[#E6C875]" />
                </div>
                <div className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-2">
                  60%
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  ESSENCE ROYALLE
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Remuneração de toda a infraestrutura fabril, desenvolvimento técnico, custos de operação e logística.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                Maior Participação do Projeto
              </div>
            </div>

            {/* 30% Rafael Molina + PRX */}
            <div className="p-8 rounded-sm border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0B67FF]">
                    Comunicação & Vendas
                  </span>
                  <TrendingUp className="w-5 h-5 text-[#0B67FF]" />
                </div>
                <div className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 mb-2">
                  30%
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  RAFAEL MOLINA + PRX
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Remuneração pela construção cultural, tração nas redes, canais no app PRX e gestão dos drops.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                Tração e Conversão Gen Z
              </div>
            </div>

            {/* 10% Jovem Creator */}
            <div className="p-8 rounded-sm border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#15803D]">
                    Criador do Drop
                  </span>
                  <Sparkles className="w-5 h-5 text-[#15803D]" />
                </div>
                <div className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 mb-2">
                  10%
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  JOVEM QUE ASSINA O DROP
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Participação direta nos lucros do produto, engajando a audiência e transformando o jovem em sócio do drop.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                Incentivo e Pertencimento
              </div>
            </div>
          </div>

          {/* Cláusula de Transparência e Governança */}
          <div className="p-6 sm:p-8 rounded-sm border border-slate-200 bg-slate-50 flex items-start gap-4">
            <Scale className="w-6 h-6 text-[#B48328] shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">
                Governança, Transparência & Prestação de Contas
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O conceito de lucro líquido, custos dedutíveis, prestação de contas, periodicidade dos repasses e demais critérios financeiros serão definidos previamente em contrato, garantindo transparência para todas as partes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SEÇÃO: POR QUE ESSENCE × PRX?                                           */}
      {/* ========================================================================= */}
      <section id="por-que-essence-prx" className="py-20 border-b border-slate-100 bg-slate-50/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B48328] font-semibold block mb-2">
              Sinergia Estratégica
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              POR QUE ESSENCE × PRX?
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Quatro certezas que tornam esta aliança única no mercado nacional de suplementação:
            </p>
          </div>

          {/* 4 Pilares da Sinergia */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                <Package className="w-5 h-5 text-[#B48328]" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                A Essence já sabe produzir.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expertise fabril consolidada, fórmulas testadas e capacidade comprovada de entrega com rigor técnico.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#0B67FF]" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                A PRX sabe onde a próxima geração está.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ecossistema que acompanha a rotina do jovem em múltiplos momentos e canais digitais e presenciais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-purple-50 border border-purple-200 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Rafael Molina sabe conversar com ela.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comunicação direta, autêntica e sem filtros com a Gen Z, gerando identificação e desejo imediato.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#15803D]" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                E a própria Gen Z ajuda a construir.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                O produto deixa de ser imposto de cima para baixo e passa a ser cocriado com quem vai consumir.
              </p>
            </div>
          </div>

          {/* Fechamento Monumental */}
          <div className="mt-14 p-8 sm:p-12 rounded-sm border border-slate-900 bg-slate-950 text-white text-center max-w-4xl mx-auto shadow-sm">
            <h3 className="text-xl sm:text-3xl font-black tracking-tight text-white mb-4">
              Não queremos apenas colocar jovens em uma campanha.
            </h3>
            <p className="text-lg sm:text-2xl font-bold text-[#E6C875] mb-6">
              Queremos colocá-los dentro do negócio.
            </p>
            <div className="inline-flex flex-col items-center pt-6">
              <span className="text-sm font-serif font-bold tracking-widest uppercase text-white">
                PRX LAB by Essence Royalle
              </span>
              <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <img
                  src="https://prx.app.br/brand/prx-app-icon.svg/"
                  alt=""
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                />
                the next pays
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. RODAPÉ INSTITUCIONAL                                                   */}
      {/* ========================================================================= */}
      <footer className="py-10 bg-white text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-slate-900">
              © 2026 PRX. Todos os direitos reservados.
            </p>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              <img
                src="https://prx.app.br/brand/prx-app-icon.svg/"
                alt=""
                aria-hidden="true"
                className="h-5 w-5"
              />
              PRX — the next pays.
            </p>
          </div>

          <div className="mt-6 space-y-3 text-[11px] leading-relaxed text-slate-500">
            <p className="flex flex-wrap gap-x-2">
              <span>Termos de Uso</span>
              <span aria-hidden="true">·</span>
              <span>Política de Privacidade</span>
              <span aria-hidden="true">·</span>
              <span>Política de Cookies</span>
              <span aria-hidden="true">·</span>
              <span>Segurança</span>
              <span aria-hidden="true">·</span>
              <span>Atendimento</span>
            </p>
            <p>
              As marcas, nomes, logotipos, conteúdos, imagens, produtos e serviços apresentados neste site são de propriedade da PRX ou de seus respectivos titulares. É proibida a reprodução, distribuição ou utilização sem autorização prévia.
            </p>
            <p>
              PRX respeita a sua privacidade e realiza o tratamento de dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
            <p>CNPJ: 68025417000142 · Goiânia — GO · Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
