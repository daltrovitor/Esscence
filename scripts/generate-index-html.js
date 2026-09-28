// Hello World
const fs = require('fs');
const path = require('path');

const essenceData = require('../app/data/essenceLogoData.ts'); // wait, it's TS, let's read file or parse
const essenceFile = fs.readFileSync(path.join(__dirname, '../app/data/essenceLogoData.ts'), 'utf8');
const matchFull = essenceFile.match(/fullDataUrl:\s*"(data:image\/png;base64,[^"]+)"/);
const essenceFullDataUrl = matchFull ? matchFull[1] : '';

const prxFile = fs.readFileSync(path.join(__dirname, '../app/data/logoPartsData.ts'), 'utf8');
const extractPartHref = (id) => {
  const re = new RegExp(`id:\\s*"${id}"[\\s\\S]*?href:\\s*"(data:image\\/png;base64,[^"]+)"`);
  const m = prxFile.match(re);
  return m ? m[1] : '';
};

const prxEmblem = extractPartHref('emblem');
const prxP = extractPartHref('letter-p');
const prxR = extractPartHref('letter-r');
const prxX = extractPartHref('letter-x');
const prxSubtitle = extractPartHref('subtitle');

const html = `<!-- Hello World -->
<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>PRX LAB — ESSENCE ROYALLE × RAFAEL MOLINA × PRX</title>
  <meta name="description" content="Proposta de parceria: criação junto à Essence Royalle de uma linha de suplementação em gummies baseada em drops especiais e edições limitadas cocriadas e assinadas por jovens da Gen Z.">
  
  <link rel="icon" type="image/png" href="https://www.viraweb.online/favicon.png">
  <link rel="shortcut icon" type="image/png" href="https://www.viraweb.online/favicon.png">
  <link rel="apple-touch-icon" href="https://www.viraweb.online/favicon.png">
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: #ffffff;
      color: #09090b;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    
    .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }

    ::selection {
      background-color: #C59B27;
      color: #ffffff;
    }
    ::-moz-selection {
      background-color: #C59B27;
      color: #ffffff;
    }

    a, button, [role="button"], input, select, textarea, .cursor-pointer {
      cursor: pointer !important;
    }

    /* Print styles for pristine PDF output */
    @media print {
      #intro-splash, header, .no-print {
        display: none !important;
      }
      body {
        background: #ffffff !important;
        color: #000000 !important;
      }
      section {
        page-break-inside: avoid;
        break-inside: avoid;
      }
    }
  </style>
</head>
<body class="min-h-screen bg-white text-slate-900 selection:bg-[#C59B27] selection:text-white relative">

  <!-- ========================================================================= -->
  <!-- 0. INTRO SPLASH SCREEN (CADÊNCIA 0.6s)                                    -->
  <!-- ========================================================================= -->
  <aside id="intro-splash" aria-label="Apresentação animada da marca PRX LAB" class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-all duration-700 select-none">
    <button type="button" onclick="closeIntroSplash()" class="absolute top-6 right-6 z-20 flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-zinc-400 hover:text-zinc-900 border border-zinc-200/80 hover:border-zinc-400 bg-white/90 backdrop-blur-xs rounded-sm transition-all duration-150 cursor-pointer" title="Pular apresentação (Esc / Enter)">
      <span>Pular introdução</span>
      <span aria-hidden="true" class="text-zinc-300">→</span>
    </button>

    <div class="relative flex flex-col items-center justify-center max-w-2xl px-6 text-center">
      <div id="splash-badge" class="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-amber-200/60 bg-amber-50/50 text-[11px] font-mono uppercase tracking-widest text-[#B48328] transition-all duration-500 opacity-0 -translate-y-4">
        <span>PRX LAB</span>
        <span class="text-amber-300">•</span>
        <span>Cocriação Gen Z</span>
      </div>

      <!-- PRX Logo Animated -->
      <div class="relative w-56 sm:w-72 md:w-80 h-auto">
        <svg viewBox="0 0 672 582" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto overflow-visible select-none" role="img" aria-label="PRX Logo">
          <g id="sp-emblem" style="transform: translateY(-140px); opacity: 0; transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out;">
            <image href="${prxEmblem}" x="213" y="90" width="255" height="184" preserveAspectRatio="xMidYMid meet" />
          </g>
          <g id="sp-p" style="transform: translateY(-140px); opacity: 0; transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out;">
            <image href="${prxP}" x="99" y="304" width="108" height="104" preserveAspectRatio="xMidYMid meet" />
          </g>
          <g id="sp-r" style="transform: translateY(-140px); opacity: 0; transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out;">
            <image href="${prxR}" x="277" y="304" width="108" height="104" preserveAspectRatio="xMidYMid meet" />
          </g>
          <g id="sp-x" style="transform: translateY(-140px); opacity: 0; transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out;">
            <image href="${prxX}" x="445" y="304" width="130" height="104" preserveAspectRatio="xMidYMid meet" />
          </g>
          <g id="sp-subtitle" style="transform: translateY(-60px); opacity: 0; transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out;">
            <image href="${prxSubtitle}" x="40" y="425" width="595" height="56" preserveAspectRatio="xMidYMid meet" />
          </g>
        </svg>
      </div>

      <!-- Essence Royalle Alliance Reveal -->
      <div id="sp-alliance" style="transform: translateY(30px); opacity: 0; transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out;" class="mt-6 flex flex-col items-center">
        <div class="flex items-center gap-3 px-5 py-2.5 border border-zinc-200 bg-zinc-50/90 rounded-sm shadow-xs">
          <span class="text-xs font-mono font-semibold tracking-wider text-[#B48328] uppercase">
            ESSENCE ROYALLE
          </span>
          <span class="text-zinc-300">×</span>
          <span class="text-xs font-mono font-medium tracking-wider text-zinc-700 uppercase">
            RAFAEL MOLINA
          </span>
          <span class="text-zinc-300">×</span>
          <span class="text-xs font-mono font-medium tracking-wider text-[#0B67FF] uppercase">
            PRX
          </span>
          <span class="text-zinc-300">|</span>
          <div class="w-8 h-8">
            <svg viewBox="0 0 150 150" class="w-8 h-8" role="img">
              <image href="${essenceFullDataUrl}" x="0" y="0" width="150" height="150" />
            </svg>
          </div>
        </div>
        <p class="mt-3 text-xs sm:text-sm text-zinc-500 font-normal max-w-md">
          A próxima geração não quer apenas consumir uma marca. Quer fazer parte dela.
        </p>
      </div>

      <div id="sp-esc" class="mt-6 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 opacity-0 transition-opacity duration-500">
        <kbd class="px-1.5 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-zinc-500 text-[10px]">ESC</kbd>
        <span>para avançar para a proposta</span>
      </div>
    </div>
  </aside>

  <!-- ========================================================================= -->
  <!-- 1. CABEÇALHO INSTITUCIONAL FIXO (Top Bar)                                 -->
  <!-- ========================================================================= -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3 sm:gap-4">
        <!-- PRX Logo Header -->
        <svg viewBox="0 0 672 582" class="w-24 sm:w-28 h-auto select-none" role="img" aria-label="PRX Logo">
          <image href="${prxEmblem}" x="213" y="90" width="255" height="184" />
          <image href="${prxP}" x="99" y="304" width="108" height="104" />
          <image href="${prxR}" x="277" y="304" width="108" height="104" />
          <image href="${prxX}" x="445" y="304" width="130" height="104" />
        </svg>
        <span class="text-slate-300 font-light text-lg sm:text-xl select-none">×</span>
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 150 150" class="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-xs" role="img" aria-label="Essence Royalle">
            <image href="${essenceFullDataUrl}" x="0" y="0" width="150" height="150" />
          </svg>
          <div class="hidden sm:flex flex-col">
            <span class="text-xs font-serif font-bold tracking-wider text-slate-900 leading-none">
              ESSENCE ROYALLE
            </span>
            <span class="text-[10px] font-mono text-[#B48328] uppercase tracking-widest mt-0.5">
              PRX LAB
            </span>
          </div>
        </div>
      </div>

      <nav class="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-slate-600">
        <a href="#projeto" class="hover:text-[#B48328] transition-colors cursor-pointer">O Projeto</a>
        <a href="#forcas" class="hover:text-[#B48328] transition-colors cursor-pointer">Três Forças</a>
        <a href="#responsabilidades" class="hover:text-[#B48328] transition-colors cursor-pointer">Responsabilidades</a>
        <a href="#modelo-comercial" class="hover:text-[#B48328] transition-colors cursor-pointer">Modelo Comercial</a>
        <a href="#por-que-essence-prx" class="hover:text-[#B48328] transition-colors cursor-pointer">Por Que a Parceria?</a>
      </nav>

      <div class="flex items-center gap-2 sm:gap-3">
        <button type="button" onclick="openIntroSplash()" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-sm bg-white transition-all cursor-pointer" title="Rever apresentação">
          <i data-lucide="play" class="w-3.5 h-3.5 text-[#B48328]"></i>
          <span>Apresentação</span>
        </button>

        <button type="button" onclick="window.print()" class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-sm shadow-xs transition-all cursor-pointer" title="Salvar proposta comercial em PDF">
          <i data-lucide="file-down" class="w-4 h-4 text-[#C59B27]"></i>
          <span>Exportar PDF</span>
        </button>
      </div>
    </div>
  </header>

  <!-- ========================================================================= -->
  <!-- 2. HERO SECTION — COMPOSIÇÃO EM PADRÃO F                                  -->
  <!-- ========================================================================= -->
  <section class="relative pt-12 pb-20 border-b border-slate-100 bg-linear-to-b from-slate-50/50 via-white to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-8 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-amber-200/80 bg-amber-50/60 text-[#B48328] text-xs font-mono font-medium tracking-wider uppercase mb-6">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Proposta de Parceria Estratégica • PRX LAB</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 uppercase leading-none">
            PRX LAB
          </h1>
          <p class="mt-3 text-lg sm:text-2xl font-semibold tracking-tight text-slate-700">
            <span class="text-[#B48328]">ESSENCE ROYALLE</span> × RAFAEL MOLINA × <span class="text-[#0B67FF]">PRX</span>
          </p>

          <div class="mt-8 border-l-4 border-[#B48328] pl-5 sm:pl-6 py-1">
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
              A próxima geração não quer apenas consumir uma marca. Quer fazer parte dela.
            </h2>
          </div>

          <p class="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            A proposta é criar, junto à <strong>Essence Royalle</strong>, uma linha de suplementação em gummies baseada em drops especiais e edições limitadas cocriadas e assinadas por jovens da <strong>Gen Z</strong>.
          </p>
          <p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Cada edição terá um novo rosto, uma nova história e uma nova assinatura.
          </p>

          <div class="mt-8 p-5 sm:p-6 bg-slate-950 text-white rounded-sm w-full max-w-2xl border border-slate-800 shadow-sm">
            <span class="text-[11px] font-mono uppercase tracking-widest text-[#E6C875] block mb-2">
              O Conceito Fundamental
            </span>
            <p class="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Você cria. Você assina. Você vira o rótulo.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <button type="button" onclick="window.print()" class="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-sm shadow-xs transition-all cursor-pointer">
              <i data-lucide="file-down" class="w-4 h-4 text-[#C59B27]"></i>
              <span>Salvar Proposta em PDF</span>
            </button>
            <button type="button" onclick="copyProposalLink()" id="btn-share" class="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-700 hover:text-slate-950 border border-slate-300 hover:border-slate-400 rounded-sm bg-white transition-all cursor-pointer">
              <i data-lucide="share-2" class="w-4 h-4 text-slate-500"></i>
              <span id="share-text">Compartilhar Proposta</span>
            </button>
          </div>
        </div>

        <div class="lg:col-span-4 flex flex-col gap-6">
          <div class="p-6 sm:p-8 rounded-sm border border-amber-200/80 bg-linear-to-b from-amber-50/40 via-white to-white shadow-xs flex flex-col items-center text-center">
            <svg viewBox="0 0 150 150" class="w-28 h-28 mb-4 drop-shadow-xs" role="img" aria-label="Essence Royalle">
              <image href="${essenceFullDataUrl}" x="0" y="0" width="150" height="150" />
            </svg>
            <h3 class="text-lg font-serif font-bold text-slate-900 tracking-wide">
              ESSENCE ROYALLE
            </h3>
            <span class="text-xs font-mono uppercase text-[#B48328] tracking-widest mt-1">
              Laboratório & Manufatura
            </span>
            <p class="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Autoridade no desenvolvimento e produção de suplementação de alta performance e fórmulas proprietárias.
            </p>

            <div class="w-full mt-6 pt-5 border-t border-amber-100 flex items-center justify-around text-center">
              <div>
                <span class="block text-2xl font-black text-slate-900">60%</span>
                <span class="text-[10px] font-mono uppercase text-slate-500">Essence</span>
              </div>
              <div class="h-8 w-px bg-slate-200"></div>
              <div>
                <span class="block text-2xl font-black text-[#0B67FF]">30%</span>
                <span class="text-[10px] font-mono uppercase text-slate-500">Molina / PRX</span>
              </div>
              <div class="h-8 w-px bg-slate-200"></div>
              <div>
                <span class="block text-2xl font-black text-[#B48328]">10%</span>
                <span class="text-[10px] font-mono uppercase text-slate-500">Jovem Creator</span>
              </div>
            </div>
          </div>

          <div class="p-5 rounded-sm border border-slate-200 bg-slate-50/70 text-left">
            <div class="flex items-center gap-2 text-xs font-mono uppercase text-slate-500 mb-2">
              <i data-lucide="package" class="w-4 h-4 text-[#B48328]"></i>
              <span>Modelo de Drops Exclusivos</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Produtos colecionáveis em edições limitadas numeradas, unindo suplementação em gummies com cultura jovem autêntica.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 3. SEÇÃO: O PROJETO (AS TRÊS FORÇAS)                                       -->
  <!-- ========================================================================= -->
  <section id="projeto" class="py-20 border-b border-slate-100 bg-white scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-12">
        <span class="text-xs font-mono uppercase tracking-widest text-[#B48328] font-semibold block mb-2">
          Estrutura Estratégica
        </span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          O PROJETO: PRX LAB
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          A linha <strong>PRX LAB</strong> da Essence Royalle nasce da união simbiótica de três forças complementares do mercado:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Força 1 -->
        <div class="p-8 rounded-sm border border-slate-200 hover:border-amber-300 transition-all bg-white shadow-xs flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-sm bg-amber-50 border border-amber-200 flex items-center justify-center mb-6">
              <i data-lucide="flask-conical" class="w-6 h-6 text-[#B48328]"></i>
            </div>
            <span class="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">Pilar Industrial</span>
            <h3 class="text-xl font-bold text-slate-900 mb-3">ESSENCE ROYALLE</h3>
            <p class="text-sm font-semibold text-[#B48328] mb-3">Produto, produção e operação.</p>
            <p class="text-sm text-slate-600 leading-relaxed">
              Infraestrutura fabril, garantia regulatória da ANVISA, desenvolvimento de fórmulas e excelência logística.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
            Capacidade Técnica & Escala
          </div>
        </div>

        <!-- Força 2 -->
        <div class="p-8 rounded-sm border border-slate-200 hover:border-blue-300 transition-all bg-white shadow-xs flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mb-6">
              <i data-lucide="flame" class="w-6 h-6 text-[#0B67FF]"></i>
            </div>
            <span class="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">Pilar Cultural & Demanda</span>
            <h3 class="text-xl font-bold text-slate-900 mb-3">RAFAEL MOLINA + PRX</h3>
            <p class="text-sm font-semibold text-[#0B67FF] mb-3">Conceito, comunicação, acesso à Gen Z e construção de desejo.</p>
            <p class="text-sm text-slate-600 leading-relaxed">
              Ecossistema digital jovem, alcance massivo com a nova geração, presença física em escolas e validação cultural.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
            Engajamento & Comunidade
          </div>
        </div>

        <!-- Força 3 -->
        <div class="p-8 rounded-sm border border-slate-200 hover:border-emerald-300 transition-all bg-white shadow-xs flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
              <i data-lucide="users" class="w-6 h-6 text-[#15803D]"></i>
            </div>
            <span class="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">Pilar de Autenticidade</span>
            <h3 class="text-xl font-bold text-slate-900 mb-3">GEN Z (O Jovem)</h3>
            <p class="text-sm font-semibold text-[#15803D] mb-3">Um jovem selecionado para cocriar e assinar cada edição especial.</p>
            <p class="text-sm text-slate-600 leading-relaxed">
              Rosto real, voz da comunidade e identidade própria estampada diretamente no rótulo de cada drop.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
            Cocriação & Pertencimento
          </div>
        </div>
      </div>

      <div class="mt-12 p-6 sm:p-8 rounded-sm border border-slate-200 bg-slate-50/80 text-center max-w-4xl mx-auto">
        <p class="text-base sm:text-xl font-medium text-slate-800 italic leading-relaxed">
          &ldquo;Mais do que lançar gummies, queremos transformar cada produto em um drop colecionável, desejável e com uma pessoa real por trás.&rdquo;
        </p>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 4. SEÇÃO: DIVISÃO DE RESPONSABILIDADES                                     -->
  <!-- ========================================================================= -->
  <section id="responsabilidades" class="py-20 border-b border-slate-100 bg-slate-50/30 scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-14">
        <span class="text-xs font-mono uppercase tracking-widest text-[#B48328] font-semibold block mb-2">
          Governança Operacional
        </span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          DIVISÃO DE RESPONSABILIDADES
        </h2>
        <p class="mt-3 text-base text-slate-600">
          Escopo delimitado de atuação para garantir agilidade e excelência na execução de cada drop.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Essence Royalle -->
        <div class="bg-white p-8 rounded-sm border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-slate-900">ESSENCE ROYALLE</h3>
              <span class="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-amber-50 text-[#B48328] border border-amber-200 rounded-sm">Operação & Finanças</span>
            </div>
            <p class="text-xs text-slate-500 mb-6 leading-relaxed">
              A Essence será responsável por toda a estrutura operacional e financeira do projeto:
            </p>
            <ul class="space-y-3 text-sm text-slate-700">
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#B48328] shrink-0 mt-0.5"></i><span>Produção dos gummies</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#B48328] shrink-0 mt-0.5"></i><span>Desenvolvimento e adequação das fórmulas</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#B48328] shrink-0 mt-0.5"></i><span>Custos integrais de produção</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#B48328] shrink-0 mt-0.5"></i><span>Confecção das embalagens e rótulos personalizados</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#B48328] shrink-0 mt-0.5"></i><span>Gestão de estoque físico</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#B48328] shrink-0 mt-0.5"></i><span>Plataforma e estrutura de vendas online</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#B48328] shrink-0 mt-0.5"></i><span>Logística e distribuição de entregas</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#B48328] shrink-0 mt-0.5"></i><span>Faturamento e obrigações fiscais</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#B48328] shrink-0 mt-0.5"></i><span>Obrigações regulatórias e cumprimento de prazos</span></li>
            </ul>
          </div>
          <div class="mt-8 pt-5 border-t border-slate-100 bg-amber-50/50 p-4 rounded-sm border border-amber-100">
            <span class="text-xs font-semibold text-slate-900 block mb-1">Compromisso Financeiro:</span>
            <p class="text-xs text-slate-600 leading-relaxed font-medium">
              Todos os custos de produção e operação ficam sob responsabilidade da <strong>Essence Royalle</strong>.
            </p>
          </div>
        </div>

        <!-- Rafael Molina + PRX -->
        <div class="bg-white p-8 rounded-sm border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-slate-900">RAFAEL MOLINA + PRX</h3>
              <span class="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-blue-50 text-[#0B67FF] border border-blue-200 rounded-sm">Cultura & Comercial</span>
            </div>
            <p class="text-xs text-slate-500 mb-6 leading-relaxed">
              Rafael Molina e PRX serão responsáveis pela construção cultural e comercial dos drops:
            </p>
            <ul class="space-y-3 text-sm text-slate-700">
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5"></i><span>Criação e posicionamento do projeto</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5"></i><span>Divulgação nas redes sociais de Rafael Molina</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5"></i><span>Destaque dos produtos dentro do PRX</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5"></i><span>Seleção e convite dos jovens que assinarão cada edição</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5"></i><span>Criação de narrativas e produção de conteúdo</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5"></i><span>Ativações exclusivas em colégios e escolas</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5"></i><span>Presença em eventos voltados à Gen Z</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#0B67FF] shrink-0 mt-0.5"></i><span>Lançamento dos drops e conexões com parceiros e creators</span></li>
            </ul>
          </div>
          <div class="mt-8 pt-5 border-t border-slate-100 bg-blue-50/50 p-4 rounded-sm border border-blue-100">
            <span class="text-xs font-semibold text-slate-900 block mb-1">Trabalho Comercial:</span>
            <p class="text-xs text-slate-600 leading-relaxed font-medium">
              Construção de tração, desejo e conversão direta para as vendas dos drops da linha.
            </p>
          </div>
        </div>

        <!-- O Jovem Gen Z -->
        <div class="bg-white p-8 rounded-sm border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-slate-900">O JOVEM (GEN Z)</h3>
              <span class="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-emerald-50 text-[#15803D] border border-emerald-200 rounded-sm">Cocriador do Rótulo</span>
            </div>
            <p class="text-xs text-slate-500 mb-6 leading-relaxed">
              Cada edição terá um jovem Gen Z escolhido para representar o drop de forma autêntica:
            </p>
            <ul class="space-y-3 text-sm text-slate-700">
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#15803D] shrink-0 mt-0.5"></i><span>Estampar a embalagem oficial da sua edição</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#15803D] shrink-0 mt-0.5"></i><span>Participação na escolha de elementos da edição</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#15803D] shrink-0 mt-0.5"></i><span>Definição conjunta de conceito, proposta ou identidade</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#15803D] shrink-0 mt-0.5"></i><span>Opinião no direcionamento de sabor (regras técnicas)</span></li>
              <li class="flex items-start gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-[#15803D] shrink-0 mt-0.5"></i><span>Adequação regulatória validada junto à Essence</span></li>
            </ul>
          </div>
          <div class="mt-8 pt-5 border-t border-slate-100 bg-emerald-50/50 p-4 rounded-sm border border-emerald-100">
            <span class="text-xs font-semibold text-slate-900 block mb-1">Evolução do Papel:</span>
            <p class="text-xs text-slate-700 leading-relaxed font-bold">
              Ele deixa de ser apenas influenciador. Vira parte do produto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 5. SEÇÃO: MODELO COMERCIAL PROPOSTO                                        -->
  <!-- ========================================================================= -->
  <section id="modelo-comercial" class="py-20 border-b border-slate-100 bg-white scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-12">
        <span class="text-xs font-mono uppercase tracking-widest text-[#B48328] font-semibold block mb-2">Estrutura Financeira</span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">MODELO COMERCIAL PROPOSTO</h2>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Para as edições especiais <strong>PRX LAB</strong>, propomos a seguinte divisão do lucro líquido apurado em cada edição:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- 60% -->
        <div class="p-8 rounded-sm border-2 border-slate-900 bg-slate-950 text-white flex flex-col justify-between shadow-sm">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono uppercase tracking-widest text-[#E6C875]">Indústria & Operação</span>
              <i data-lucide="award" class="w-5 h-5 text-[#E6C875]"></i>
            </div>
            <div class="text-5xl sm:text-6xl font-black tracking-tight text-white mb-2">60%</div>
            <h3 class="text-lg font-bold text-white mb-2">ESSENCE ROYALLE</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Remuneração de toda a infraestrutura fabril, desenvolvimento técnico, custos de operação e logística.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
            Maior Participação do Projeto
          </div>
        </div>

        <!-- 30% -->
        <div class="p-8 rounded-sm border border-slate-200 bg-slate-50 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono uppercase tracking-widest text-[#0B67FF]">Comunicação & Vendas</span>
              <i data-lucide="trending-up" class="w-5 h-5 text-[#0B67FF]"></i>
            </div>
            <div class="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 mb-2">30%</div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">RAFAEL MOLINA + PRX</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Remuneração pela construção cultural, tração nas redes, canais no app PRX e gestão dos drops.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
            Tração e Conversão Gen Z
          </div>
        </div>

        <!-- 10% -->
        <div class="p-8 rounded-sm border border-slate-200 bg-slate-50 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono uppercase tracking-widest text-[#15803D]">Criador do Drop</span>
              <i data-lucide="sparkles" class="w-5 h-5 text-[#15803D]"></i>
            </div>
            <div class="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 mb-2">10%</div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">JOVEM QUE ASSINA O DROP</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Participação direta nos lucros do produto, engajando a audiência e transformando o jovem em sócio do drop.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
            Incentivo e Pertencimento
          </div>
        </div>
      </div>

      <div class="p-6 sm:p-8 rounded-sm border border-slate-200 bg-slate-50 flex items-start gap-4">
        <i data-lucide="scale" class="w-6 h-6 text-[#B48328] shrink-0 mt-1"></i>
        <div>
          <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">
            Governança, Transparência & Prestação de Contas
          </h4>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            O conceito de lucro líquido, custos dedutíveis, prestação de contas, periodicidade dos repasses e demais critérios financeiros serão definidos previamente em contrato, garantindo transparência para todas as partes.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 6. SEÇÃO: POR QUE ESSENCE × PRX?                                           -->
  <!-- ========================================================================= -->
  <section id="por-que-essence-prx" class="py-20 border-b border-slate-100 bg-slate-50/50 scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-14">
        <span class="text-xs font-mono uppercase tracking-widest text-[#B48328] font-semibold block mb-2">Sinergia Estratégica</span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">POR QUE ESSENCE × PRX?</h2>
        <p class="mt-3 text-base text-slate-600">
          Quatro certezas que tornam esta aliança única no mercado nacional de suplementação:
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-sm border border-slate-200 shadow-xs">
          <div class="w-10 h-10 rounded-sm bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
            <i data-lucide="package" class="w-5 h-5 text-[#B48328]"></i>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2">A Essence já sabe produzir.</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Expertise fabril consolidada, fórmulas testadas e capacidade comprovada de entrega com rigor técnico.
          </p>
        </div>

        <div class="bg-white p-6 rounded-sm border border-slate-200 shadow-xs">
          <div class="w-10 h-10 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center mb-4">
            <i data-lucide="users" class="w-5 h-5 text-[#0B67FF]"></i>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2">A PRX sabe onde a próxima geração está.</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Ecossistema que acompanha a rotina do jovem em múltiplos momentos e canais digitais e presenciais.
          </p>
        </div>

        <div class="bg-white p-6 rounded-sm border border-slate-200 shadow-xs">
          <div class="w-10 h-10 rounded-sm bg-purple-50 border border-purple-200 flex items-center justify-center mb-4">
            <i data-lucide="sparkles" class="w-5 h-5 text-purple-600"></i>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2">Rafael Molina sabe conversar com ela.</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Comunicação direta, autêntica e sem filtros com a Gen Z, gerando identificação e desejo imediato.
          </p>
        </div>

        <div class="bg-white p-6 rounded-sm border border-slate-200 shadow-xs">
          <div class="w-10 h-10 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
            <i data-lucide="check-circle-2" class="w-5 h-5 text-[#15803D]"></i>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2">E a própria Gen Z ajuda a construir.</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            O produto deixa de ser imposto de cima para baixo e passa a ser cocriado com quem vai consumir.
          </p>
        </div>
      </div>

      <div class="mt-14 p-8 sm:p-12 rounded-sm border border-slate-900 bg-slate-950 text-white text-center max-w-4xl mx-auto shadow-sm">
        <h3 class="text-xl sm:text-3xl font-black tracking-tight text-white mb-4">
          Não queremos apenas colocar jovens em uma campanha.
        </h3>
        <p class="text-lg sm:text-2xl font-bold text-[#E6C875] mb-6">
          Queremos colocá-los dentro do negócio.
        </p>
        <div class="inline-flex flex-col items-center pt-6 border-t border-slate-800">
          <span class="text-sm font-serif font-bold tracking-widest uppercase text-white">
            PRX LAB by Essence Royalle
          </span>
          <span class="text-xs font-mono text-slate-400 mt-1">
            Created with the next generation.
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 7. RODAPÉ INSTITUCIONAL                                                   -->
  <!-- ========================================================================= -->
  <footer class="py-12 bg-white border-t border-slate-200 text-slate-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-4">
        <svg viewBox="0 0 672 582" class="w-20 h-auto select-none" role="img" aria-label="PRX Logo">
          <image href="${prxEmblem}" x="213" y="90" width="255" height="184" />
          <image href="${prxP}" x="99" y="304" width="108" height="104" />
          <image href="${prxR}" x="277" y="304" width="108" height="104" />
          <image href="${prxX}" x="445" y="304" width="130" height="104" />
        </svg>
        <span class="text-slate-300">×</span>
        <svg viewBox="0 0 150 150" class="w-10 h-10 drop-shadow-xs" role="img" aria-label="Essence Royalle">
          <image href="${essenceFullDataUrl}" x="0" y="0" width="150" height="150" />
        </svg>
        <span class="text-xs font-mono text-slate-400">PRX LAB © 2026</span>
      </div>

      <button type="button" onclick="window.print()" class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 border border-slate-200 hover:border-slate-300 rounded-sm bg-slate-50 transition-all cursor-pointer">
        <i data-lucide="file-down" class="w-4 h-4 text-[#C59B27]"></i>
        <span>Salvar / Exportar Proposta em PDF</span>
      </button>

      <div class="flex items-center gap-2">
        <span class="text-xs text-slate-400 font-mono">Desenvolvido por</span>
        <a href="https://viraweb.online" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 group cursor-pointer">
          <img src="https://www.viraweb.online/favicon.png" alt="ViraWeb" class="h-6 w-auto object-contain" />
          <span class="text-xs font-bold text-slate-800 tracking-wider">ViraWeb</span>
        </a>
      </div>
    </div>
  </footer>

  <script>
    // Inicialização dos ícones Lucide
    lucide.createIcons();

    // Controle da Splash Screen Cinética (Cadência 0.6s)
    let splashStep = 0;
    const emblem = document.getElementById('sp-emblem');
    const p = document.getElementById('sp-p');
    const r = document.getElementById('sp-r');
    const x = document.getElementById('sp-x');
    const subtitle = document.getElementById('sp-subtitle');
    const alliance = document.getElementById('sp-alliance');
    const badge = document.getElementById('splash-badge');
    const escIndicator = document.getElementById('sp-esc');

    function animateSplash() {
      setTimeout(() => {
        if (badge) { badge.classList.remove('opacity-0', '-translate-y-4'); badge.classList.add('opacity-100', 'translate-y-0'); }
        if (emblem) { emblem.style.transform = 'translateY(0px)'; emblem.style.opacity = '1'; }
      }, 50);

      setTimeout(() => {
        if (p) { p.style.transform = 'translateY(0px)'; p.style.opacity = '1'; }
      }, 600);

      setTimeout(() => {
        if (r) { r.style.transform = 'translateY(0px)'; r.style.opacity = '1'; }
      }, 1200);

      setTimeout(() => {
        if (x) { x.style.transform = 'translateY(0px)'; x.style.opacity = '1'; }
      }, 1800);

      setTimeout(() => {
        if (subtitle) { subtitle.style.transform = 'translateY(0px)'; subtitle.style.opacity = '1'; }
        if (alliance) { alliance.style.transform = 'translateY(0px)'; alliance.style.opacity = '1'; }
        if (escIndicator) { escIndicator.classList.remove('opacity-0'); escIndicator.classList.add('opacity-100'); }
      }, 2400);

      setTimeout(() => {
        closeIntroSplash();
      }, 4800);
    }

    function closeIntroSplash() {
      const splash = document.getElementById('intro-splash');
      if (splash) {
        splash.classList.add('opacity-0', 'scale-105', 'pointer-events-none');
        setTimeout(() => {
          splash.style.display = 'none';
        }, 700);
      }
    }

    function openIntroSplash() {
      const splash = document.getElementById('intro-splash');
      if (splash) {
        splash.style.display = 'flex';
        splash.classList.remove('opacity-0', 'scale-105', 'pointer-events-none');
        // Reset transforms
        if (emblem) { emblem.style.transform = 'translateY(-140px)'; emblem.style.opacity = '0'; }
        if (p) { p.style.transform = 'translateY(-140px)'; p.style.opacity = '0'; }
        if (r) { r.style.transform = 'translateY(-140px)'; r.style.opacity = '0'; }
        if (x) { x.style.transform = 'translateY(-140px)'; x.style.opacity = '0'; }
        if (subtitle) { subtitle.style.transform = 'translateY(-60px)'; subtitle.style.opacity = '0'; }
        if (alliance) { alliance.style.transform = 'translateY(30px)'; alliance.style.opacity = '0'; }
        animateSplash();
      }
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        closeIntroSplash();
      }
    });

    function copyProposalLink() {
      navigator.clipboard.writeText(window.location.href);
      const text = document.getElementById('share-text');
      if (text) {
        text.innerText = 'Link Copiado!';
        setTimeout(() => { text.innerText = 'Compartilhar Proposta'; }, 2500);
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      animateSplash();
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '../index.html'), html);
console.log('GENERATED_INDEX_HTML_SUCCESSFULLY');
