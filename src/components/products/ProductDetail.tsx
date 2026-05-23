/* ---------------------------------------------------------------
   Inline SVG product illustrations — no external images needed
--------------------------------------------------------------- */

function VoIPPAIllustration() {
  return (
    <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background panel */}
      <rect x="20" y="20" width="440" height="300" rx="20" fill="#F5F8FC" stroke="#E2EDF6" strokeWidth="1.5"/>

      {/* Central hub */}
      <circle cx="240" cy="170" r="44" fill="#1B65A6" opacity="0.12"/>
      <circle cx="240" cy="170" r="30" fill="#1B65A6" opacity="0.2"/>
      <circle cx="240" cy="170" r="18" fill="#1B65A6"/>
      <path d="M233 170l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Radial lines */}
      {[[80,90],[170,55],[320,55],[400,90],[400,250],[320,285],[170,285],[80,250]].map(([x,y],i)=>(
        <line key={i} x1="240" y1="170" x2={x} y2={y} stroke="#1B65A6" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.35"/>
      ))}

      {/* Device: PA speaker top-left */}
      <rect x="50" y="62" width="64" height="44" rx="8" fill="white" stroke="#C0D2E5" strokeWidth="1.2"/>
      <circle cx="82" cy="84" r="12" fill="#E2EDF6"/>
      <circle cx="82" cy="84" r="6" fill="#1B65A6" opacity="0.5"/>
      <rect x="100" y="74" width="6" height="20" rx="3" fill="#1B65A6" opacity="0.3"/>
      <text x="82" y="118" textAnchor="middle" fontSize="9" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">PA Speaker</text>

      {/* Device: Clock/display top-center */}
      <rect x="178" y="38" width="68" height="40" rx="7" fill="white" stroke="#C0D2E5" strokeWidth="1.2"/>
      <rect x="185" y="44" width="54" height="28" rx="4" fill="#0E1A28"/>
      <text x="212" y="63" textAnchor="middle" fontSize="13" fill="#22C55E" fontFamily="monospace" fontWeight="700">12:00</text>
      <text x="212" y="92" textAnchor="middle" fontSize="9" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">Clock Display</text>

      {/* Device: Control panel top-right */}
      <rect x="342" y="58" width="64" height="48" rx="8" fill="white" stroke="#C0D2E5" strokeWidth="1.2"/>
      <rect x="350" y="65" width="48" height="28" rx="4" fill="#F5F8FC" stroke="#E2EDF6"/>
      {[0,1,2].map(i=>[0,1,2].map(j=>(
        <rect key={`${i}-${j}`} x={354+j*14} y={69+i*8} width="10" height="5" rx="1.5" fill="#1B65A6" opacity={0.2+i*0.15}/>
      )))}
      <text x="374" y="118" textAnchor="middle" fontSize="9" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">Control Unit</text>

      {/* Device: Amplifier right */}
      <rect x="352" y="226" width="78" height="44" rx="8" fill="white" stroke="#C0D2E5" strokeWidth="1.2"/>
      <rect x="358" y="232" width="66" height="12" rx="3" fill="#F5F8FC" stroke="#E2EDF6"/>
      <rect x="358" y="248" width="66" height="8" rx="2" fill="#0E1A28" opacity="0.08"/>
      {[0,1,2,3].map(i=><circle key={i} cx={364+i*8} cy={238} r="2.5" fill={i===3?"#22C55E":"#1B65A6"} opacity="0.6"/>)}
      <text x="391" y="284" textAnchor="middle" fontSize="9" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">SIP Amplifier</text>

      {/* Device: Intercom bottom-center */}
      <rect x="178" y="265" width="64" height="48" rx="8" fill="white" stroke="#C0D2E5" strokeWidth="1.2"/>
      <rect x="186" y="272" width="48" height="28" rx="5" fill="#F5F8FC" stroke="#E2EDF6"/>
      <circle cx="210" cy="282" r="7" fill="#1B65A6" opacity="0.15"/>
      <circle cx="210" cy="282" r="4" fill="#1B65A6" opacity="0.5"/>
      {[0,1,2].map(i=><rect key={i} x={186+i*17} y={298} width="13" height="4" rx="2" fill="#E2EDF6"/>)}
      <text x="210" y="328" textAnchor="middle" fontSize="9" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">Intercom</text>

      {/* Device: Gateway left */}
      <rect x="50" y="230" width="68" height="40" rx="8" fill="white" stroke="#C0D2E5" strokeWidth="1.2"/>
      <rect x="56" y="236" width="56" height="28" rx="4" fill="#F5F8FC" stroke="#E2EDF6"/>
      {[0,1,2,3,4].map(i=><rect key={i} x={60+i*10} y={242} width="6" height="16" rx="2" fill="#1B65A6" opacity={0.15+i*0.12}/>)}
      <text x="84" y="284" textAnchor="middle" fontSize="9" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">VoIP Gateway</text>

      {/* Label */}
      <rect x="168" y="148" width="144" height="44" rx="10" fill="white" stroke="#C0D2E5" strokeWidth="1"/>
      <text x="240" y="167" textAnchor="middle" fontSize="11" fill="#1B65A6" fontFamily="var(--font-syne)" fontWeight="700">VoIP PA Network</text>
      <text x="240" y="183" textAnchor="middle" fontSize="9.5" fill="#7290AA" fontFamily="var(--font-dm)">Unified paging system</text>
    </svg>
  );
}

function NECPhonesIllustration() {
  return (
    <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="440" height="300" rx="20" fill="#F5F8FC" stroke="#E2EDF6" strokeWidth="1.5"/>

      {/* Main phone - large, center-left */}
      <g transform="translate(60,50)">
        <rect width="160" height="220" rx="12" fill="white" stroke="#C0D2E5" strokeWidth="1.5"/>
        {/* Screen */}
        <rect x="12" y="14" width="136" height="80" rx="6" fill="#0E1A28"/>
        <rect x="16" y="18" width="128" height="72" rx="4" fill="#0F2744"/>
        {/* Screen content */}
        <text x="80" y="38" textAnchor="middle" fontSize="10" fill="#7EB8E8" fontFamily="var(--font-dm)" fontWeight="500">NEC SL2100</text>
        <text x="80" y="54" textAnchor="middle" fontSize="16" fill="white" fontFamily="monospace" fontWeight="700">14:22</text>
        <text x="80" y="70" textAnchor="middle" fontSize="8" fill="#4A6278" fontFamily="var(--font-dm)">Thu, May 22  •  Available</text>
        <rect x="16" y="78" width="60" height="8" rx="2" fill="#1B65A6" opacity="0.4"/>
        <rect x="84" y="78" width="60" height="8" rx="2" fill="#22C55E" opacity="0.3"/>
        {/* Keypad */}
        {[0,1,2,3].map(row=>[0,1,2].map(col=>(
          <rect key={`${row}-${col}`} x={14+col*48} y={106+row*26} width="38" height="18" rx="5" fill="#F5F8FC" stroke="#E2EDF6" strokeWidth="1"/>
        )))}
        {/* Side buttons */}
        <rect x="152" y="40" width="6" height="24" rx="3" fill="#C0D2E5"/>
        <rect x="152" y="70" width="6" height="16" rx="3" fill="#C0D2E5"/>
        {/* Speakerphone label */}
        <rect x="12" y="214" width="136" height="20" rx="5" fill="#EEF4FB"/>
        <text x="80" y="228" textAnchor="middle" fontSize="8" fill="#1B65A6" fontFamily="var(--font-dm)" fontWeight="600">SPEAKERPHONE</text>
        {/* Base */}
        <rect x="0" y="232" width="160" height="8" rx="4" fill="#E2EDF6"/>
      </g>

      {/* Second phone - smaller, right */}
      <g transform="translate(264,80)">
        <rect width="120" height="170" rx="10" fill="white" stroke="#C0D2E5" strokeWidth="1.2"/>
        <rect x="10" y="10" width="100" height="58" rx="5" fill="#0E1A28"/>
        <rect x="14" y="14" width="92" height="50" rx="3" fill="#0F2744"/>
        <text x="60" y="34" textAnchor="middle" fontSize="8" fill="#7EB8E8" fontFamily="var(--font-dm)">NEC DT930</text>
        <text x="60" y="50" textAnchor="middle" fontSize="13" fill="white" fontFamily="monospace" fontWeight="700">14:10</text>
        {[0,1,2,3].map(row=>[0,1,2].map(col=>(
          <rect key={`${row}-${col}`} x={11+col*36} y={78+row*20} width="28" height="14" rx="4" fill="#F5F8FC" stroke="#E2EDF6"/>
        )))}
        <rect x="10" y="162" width="100" height="6" rx="3" fill="#E2EDF6"/>
      </g>

      {/* Third phone - top right, smaller */}
      <g transform="translate(340,190)">
        <rect width="98" height="128" rx="9" fill="white" stroke="#C0D2E5" strokeWidth="1"/>
        <rect x="8" y="8" width="82" height="46" rx="4" fill="#0E1A28"/>
        <text x="49" y="26" textAnchor="middle" fontSize="7.5" fill="#7EB8E8" fontFamily="var(--font-dm)">NEC ITZ-12</text>
        <text x="49" y="42" textAnchor="middle" fontSize="11" fill="white" fontFamily="monospace">14:06</text>
        {[0,1,2].map(row=>[0,1,2].map(col=>(
          <rect key={`${row}-${col}`} x={9+col*29} y={62+row*16} width="22" height="11" rx="3" fill="#F5F8FC" stroke="#E2EDF6"/>
        )))}
        <rect x="8" y="122" width="82" height="4" rx="2" fill="#E2EDF6"/>
      </g>

      {/* Feature badges */}
      <rect x="36" y="285" width="110" height="24" rx="8" fill="#EEF4FB" stroke="#C0D2E5"/>
      <text x="91" y="301" textAnchor="middle" fontSize="9" fill="#1B65A6" fontFamily="var(--font-dm)" fontWeight="600">HD Voice Quality</text>
      <rect x="158" y="285" width="110" height="24" rx="8" fill="#EEF4FB" stroke="#C0D2E5"/>
      <text x="213" y="301" textAnchor="middle" fontSize="9" fill="#1B65A6" fontFamily="var(--font-dm)" fontWeight="600">SIP Compatible</text>
      <rect x="280" y="285" width="110" height="24" rx="8" fill="#EEF4FB" stroke="#C0D2E5"/>
      <text x="335" y="301" textAnchor="middle" fontSize="9" fill="#1B65A6" fontFamily="var(--font-dm)" fontWeight="600">PoE Powered</text>
    </svg>
  );
}

function AnalogSIPIllustration() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="440" height="260" rx="20" fill="#F5F8FC" stroke="#E2EDF6" strokeWidth="1.5"/>

      {/* Rack unit — the SIP paging amplifier */}
      <g transform="translate(60,70)">
        {/* Rack chassis */}
        <rect width="340" height="88" rx="8" fill="#1A1A2E" stroke="#2A3A5A" strokeWidth="1.5"/>
        {/* Rack rails */}
        <rect x="0" y="0" width="10" height="88" rx="3" fill="#111122"/>
        <rect x="330" y="0" width="10" height="88" rx="3" fill="#111122"/>
        {/* Rack holes left */}
        {[12,22,32,42,52,62,72].map(y=><rect key={y} x="2" y={y} width="6" height="6" rx="1" fill="#0E1A28"/>)}
        {/* Rack holes right */}
        {[12,22,32,42,52,62,72].map(y=><rect key={y} x="332" y={y} width="6" height="6" rx="1" fill="#0E1A28"/>)}

        {/* Front panel */}
        <rect x="12" y="8" width="316" height="72" rx="5" fill="#1E2840"/>

        {/* Display */}
        <rect x="20" y="16" width="120" height="36" rx="4" fill="#0A0F1E"/>
        <rect x="24" y="20" width="112" height="28" rx="2" fill="#021428"/>
        <text x="80" y="31" textAnchor="middle" fontSize="7" fill="#4A6278" fontFamily="monospace">SIP PAGING</text>
        <text x="80" y="42" textAnchor="middle" fontSize="11" fill="#22C55E" fontFamily="monospace" fontWeight="700">25V/70V AMP</text>

        {/* Brand label */}
        <text x="80" y="54" textAnchor="middle" fontSize="7" fill="#3A5068" fontFamily="var(--font-dm)">CyberData Systems</text>

        {/* LED indicators */}
        <circle cx="160" cy="24" r="4" fill="#22C55E"/>
        <circle cx="174" cy="24" r="4" fill="#F59E0B"/>
        <circle cx="188" cy="24" r="4" fill="#EF4444" opacity="0.3"/>
        <text x="175" y="36" textAnchor="middle" fontSize="6" fill="#4A6278" fontFamily="var(--font-dm)">PWR  FAULT  AUDIO</text>

        {/* Ports section */}
        <rect x="204" y="16" width="116" height="56" rx="3" fill="#151C30"/>
        {/* Ethernet ports */}
        {[0,1].map(i=>(
          <g key={i}>
            <rect x={208+i*28} y={22} width="20" height="14" rx="2" fill="#0E1A28" stroke="#2A3A5A"/>
            <rect x={210+i*28} y={24} width="16" height="10" rx="1" fill="#021428"/>
            <text x={218+i*28} y={47} textAnchor="middle" fontSize="5.5" fill="#4A6278" fontFamily="var(--font-dm)">ETH</text>
          </g>
        ))}
        {/* Audio port */}
        <circle cx="270" cy="30" r="7" fill="#0E1A28" stroke="#2A3A5A"/>
        <circle cx="270" cy="30" r="4" fill="#021428"/>
        <text x="270" y="47" textAnchor="middle" fontSize="5.5" fill="#4A6278" fontFamily="var(--font-dm)">AUDIO</text>
        {/* Power */}
        <rect x="292" y="20" width="24" height="20" rx="3" fill="#0E1A28" stroke="#2A3A5A"/>
        <text x="304" y="28" textAnchor="middle" fontSize="5.5" fill="#4A6278" fontFamily="var(--font-dm)">PWR</text>
        <text x="304" y="36" textAnchor="middle" fontSize="6" fill="#22C55E" fontFamily="monospace">IN</text>
        {/* Screws */}
        {[[216,70],[236,70],[260,70],[284,70],[308,70]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="3" fill="#0E1A28" stroke="#2A3A5A" strokeWidth="0.8"/>
        ))}
      </g>

      {/* Rack unit 2 — smaller unit below */}
      <g transform="translate(60,172)">
        <rect width="340" height="52" rx="6" fill="#1A1A2E" stroke="#2A3A5A" strokeWidth="1.2"/>
        <rect x="10" y="6" width="320" height="40" rx="4" fill="#1E2840"/>
        <rect x="18" y="12" width="90" height="26" rx="3" fill="#0A0F1E"/>
        <text x="63" y="25" textAnchor="middle" fontSize="7" fill="#4A6278" fontFamily="monospace">ANALOG/SIP</text>
        <text x="63" y="36" textAnchor="middle" fontSize="7.5" fill="#7EB8E8" fontFamily="monospace">GATEWAY</text>
        <circle cx="128" cy="21" r="3" fill="#22C55E"/>
        <circle cx="140" cy="21" r="3" fill="#F59E0B" opacity="0.5"/>
        {[0,1,2,3].map(i=>(
          <rect key={i} x={155+i*28} y={14} width="20" height="12" rx="2" fill="#0E1A28" stroke="#2A3A5A"/>
        ))}
        <text x="63" y="50" textAnchor="middle" fontSize="6.5" fill="#3A5068" fontFamily="var(--font-dm)">4-Port Analog Adapter</text>
      </g>

      {/* Labels below */}
      <text x="240" y="250" textAnchor="middle" fontSize="10" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">
        Professional rack-mount SIP / Analog conversion hardware
      </text>
    </svg>
  );
}

function YealinkIllustration() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="440" height="280" rx="20" fill="#F5F8FC" stroke="#E2EDF6" strokeWidth="1.5"/>

      {/* Main Yealink T5 series - large */}
      <g transform="translate(52,44)">
        {/* Phone body */}
        <rect width="180" height="220" rx="12" fill="#2C3447" stroke="#1A2030" strokeWidth="1.5"/>
        {/* Color strip */}
        <rect x="0" y="0" width="180" height="6" rx="12" fill="#1B65A6"/>
        {/* Main screen */}
        <rect x="12" y="14" width="156" height="98" rx="6" fill="#0A0F1E"/>
        <rect x="16" y="18" width="148" height="90" rx="4" fill="#061228"/>
        {/* Screen UI */}
        <text x="90" y="36" textAnchor="middle" fontSize="9" fill="#7EB8E8" fontFamily="var(--font-dm)" fontWeight="500">Yealink T57W</text>
        <rect x="18" y="42" width="144" height="1" fill="#1B3050"/>
        <text x="90" y="56" textAnchor="middle" fontSize="20" fill="white" fontFamily="monospace" fontWeight="700">14:10</text>
        <text x="90" y="68" textAnchor="middle" fontSize="7.5" fill="#3A5570" fontFamily="var(--font-dm)">Fri, Jan 25  •  Eric Zhang</text>
        {/* Softkey labels */}
        {["History","Directory","DND","Menu"].map((lbl,i)=>(
          <text key={lbl} x={26+i*36} y={100} textAnchor="middle" fontSize="6" fill="#4A6A88" fontFamily="var(--font-dm)">{lbl}</text>
        ))}
        {/* Softkeys */}
        {[0,1,2,3].map(i=>(
          <rect key={i} x={12+i*42} y={104} width="36" height="6" rx="2" fill="#0F1E35"/>
        ))}
        {/* Navigation circle */}
        <circle cx="90" cy="136" r="20" fill="#1E2840" stroke="#2A3A55" strokeWidth="1.2"/>
        <circle cx="90" cy="136" r="10" fill="#161E30"/>
        {/* Nav arrows */}
        <path d="M90 122l-3 4h6l-3-4Z" fill="#4A6278"/>
        <path d="M90 150l3-4h-6l3 4Z" fill="#4A6278"/>
        <path d="M76 136l4-3v6l-4-3Z" fill="#4A6278"/>
        <path d="M104 136l-4 3v-6l4 3Z" fill="#4A6278"/>
        {/* Side soft-keys */}
        {[0,1,2,3,4].map(i=>(
          <rect key={i} x={12} y={170+i*8} width="26" height="5" rx="2" fill="#1E2840"/>
        ))}
        {[0,1,2,3,4].map(i=>(
          <rect key={i} x={142} y={170+i*8} width="26" height="5" rx="2" fill="#1E2840"/>
        ))}
        {/* Keypad */}
        {[0,1,2,3].map(row=>[0,1,2].map(col=>(
          <rect key={`${row}-${col}`} x={40+col*38} y={168+row*12} width="30" height="8" rx="3" fill="#1E2840" stroke="#2A3A55" strokeWidth="0.8"/>
        )))}
        {/* Base stand */}
        <rect x="50" y="218" width="80" height="5" rx="2.5" fill="#1A2030"/>
        <path d="M55 223 Q90 240 125 223" stroke="#1A2030" strokeWidth="2" fill="none"/>
      </g>

      {/* Expansion module */}
      <g transform="translate(248,74)">
        <rect width="100" height="180" rx="10" fill="#2C3447" stroke="#1A2030" strokeWidth="1.2"/>
        <rect x="0" y="0" width="100" height="5" rx="10" fill="#1B65A6"/>
        <rect x="8" y="12" width="84" height="50" rx="4" fill="#0A0F1E"/>
        <text x="50" y="26" textAnchor="middle" fontSize="7" fill="#7EB8E8" fontFamily="var(--font-dm)">EXP50</text>
        <text x="50" y="40" textAnchor="middle" fontSize="8" fill="white" fontFamily="var(--font-dm)" fontWeight="500">Expansion</text>
        <text x="50" y="52" textAnchor="middle" fontSize="8" fill="white" fontFamily="var(--font-dm)" fontWeight="500">Module</text>
        {[0,1,2,3,4,5,6,7].map(i=>(
          <g key={i}>
            <rect x={8} y={70+i*12} width={36} height={8} rx="2.5" fill="#1E2840"/>
            <rect x={56} y={70+i*12} width={36} height={8} rx="2.5" fill="#1E2840"/>
            <circle cx={20} cy={74+i*12} r="2" fill={i<3?"#22C55E":"#1B65A6"} opacity="0.6"/>
            <circle cx={68} cy={74+i*12} r="2" fill={i<2?"#22C55E":"#4A6278"} opacity="0.6"/>
          </g>
        ))}
        <rect x="30" y="172" width="40" height="5" rx="2" fill="#1A2030"/>
      </g>

      {/* Feature badges */}
      <rect x="36" y="280" width="90" height="22" rx="7" fill="#EEF4FB" stroke="#C0D2E5"/>
      <text x="81" y="295" textAnchor="middle" fontSize="8.5" fill="#1B65A6" fontFamily="var(--font-dm)" fontWeight="600">Wi-Fi Built-in</text>
      <rect x="136" y="280" width="90" height="22" rx="7" fill="#EEF4FB" stroke="#C0D2E5"/>
      <text x="181" y="295" textAnchor="middle" fontSize="8.5" fill="#1B65A6" fontFamily="var(--font-dm)" fontWeight="600">Bluetooth</text>
      <rect x="236" y="280" width="90" height="22" rx="7" fill="#EEF4FB" stroke="#C0D2E5"/>
      <text x="281" y="295" textAnchor="middle" fontSize="8.5" fill="#1B65A6" fontFamily="var(--font-dm)" fontWeight="600">Color LCD</text>
      <rect x="336" y="280" width="108" height="22" rx="7" fill="#EEF4FB" stroke="#C0D2E5"/>
      <text x="390" y="295" textAnchor="middle" fontSize="8.5" fill="#1B65A6" fontFamily="var(--font-dm)" fontWeight="600">Gigabit PoE</text>
    </svg>
  );
}

function IPCameraIllustration() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="440" height="280" rx="20" fill="#F5F8FC" stroke="#E2EDF6" strokeWidth="1.5"/>

      {/* Central network hub */}
      <circle cx="240" cy="160" r="36" fill="#1B65A6" opacity="0.10"/>
      <circle cx="240" cy="160" r="24" fill="#1B65A6" opacity="0.18"/>
      <circle cx="240" cy="160" r="14" fill="#1B65A6"/>
      {/* Hub icon - network */}
      <path d="M235 160h10M240 155v10" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="240" cy="160" r="4" fill="white" opacity="0.3"/>

      {/* Connection lines */}
      {[[100,80],[240,55],[370,80],[400,160],[370,245],[240,270],[100,245],[68,160]].map(([x,y],i)=>(
        <line key={i} x1="240" y1="160" x2={x} y2={y} stroke="#1B65A6" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.3"/>
      ))}

      {/* Camera 1 - dome, top-left */}
      <g transform="translate(68,52)">
        <circle cx="20" cy="20" r="18" fill="white" stroke="#C0D2E5" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="12" fill="#E2EDF6"/>
        <circle cx="20" cy="20" r="7" fill="#1B65A6" opacity="0.7"/>
        <circle cx="20" cy="20" r="3" fill="#0E1A28"/>
        <text x="20" y="50" textAnchor="middle" fontSize="8" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">Dome</text>
      </g>

      {/* Camera 2 - bullet, top-center */}
      <g transform="translate(210,32)">
        <rect x="0" y="6" width="50" height="22" rx="11" fill="white" stroke="#C0D2E5" strokeWidth="1.5"/>
        <circle cx="10" cy="17" r="6" fill="#E2EDF6"/>
        <circle cx="10" cy="17" r="3.5" fill="#1B65A6" opacity="0.7"/>
        <rect x="18" y="11" width="26" height="12" rx="4" fill="#F5F8FC" stroke="#E2EDF6"/>
        {[0,1,2].map(i=><circle key={i} cx={24+i*7} cy={17} r="1.5" fill="#C0D2E5"/>)}
        <text x="25" y="40" textAnchor="middle" fontSize="8" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">Bullet Camera</text>
      </g>

      {/* Camera 3 - PTZ, top-right */}
      <g transform="translate(346,52)">
        <circle cx="20" cy="16" r="14" fill="white" stroke="#C0D2E5" strokeWidth="1.5"/>
        <circle cx="20" cy="16" r="9" fill="#E2EDF6"/>
        <circle cx="20" cy="16" r="5" fill="#1B65A6" opacity="0.6"/>
        <rect x="8" y="28" width="24" height="8" rx="4" fill="#E2EDF6" stroke="#C0D2E5"/>
        <text x="20" y="50" textAnchor="middle" fontSize="8" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">PTZ Camera</text>
      </g>

      {/* NVR - right middle */}
      <g transform="translate(372,130)">
        <rect width="68" height="50" rx="6" fill="white" stroke="#C0D2E5" strokeWidth="1.5"/>
        <rect x="6" y="6" width="56" height="30" rx="4" fill="#0E1A28"/>
        <text x="34" y="19" textAnchor="middle" fontSize="6.5" fill="#7EB8E8" fontFamily="var(--font-dm)">NVR</text>
        {[0,1,2,3].map(i=><rect key={i} x={8+i*13} y={22} width="10" height="10" rx="2" fill="#061228"/>)}
        {[0,1].map(i=><circle key={i} cx={8+i*8} cy={42} r="3" fill="#E2EDF6" stroke="#C0D2E5"/>)}
        <rect x="22" y="39" width="40" height="6" rx="3" fill="#F5F8FC" stroke="#E2EDF6"/>
        <text x="34" y="62" textAnchor="middle" fontSize="8" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">NVR Recorder</text>
      </g>

      {/* Monitor - bottom-right */}
      <g transform="translate(332,218)">
        <rect width="80" height="52" rx="5" fill="white" stroke="#C0D2E5" strokeWidth="1.2"/>
        <rect x="5" y="5" width="70" height="36" rx="3" fill="#0E1A28"/>
        {/* Split view */}
        <rect x="6" y="6" width="33" height="16" rx="2" fill="#061228"/>
        <rect x="41" y="6" width="33" height="16" rx="2" fill="#061228"/>
        <rect x="6" y="24" width="33" height="16" rx="2" fill="#061228"/>
        <rect x="41" y="24" width="33" height="16" rx="2" fill="#061228"/>
        {/* Camera feed icons */}
        {[[22,14],[57,14],[22,32],[57,32]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="4" fill="#1B65A6" opacity="0.5"/>
        ))}
        <rect x="30" y="43" width="20" height="6" rx="3" fill="#E2EDF6"/>
        <text x="40" y="58" textAnchor="middle" fontSize="8" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">Monitor</text>
      </g>

      {/* Server - bottom-left */}
      <g transform="translate(68,220)">
        <rect width="68" height="52" rx="5" fill="white" stroke="#C0D2E5" strokeWidth="1.2"/>
        {[0,1,2].map(i=>(
          <rect key={i} x={6} y={8+i*14} width={56} height={10} rx="3" fill="#F5F8FC" stroke="#E2EDF6"/>
        ))}
        {[0,1,2].map(i=>(
          <circle key={i} cx={56} cy={13+i*14} r="3" fill={i===0?"#22C55E":i===1?"#1B65A6":"#E2EDF6"} opacity="0.7"/>
        ))}
        <text x="34" y="58" textAnchor="middle" fontSize="8" fill="#7290AA" fontFamily="var(--font-dm)" fontWeight="500">Server</text>
      </g>

      {/* Center label */}
      <rect x="190" y="148" width="100" height="26" rx="8" fill="white" stroke="#C0D2E5"/>
      <text x="240" y="162" textAnchor="middle" fontSize="9" fill="#1B65A6" fontFamily="var(--font-syne)" fontWeight="700">IP Network</text>
      <text x="240" y="171" textAnchor="middle" fontSize="7.5" fill="#7290AA" fontFamily="var(--font-dm)">Unified Security</text>
    </svg>
  );
}

/* ---------------------------------------------------------------
   Product data
--------------------------------------------------------------- */
const products = [
  {
    id:       "voip-pa",
    tag:      "Audio Systems",
    tagCls:   "bg-violet-50 text-violet-600 border-violet-200",
    title:    "VoIP PA Systems",
    subtitle: "Enhancing Communication Efficiency",
    body: [
      "With our VoIP PA systems, we revolutionize your communication experience. Our systems utilize Voice over Internet Protocol (VoIP), enabling you to transmit voice and other multimedia content over an IP network.",
      "This technology brings numerous benefits, including cost savings, scalability, and superior sound quality. With our VoIP PA systems, your messages will be conveyed clearly, ensuring effective communication throughout your organization.",
    ],
    features: ["Cost-effective scalability", "Superior sound quality", "IP network integration", "Centralized management", "Emergency broadcast capable"],
    illustration: <VoIPPAIllustration />,
    flip: false,
  },
  {
    id:       "nec-phones",
    tag:      "Phone Hardware",
    tagCls:   "bg-blue-50 text-blue-600 border-blue-200",
    title:    "NEC and Yealink Phone Systems",
    subtitle: "Unleash Your Communication Potential",
    body: [
      "We proudly offer NEC and Yealink phone systems, designed to optimize your communication infrastructure. NEC is a leading provider of innovative telephony products known for their reliability, advanced features, and flexible configuration options.",
      "Whether you have a small office or a large enterprise, our phone systems cater to your specific requirements, providing seamless connectivity and efficient call management for teams of all sizes.",
    ],
    features: ["HD voice quality", "Gigabit PoE support", "Wi-Fi and Bluetooth built-in", "Color touchscreen display", "Expansion module support"],
    illustration: <NECPhonesIllustration />,
    flip: true,
  },
  {
    id:       "analog-sip",
    tag:      "System Migration",
    tagCls:   "bg-amber-50 text-amber-600 border-amber-200",
    title:    "Analog to SIP PA Systems",
    subtitle: "Embrace Modern Communication Technologies",
    body: [
      "Want to upgrade your existing analog PA system to enjoy the benefits of SIP technology? Our analog to SIP PA systems offer a cost-effective solution. By converting your analog system to SIP, you will experience enhanced call quality and greater scalability.",
      "With the ability to integrate with other communication platforms and our expert technicians handling the transition, the process is smooth, ensuring you reap all the advantages of a modern PA system.",
    ],
    features: ["Seamless analog migration", "Enhanced call quality", "Platform integration", "Cost-effective upgrade path", "Expert on-site installation"],
    illustration: <AnalogSIPIllustration />,
    flip: false,
  },
  {
    id:       "digital-voip",
    tag:      "VoIP Conversion",
    tagCls:   "bg-emerald-50 text-emerald-700 border-emerald-200",
    title:    "Digital to VoIP Conversions",
    subtitle: "Future-Proof Your Communication Infrastructure",
    body: [
      "If you have a digital phone system that needs upgrading, our digital to VoIP conversions are the perfect choice. As VoIP becomes the standard for communication, it is essential to stay ahead of the curve.",
      "Our conversion services seamlessly transform your existing digital infrastructure, enabling you to enjoy the benefits of VoIP technology, such as flexibility, scalability, and cost efficiency.",
    ],
    features: ["Zero-downtime migration", "Number porting included", "Flexible scalability", "Reduced monthly costs", "Future-ready infrastructure"],
    illustration: <YealinkIllustration />,
    flip: true,
  },
  {
    id:       "ip-cameras",
    tag:      "Security Systems",
    tagCls:   "bg-red-50 text-red-600 border-red-200",
    title:    "IP Camera System Installation and Design",
    subtitle: "Strengthen Your Security Measures",
    body: [
      "Security is a top priority for any organization. At Atlantis Utility, INC, our IP camera system installation and design services provide robust surveillance solutions to safeguard your premises.",
      "By leveraging the latest IP camera technology, our systems offer high-quality video footage, remote monitoring capabilities, and easy integration with your existing infrastructure. Protect your organization and gain peace of mind.",
    ],
    features: ["HD and 4K camera options", "Remote monitoring access", "Motion detection and alerts", "Night vision capability", "NVR storage solutions"],
    illustration: <IPCameraIllustration />,
    flip: false,
  },
];

/* ---------------------------------------------------------------
   Section component
--------------------------------------------------------------- */
export default function ProductDetail() {
  return (
    <div className="divide-y divide-[#E2EDF6]">
      {products.map((p, idx) => (
        <section
          key={p.id}
          id={p.id}
          className={`py-20 sm:py-28 ${idx % 2 === 0 ? "bg-white" : "bg-[#F5F8FC]"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${p.flip ? "lg:[&>*:first-child]:order-2" : ""}`}>

              {/* Illustration */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden border border-[#E2EDF6] shadow-[0_8px_40px_rgba(27,101,166,0.08)] aspect-[4/3] flex items-center justify-center bg-[#F5F8FC]">
                  {p.illustration}
                </div>
                {/* Floating tag */}
                <div className="absolute -bottom-4 -right-4 bg-white border border-[#E2EDF6] rounded-2xl px-4 py-3 shadow-md hidden sm:flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot flex-shrink-0" />
                  <span className="text-[12px] font-semibold text-[#0E1A28]" style={{ fontFamily: "var(--font-dm)" }}>
                    Professionally installed
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${p.tagCls}`}
                    style={{ fontFamily: "var(--font-dm)" }}>
                    {p.tag}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E1A28] tracking-tight leading-tight mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}>
                  {p.title}
                </h2>
                <p className="text-[15px] font-semibold text-[#1B65A6] mb-5"
                  style={{ fontFamily: "var(--font-dm)" }}>
                  {p.subtitle}
                </p>

                <div className="space-y-3 mb-7">
                  {p.body.map((para, i) => (
                    <p key={i} className="text-[14.5px] text-[#4A6278] leading-relaxed"
                      style={{ fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Feature list */}
                <ul className="space-y-2.5 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EEF4FB] border border-[#C0D2E5] flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="#1B65A6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[13.5px] text-[#3A5068] font-medium" style={{ fontFamily: "var(--font-dm)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a href="tel:8056582329"
                    className="inline-flex items-center gap-2 bg-[#1B65A6] hover:bg-[#134d80] text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px] shadow-sm"
                    style={{ fontFamily: "var(--font-dm)" }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M2.8 1.4C3.6 3 5.2 5.8 7.4 8s5 3.8 6.6 4.6L12.4 14C10 12.6 7.2 10.4 5 8.2 2.8 6 .8 3.2.4 1L2.8 1.4Z" fill="currentColor"/>
                    </svg>
                    Call Today
                  </a>
                  <a href="#contact"
                    className="inline-flex items-center gap-2 border border-[#C0D2E5] hover:border-[#1B65A6] hover:text-[#1B65A6] text-[#3A5068] font-semibold px-6 py-3.5 rounded-xl transition-all text-[14px]"
                    style={{ fontFamily: "var(--font-dm)" }}>
                    Schedule a Consultation
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}