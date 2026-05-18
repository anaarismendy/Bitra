import type { ReactNode } from 'react'

function Chrome({ left, right, dark = false }: { left: ReactNode; right: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`absolute top-0 left-0 right-0 flex justify-between items-center px-16 py-7 font-mono text-[13px] tracking-[0.12em] uppercase border-b ${dark ? 'border-black/20 text-ink' : 'border-white/10 text-mist'}`}
    >
      <span className="flex items-center gap-2.5">
        <span className={`w-2 h-2 rounded-full ${dark ? 'bg-ink' : 'bg-voltage-light'}`} />
        {left}
      </span>
      <span>{right}</span>
    </div>
  )
}

function ChromeBot({ left, right, dark = false }: { left: string; right: string; dark?: boolean }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 flex justify-between items-center px-16 py-6 font-mono text-[11px] tracking-[0.14em] uppercase border-t ${dark ? 'border-black/20 text-[#4A4D55]' : 'border-white/10 text-mist'}`}
    >
      <span>{left}</span>
      <span>{right}</span>
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 01 — COVER
// ——————————————————————————————————————————
function Slide01() {
  return (
    <div className="relative w-full h-full bg-ink text-bone flex flex-col px-24 py-[120px] justify-between overflow-hidden">
      <Chrome left="BITRA" right="Confidencial · 2026" />

      <div className="flex justify-between font-mono text-[12px] tracking-[0.16em] uppercase text-mist mt-14">
        <span>Volumen i · Identidad Corporativa</span>
        <span>MMXXVI · Edición 01</span>
      </div>

      <div className="flex flex-col gap-12">
        <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light">
          <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
          — Brand &amp; Vision Book
        </span>
        <h1
          className="font-medium leading-[0.88] tracking-[-0.035em] max-w-[1500px]"
          style={{ fontSize: '228px' }}
        >
          Tecnología
          <br />
          con <em className="font-serif font-normal text-voltage">inteligencia</em>
          <br />
          estratégica.
        </h1>
      </div>

      <div className="flex justify-between items-end">
        <p className="text-fog text-[20px] leading-[1.5] max-w-[520px]">
          El documento de marca, narrativa y arquitectura visual que define cómo BITRA piensa, comunica y entrega valor.
        </p>
        <div className="text-right font-mono text-[12px] tracking-[0.14em] uppercase">
          <div className="text-fog">Documento · BB / 01</div>
          <div className="text-voltage-light mt-2">www.bitra.co</div>
        </div>
      </div>

      {/* blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(242,238,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,229,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 02 — ÍNDICE
// ——————————————————————————————————————————
function Slide02() {
  return (
    <div className="relative w-full h-full bg-bone text-ink flex flex-col px-24 py-[140px] overflow-hidden">
      <Chrome left="BITRA · BrandBook" right="02 / 21" dark />

      <div className="grid grid-cols-12 gap-8 flex-1 mt-4">
        <div className="col-span-4 flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage">
              <span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Contenido del documento
            </span>
            <h2 className="font-medium leading-[0.96] tracking-[-0.025em] mt-8" style={{ fontSize: '88px' }}>
              Índice<br />narrativo.
            </h2>
            <p className="text-[#4A4D55] text-[18px] leading-[1.5] mt-8 max-w-[380px]">
              Cuatro capítulos. Una sola voz. Identidad, sistema, método y visión.
            </p>
          </div>
          <div className="font-mono text-[13px] tracking-[0.1em] text-mist">
            21 LÁMINAS · 4 CAPÍTULOS<br />ED. 2026 · VOL. I
          </div>
        </div>

        <div className="col-span-7 col-start-6">
          {[
            { sec: '§ 01 · Identidad de Marca', items: [['001', 'Filosofía · Propósito · Misión · Visión', '03'], ['002', 'Valores corporativos', '04'], ['003', 'Personalidad & Posicionamiento', '05']] },
            { sec: '§ 02 · Sistema Visual', items: [['004', 'Logo & anatomía', '07'], ['005', 'Paleta cromática', '08'], ['006', 'Sistema tipográfico', '09'], ['007', 'Iconografía & fotografía', '10–11']] },
            { sec: '§ 03 · Pensamiento & Método · § 04 · Cierre', items: [['008+', 'BITRA OS · Capacidades · Casos · Visión · Contacto', '13→21']] },
          ].map((chapter) => (
            <div key={chapter.sec} className="mb-7">
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist mb-2">{chapter.sec}</div>
              {chapter.items.map(([num, title, pg]) => (
                <div key={num} className="flex items-baseline py-2.5 border-t border-black/[0.08] gap-6">
                  <span className="font-mono text-[13px] text-mist w-12">{num}</span>
                  <span className="flex-1 text-[18px] text-ink">{title}</span>
                  <span className="font-mono text-[13px] text-mist">{pg}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <ChromeBot left="BITRA · Brand & Vision Book" right="Edición Ejecutiva — 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 03 — FILOSOFÍA
// ——————————————————————————————————————————
function Slide03() {
  const pillars = [
    { code: 'P / 01', chip: 'Propósito', title: 'Liberar a la mediana empresa del costo invisible de la tecnología mal dirigida.', body: 'Convertir cada decisión TI en una palanca de crecimiento medible — no en una factura mensual sin retorno.', accent: false },
    { code: 'M / 02', chip: 'Misión', title: 'Ser el CTO externo que toda compañía de 20–100 empleados merece tener.', body: 'Acompañar con visión ejecutiva y ejecución técnica — defender intereses, reducir riesgo, generar ROI.', accent: false },
    { code: 'V / 03', chip: 'Visión', title: 'La firma tecnológica de referencia para la mediana empresa de Latinoamérica al 2030.', body: 'Un estándar de transformación digital diseñado para la región.', accent: false },
    { code: 'F / 04', chip: 'Filosofía', title: 'Estrategia primero, herramienta después. Resultado siempre.', body: 'No vendemos licencias ni horas. Vendemos juicio técnico al servicio de objetivos de negocio claros.', accent: true },
  ]
  return (
    <div className="relative w-full h-full bg-bone text-ink flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 01 Identidad" right="03 / 21" dark />

      <div className="grid grid-cols-12 gap-8 mb-16 mt-4">
        <div className="col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Filosofía de marca</span>
          <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>
            Por qué <em className="font-serif font-normal">existimos</em>,<br />
            cómo <em className="font-serif font-normal">pensamos</em>,<br />
            hacia dónde <em className="font-serif font-normal">vamos</em>.
          </h2>
        </div>
        <div className="col-span-5 col-start-8 flex items-end text-[#4A4D55] text-[18px] leading-[1.5]">
          BITRA opera bajo una convicción simple: en la mediana empresa, la diferencia entre estancamiento y escala no está en el presupuesto tecnológico — está en la inteligencia con que se ejecuta.
        </div>
      </div>

      <div className="grid grid-cols-2 flex-1">
        {pillars.map((p, i) => (
          <div
            key={p.code}
            className={`flex flex-col gap-4 p-9 border-t border-black/[0.08] ${i % 2 === 1 ? 'border-l border-black/[0.08]' : ''} ${i >= 2 ? 'border-b border-black/[0.08]' : ''} ${p.accent ? 'bg-ink text-bone' : ''}`}
          >
            <div className="flex gap-6 items-center">
              <span className={`font-mono text-[11px] tracking-[0.16em] uppercase ${p.accent ? 'text-mist' : 'text-mist'}`}>{p.code}</span>
              <span className={`font-mono text-[11px] tracking-[0.12em] uppercase px-3 py-1 border ${p.accent ? 'border-voltage-light text-voltage-light' : 'border-black/[0.15] text-[#4A4D55]'}`}>{p.chip}</span>
            </div>
            <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.01em]">{p.title}</h3>
            <p className={`text-[15px] leading-[1.55] ${p.accent ? 'text-fog' : 'text-[#4A4D55]'}`}>{p.body}</p>
          </div>
        ))}
      </div>

      <ChromeBot left="§ 01.02 · Filosofía de marca" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 04 — VALORES
// ——————————————————————————————————————————
function Slide04() {
  const vals = [
    { code: 'VAL · 01', title: 'Independencia técnica.', body: 'No vendemos licencias ni representamos marcas. Recomendamos lo que conviene al negocio del cliente — no a nuestra comisión.' },
    { code: 'VAL · 02', title: 'Rigor ejecutivo.', body: 'Decisiones documentadas, KPIs verificables, supuestos explícitos. La opinión sin evidencia no es consultoría — es ruido.' },
    { code: 'VAL · 03', title: 'ROI medible.', body: 'Definimos el resultado antes de empezar. Si no se puede medir, no se factura. La ambigüedad es el enemigo del valor.' },
    { code: 'VAL · 04', title: 'Continuidad operativa.', body: 'Toda migración, integración o cambio se ejecuta sin interrumpir la operación crítica del cliente. Sin excepciones.' },
    { code: 'VAL · 05', title: 'Lealtad estratégica.', body: 'Trabajamos por los intereses del cliente frente a proveedores, contratos y presiones internas. Somos su voz técnica defendida.' },
    { code: 'VAL · 06', title: 'Aprendizaje compuesto.', body: 'Cada engagement deja al cliente más capaz de operar sin nosotros. El conocimiento se transfiere — no se rehén.' },
  ]
  return (
    <div className="relative w-full h-full flex flex-col px-24 py-[120px] overflow-hidden" style={{ background: '#FAFAF7', color: '#0B0B0D' }}>
      <Chrome left="BITRA · § 01 Identidad" right="04 / 21" dark />

      <div className="grid grid-cols-12 gap-8 mb-16 mt-4">
        <div className="col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Valores corporativos</span>
          <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>
            Seis principios<br />no negociables.
          </h2>
        </div>
        <div className="col-span-5 col-start-8 flex items-end text-[#4A4D55] text-[18px] leading-[1.5]">
          Los valores no decoran la cultura — la determinan. Estos seis articulan cada compromiso, cada entregable y cada conversación con el cliente.
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-0 gap-y-0 flex-1">
        {vals.map((v, i) => (
          <div key={v.code} className={`flex flex-col gap-3 pr-8 ${i < 3 ? 'pb-12 border-b border-black/[0.08]' : 'pt-12'}`}>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist">{v.code}</div>
            <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.01em]">{v.title}</h3>
            <p className="text-[#4A4D55] text-[15px] leading-[1.55]">{v.body}</p>
          </div>
        ))}
      </div>

      <ChromeBot left="§ 01.03 · Valores" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 05 — PERSONALIDAD
// ——————————————————————————————————————————
function Slide05() {
  return (
    <div className="relative w-full h-full bg-bone text-ink flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 01 Identidad" right="05 / 21" dark />

      <div className="grid grid-cols-12 gap-8 flex-1 mt-4">
        <div className="col-span-6 pr-12 border-r border-black/[0.08] flex flex-col gap-8">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Personalidad de marca</span>
            <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>
              Sobrio.<br />Preciso.<br /><em className="font-serif font-normal">Inevitable.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {[
              { k: 'Arquetipo', v: 'El Sabio — autoridad por comprensión, no por jerarquía.' },
              { k: 'Atributos', v: 'Ejecutivo · Analítico · Calmo · Directo · Pragmático' },
              { k: 'No somos', v: 'Vendedores · Hypeados · Genéricos · Reactivos' },
              { k: 'Voz humana', v: 'Si BITRA fuera persona — sería el asesor que el CEO consulta antes de firmar.' },
            ].map(({ k, v }) => (
              <div key={k}>
                <div className="grid grid-cols-[180px_1fr] gap-4 items-baseline py-4 border-t border-black/[0.08]">
                  <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist">{k}</span>
                  <span className="text-[18px] font-medium">{v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 col-start-8 flex flex-col gap-8">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Posicionamiento estratégico</span>
            <h2 className="text-[28px] font-medium leading-[1.3] tracking-[-0.01em] mt-6">
              La firma de consultoría tecnológica para la mediana empresa que <em className="font-serif font-normal text-voltage">decide en serio</em> sobre su futuro digital.
            </h2>
          </div>
          <div className="bg-ink text-bone p-10">
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-fog mb-5">Declaración de posicionamiento</div>
            <p className="text-[18px] leading-[1.4] text-fog">
              <span className="text-fog">Para</span> medianas empresas de 20–100 empleados <span className="text-fog">que necesitan</span> dirección tecnológica de alto nivel sin la carga de un CTO de planta,{' '}
              <span className="text-fog">BITRA es</span> la firma de consultoría{' '}
              <span className="text-fog">que</span> combina visión ejecutiva con ejecución práctica — <span className="text-voltage-light">independencia, escala humana y obsesión por el ROI medible</span>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist mb-2">Categoría</div>
              <div className="text-[18px] font-medium">Consultoría Tecnológica Ejecutiva</div>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist mb-2">Diferencial</div>
              <div className="text-[18px] font-medium">Híbrido gerencial · técnico</div>
            </div>
          </div>
        </div>
      </div>

      <ChromeBot left="§ 01.04 · Personalidad & Posicionamiento" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 06 — DIVIDER § 02 SISTEMA VISUAL
// ——————————————————————————————————————————
function Slide06() {
  return (
    <div className="relative w-full h-full flex flex-col px-24 py-[140px] overflow-hidden" style={{ background: '#1F6478', color: '#0B0B0D' }}>
      <Chrome left="BITRA · § 02" right="06 / 21" dark />

      <div className="grid grid-cols-12 gap-8 flex-1 items-end">
        <div className="col-span-8">
          <div className="font-mono text-[12px] tracking-[0.16em] uppercase text-ink mb-8">§ 02 · Capítulo segundo</div>
          <h2 className="font-serif font-normal leading-[0.86] tracking-[-0.035em] text-ink" style={{ fontSize: '280px' }}>
            Sistema<br />Visual.
          </h2>
        </div>
        <div className="col-span-4">
          <p className="text-[20px] leading-[1.4] text-ink max-w-[380px]">
            La forma en que la marca se ve, se imprime, se anima y se traduce a cualquier soporte. Un sistema disciplinado para ejecuciones impecables.
          </p>
          <div className="h-px bg-black/25 my-8" />
          <div className="font-mono text-[12px] tracking-[0.16em] uppercase text-ink">Capítulo · 5 láminas<br />Logo · Color · Tipografía · Icono · Foto</div>
        </div>
      </div>

      <ChromeBot left="§ 02 · SISTEMA VISUAL" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 07 — LOGO
// ——————————————————————————————————————————
function Slide07() {
  return (
    <div className="relative w-full h-full bg-bone text-ink flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 02 Sistema" right="07 / 21" dark />

      <div className="grid grid-cols-12 gap-8 mb-12 mt-4">
        <div className="col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Marca primaria · Anatomía</span>
          <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>El logo<br />como sistema.</h2>
        </div>
        <div className="col-span-5 col-start-8 flex items-end text-[#4A4D55] text-[18px] leading-[1.5]">
          Wordmark sobrio, geometría racional, un único acento que carga el significado: la señal. La marca BITRA no se ilustra — se construye.
        </div>
      </div>

      <div className="relative flex-1 bg-paper border border-black/[0.08] flex items-center justify-center">
        {/* guide lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <g stroke="#0B0B0D" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 4">
            <line x1="10%" y1="20%" x2="90%" y2="20%" />
            <line x1="10%" y1="80%" x2="90%" y2="80%" />
            <line x1="10%" y1="10%" x2="10%" y2="90%" />
            <line x1="90%" y1="10%" x2="90%" y2="90%" />
          </g>
          <g fill="#7A7D86" fontFamily="monospace" fontSize="11">
            <text x="3%" y="22%">CAP</text>
            <text x="3%" y="82%">BASE</text>
          </g>
        </svg>
        <div className="flex items-end gap-4">
          <span className="font-medium tracking-[-0.025em] text-ink" style={{ fontSize: '200px', lineHeight: '0.85' }}>BITRA</span>
          <span className="inline-block w-7 h-7 rounded-full bg-voltage mb-7" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-8">
        {[
          { code: 'A · Wordmark', desc: 'Geist Medium · tracking −4%. Construido geométricamente — no es una tipografía editable.' },
          { code: 'B · La señal', desc: 'El punto en color Voltage. Representa la decisión que enciende todo lo demás. No es opcional.' },
          { code: 'C · Aire mínimo', desc: 'Área de respeto equivalente a la altura de la letra B. Nunca menos.' },
          { code: 'D · Tamaño mínimo', desc: '24px en pantalla. 14mm en impresión. Por debajo — usar monograma B·' },
        ].map(({ code, desc }) => (
          <div key={code}>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist mb-3">{code}</div>
            <p className="text-[14px] leading-[1.55] text-[#4A4D55]">{desc}</p>
          </div>
        ))}
      </div>

      <ChromeBot left="§ 02.01 · Logo" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 08 — PALETA CROMÁTICA
// ——————————————————————————————————————————
function Slide08() {
  return (
    <div className="relative w-full h-full bg-bone text-ink flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 02 Sistema" right="08 / 21" dark />

      <div className="grid grid-cols-12 gap-8 mb-10 mt-4">
        <div className="col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Paleta cromática</span>
          <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>Disciplina<br />cromática.</h2>
        </div>
        <div className="col-span-5 col-start-8 flex items-end text-[#4A4D55] text-[18px] leading-[1.5]">
          Un sistema binario — oscuro &amp; cálido — interrumpido por una señal: Voltage. El acento se usa con escasez para que no pierda su poder.
        </div>
      </div>

      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist mb-4">— Primarios</div>
      <div className="grid grid-cols-3 gap-0 mb-6 h-48">
        {[
          { bg: '#0B0B0D', color: '#F2EEE5', label: 'PRIMARIO · 01', name: 'Ink', meta: ['HEX · 0B0B0D', 'RGB · 11 / 11 / 13', 'PANTONE · BLACK 6 C'] },
          { bg: '#F2EEE5', color: '#0B0B0D', label: 'PRIMARIO · 02', name: 'Bone', meta: ['HEX · F2EEE5', 'RGB · 242 / 238 / 229', 'PANTONE · WARM GRAY 1 C'] },
          { bg: '#1F6478', color: '#0B0B0D', label: 'ACENTO · ÚNICO', name: 'Voltage', meta: ['HEX · 1F6478', 'RGB · 31 / 100 / 120', 'PANTONE · 7700 C'] },
        ].map(({ bg, color, label, name, meta }) => (
          <div
            key={name}
            className="flex flex-col justify-between p-8 border border-black/[0.08]"
            style={{ background: bg, color }}
          >
            <div>
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase opacity-70">{label}</div>
              <div className="text-[28px] font-medium mt-2">{name}</div>
            </div>
            <div className="font-mono text-[11px] leading-[1.8] opacity-70">{meta.map(m => <div key={m}>{m}</div>)}</div>
          </div>
        ))}
      </div>

      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist mb-4">— Escala neutra · uso estructural</div>
      <div className="grid grid-cols-6 gap-0 h-24 mb-8">
        {[
          { bg: '#141418', name: 'Carbon', hex: '141418', light: true },
          { bg: '#2A2C33', name: 'Steel', hex: '2A2C33', light: true },
          { bg: '#7A7D86', name: 'Mist', hex: '7A7D86', light: true },
          { bg: '#B4B6BD', name: 'Fog', hex: 'B4B6BD', light: false },
          { bg: '#FAFAF7', name: 'Paper', hex: 'FAFAF7', light: false },
          { bg: '#FFFFFF', name: 'Pure', hex: 'FFFFFF', light: false },
        ].map(({ bg, name, hex, light }) => (
          <div key={name} className="flex flex-col justify-between p-4 border border-black/[0.08]" style={{ background: bg, color: light ? '#F2EEE5' : '#0B0B0D' }}>
            <div className="font-mono text-[11px]">{name}</div>
            <div className="font-mono text-[10px] opacity-70">{hex}</div>
          </div>
        ))}
      </div>

      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist mb-3">— Proporciones de uso · regla 70 / 25 / 5</div>
      <div className="flex h-3 overflow-hidden rounded-full">
        <div style={{ flex: 70, background: '#0B0B0D' }} />
        <div style={{ flex: 25, background: '#F2EEE5', borderLeft: '1px solid rgba(11,11,13,0.12)', borderRight: '1px solid rgba(11,11,13,0.12)' }} />
        <div style={{ flex: 5, background: '#1F6478' }} />
      </div>
      <div className="flex gap-12 mt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-mist">
        <span>70% · Ink</span>
        <span>25% · Bone / Paper</span>
        <span className="text-voltage">5% · Voltage</span>
      </div>

      <ChromeBot left="§ 02.03 · Paleta cromática" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 09 — TIPOGRAFÍA
// ——————————————————————————————————————————
function Slide09() {
  return (
    <div className="relative w-full h-full flex flex-col px-24 py-[120px] overflow-hidden" style={{ background: '#FAFAF7', color: '#0B0B0D' }}>
      <Chrome left="BITRA · § 02 Sistema" right="09 / 21" dark />

      <div className="grid grid-cols-12 gap-8 mb-10 mt-4">
        <div className="col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Sistema tipográfico</span>
          <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>Tres voces.<br />Una jerarquía.</h2>
        </div>
        <div className="col-span-5 col-start-8 flex items-end text-[#4A4D55] text-[18px] leading-[1.5]">
          Geist como voz primaria. Instrument Serif para acentos editoriales. Geist Mono para metadatos y código. Nada más.
        </div>
      </div>

      <div className="flex flex-col gap-0 flex-1">
        {[
          { role: 'PRIMARIA', name: 'Geist', meta: 'Sans-serif · 300 / 400 / 500 · Display · Body · UI', sample: <span className="font-display text-[88px] leading-[0.92]">Ag Decisión<br />ejecutiva.</span> },
          { role: 'EDITORIAL', name: 'Instrument Serif', meta: 'Serif · Italic-first · Pull quotes · acentos', sample: <em className="font-serif text-[72px] leading-[0.95]">Estrategia<br />antes que herramienta.</em> },
          { role: 'METADATA', name: 'Geist Mono', meta: 'Monospaced · 400 / 500 · Labels · KPI · Código', sample: <span className="font-mono text-[36px] leading-[1.1]">§ 02.04 · ROI 28M COP<br /><span className="text-[18px] text-mist">RUNTIME · 2026-Q2 / V01-PRE-RC2</span></span> },
        ].map(({ role, name, meta, sample }) => (
          <div key={role} className="grid grid-cols-[280px_1fr] gap-8 py-8 border-t border-black/[0.08] items-center">
            <div>
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist">{role}</div>
              <div className="text-[22px] font-medium mt-3">{name}</div>
              <div className="text-[14px] text-[#4A4D55] mt-2">{meta}</div>
            </div>
            <div>{sample}</div>
          </div>
        ))}
      </div>

      <ChromeBot left="§ 02.04 · Tipografía" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 10 — ICONOGRAFÍA
// ——————————————————————————————————————————
function Slide10() {
  const icons = [
    { label: 'DASH · 01', path: <><rect x="10" y="14" width="44" height="32" rx="2"/><line x1="10" y1="24" x2="54" y2="24"/><circle cx="16" cy="19" r="1"/><line x1="22" y1="32" x2="38" y2="32"/><line x1="22" y1="38" x2="46" y2="38"/><line x1="32" y1="46" x2="32" y2="54"/><line x1="22" y1="54" x2="42" y2="54"/></> },
    { label: 'BI · 02', path: <><path d="M20 44 L20 32 M28 44 L28 22 M36 44 L36 28 M44 44 L44 18"/><line x1="14" y1="50" x2="50" y2="50"/><circle cx="44" cy="18" r="2"/></> },
    { label: 'DATA · 03', path: <><ellipse cx="32" cy="18" rx="18" ry="6"/><path d="M14 18 V36 C14 39 22 42 32 42 C42 42 50 39 50 36 V18"/><path d="M14 36 V46 C14 49 22 52 32 52 C42 52 50 49 50 46 V36"/></> },
    { label: 'CLOUD · 04', path: <><path d="M18 38 C12 38 8 34 8 28 C8 22 13 18 19 18 C20 13 26 10 32 10 C40 10 46 16 46 24 C52 24 56 28 56 34 C56 40 52 44 46 44 H18 Z"/></> },
    { label: 'SEC · 05', path: <><rect x="16" y="26" width="32" height="24" rx="2"/><path d="M22 26 V20 C22 14 26 10 32 10 C38 10 42 14 42 20 V26"/><circle cx="32" cy="38" r="2"/></> },
    { label: 'FLOW · 06', path: <><circle cx="20" cy="20" r="6"/><circle cx="44" cy="32" r="6"/><circle cx="20" cy="44" r="6"/><line x1="26" y1="22" x2="38" y2="30"/><line x1="26" y1="42" x2="38" y2="34"/></> },
    { label: 'AI · 07', path: <><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="6"/><line x1="32" y1="12" x2="32" y2="18"/><line x1="32" y1="46" x2="32" y2="52"/><line x1="12" y1="32" x2="18" y2="32"/><line x1="46" y1="32" x2="52" y2="32"/></> },
    { label: 'CTO · 08', path: <><rect x="10" y="18" width="44" height="28" rx="2"/><line x1="20" y1="46" x2="20" y2="52"/><line x1="44" y1="46" x2="44" y2="52"/><line x1="14" y1="52" x2="50" y2="52"/><circle cx="22" cy="32" r="3"/><line x1="28" y1="32" x2="50" y2="32"/></> },
  ]
  return (
    <div className="relative w-full h-full bg-bone text-ink flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 02 Sistema" right="10 / 21" dark />

      <div className="grid grid-cols-12 gap-8 mb-10 mt-4">
        <div className="col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Sistema de iconografía</span>
          <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>Geometría<br />sin adjetivos.</h2>
        </div>
        <div className="col-span-5 col-start-8 flex items-end text-[#4A4D55] text-[18px] leading-[1.5]">
          Línea de 1.2px, vértices vivos, retícula de 24px. Cada icono codifica una capacidad — nunca decora una idea. Stroke únicamente, fill prohibido.
        </div>
      </div>

      <div className="grid grid-cols-8 border-t border-l border-black/[0.08] flex-1">
        {icons.map(({ label, path }) => (
          <div key={label} className="flex flex-col items-center justify-center gap-3 border-r border-b border-black/[0.08] p-6">
            <svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.2">
              {path}
            </svg>
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-mist">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8 mt-8">
        {[
          { k: 'Librería', v: 'Personalizada BITRA · no usar Heroicons ni Lucide en piezas de marca.' },
          { k: 'Reglas de uso', v: 'Stroke 1.2px · Sin fill · Retícula 24px · Color: --mist o --voltage-l.' },
          { k: 'Prohibido', v: 'Estirar fuera de proporción · recolorear · aplicar sombras o efectos.' },
        ].map(({ k, v }) => (
          <div key={k} className="border-t border-black/[0.08] pt-5">
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist mb-2">{k}</div>
            <p className="text-[14px] leading-[1.55] text-[#4A4D55]">{v}</p>
          </div>
        ))}
      </div>

      <ChromeBot left="§ 02.05 · Iconografía" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 11 — FOTOGRAFÍA
// ——————————————————————————————————————————
function Slide11() {
  return (
    <div className="relative w-full h-full bg-ink text-bone flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 02 Sistema" right="11 / 21" />

      <div className="grid grid-cols-12 gap-8 mb-12 mt-4">
        <div className="col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light"><span className="w-1.5 h-1.5 rounded-full bg-voltage-light" /> — Fotografía e imagen</span>
          <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>Imágenes<br />que argumentan.</h2>
        </div>
        <div className="col-span-5 col-start-8 flex items-end text-fog text-[18px] leading-[1.5]">
          No se usan imágenes decorativas. Cada fotografía es un argumento visual — entorno de trabajo real, equipo directivo en acción, datos en pantalla.
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1">
        {[
          { label: 'TIPO · 01', title: 'Entorno ejecutivo', desc: 'Sala de reuniones, pantalla con datos, personas en decisión. Paleta oscura o neutrales fríos.', color: '#1C1C1F' },
          { label: 'TIPO · 02', title: 'Datos en acción', desc: 'Dashboards reales, métricas, código limpio. No mockups de stock con grafos genéricos.', color: '#141418' },
          { label: 'TIPO · 03', title: 'Tecnología tangible', desc: 'Servidores, redes, hardware profesional. Primer plano con foco selectivo.', color: '#0B0B0D' },
        ].map(({ label, title, desc, color }) => (
          <div key={label} className="flex flex-col justify-between p-8 border border-white/10" style={{ background: color }}>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist">{label}</div>
            <div>
              <div className="text-[22px] font-medium mb-3">{title}</div>
              <p className="text-fog text-[15px] leading-[1.55]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        {[
          { k: 'Paleta permitida', v: 'Tonos fríos · bajo contraste · procesamiento flat. Sin saturación artificial.' },
          { k: 'Encuadre', v: 'Horizontal · respeto a márgenes · composición grid. No centrado forzado.' },
          { k: 'Prohibido', v: 'Stock genérico · ilustraciones planas · gráficos con flechas de colores primarios.' },
        ].map(({ k, v }) => (
          <div key={k} className="border-t border-white/10 pt-5">
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist mb-2">{k}</div>
            <p className="text-fog text-[14px] leading-[1.55]">{v}</p>
          </div>
        ))}
      </div>

      <ChromeBot left="§ 02.06 · Fotografía" right="BITRA · BRANDBOOK 2026" />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 12 — DIVIDER § 03 MÉTODO
// ——————————————————————————————————————————
function Slide12() {
  return (
    <div className="relative w-full h-full bg-ink text-bone flex flex-col px-24 py-[140px] overflow-hidden">
      <Chrome left="BITRA · § 03" right="12 / 21" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{ backgroundImage: 'linear-gradient(rgba(242,238,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,229,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="grid grid-cols-12 gap-8 flex-1 items-end relative z-10">
        <div className="col-span-8">
          <div className="font-mono text-[12px] tracking-[0.16em] uppercase text-mist mb-8">§ 03 · Capítulo tercero</div>
          <h2 className="font-serif font-normal leading-[0.86] tracking-[-0.035em]" style={{ fontSize: '280px' }}>
            Método<br />&amp; OS.
          </h2>
        </div>
        <div className="col-span-4">
          <p className="text-[20px] leading-[1.4] text-fog max-w-[380px]">
            Cómo opera BITRA. El sistema que convierte cada diagnóstico en resultado medible — con fases, herramientas y entregables reales.
          </p>
          <div className="h-px bg-white/10 my-8" />
          <div className="font-mono text-[12px] tracking-[0.16em] uppercase text-mist">Capítulo · 4 láminas<br />OS · Capacidades · Casos · Visión</div>
        </div>
      </div>

      <ChromeBot left="§ 03 · PENSAMIENTO & MÉTODO" right="BITRA · BRANDBOOK 2026" />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 13 — BITRA OS
// ——————————————————————————————————————————
function Slide13() {
  const fases = [
    { n: '01', step: 'Fase · 01', title: 'Diagnóstico ejecutivo', desc: 'Inventario tecnológico, contratos, dependencias, riesgos. Cuantificamos el costo de la inacción.' },
    { n: '02', step: 'Fase · 02', title: 'Tesis & roadmap', desc: 'Definimos hipótesis priorizadas con impacto en P&L, secuencia técnica y plan trimestral por dueño.' },
    { n: '03', step: 'Fase · 03', title: 'Ejecución supervisada', desc: 'Implementación con proveedores propios o existentes. SLAs reales, control de calidad y entregables.' },
    { n: '04', step: 'Fase · 04', title: 'Operación & reporte', desc: 'Comité directivo mensual. KPIs vivos. Roadmap re-priorizado contra resultados, no contra discurso.' },
  ]
  return (
    <div className="relative w-full h-full flex flex-col px-24 py-[120px] overflow-hidden" style={{ background: '#141418', color: '#F2EEE5' }}>
      <Chrome left="BITRA · § 03 Método" right="13 / 21" />
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />

      <div className="grid grid-cols-12 gap-8 mb-12 mt-4 relative z-10">
        <div className="col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light"><span className="w-1.5 h-1.5 rounded-full bg-voltage-light" /> — BITRA OS · Sistema operativo</span>
          <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>
            Un sistema,<br /><em className="font-serif font-normal">cuatro fases.</em>
          </h2>
        </div>
        <div className="col-span-5 col-start-8 flex items-end text-fog text-[18px] leading-[1.5]">
          Sin teatro de consultoría — solo decisiones técnicas con retorno medible. Diseñado para la velocidad de la mediana empresa.
        </div>
      </div>

      <div className="grid grid-cols-4 gap-px bg-white/10 border border-white/10 flex-1 relative z-10">
        {fases.map((f) => (
          <div key={f.n} className="flex flex-col gap-3 p-10 pb-12" style={{ background: '#141418' }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-[11px] tracking-[0.18em] text-voltage-light">{f.step}</span>
              <span className="font-serif italic text-[64px] leading-none text-bone opacity-40">{f.n}</span>
            </div>
            <h4 className="text-[28px] font-medium leading-[1.15] tracking-[-0.01em] mt-auto">{f.title}</h4>
            <p className="text-fog text-[15px] leading-[1.55]">{f.desc}</p>
          </div>
        ))}
      </div>

      <ChromeBot left="§ 03.01 · BITRA OS" right="BITRA · BRANDBOOK 2026" />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 14 — CAPACIDADES
// ——————————————————————————————————————————
function Slide14() {
  const caps = [
    { n: 'C · 01', name: 'Dirección estratégica & Gobierno TI', desc: 'CTO externo · roadmap anual · evaluación de inversiones · reporte ejecutivo.' },
    { n: 'C · 02', name: 'Auditoría & Arquitectura TI', desc: 'Diagnóstico 360° · redes, seguridad y datos · arquitectura objetivo por fases.' },
    { n: 'C · 03', name: 'Gobierno de Proveedores TI', desc: 'Renegociación de contratos · SLAs con penalizaciones · ahorros hasta 50%.' },
    { n: 'C · 04', name: 'Automatización & Integraciones', desc: 'N8N · RPA · APIs · workflows ERP/CRM · −30% tiempos operativos.' },
    { n: 'C · 05', name: 'Datos, BI & Análisis Predictivo', desc: 'Power BI · dashboards ejecutivos · KPIs · modelos predictivos sobre datos reales.' },
    { n: 'C · 06', name: 'Cloud · FinOps · Optimización', desc: 'Azure · GCP · gobernanza · 20–40% menos en costos cloud.' },
    { n: 'C · 07', name: 'Seguridad & Continuidad', desc: 'FortiGate · AD · backups · BCP/DRP · gestión de identidades · hardening.' },
  ]
  return (
    <div className="relative w-full h-full bg-ink text-bone flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 03 Método" right="14 / 21" />

      <div className="grid grid-cols-12 gap-8 mb-10 mt-4">
        <div className="col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light"><span className="w-1.5 h-1.5 rounded-full bg-voltage-light" /> — Capacidades</span>
          <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>
            Siete capacidades.<br />Una sola firma.
          </h2>
        </div>
        <div className="col-span-5 col-start-8 flex items-end text-fog text-[18px] leading-[1.5]">
          Cada capacidad opera autónomamente o se compone con el resto, según el momento y la madurez tecnológica del cliente.
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-between">
        {caps.map((c) => (
          <div key={c.n} className="grid grid-cols-[80px_1.4fr_1fr_40px] gap-6 py-4 border-t border-white/10 items-center">
            <span className="font-mono text-[12px] text-mist">{c.n}</span>
            <span className="text-[20px] font-medium leading-[1.2] tracking-[-0.01em]">{c.name}</span>
            <span className="text-fog text-[15px] leading-[1.5]">{c.desc}</span>
            <span className="font-serif italic text-[24px] text-mist text-right">→</span>
          </div>
        ))}
        <div className="border-t border-white/10" />
      </div>

      <ChromeBot left="§ 03.02 · Capacidades" right="BITRA · BRANDBOOK 2026" />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 15 — CASOS DE IMPACTO
// ——————————————————————————————————————————
function Slide15() {
  return (
    <div className="relative w-full h-full bg-bone text-ink flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 03 Método" right="15 / 21" dark />

      <div className="grid grid-cols-12 gap-8 mb-10 mt-4">
        <div className="col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Casos de impacto</span>
          <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>
            Trabajo real.<br />Resultados <em className="font-serif font-normal text-voltage">medibles</em>.
          </h2>
        </div>
        <div className="col-span-5 col-start-8 flex items-end text-[#4A4D55] text-[18px] leading-[1.5]">
          Una muestra de proyectos representativos. Cada caso reporta lo que cambió en el balance. Detalles operativos bajo NDA.
        </div>
      </div>

      <div className="bg-ink text-bone p-16 grid grid-cols-[1.2fr_1fr] gap-16 items-end flex-1">
        <div>
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-voltage-light">CASO · 01 · DESTACADO</span>
          <div className="flex gap-8 items-end mt-8">
            <span className="font-serif italic leading-[0.9] text-voltage-light" style={{ fontSize: '180px' }}>
              28<sup className="text-[0.4em] align-[0.7em] italic">M</sup>
            </span>
            <div>
              <h3 className="text-[36px] font-medium tracking-[-0.01em] leading-[1.1] text-bone mb-4">COP en ahorros<br />documentados.</h3>
              <p className="text-fog text-[16px] leading-[1.55]">Renegociación de contratos &amp; consolidación de proveedores · 9 meses.</p>
            </div>
          </div>
        </div>
        <div>
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist">Clientes · Formacol &middot; Contiflex</span>
          <div className="flex gap-10 mt-8 border-t border-white/10 pt-6">
            {[['SLAs nuevos', '12'], ['Contratos revisados', '24'], ['Downtime', '0.']].map(([k, v]) => (
              <div key={k}>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mist block mb-2">{k}</span>
                <span className="font-serif italic text-[48px] text-bone leading-none">{v}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 mt-10">
            {[['−34%', 'Reducción factura cloud · 6 meses'], ['+41%', 'Productividad contable']].map(([n, l]) => (
              <div key={n} className="border-t border-white/10 pt-5">
                <div className="font-serif italic text-[44px] text-voltage-light leading-none">{n}</div>
                <div className="text-fog text-[14px] mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ChromeBot left="§ 03.03 · Casos de impacto" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 16 — VISIÓN 2030
// ——————————————————————————————————————————
function Slide16() {
  return (
    <div className="relative w-full h-full bg-ink text-bone flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 03 Método" right="16 / 21" />
      <div className="absolute inset-auto -bottom-1/3 -left-1/4 -right-1/4 h-3/4 pointer-events-none"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(31,100,120,0.25) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="relative z-10">
        <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light mt-4"><span className="w-1.5 h-1.5 rounded-full bg-voltage-light" /> — Visión BITRA · 2030</span>
        <h2 className="font-medium leading-[1.02] tracking-[-0.025em] mt-6 max-w-[1200px]" style={{ fontSize: '88px' }}>
          La firma tecnológica de referencia para la mediana empresa de Latinoamérica al 2030.
        </h2>

        <div className="grid grid-cols-3 gap-14 mt-20">
          {[
            { year: '2024–2025', title: 'Fundación & validación', desc: 'Primeros cinco clientes. Casos documentados. Metodología BITRA OS probada en campo.' },
            { year: '2026–2027', title: 'Escala regional', desc: 'Bogotá · Medellín · expansión a Ecuador y Perú. Alianzas con proveedores certificados.' },
            { year: '2028–2030', title: 'Referente de categoría', desc: 'La voz técnica de la mediana empresa en Latam. Publicaciones, benchmarks, certificaciones propias.' },
          ].map(({ year, title, desc }) => (
            <div key={year} className="border-t border-white/10 pt-7 flex flex-col gap-3">
              <span className="font-mono text-[12px] tracking-[0.16em] text-voltage-light">{year}</span>
              <h4 className="text-[28px] font-medium leading-[1.18] tracking-[-0.01em]">{title}</h4>
              <p className="text-fog text-[15px] leading-[1.55]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <ChromeBot left="§ 03.04 · Visión 2030" right="BITRA · BRANDBOOK 2026" />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 17 — DIVIDER § 04 CIERRE
// ——————————————————————————————————————————
function Slide17() {
  return (
    <div className="relative w-full h-full bg-bone text-ink flex flex-col px-24 py-[140px] overflow-hidden">
      <Chrome left="BITRA · § 04" right="17 / 21" dark />

      <div className="grid grid-cols-12 gap-8 flex-1 items-end">
        <div className="col-span-8">
          <div className="font-mono text-[12px] tracking-[0.16em] uppercase text-mist mb-8">§ 04 · Capítulo cuarto · Cierre</div>
          <h2 className="font-serif font-normal leading-[0.86] tracking-[-0.035em] text-ink" style={{ fontSize: '280px' }}>
            Contacto<br />&amp; NDA.
          </h2>
        </div>
        <div className="col-span-4">
          <p className="text-[20px] leading-[1.4] text-[#4A4D55] max-w-[380px]">
            Toda conversación comienza con un diagnóstico sin costo. Toda relación opera bajo NDA estándar desde el primer contacto.
          </p>
        </div>
      </div>

      <ChromeBot left="§ 04 · CIERRE" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 18 — CONTACTO / CTA
// ——————————————————————————————————————————
function Slide18() {
  return (
    <div className="relative w-full h-full bg-ink text-bone flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 04 Cierre" right="18 / 21" />

      <div className="flex flex-col flex-1 justify-between mt-4">
        <div>
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light"><span className="w-1.5 h-1.5 rounded-full bg-voltage-light" /> — Próximo paso</span>
          <h2 className="font-medium leading-[0.96] tracking-[-0.025em] mt-8" style={{ fontSize: '148px' }}>
            Una conversación.<br />
            <em className="font-serif font-normal text-voltage-light">Un diagnóstico.</em><br />
            Una decisión.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-16 items-end">
          <div className="flex flex-col gap-0">
            {[
              { k: 'Sede', v: 'Medellín · Bogotá · Operación regional' },
              { k: 'Email', v: 'hola@bitra.co' },
              { k: 'Web', v: 'www.bitra.co' },
              { k: 'Engagement', v: 'Básico · Plus · Premium · Proyecto especial' },
              { k: 'Confidencialidad', v: 'Toda interacción bajo NDA estándar.' },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-[160px_1fr] gap-5 py-4 border-t border-white/10">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist">{k}</span>
                <span className="text-bone text-[16px]">{v}</span>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
          <div className="font-serif italic text-[92px] leading-[0.95] text-voltage-light opacity-40 text-right">
            →
          </div>
        </div>
      </div>

      <ChromeBot left="§ 04.01 · Contacto" right="BITRA · BRANDBOOK 2026" />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 19 — USO DE MARCA / DO & DON'T
// ——————————————————————————————————————————
function Slide19() {
  return (
    <div className="relative w-full h-full bg-bone text-ink flex flex-col px-24 py-[120px] overflow-hidden">
      <Chrome left="BITRA · § 04 Cierre" right="19 / 21" dark />

      <div className="mt-4 mb-10">
        <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Uso correcto de marca</span>
        <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>Do &amp; Don't.</h2>
      </div>

      <div className="grid grid-cols-2 gap-12 flex-1">
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-voltage mb-6 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> Correcto</div>
          <div className="flex flex-col gap-4">
            {['Usar Ink o Bone como fondo principal del logo.', 'Aplicar siempre el punto Voltage como parte inseparable de la marca.', 'Respetar el área de respeto equivalente a la altura de la letra B.', 'Usar el logo en color plano — sin gradientes ni efectos.', 'Reproducir a mínimo 24px en pantalla y 14mm en impresión.'].map(v => (
              <div key={v} className="flex gap-3 text-[16px]">
                <span className="text-voltage mt-0.5">✓</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#8B2E2E] mb-6 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8B2E2E]" /> Incorrecto</div>
          <div className="flex flex-col gap-4">
            {['Aplicar el logo sobre fondos con bajo contraste o fotografías sin área de respeto.', 'Recolorear el punto Voltage con otro color de la paleta.', 'Usar el wordmark BITRA sin el punto de señal.', 'Estirar o deformar las proporciones del logo.', 'Aplicar sombras, biselados, relieves o efectos 3D sobre la marca.'].map(v => (
              <div key={v} className="flex gap-3 text-[16px] text-[#4A4D55]">
                <span className="text-[#8B2E2E] mt-0.5">✗</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ChromeBot left="§ 04.02 · Uso de marca" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 20 — VOZ & TONO
// ——————————————————————————————————————————
function Slide20() {
  const pairs = [
    { wrong: '¡Transformamos tu empresa con IA!', right: 'Reducimos su factura cloud en 34% en seis meses.' },
    { wrong: 'Somos expertos en soluciones digitales integrales.', right: 'Auditamos, priorizamos y ejecutamos — con SLAs reales y resultados medibles en el balance.' },
    { wrong: 'Nuestro equipo altamente capacitado...', right: 'El diagnóstico toma 3 semanas. El roadmap, dos reuniones ejecutivas.' },
    { wrong: 'Ofrecemos servicios de consultoría TI de vanguardia.', right: 'No vendemos licencias ni horas. Vendemos juicio técnico.' },
  ]
  return (
    <div className="relative w-full h-full flex flex-col px-24 py-[120px] overflow-hidden" style={{ background: '#FAFAF7', color: '#0B0B0D' }}>
      <Chrome left="BITRA · § 04 Cierre" right="20 / 21" dark />

      <div className="mt-4 mb-10">
        <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage"><span className="w-1.5 h-1.5 rounded-full bg-voltage" /> — Voz y tono de marca</span>
        <h2 className="font-medium leading-[1.04] tracking-[-0.025em] mt-6" style={{ fontSize: '72px' }}>Cómo hablamos.</h2>
      </div>

      <div className="grid grid-cols-2 gap-px bg-black/[0.08] border border-black/[0.08] flex-1">
        {pairs.map(({ wrong, right }, i) => (
          <div key={i} className="grid grid-cols-2 gap-px bg-black/[0.08]">
            <div className="bg-paper p-8 flex flex-col gap-3">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#8B2E2E]">✗ Evitar</div>
              <p className="text-[16px] leading-[1.55] text-[#4A4D55] italic">{wrong}</p>
            </div>
            <div className="bg-bone p-8 flex flex-col gap-3">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-voltage">✓ BITRA dice</div>
              <p className="text-[16px] leading-[1.55] text-ink font-medium">{right}</p>
            </div>
          </div>
        ))}
      </div>

      <ChromeBot left="§ 04.03 · Voz & Tono" right="BITRA · BRANDBOOK 2026" dark />
    </div>
  )
}

// ——————————————————————————————————————————
// SLIDE 21 — CIERRE
// ——————————————————————————————————————————
function Slide21() {
  return (
    <div className="relative w-full h-full bg-ink text-bone flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(rgba(242,238,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,229,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      <div className="absolute inset-auto -bottom-1/3 left-1/4 right-1/4 h-2/3 pointer-events-none"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(31,100,120,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-3 font-mono text-[16px] tracking-[0.18em] uppercase">
          <span className="w-3 h-3 rounded-full bg-voltage-light" />
          BITRA
        </div>
        <h2 className="font-serif italic leading-[0.95] tracking-[-0.02em]" style={{ fontSize: '160px' }}>
          Estrategia<br />primero.
        </h2>
        <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-mist">
          Brandbook 2026 · Volumen I · Confidencial
        </div>
        <div className="w-px h-20 bg-white/10 mx-auto" />
        <div className="font-mono text-[12px] tracking-[0.16em] uppercase text-voltage-light">hola@bitra.co · www.bitra.co</div>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————
// EXPORT
// ——————————————————————————————————————————
export const slides: ReactNode[] = [
  <Slide01 key="01" />,
  <Slide02 key="02" />,
  <Slide03 key="03" />,
  <Slide04 key="04" />,
  <Slide05 key="05" />,
  <Slide06 key="06" />,
  <Slide07 key="07" />,
  <Slide08 key="08" />,
  <Slide09 key="09" />,
  <Slide10 key="10" />,
  <Slide11 key="11" />,
  <Slide12 key="12" />,
  <Slide13 key="13" />,
  <Slide14 key="14" />,
  <Slide15 key="15" />,
  <Slide16 key="16" />,
  <Slide17 key="17" />,
  <Slide18 key="18" />,
  <Slide19 key="19" />,
  <Slide20 key="20" />,
  <Slide21 key="21" />,
]
