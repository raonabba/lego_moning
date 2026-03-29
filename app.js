
// ── DEFAULT MISSIONS ──
const DEFAULT_TASKS = [
  {id:1,name:'옷 입기',emoji:'🥋',hasOutfit:true,points:5},
  {id:2,name:'세수하기',emoji:'💦',points:5},
  {id:3,name:'물 양치',emoji:'🦷',points:5},
  {id:4,name:'아침밥 먹기',emoji:'⚡',points:8},
  {id:5,name:'머리하기',emoji:'✂️',points:5},
  {id:6,name:'준비물 챙기기',emoji:'🎒',points:8},
  {id:7,name:'양치하기',emoji:'🪥',points:5},
  {id:8,name:'로션 바르기',emoji:'🛡️',points:3},
  {id:9,name:'양말 신기',emoji:'🧦',points:3},
  {id:10,name:'니아한테 인사하기',emoji:'🐾',points:5},
];

const EMOJI_CATS = [
  {label:'아침루틴', items:['🥋','💦','🦷','🪥','✂️','🎒','🧦','🛡️','🧴','👟','🍚','🥛','🍳','🌅','🛁','🚿']},
  {label:'닌자/전투', items:['🥷','⚔️','🗡️','🏹','💥','🔥','⚡','🌪️','💫','🌊','🔮','☄️','🥊','🤺','🛡️','🎯']},
  {label:'로봇/레고', items:['🤖','🧱','🔧','🔩','⚙️','🦾','🦿','🧲','💡','🔬','🔭','🖥️','🕹️','🎮','🚀','🛸']},
  {label:'동물/자연', items:['🐾','🦁','🐯','🦊','🐺','🦅','🐉','🦋','🐸','🦖','🦕','🐬','🦈','🐙','🦂','🦎']},
  {label:'스포츠/활동', items:['🏆','🥇','🏅','🎖️','⚽','🏀','🎾','🏊','🚴','🧗','🤼','🥋','🎿','🏄','🏋️','🤸']},
  {label:'기타', items:['⭐','🌟','💫','✨','🎉','🎁','🎈','🌈','🍀','💎','👑','🗝️','🔑','📚','🎵','❤️']},
];
const EMOJIS = EMOJI_CATS.flatMap(c=>c.items);

const PRAISES = [
  {e:'🧱',t:"You're crushing it!",s:'레고 블록 하나 추가!'},
  {e:'⚡',t:'Level up, ninja!',s:'전투력 충전 완료!'},
  {e:'🏆',t:'Awesome job!',s:'최강 전사 인증!'},
  {e:'🤖',t:'Robot mode: ON!',s:'시스템 업그레이드!'},
  {e:'💥',t:'Boom! Nailed it!',s:'필살기 발동!'},
  {e:'🥷',t:'Shadow ninja speed!',s:'그림자 닌자 레벨업!'},
  {e:'🌟',t:"You're a LEGEND!",s:'전설 등극!'},
  {e:'🧱',t:'Block by block, hero!',s:'완벽 조립 완료!'},
  {e:'🔥',t:"That's on fire!",s:'에너지 MAX!'},
  {e:'⚔️',t:'Mission accepted!',s:'닌자 기술 시전!'},
  {e:'🚀',t:'To the moon!',s:'로켓 발사!'},
  {e:'💪',t:'Strong like a warrior!',s:'전사의 힘!'},
  {e:'🎯',t:'Right on target!',s:'정확한 타격!'},
  {e:'🦁',t:'Roar! Like a lion!',s:'사자의 용기!'},
  {e:'🛡️',t:'Shield activated!',s:'방어막 완성!'},
  {e:'🧱',t:'LEGO master move!',s:'레고 마스터!'},
  {e:'⭐',t:'Superstar moment!',s:'슈퍼스타 등장!'},
  {e:'🎮',t:'High score unlocked!',s:'최고 점수!'},
  {e:'🔧',t:'System upgraded!',s:'업그레이드 완료!'},
  {e:'🥷',t:'Ninja never quits!',s:'닌자는 포기 안 해!'},
];
const CHECK_PHRASES = [
  'Awesome job!',
  'Boom! Mission clear!',
  'You did it!',
  'Nice one, ninja!',
  'Power up complete!',
  'Way to go!',
  'That was amazing!',
  'You are on fire!',
  'Super move!',
  'Mission smashed!',
  'Brilliant work!',
  'Let\'s go! Great job!'
];
const REWARD_GOAL = 50;

// ── TASK → ENGLISH NAME MAP ──
const TASK_EN = {
  '옷 입기':'Getting dressed','세수하기':'Washing face','물 양치':'Mouth rinse',
  '아침밥 먹기':'Eating breakfast','머리하기':'Fixing hair','준비물 챙기기':'Packing bag',
  '양치하기':'Brushing teeth','로션 바르기':'Applying lotion','양말 신기':'Putting on socks',
  '니아한테 인사하기':'Saying hi to Nia',
};

// ── 20 LEGO FIGURES (your design) ──
// Each figure = array of SVG layer strings drawn at 0,0 in 60x110 viewbox
// Parts: [head, torso, legs] — shown progressively
function legoFigure(id){
  const F = LEGO_FIGURES[id % LEGO_FIGURES.length];
  return F;
}

const LEGO_FIGURES = [
  // 0: CLASSIC SMILE
  {name:'Classic Smile', parts:[
    // head+face
    `<rect x="15" y="2" width="30" height="26" rx="4" fill="#FFD700" stroke="#CC9900" stroke-width="1"/>
     <circle cx="23" cy="12" r="3" fill="#CC7700"/>
     <circle cx="37" cy="12" r="3" fill="#CC7700"/>
     <path d="M22 20 Q30 26 38 20" stroke="#CC7700" stroke-width="1.5" fill="none" stroke-linecap="round"/>
     <rect x="15" y="26" width="30" height="4" rx="0" fill="#DDDDDD"/>`,
    // torso
    `<rect x="10" y="30" width="40" height="34" rx="2" fill="#CC0000" stroke="#AA0000" stroke-width="1"/>
     <rect x="18" y="36" width="24" height="22" rx="1" fill="#AA0000"/>
     <rect x="2" y="30" width="10" height="28" rx="2" fill="#CC0000"/>
     <rect x="48" y="30" width="10" height="28" rx="2" fill="#CC0000"/>
     <rect x="3" y="57" width="9" height="8" rx="2" fill="#FFD700"/>
     <rect x="48" y="57" width="9" height="8" rx="2" fill="#FFD700"/>`,
    // legs
    `<rect x="12" y="64" width="16" height="30" rx="2" fill="#2244AA"/>
     <rect x="32" y="64" width="16" height="30" rx="2" fill="#2244AA"/>
     <rect x="10" y="91" width="20" height="8" rx="3" fill="#1133AA"/>
     <rect x="30" y="91" width="20" height="8" rx="3" fill="#1133AA"/>`
  ]},
  // 1: ASTRONAUT
  {name:'Astronaut', parts:[
    `<rect x="12" y="2" width="36" height="28" rx="5" fill="#E8E8E8" stroke="#CCC" stroke-width="1"/>
     <rect x="14" y="6" width="32" height="20" rx="3" fill="#AACCFF"/>
     <rect x="17" y="9" width="14" height="10" rx="1" fill="#DDEEFF"/>
     <rect x="17" y="9" width="5" height="3" rx="1" fill="rgba(255,255,255,0.7)"/>
     <rect x="12" y="28" width="36" height="4" fill="#DDD"/>`,
    `<rect x="8" y="32" width="44" height="34" rx="2" fill="#EEEEEE" stroke="#CCC" stroke-width="1"/>
     <rect x="14" y="36" width="32" height="26" rx="2" fill="#CCDDEE"/>
     <rect x="18" y="40" width="10" height="8" rx="1" fill="#CC2200"/>
     <rect x="30" y="40" width="8" height="6" rx="1" fill="#AACCEE"/>
     <rect x="0" y="32" width="10" height="26" rx="2" fill="#E8E8E8"/>
     <rect x="50" y="32" width="10" height="26" rx="2" fill="#E8E8E8"/>
     <rect x="1" y="56" width="9" height="8" rx="2" fill="#DDD"/>
     <rect x="50" y="56" width="9" height="8" rx="2" fill="#DDD"/>`,
    `<rect x="12" y="66" width="16" height="28" rx="2" fill="#DDDDEE"/>
     <rect x="32" y="66" width="16" height="28" rx="2" fill="#CCCCDD"/>
     <rect x="10" y="90" width="20" height="8" rx="3" fill="#CCCCCC"/>
     <rect x="30" y="90" width="20" height="8" rx="3" fill="#CCCCCC"/>`
  ]},
  // 2: DEEP SEA DIVER
  {name:'Deep Sea Diver', parts:[
    `<rect x="10" y="0" width="40" height="34" rx="8" fill="#AA6600" stroke="#885500" stroke-width="1.5"/>
     <circle cx="30" cy="14" r="12" fill="#224488"/>
     <circle cx="30" cy="14" r="9" fill="#3366AA"/>
     <circle cx="30" cy="14" r="6" fill="#88AACC" opacity="0.7"/>
     <circle cx="26" cy="11" r="2" fill="rgba(255,255,255,0.5)"/>
     <rect x="18" y="0" width="24" height="5" rx="2" fill="#885500"/>
     <circle cx="46" cy="8" r="5" fill="#888" stroke="#666" stroke-width="1"/>
     <rect x="10" y="32" width="40" height="4" fill="#885500"/>`,
    `<rect x="8" y="36" width="44" height="32" rx="2" fill="#DD8800" stroke="#BB7700" stroke-width="1"/>
     <rect x="14" y="40" width="32" height="24" rx="1" fill="#BB7700"/>
     <rect x="18" y="44" width="10" height="8" rx="1" fill="#888"/>
     <rect x="30" y="44" width="8" height="6" rx="1" fill="#666"/>
     <rect x="0" y="36" width="10" height="26" rx="2" fill="#CC8800"/>
     <rect x="50" y="36" width="10" height="26" rx="2" fill="#CC8800"/>
     <rect x="1" y="60" width="9" height="8" rx="2" fill="#CC9944"/>
     <rect x="50" y="60" width="9" height="8" rx="2" fill="#CC9944"/>`,
    `<rect x="12" y="68" width="16" height="28" rx="2" fill="#DD8800"/>
     <rect x="32" y="68" width="16" height="28" rx="2" fill="#BB7700"/>
     <rect x="10" y="92" width="20" height="8" rx="3" fill="#CC7700"/>
     <rect x="30" y="92" width="20" height="8" rx="3" fill="#CC7700"/>`
  ]},
  // 3: PIRATE CAPTAIN
  {name:'Pirate Captain', parts:[
    `<rect x="14" y="4" width="32" height="26" rx="3" fill="#FFCC88" stroke="#DDAA66" stroke-width="1"/>
     <rect x="8" y="-2" width="44" height="8" rx="2" fill="#1a1a1a"/>
     <rect x="12" y="-10" width="36" height="10" rx="2" fill="#111"/>
     <rect x="20" y="-12" width="10" height="5" rx="1" fill="white"/>
     <circle cx="25" cy="-10" r="3" fill="#111"/>
     <rect x="14" y="-2" width="32" height="3" fill="#333"/>
     <rect x="10" y="10" width="9" height="7" rx="1" fill="#111"/>
     <rect x="10" y="10" width="9" height="2" fill="#666"/>
     <rect x="25" y="10" width="6" height="6" rx="1" fill="#FFDD00"/>
     <rect x="16" y="20" width="22" height="6" rx="2" fill="#884400" opacity="0.7"/>
     <rect x="14" y="28" width="32" height="4" fill="#FFCC88"/>`,
    `<rect x="8" y="32" width="44" height="32" rx="2" fill="#553300" stroke="#442200" stroke-width="1"/>
     <rect x="8" y="34" width="44" height="5" fill="#3a5c2a"/>
     <rect x="8" y="42" width="44" height="5" fill="#3a5c2a"/>
     <rect x="8" y="50" width="44" height="5" fill="#3a5c2a"/>
     <rect x="14" y="60" width="32" height="4" fill="#4a2a00"/>
     <rect x="22" y="58" width="16" height="8" rx="1" fill="#FFD700"/>
     <rect x="0" y="32" width="10" height="26" rx="2" fill="#553300"/>
     <rect x="50" y="32" width="10" height="26" rx="2" fill="#553300"/>
     <rect x="1" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="52" y="54" width="2" height="10" rx="1" fill="#CCC"/>
     <path d="M53 64 Q60 67 60 60" stroke="#CCC" stroke-width="2" fill="none"/>`,
    `<rect x="12" y="64" width="16" height="28" rx="2" fill="#553300"/>
     <rect x="32" y="64" width="16" height="28" rx="2" fill="#3a2200"/>
     <rect x="10" y="88" width="20" height="8" rx="3" fill="#111"/>
     <rect x="30" y="88" width="20" height="8" rx="3" fill="#111"/>`
  ]},
  // 4: MEDIEVAL KNIGHT
  {name:'Medieval Knight', parts:[
    `<rect x="12" y="0" width="36" height="30" rx="2" fill="#999" stroke="#777" stroke-width="1"/>
     <rect x="14" y="4" width="32" height="22" rx="1" fill="#888"/>
     <rect x="16" y="8" width="10" height="7" rx="1" fill="#333"/>
     <rect x="28" y="8" width="10" height="7" rx="1" fill="#333"/>
     <rect x="14" y="17" width="32" height="3" fill="#777"/>
     <rect x="14" y="21" width="32" height="3" fill="#777"/>
     <rect x="18" y="-6" width="24" height="8" rx="1" fill="#CC0000"/>
     <ellipse cx="30" cy="-6" rx="5" ry="4" fill="#EE1100"/>
     <rect x="12" y="28" width="36" height="4" fill="#888"/>`,
    `<rect x="8" y="32" width="44" height="32" rx="2" fill="#888" stroke="#777" stroke-width="1"/>
     <rect x="12" y="36" width="36" height="26" rx="1" fill="#999"/>
     <rect x="14" y="38" width="32" height="5" fill="#AAA"/>
     <rect x="14" y="45" width="32" height="5" fill="#AAA"/>
     <rect x="20" y="38" width="20" height="22" rx="1" fill="#CC0000"/>
     <rect x="26" y="38" width="8" height="22" rx="1" fill="#BB0000"/>
     <rect x="20" y="46" width="20" height="6" rx="1" fill="#BB0000"/>
     <rect x="0" y="32" width="10" height="26" rx="2" fill="#888"/>
     <rect x="50" y="32" width="10" height="26" rx="2" fill="#888"/>
     <rect x="1" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="-12" y="34" width="14" height="20" rx="2" fill="#CC0000"/>
     <rect x="-11" y="35" width="12" height="18" rx="1" fill="#EE1100"/>
     <rect x="-8" y="40" width="8" height="7" rx="1" fill="#FFD700"/>`,
    `<rect x="12" y="64" width="16" height="28" rx="2" fill="#888"/>
     <rect x="32" y="64" width="16" height="28" rx="2" fill="#999"/>
     <rect x="10" y="88" width="20" height="8" rx="3" fill="#777"/>
     <rect x="30" y="88" width="20" height="8" rx="3" fill="#888"/>`
  ]},
  // 5: CYBERPUNK HACKER
  {name:'Cyberpunk Hacker', parts:[
    `<rect x="14" y="2" width="32" height="26" rx="3" fill="#FFCC88" stroke="#DDAA66" stroke-width="1"/>
     <rect x="14" y="2" width="32" height="26" rx="3" fill="#111" opacity="0.85"/>
     <rect x="12" y="6" width="36" height="14" rx="2" fill="#222"/>
     <rect x="14" y="8" width="14" height="8" rx="2" fill="#00FF88"/>
     <rect x="30" y="8" width="14" height="8" rx="2" fill="#00FF88"/>
     <rect x="14" y="8" width="5" height="3" rx="1" fill="rgba(255,255,255,0.4)"/>
     <rect x="30" y="8" width="5" height="3" rx="1" fill="rgba(255,255,255,0.4)"/>
     <rect x="16" y="19" width="28" height="4" rx="1" fill="#333"/>
     <rect x="18" y="20" width="4" height="2" fill="#FF00AA"/>
     <rect x="24" y="20" width="4" height="2" fill="#00FF88"/>
     <rect x="30" y="20" width="4" height="2" fill="#FF00AA"/>
     <rect x="20" y="-6" width="10" height="10" rx="2" fill="#333"/>
     <rect x="14" y="27" width="32" height="4" fill="#111"/>`,
    `<rect x="8" y="31" width="44" height="32" rx="2" fill="#111" stroke="#333" stroke-width="1"/>
     <rect x="12" y="35" width="36" height="24" rx="1" fill="#1a1a1a"/>
     <rect x="12" y="35" width="15" height="24" rx="1" fill="#FF00AA" opacity="0.12"/>
     <rect x="33" y="35" width="15" height="24" rx="1" fill="#00FF88" opacity="0.1"/>
     <rect x="14" y="38" width="20" height="1" fill="#FF00AA" opacity="0.8"/>
     <rect x="14" y="42" width="14" height="1" fill="#00FF88" opacity="0.8"/>
     <rect x="14" y="46" width="22" height="1" fill="#FF00AA" opacity="0.8"/>
     <rect x="14" y="50" width="16" height="1" fill="#00FF88" opacity="0.8"/>
     <rect x="0" y="31" width="10" height="26" rx="2" fill="#111"/>
     <rect x="50" y="31" width="10" height="26" rx="2" fill="#111"/>
     <rect x="1" y="55" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="55" width="9" height="8" rx="2" fill="#FFCC88"/>
     <ellipse cx="10" cy="33" rx="5" ry="3" fill="#FF00AA"/>
     <ellipse cx="50" cy="33" rx="5" ry="3" fill="#00FF88"/>`,
    `<rect x="12" y="63" width="16" height="28" rx="2" fill="#111"/>
     <rect x="32" y="63" width="16" height="28" rx="2" fill="#1a1a1a"/>
     <rect x="10" y="87" width="20" height="8" rx="3" fill="#FF00AA" opacity="0.9"/>
     <rect x="30" y="87" width="20" height="8" rx="3" fill="#00FF88" opacity="0.9"/>`
  ]},
  // 6: THREE-ARMED ROBOT
  {name:'Three-Armed Robot', parts:[
    `<rect x="10" y="2" width="40" height="26" rx="3" fill="#888" stroke="#666" stroke-width="1"/>
     <rect x="12" y="4" width="36" height="20" rx="2" fill="#777"/>
     <rect x="14" y="7" width="7" height="6" rx="1" fill="#00FFAA"/>
     <rect x="23" y="7" width="7" height="6" rx="1" fill="#00FFAA"/>
     <rect x="32" y="7" width="7" height="6" rx="1" fill="#FF4400"/>
     <rect x="14" y="16" width="30" height="5" rx="1" fill="#555"/>
     <rect x="16" y="17" width="4" height="3" fill="#00FFAA"/>
     <rect x="22" y="17" width="4" height="3" fill="#00FFAA"/>
     <rect x="28" y="17" width="4" height="3" fill="#00FFAA"/>
     <rect x="34" y="17" width="4" height="3" fill="#FF4400"/>
     <rect x="15" y="-4" width="3" height="7" fill="#888"/>
     <circle cx="16" cy="-4" r="2.5" fill="#FF4400"/>
     <rect x="28" y="-2" width="3" height="5" fill="#888"/>
     <circle cx="29" cy="-2" r="2" fill="#00FFAA"/>
     <rect x="10" y="26" width="40" height="4" fill="#777"/>`,
    `<rect x="6" y="30" width="48" height="32" rx="2" fill="#666" stroke="#555" stroke-width="1"/>
     <rect x="10" y="34" width="40" height="24" rx="1" fill="#555"/>
     <rect x="12" y="36" width="14" height="10" rx="1" fill="#444"/>
     <rect x="28" y="36" width="14" height="10" rx="1" fill="#444"/>
     <rect x="14" y="38" width="4" height="4" rx="0" fill="#00FFAA"/>
     <rect x="20" y="38" width="4" height="4" rx="0" fill="#00FFAA"/>
     <rect x="30" y="38" width="4" height="4" rx="0" fill="#FF4400"/>
     <rect x="36" y="38" width="4" height="4" rx="0" fill="#00FFAA"/>
     <rect x="12" y="48" width="36" height="6" rx="1" fill="#444"/>
     <circle cx="16" cy="51" r="2" fill="#00FFAA"/>
     <circle cx="22" cy="51" r="2" fill="#FF4400"/>
     <circle cx="28" cy="51" r="2" fill="#00FFAA"/>
     <rect x="-2" y="30" width="10" height="24" rx="2" fill="#777"/>
     <rect x="52" y="30" width="10" height="24" rx="2" fill="#777"/>
     <rect x="62" y="26" width="10" height="20" rx="2" fill="#888"/>
     <rect x="-2" y="53" width="9" height="8" rx="2" fill="#999"/>
     <rect x="52" y="53" width="9" height="8" rx="2" fill="#999"/>
     <rect x="62" y="44" width="9" height="8" rx="2" fill="#AAA"/>`,
    `<rect x="12" y="62" width="16" height="28" rx="2" fill="#666"/>
     <rect x="32" y="62" width="16" height="28" rx="2" fill="#777"/>
     <rect x="10" y="86" width="20" height="8" rx="3" fill="#555"/>
     <rect x="30" y="86" width="20" height="8" rx="3" fill="#666"/>`
  ]},
  // 7: FOREST EXPLORER
  {name:'Forest Explorer', parts:[
    `<rect x="14" y="2" width="32" height="26" rx="3" fill="#FFCC88" stroke="#DDAA66" stroke-width="1"/>
     <rect x="8" y="-4" width="44" height="8" rx="2" fill="#8B6914"/>
     <rect x="12" y="-10" width="36" height="8" rx="2" fill="#A07830"/>
     <rect x="14" y="-12" width="32" height="4" rx="2" fill="#8B6914"/>
     <rect x="16" y="8" width="5" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="25" y="8" width="5" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="16" y="16" width="14" height="5" rx="2" fill="#8B6914"/>
     <rect x="14" y="27" width="32" height="4" fill="#FFCC88"/>`,
    `<rect x="8" y="31" width="44" height="32" rx="2" fill="#8B6914" stroke="#7A5C10" stroke-width="1"/>
     <rect x="12" y="35" width="36" height="24" rx="1" fill="#A07830"/>
     <rect x="14" y="37" width="15" height="20" rx="1" fill="#8B6914"/>
     <rect x="31" y="37" width="15" height="20" rx="1" fill="#8B6914"/>
     <rect x="15" y="42" width="12" height="9" rx="1" fill="#6B4E1A" stroke="#8B6914" stroke-width="0.5"/>
     <rect x="31" y="42" width="12" height="9" rx="1" fill="#6B4E1A" stroke="#8B6914" stroke-width="0.5"/>
     <rect x="0" y="31" width="10" height="26" rx="2" fill="#8B6914"/>
     <rect x="50" y="31" width="10" height="26" rx="2" fill="#8B6914"/>
     <rect x="1" y="55" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="55" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="42" width="14" height="10" rx="2" fill="#444"/>
     <circle cx="54" cy="47" r="3.5" fill="#222"/>
     <circle cx="61" cy="47" r="3.5" fill="#222"/>`,
    `<rect x="12" y="63" width="16" height="28" rx="2" fill="#8B6914"/>
     <rect x="32" y="63" width="16" height="28" rx="2" fill="#A07830"/>
     <rect x="10" y="87" width="20" height="8" rx="3" fill="#6B4E1A"/>
     <rect x="30" y="87" width="20" height="8" rx="3" fill="#8B6914"/>`
  ]},
  // 8: RETRO CHEF
  {name:'Retro Chef', parts:[
    `<rect x="14" y="4" width="32" height="26" rx="3" fill="#FFCC88" stroke="#DDAA66" stroke-width="1"/>
     <rect x="12" y="-8" width="36" height="14" rx="6" fill="#EEEEEE" stroke="#DDD" stroke-width="1"/>
     <rect x="14" y="-2" width="32" height="6" rx="0" fill="#EEEEEE"/>
     <rect x="16" y="10" width="5" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="27" y="10" width="5" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="14" y="16" width="32" height="5" rx="0" fill="#8B6914" opacity="0.5"/>
     <rect x="20" y="20" width="5" height="8" rx="1" fill="#884400" opacity="0.6"/>
     <rect x="27" y="20" width="5" height="8" rx="1" fill="#884400" opacity="0.6"/>
     <rect x="14" y="29" width="32" height="3" fill="#FFCC88"/>`,
    `<rect x="8" y="32" width="44" height="32" rx="2" fill="#EEEEEE" stroke="#DDD" stroke-width="1"/>
     <rect x="12" y="36" width="36" height="24" rx="1" fill="#FFFFFF"/>
     <rect x="24" y="38" width="12" height="18" rx="1" fill="#EEEEEE"/>
     <rect x="16" y="48" width="10" height="6" rx="1" fill="#888"/>
     <rect x="34" y="48" width="6" height="6" rx="1" fill="#888"/>
     <rect x="26" y="40" width="8" height="4" rx="1" fill="#CC0000"/>
     <rect x="0" y="32" width="10" height="26" rx="2" fill="#EEEEEE"/>
     <rect x="50" y="32" width="10" height="26" rx="2" fill="#EEEEEE"/>
     <rect x="1" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="-8" y="36" width="10" height="3" rx="1" fill="#888"/>
     <rect x="-10" y="34" width="6" height="7" rx="1" fill="#AAA"/>`,
    `<rect x="12" y="64" width="16" height="28" rx="2" fill="#AAAAAA"/>
     <rect x="32" y="64" width="16" height="28" rx="2" fill="#BBBBBB"/>
     <rect x="10" y="88" width="20" height="8" rx="3" fill="#999"/>
     <rect x="30" y="88" width="20" height="8" rx="3" fill="#AAA"/>`
  ]},
  // 9: ARTIST
  {name:'Artist', parts:[
    `<rect x="14" y="2" width="32" height="26" rx="3" fill="#FFCC88" stroke="#DDAA66" stroke-width="1"/>
     <rect x="12" y="-4" width="36" height="8" rx="2" fill="#886600"/>
     <rect x="16" y="8" width="5" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="27" y="8" width="5" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="16" y="18" width="6" height="4" rx="1" fill="#AA7700" opacity="0.7"/>
     <rect x="14" y="27" width="32" height="4" fill="#FFCC88"/>`,
    `<rect x="8" y="31" width="44" height="32" rx="2" fill="#EEEEEE" stroke="#DDD" stroke-width="1"/>
     <rect x="12" y="35" width="36" height="24" rx="1" fill="#FFFFFF"/>
     <circle cx="18" cy="44" r="4" fill="#FF4444" opacity="0.8"/>
     <circle cx="28" cy="40" r="3" fill="#4444FF" opacity="0.8"/>
     <circle cx="36" cy="46" r="4" fill="#FFDD00" opacity="0.8"/>
     <circle cx="22" cy="52" r="3" fill="#44AA44" opacity="0.8"/>
     <circle cx="38" cy="52" r="2.5" fill="#FF44FF" opacity="0.7"/>
     <circle cx="14" cy="52" r="2" fill="#FF8800" opacity="0.8"/>
     <rect x="0" y="31" width="10" height="26" rx="2" fill="#EEEEEE"/>
     <rect x="50" y="31" width="10" height="26" rx="2" fill="#EEEEEE"/>
     <rect x="1" y="55" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="55" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="40" width="3" height="18" rx="1" fill="#8B4513"/>
     <ellipse cx="51" cy="38" rx="4" ry="3" fill="#FF4444"/>`,
    `<rect x="12" y="63" width="16" height="28" rx="2" fill="#AAAAAA"/>
     <rect x="32" y="63" width="16" height="28" rx="2" fill="#888"/>
     <rect x="10" y="87" width="20" height="8" rx="3" fill="#999"/>
     <rect x="30" y="87" width="20" height="8" rx="3" fill="#777"/>`
  ]},
  // 10: STEAMPUNK INVENTOR (Fire Fighter repurposed)
  {name:'Steampunk Inventor', parts:[
    `<rect x="12" y="2" width="36" height="28" rx="3" fill="#CC8800" stroke="#AA6600" stroke-width="1"/>
     <rect x="10" y="-4" width="40" height="8" rx="2" fill="#AA6600"/>
     <rect x="14" y="-10" width="32" height="8" rx="2" fill="#CC8800"/>
     <rect x="16" y="10" width="6" height="5" rx="1" fill="#FFDD00"/>
     <rect x="26" y="10" width="6" height="5" rx="1" fill="#FFDD00"/>
     <circle cx="44" cy="6" r="5" fill="#888" stroke="#666" stroke-width="1"/>
     <circle cx="44" cy="6" r="3" fill="#AAAAAA"/>
     <rect x="12" y="28" width="36" height="4" fill="#AA6600"/>`,
    `<rect x="8" y="32" width="44" height="32" rx="2" fill="#885500" stroke="#664400" stroke-width="1"/>
     <rect x="12" y="36" width="36" height="24" rx="1" fill="#AA6600"/>
     <circle cx="24" cy="46" r="6" fill="#888" stroke="#666" stroke-width="1"/>
     <circle cx="24" cy="46" r="4" fill="#999"/>
     <circle cx="24" cy="46" r="2" fill="#777"/>
     <rect x="30" y="40" width="10" height="10" rx="1" fill="#666"/>
     <rect x="32" y="42" width="6" height="6" rx="0" fill="#888"/>
     <rect x="12" y="54" width="36" height="4" rx="1" fill="#664400"/>
     <rect x="0" y="32" width="10" height="26" rx="2" fill="#885500"/>
     <rect x="50" y="32" width="10" height="26" rx="2" fill="#885500"/>
     <rect x="1" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>`,
    `<rect x="12" y="64" width="16" height="28" rx="2" fill="#664400"/>
     <rect x="32" y="64" width="16" height="28" rx="2" fill="#885500"/>
     <rect x="10" y="88" width="20" height="8" rx="3" fill="#553300"/>
     <rect x="30" y="88" width="20" height="8" rx="3" fill="#664400"/>`
  ]},
  // 11: FIRE FIGHTER
  {name:'Fire Fighter', parts:[
    `<rect x="12" y="2" width="36" height="28" rx="3" fill="#CC2200" stroke="#AA1100" stroke-width="1"/>
     <rect x="10" y="-4" width="40" height="8" rx="2" fill="#CC2200"/>
     <rect x="12" y="-12" width="36" height="10" rx="2" fill="#AA1100"/>
     <rect x="14" y="-14" width="32" height="4" rx="2" fill="#CC2200"/>
     <rect x="16" y="10" width="6" height="5" rx="1" fill="#FFCC88"/>
     <rect x="26" y="10" width="6" height="5" rx="1" fill="#FFCC88"/>
     <rect x="16" y="18" width="28" height="4" rx="1" fill="#FF4400" opacity="0.6"/>
     <rect x="12" y="28" width="36" height="4" fill="#AA1100"/>`,
    `<rect x="8" y="32" width="44" height="32" rx="2" fill="#CC2200" stroke="#AA1100" stroke-width="1"/>
     <rect x="8" y="36" width="44" height="5" fill="#FFAA00" opacity="0.5"/>
     <rect x="8" y="46" width="44" height="5" fill="#FFAA00" opacity="0.5"/>
     <rect x="8" y="56" width="44" height="5" fill="#FFAA00" opacity="0.5"/>
     <rect x="18" y="38" width="24" height="20" rx="1" fill="#AA1100"/>
     <rect x="0" y="32" width="10" height="26" rx="2" fill="#CC2200"/>
     <rect x="50" y="32" width="10" height="26" rx="2" fill="#CC2200"/>
     <rect x="1" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="40" width="12" height="5" rx="1" fill="#884400"/>
     <rect x="56" y="30" width="4" height="16" rx="1" fill="#884400"/>`,
    `<rect x="12" y="64" width="16" height="28" rx="2" fill="#CC2200"/>
     <rect x="32" y="64" width="16" height="28" rx="2" fill="#AA1100"/>
     <rect x="10" y="88" width="20" height="8" rx="3" fill="#881100"/>
     <rect x="30" y="88" width="20" height="8" rx="3" fill="#CC2200"/>`
  ]},
  // 12: FUTURE POLICE
  {name:'Future Police', parts:[
    `<rect x="12" y="2" width="36" height="28" rx="3" fill="#334455" stroke="#223344" stroke-width="1"/>
     <rect x="14" y="6" width="32" height="20" rx="2" fill="#223344"/>
     <rect x="16" y="8" width="12" height="10" rx="1" fill="#6699CC" opacity="0.8"/>
     <rect x="16" y="8" width="4" height="3" rx="1" fill="rgba(255,255,255,0.5)"/>
     <rect x="12" y="28" width="36" height="4" fill="#334455"/>`,
    `<rect x="8" y="32" width="44" height="32" rx="2" fill="#334455" stroke="#223344" stroke-width="1"/>
     <rect x="12" y="36" width="36" height="24" rx="1" fill="#223344"/>
     <rect x="16" y="40" width="12" height="8" rx="1" fill="#6699CC" opacity="0.6"/>
     <rect x="30" y="40" width="10" height="6" rx="1" fill="#4466AA" opacity="0.6"/>
     <rect x="16" y="52" width="28" height="4" rx="1" fill="#3355AA" opacity="0.5"/>
     <rect x="0" y="32" width="10" height="26" rx="2" fill="#334455"/>
     <rect x="50" y="32" width="10" height="26" rx="2" fill="#334455"/>
     <rect x="1" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="-10" y="36" width="12" height="18" rx="2" fill="#6699CC" opacity="0.7"/>`,
    `<rect x="12" y="64" width="16" height="28" rx="2" fill="#334455"/>
     <rect x="32" y="64" width="16" height="28" rx="2" fill="#223344"/>
     <rect x="10" y="88" width="20" height="8" rx="3" fill="#222"/>
     <rect x="30" y="88" width="20" height="8" rx="3" fill="#333"/>`
  ]},
  // 13: MOUNTAIN RESCUE
  {name:'Mountain Rescue', parts:[
    `<rect x="12" y="2" width="36" height="28" rx="3" fill="#FFCC88" stroke="#DDAA66" stroke-width="1"/>
     <rect x="8" y="-2" width="44" height="6" rx="3" fill="#EE8800"/>
     <rect x="10" y="-10" width="40" height="10" rx="3" fill="#FF9900"/>
     <rect x="12" y="-12" width="36" height="4" rx="2" fill="#EE8800"/>
     <rect x="16" y="9" width="6" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="27" y="9" width="6" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="14" y="27" width="32" height="4" fill="#FFCC88"/>`,
    `<rect x="8" y="31" width="44" height="34" rx="2" fill="#2244AA" stroke="#1133AA" stroke-width="1"/>
     <rect x="12" y="35" width="36" height="26" rx="1" fill="#EE8800"/>
     <rect x="12" y="35" width="36" height="6" rx="1" fill="#2244AA"/>
     <rect x="20" y="43" width="20" height="14" rx="1" fill="#2244AA" opacity="0.3"/>
     <rect x="0" y="31" width="10" height="26" rx="2" fill="#2244AA"/>
     <rect x="50" y="31" width="10" height="26" rx="2" fill="#EE8800"/>
     <rect x="1" y="55" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="55" width="9" height="8" rx="2" fill="#FFCC88"/>`,
    `<rect x="12" y="65" width="16" height="28" rx="2" fill="#2244AA"/>
     <rect x="32" y="65" width="16" height="28" rx="2" fill="#EE8800"/>
     <rect x="10" y="89" width="20" height="8" rx="3" fill="#1133AA"/>
     <rect x="30" y="89" width="20" height="8" rx="3" fill="#CC7700"/>`
  ]},
  // 14: VINTAGE RACER
  {name:'Vintage Racer', parts:[
    `<rect x="10" y="2" width="40" height="30" rx="4" fill="#EEEEEE" stroke="#CCC" stroke-width="1"/>
     <rect x="12" y="6" width="36" height="22" rx="3" fill="#FFFFFF"/>
     <rect x="16" y="9" width="12" height="10" rx="1" fill="#AACCFF" opacity="0.8"/>
     <rect x="16" y="9" width="4" height="3" rx="1" fill="rgba(255,255,255,0.7)"/>
     <rect x="22" y="3" width="8" height="5" fill="#1133BB"/>
     <rect x="26" y="14" width="10" height="8" rx="1" fill="#1133BB"/>
     <text x="30" y="21" text-anchor="middle" font-size="7" fill="white" font-family="monospace" font-weight="bold">7</text>
     <rect x="10" y="30" width="40" height="4" fill="#DDD"/>`,
    `<rect x="8" y="34" width="44" height="32" rx="2" fill="#FFFFFF" stroke="#DDD" stroke-width="1"/>
     <rect x="12" y="38" width="36" height="24" rx="1" fill="#EEEEEE"/>
     <rect x="20" y="40" width="8" height="4" rx="1" fill="#1133BB"/>
     <rect x="30" y="40" width="8" height="4" rx="1" fill="#1133BB"/>
     <rect x="20" y="48" width="20" height="10" rx="1" fill="#DDDDDD"/>
     <rect x="0" y="34" width="10" height="26" rx="2" fill="#EEEEEE"/>
     <rect x="50" y="34" width="10" height="26" rx="2" fill="#EEEEEE"/>
     <rect x="1" y="58" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="58" width="9" height="8" rx="2" fill="#FFCC88"/>`,
    `<rect x="12" y="66" width="16" height="26" rx="2" fill="#CCCCCC"/>
     <rect x="32" y="66" width="16" height="26" rx="2" fill="#DDDDDD"/>
     <rect x="10" y="88" width="20" height="8" rx="3" fill="#BBBBBB"/>
     <rect x="30" y="88" width="20" height="8" rx="3" fill="#CCCCCC"/>`
  ]},
  // 15: GARDENER
  {name:'Gardener', parts:[
    `<rect x="14" y="4" width="32" height="26" rx="3" fill="#FFCC88" stroke="#DDAA66" stroke-width="1"/>
     <rect x="10" y="-2" width="40" height="8" rx="4" fill="#AA8800"/>
     <rect x="12" y="-10" width="36" height="10" rx="4" fill="#CCAA00"/>
     <rect x="16" y="8" width="5" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="27" y="8" width="5" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="14" y="27" width="32" height="4" fill="#FFCC88"/>`,
    `<rect x="8" y="31" width="44" height="34" rx="2" fill="#4477AA" stroke="#336699" stroke-width="1"/>
     <rect x="12" y="35" width="36" height="26" rx="1" fill="#5588BB"/>
     <rect x="12" y="35" width="36" height="8" rx="1" fill="#336699"/>
     <rect x="0" y="31" width="10" height="26" rx="2" fill="#4477AA"/>
     <rect x="50" y="31" width="10" height="26" rx="2" fill="#4477AA"/>
     <rect x="1" y="55" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="55" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="52" y="44" width="6" height="12" rx="1" fill="#448844"/>
     <ellipse cx="55" cy="42" rx="5" ry="4" fill="#228822"/>`,
    `<rect x="12" y="65" width="16" height="28" rx="2" fill="#336699"/>
     <rect x="32" y="65" width="16" height="28" rx="2" fill="#4477AA"/>
     <rect x="10" y="89" width="20" height="8" rx="3" fill="#8B6914"/>
     <rect x="30" y="89" width="20" height="8" rx="3" fill="#8B6914"/>`
  ]},
  // 16: SKIER
  {name:'Skier', parts:[
    `<rect x="12" y="2" width="36" height="28" rx="5" fill="#2299CC" stroke="#1177AA" stroke-width="1"/>
     <rect x="14" y="6" width="32" height="20" rx="4" fill="#1188BB"/>
     <rect x="16" y="8" width="12" height="10" rx="2" fill="#FF8800"/>
     <rect x="16" y="8" width="4" height="3" rx="1" fill="rgba(255,255,255,0.5)"/>
     <rect x="30" y="10" width="10" height="6" rx="1" fill="#FF4499"/>
     <rect x="12" y="28" width="36" height="4" fill="#1177AA"/>`,
    `<rect x="8" y="32" width="44" height="32" rx="2" fill="#00CCAA" stroke="#00AAAA" stroke-width="1"/>
     <rect x="12" y="36" width="36" height="24" rx="1" fill="#00BBAA"/>
     <rect x="14" y="38" width="32" height="6" rx="1" fill="#FF4499" opacity="0.6"/>
     <rect x="14" y="48" width="32" height="6" rx="1" fill="#FF8800" opacity="0.6"/>
     <rect x="0" y="32" width="10" height="26" rx="2" fill="#00CCAA"/>
     <rect x="50" y="32" width="10" height="26" rx="2" fill="#00CCAA"/>
     <rect x="1" y="56" width="9" height="8" rx="2" fill="#EEEEEE"/>
     <rect x="50" y="56" width="9" height="8" rx="2" fill="#EEEEEE"/>
     <rect x="-6" y="42" width="5" height="18" rx="1" fill="#888"/>
     <rect x="61" y="42" width="5" height="18" rx="1" fill="#888"/>`,
    `<rect x="12" y="64" width="16" height="26" rx="2" fill="#00AAAA"/>
     <rect x="32" y="64" width="16" height="26" rx="2" fill="#00CCAA"/>
     <rect x="4" y="88" width="32" height="5" rx="2" fill="#EEEEEE"/>
     <rect x="24" y="88" width="32" height="5" rx="2" fill="#EEEEEE"/>`
  ]},
  // 17: LAB DOCTOR
  {name:'Lab Doctor', parts:[
    `<rect x="14" y="2" width="32" height="26" rx="3" fill="#FFCC88" stroke="#DDAA66" stroke-width="1"/>
     <rect x="8" y="-2" width="44" height="6" rx="2" fill="#DDDDDD"/>
     <rect x="16" y="8" width="5" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="27" y="8" width="5" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="22" y="6" width="6" height="2" rx="1" fill="#AAAAFF"/>
     <rect x="30" y="6" width="6" height="2" rx="1" fill="#AAAAFF"/>
     <rect x="14" y="27" width="32" height="4" fill="#FFCC88"/>`,
    `<rect x="8" y="31" width="44" height="34" rx="2" fill="#FFFFFF" stroke="#EEE" stroke-width="1"/>
     <rect x="12" y="35" width="36" height="26" rx="1" fill="#FFFFFF"/>
     <rect x="12" y="35" width="36" height="4" rx="1" fill="#AAAAFF" opacity="0.4"/>
     <rect x="16" y="44" width="14" height="6" rx="1" fill="#EEEEEE" stroke="#DDD" stroke-width="0.5"/>
     <rect x="32" y="44" width="10" height="6" rx="1" fill="#EEEEEE" stroke="#DDD" stroke-width="0.5"/>
     <text x="30" y="58" text-anchor="middle" font-size="6" fill="#4444CC" font-family="monospace">Rx ✓</text>
     <rect x="0" y="31" width="10" height="28" rx="2" fill="#FFFFFF" stroke="#EEE" stroke-width="1"/>
     <rect x="50" y="31" width="10" height="28" rx="2" fill="#FFFFFF" stroke="#EEE" stroke-width="1"/>
     <rect x="1" y="57" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="57" width="9" height="8" rx="2" fill="#FFCC88"/>`,
    `<rect x="12" y="65" width="16" height="28" rx="2" fill="#CCCCCC"/>
     <rect x="32" y="65" width="16" height="28" rx="2" fill="#DDDDDD"/>
     <rect x="10" y="89" width="20" height="8" rx="3" fill="#BBBBBB"/>
     <rect x="30" y="89" width="20" height="8" rx="3" fill="#CCCCCC"/>`
  ]},
  // 18: HEAVY METAL GUITARIST
  {name:'Heavy Metal Guitarist', parts:[
    `<rect x="14" y="4" width="32" height="26" rx="3" fill="#FFCC88" stroke="#DDAA66" stroke-width="1"/>
     <rect x="14" y="4" width="32" height="26" rx="3" fill="#111" opacity="0.7"/>
     <rect x="18" y="-12" width="24" height="18" rx="2" fill="#111"/>
     <rect x="16" y="-14" width="28" height="5" rx="2" fill="#222"/>
     <rect x="14" y="4" width="6" height="26" rx="0" fill="#111" opacity="0.5"/>
     <rect x="16" y="10" width="6" height="5" rx="1" fill="#FF4444"/>
     <rect x="27" y="10" width="6" height="5" rx="1" fill="#FF4444"/>
     <rect x="18" y="18" width="6" height="4" rx="1" fill="#888" opacity="0.6"/>
     <rect x="14" y="29" width="32" height="3" fill="#111"/>`,
    `<rect x="8" y="32" width="44" height="32" rx="2" fill="#111" stroke="#333" stroke-width="1"/>
     <rect x="12" y="36" width="36" height="24" rx="1" fill="#1a1a1a"/>
     <rect x="22" y="38" width="5" height="20" rx="1" fill="#CC0000"/>
     <text x="30" y="48" text-anchor="middle" font-size="8" fill="#FF4444" font-family="monospace">★</text>
     <rect x="0" y="32" width="10" height="26" rx="2" fill="#111"/>
     <rect x="50" y="32" width="10" height="26" rx="2" fill="#111"/>
     <rect x="1" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="42" width="18" height="8" rx="2" fill="#333"/>
     <rect x="52" y="44" width="4" height="4" rx="0" fill="#888"/>
     <rect x="58" y="44" width="4" height="4" rx="0" fill="#888"/>
     <rect x="54" y="38" width="2" height="8" rx="1" fill="#888"/>
     <rect x="60" y="38" width="2" height="6" rx="1" fill="#888"/>`,
    `<rect x="12" y="64" width="16" height="28" rx="2" fill="#111"/>
     <rect x="32" y="64" width="16" height="28" rx="2" fill="#1a1a1a"/>
     <rect x="10" y="88" width="20" height="8" rx="3" fill="#222"/>
     <rect x="30" y="88" width="20" height="8" rx="3" fill="#111"/>`
  ]},
  // 19: VIKING WARRIOR
  {name:'Viking Warrior', parts:[
    `<rect x="12" y="4" width="36" height="26" rx="3" fill="#FFCC88" stroke="#DDAA66" stroke-width="1"/>
     <rect x="8" y="-2" width="44" height="8" rx="2" fill="#888"/>
     <rect x="10" y="-12" width="40" height="12" rx="3" fill="#999"/>
     <rect x="6" y="-4" width="8" height="16" rx="2" fill="#888"/>
     <rect x="46" y="-4" width="8" height="16" rx="2" fill="#888"/>
     <rect x="16" y="10" width="6" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="28" y="10" width="6" height="5" rx="1" fill="#5C4A1E"/>
     <rect x="14" y="18" width="32" height="6" rx="2" fill="#8B4513" opacity="0.7"/>
     <rect x="12" y="28" width="36" height="4" fill="#FFCC88"/>`,
    `<rect x="8" y="32" width="44" height="32" rx="2" fill="#885500" stroke="#664400" stroke-width="1"/>
     <rect x="12" y="36" width="36" height="24" rx="1" fill="#AA6600"/>
     <rect x="14" y="38" width="32" height="5" fill="#999" opacity="0.4"/>
     <rect x="14" y="45" width="32" height="5" fill="#999" opacity="0.4"/>
     <rect x="14" y="52" width="32" height="4" fill="#999" opacity="0.4"/>
     <rect x="0" y="32" width="10" height="26" rx="2" fill="#885500"/>
     <rect x="50" y="32" width="10" height="26" rx="2" fill="#885500"/>
     <rect x="1" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="50" y="56" width="9" height="8" rx="2" fill="#FFCC88"/>
     <rect x="-14" y="28" width="16" height="28" rx="2" fill="#888"/>
     <rect x="-12" y="30" width="12" height="24" rx="1" fill="#999"/>
     <rect x="-10" y="36" width="8" height="8" rx="1" fill="#CC9900"/>
     <rect x="52" y="28" width="4" height="32" rx="1" fill="#888"/>
     <rect x="52" y="26" width="14" height="6" rx="1" fill="#777"/>`,
    `<rect x="12" y="64" width="16" height="26" rx="2" fill="#664400"/>
     <rect x="32" y="64" width="16" height="26" rx="2" fill="#885500"/>
     <rect x="8" y="87" width="24" height="8" rx="3" fill="#553300"/>
     <rect x="28" y="87" width="24" height="8" rx="3" fill="#664400"/>`
  ]},
];

// ── STATE ──
function loadTasks(){
  try{
    const s=localStorage.getItem('ninjaTasks');
    if(s) return JSON.parse(s);
  }catch(e){}
  return JSON.parse(JSON.stringify(DEFAULT_TASKS));
}
function loadTitle(){
  return localStorage.getItem('ninjaTitle') || '닌자 아침 미션 🥷';
}
function saveTitle(t){ localStorage.setItem('ninjaTitle', t); }
function loadName(){ return localStorage.getItem('ninjaName') || ''; }
function saveName(n){ localStorage.setItem('ninjaName', n); }
function loadVoice(){ return localStorage.getItem('ninjaVoice') !== 'off'; }
function saveVoice(v){ localStorage.setItem('ninjaVoice', v ? 'on' : 'off'); }
function saveTasks(){ localStorage.setItem('ninjaTasks',JSON.stringify(state.tasks)); }

let state = {
  tasks: loadTasks(),
  done: {},
  times: {},
  totalPoints: parseInt(localStorage.getItem('ninjaPoints')||'0'),
  outfitChoice: null,
  appTitle: loadTitle(),
  userName: loadName(),
  voiceEnabled: loadVoice(),
  figureIdx: parseInt(localStorage.getItem('ninjaFigIdx')||Math.floor(Math.random()*20)),
};

// ── CLOCK ──
function krNow(){ return new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Seoul'})); }
function updateClock(){
  const t=krNow();
  document.getElementById('clockEl').textContent=pad(t.getHours())+':'+pad(t.getMinutes());
  document.getElementById('dateEl').textContent=['일','월','화','수','목','금','토'][t.getDay()]+'요일';
}
function renderTitle(){
  const el=document.getElementById('titleDisplay');
  if(el) el.textContent=state.appTitle;
}
function pad(n){return String(n).padStart(2,'0');}

// ── RENDER ──
function getTodayPts(){
  return state.tasks.reduce((s,t)=>state.done[t.id]?s+t.points:s,0);
}

function updateHeader(){
  const done=Object.values(state.done).filter(Boolean).length;
  const total=state.tasks.length;
  document.getElementById('powerFill').style.width=(total?done/total*100:0)+'%';
  document.getElementById('powerCount').textContent=done+'/'+total;
  const tp=state.totalPoints;
  document.getElementById('totalPtsEl').textContent=tp;
  const inC=tp%REWARD_GOAL;
  document.getElementById('rewardLeftEl').textContent=REWARD_GOAL-inC;
  document.getElementById('rewardFill').style.width=(inC/REWARD_GOAL*100)+'%';
}

function renderMissions(){
  const doneTasks=state.tasks.filter(t=>state.done[t.id]);
  const pending=state.tasks.filter(t=>!state.done[t.id]);

  // done strip
  const strip=document.getElementById('doneStrip');
  strip.innerHTML=doneTasks.map(t=>`<span class="done-chip">${t.emoji} ${t.name}</span>`).join('');

  // cards: show up to 3 pending, any order (they're all clickable)
  const wrap=document.getElementById('cardsWrap');
  wrap.innerHTML='';

  const visible=pending.slice(0,3);
  visible.forEach((task,idx)=>{
    const card=document.createElement('div');
    const isCurrent=idx===0;
    card.className='task-card'+(isCurrent?' current':' upcoming');
    card.id='task-'+task.id;
    card.style.animationDelay=idx*0.06+'s';

    let outfitHtml='';
    if(task.hasOutfit && isCurrent){
      outfitHtml=`<div class="outfit-sel">
        <div class="outfit-lbl">▷ 오늘 복장 선택</div>
        <div class="outfit-btns">
          <button class="outfit-btn${state.outfitChoice==='uniform'?' selected':''}" onclick="selectOutfit('uniform',event)">🏫 교복</button>
          <button class="outfit-btn${state.outfitChoice==='pe'?' selected':''}" onclick="selectOutfit('pe',event)">🩳 체육복</button>
        </div></div>`;
    }

    card.innerHTML=`
      <div class="emoji-box">${task.emoji}</div>
      <div class="task-info">
        <div class="task-num">MISSION ${pad(state.tasks.indexOf(task)+1)}</div>
        <div class="task-name">${task.name}</div>
        ${outfitHtml}
        <div class="task-time"></div>
      </div>
      <div class="task-right">
        <div class="task-pts">+${task.points}</div>
        <div class="check-btn"></div>
      </div>`;

    // ANY pending card is clickable (free order)
    card.addEventListener('click',e=>{
      if(e.target.classList.contains('outfit-btn')) return;
      if(task.hasOutfit && !state.outfitChoice && isCurrent){ shakeFeedback(card); return; }
      checkTask(task);
    });
    wrap.appendChild(card);
  });

  // remaining hint
  const rem=pending.length;
  const hint=document.getElementById('remainHint');
  hint.textContent=rem>3?`▼ 아래 미션 ${rem-3}개 더 있어`:' ';

  // section label
  document.getElementById('sectionLbl').textContent=
    doneTasks.length===0?'⚔ 오늘의 미션':
    pending.length===0?'✓ 모두 완료!':
    `⚔ 미션 진행 중 (${doneTasks.length}/${state.tasks.length})`;

  if(pending.length===0 && state.tasks.length>0) setTimeout(showComplete,800);
}

// ── SIDEBAR DRAG-TO-REORDER ──
let _drag = null; // { taskId, ghost, startY, items }

function renderSidebar(){
  const list = document.getElementById('sidebarList');
  const pending = state.tasks.filter(t=>!state.done[t.id]);
  const firstPendingId = pending.length > 0 ? pending[0].id : null;
  list.innerHTML = '';
  state.tasks.forEach((task, idx) => {
    const isDone = state.done[task.id];
    const isActive = task.id === firstPendingId;
    const item = document.createElement('div');
    item.className = 'sb-item' + (isDone?' sb-done':'') + (isActive&&!isDone?' sb-active':'');
    item.dataset.id = task.id;
    item.title = task.name;
    item.innerHTML = `<span>${task.emoji}</span><div class="sb-num">${String(idx+1).padStart(2,'0')}</div>`;

    if(!isDone){
      // tap = bring to front
      let pressTimer = null;
      let dragged = false;

      const onStart = (e) => {
        dragged = false;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        pressTimer = setTimeout(() => {
          startDrag(task, item, clientX, clientY);
        }, 180);
      };
      const onEnd = (e) => {
        clearTimeout(pressTimer);
        if(!dragged) scrollToOrCheck(task);
      };

      item.addEventListener('mousedown', onStart);
      item.addEventListener('touchstart', onStart, {passive:true});
      item.addEventListener('mouseup', onEnd);
      item.addEventListener('touchend', onEnd);
    }
    list.appendChild(item);
  });
}

function startDrag(task, el, startX, startY){
  _drag = { taskId: task.id, startX, startY, currentIdx: state.tasks.indexOf(task) };

  // ghost
  const r = el.getBoundingClientRect();
  const ghost = document.createElement('div');
  ghost.className = 'sb-ghost';
  ghost.innerHTML = `<span>${task.emoji}</span>`;
  ghost.style.left = r.left + 'px';
  ghost.style.top  = r.top  + 'px';
  document.body.appendChild(ghost);
  _drag.ghost = ghost;
  _drag.el = el;
  el.classList.add('sb-dragging');

  const onMove = (e) => {
    if(!_drag) return;
    _drag.el._dragged = true;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    ghost.style.top  = (r.top  + cy - startY) + 'px';
    ghost.style.left = (r.left + cx - startX) + 'px';

    // find which sb-item we're hovering
    const list = document.getElementById('sidebarList');
    const items = [...list.querySelectorAll('.sb-item:not(.sb-done)')];
    items.forEach(i => i.classList.remove('sb-over'));
    const under = items.find(i => {
      const ir = i.getBoundingClientRect();
      return cy >= ir.top && cy <= ir.bottom && i !== el;
    });
    if(under){
      under.classList.add('sb-over');
      const toId = parseInt(under.dataset.id);
      const toIdx = state.tasks.findIndex(t=>t.id===toId);
      const fromIdx = state.tasks.findIndex(t=>t.id===_drag.taskId);
      if(toIdx !== -1 && fromIdx !== -1 && toIdx !== fromIdx){
        const arr = state.tasks;
        const [moved] = arr.splice(fromIdx, 1);
        arr.splice(toIdx, 0, moved);
        renderSidebar();
        renderMissions();
        // re-grab el ref after re-render
        const newEl = document.querySelector(`.sb-item[data-id="${_drag.taskId}"]`);
        if(newEl){ newEl.classList.add('sb-dragging'); _drag.el = newEl; }
      }
    }
  };

  const onUp = () => {
    if(!_drag) return;
    document.querySelectorAll('.sb-over').forEach(i=>i.classList.remove('sb-over'));
    document.querySelectorAll('.sb-dragging').forEach(i=>i.classList.remove('sb-dragging'));
    _drag.ghost.remove();
    _drag = null;
    renderSidebar();
    renderMissions();
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup',   onUp);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend',  onUp);
  };

  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup',   onUp);
  document.addEventListener('touchmove', onMove, {passive:true});
  document.addEventListener('touchend',  onUp);
}

function scrollToOrCheck(task){
  if(state.done[task.id]) return;
  const pending = state.tasks.filter(t=>!state.done[t.id]);
  const reordered = [task, ...pending.filter(t=>t.id!==task.id)];
  const doneItems = state.tasks.filter(t=>state.done[t.id]);
  state.tasks = [...doneItems, ...reordered];
  renderMissions();
  renderSidebar();
}

function render(){ updateHeader(); renderMissions(); renderSidebar(); renderTitle(); renderLegoMini(); renderLegoBig(); }

// ── CHECK TASK ──
function checkTask(task){
  const prev=state.totalPoints;
  state.done[task.id]=true;
  const t=krNow();
  state.times[task.id]=pad(t.getHours())+':'+pad(t.getMinutes());
  state.totalPoints+=task.points;
  localStorage.setItem('ninjaPoints',state.totalPoints);

  playMissionSound();
  showPtsAnim(task);
  showPraise(task);
  animateLegoGain();
  // speak mission complete
  setTimeout(()=>{ speakRandomCheckLine(task); }, 180);

  if(Math.floor(state.totalPoints/REWARD_GOAL)>Math.floor(prev/REWARD_GOAL))
    setTimeout(showRewardAlert,1400);

  render();
}

function showPtsAnim(task){
  const card=document.getElementById('task-'+task.id);
  if(!card)return;
  const el=document.createElement('div');
  el.className='pts-float';el.textContent='+'+task.points+'⚡';
  card.appendChild(el);setTimeout(()=>el.remove(),1000);
}

// ── PRAISE ──
function showPraise(task){
  const p=PRAISES[Math.floor(Math.random()*PRAISES.length)];
  const toast=document.getElementById('overlayBg'); // reuse overlay
  showToast(p.e,p.t,(p.s||'+')+task.points+' pts!',1700);
  spawnBurst();
}
function showRewardAlert(){
  const times=Math.floor(state.totalPoints/REWARD_GOAL);
  showToast('🎁','Reward unlocked!','Go show mom! 🥳',2500); setTimeout(()=>speak('Reward unlocked! Go tell mom!'),200);
  spawnConfetti();
}
function showToast(emoji,text,sub,dur){
  const t=document.getElementById('overlayBg');
  t.classList.add('show');
  const toast=document.querySelector('.praise-toast');
  document.querySelector('.praise-emoji').textContent=emoji;
  document.querySelector('.praise-text').textContent=text;
  document.querySelector('.praise-sub').textContent=sub;
  toast.classList.add('show');
  setTimeout(()=>{toast.classList.remove('show');t.classList.remove('show');},dur);
}

// ── OUTFIT ──
function selectOutfit(choice,e){
  e.stopPropagation();
  state.outfitChoice=choice;
  document.querySelectorAll('.outfit-btn').forEach(b=>b.classList.remove('selected'));
  e.target.classList.add('selected');
}

// ── SHAKE ──
function shakeFeedback(el){
  el.style.animation='';void el.offsetWidth;el.style.animation='shake .4s ease';
  if(!document.getElementById('shakeStyle')){
    const s=document.createElement('style');s.id='shakeStyle';
    s.textContent='@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}';
    document.head.appendChild(s);
  }
  setTimeout(()=>el.style.animation='',400);
}

// ── COMPLETE ──
function showComplete(){
  const now=krNow();
  const h=pad(now.getHours()),m=pad(now.getMinutes());
  const diff=(now.getHours()*60+now.getMinutes())-(7*60+35);
  const pts=getTodayPts();
  document.getElementById('cMsg').textContent=
    diff<=0?`7:35 전 완료! S랭크! 총 ${pts}포인트 🥇`:
    diff<=10?`아슬아슬 A랭크! 총 ${pts}포인트 💪`:
    `다음엔 더 빨리! B랭크! 총 ${pts}포인트 💕`;
  document.getElementById('cTime').textContent=`완료 시각  ${h}:${m}`;
  renderLegoBig();
  document.getElementById('completeScreen').classList.add('show');
  spawnConfetti();
  const figName = LEGO_FIGURES[state.figureIdx % LEGO_FIGURES.length].name;
  setTimeout(()=>{
    const n = state.userName ? 'Congratulations, ' + state.userName + '! ' : 'Congratulations! ';
    speak(n + 'All missions complete! Your ' + figName + ' figure is ready. You are today\'s morning champion!');
  }, 700);
}

// ── CONFETTI / BURST ──
function spawnConfetti(){
  const layer=document.getElementById('confettiLayer');
  const colors=['#00E5FF','#39FF14','#FFD600','#FF6B00','#FF2D2D','#fff'];
  for(let i=0;i<60;i++){
    const el=document.createElement('div');el.className='confetti-piece';
    const s=5+Math.random()*7;
    el.style.cssText=`left:${Math.random()*100}%;top:-15px;background:${colors[~~(Math.random()*colors.length)]};animation-duration:${1.5+Math.random()*2}s;animation-delay:${Math.random()*.5}s;border-radius:${Math.random()>.5?'50%':'2px'};width:${s}px;height:${s}px;`;
    layer.appendChild(el);
  }
  setTimeout(()=>layer.innerHTML='',3500);
}
function spawnBurst(){
  const layer=document.getElementById('burstLayer');
  ['⚡','💥','✨','⭐','🔥'].forEach((em,i)=>{
    const el=document.createElement('div');el.className='burst-p';
    el.style.cssText=`left:${15+Math.random()*70}%;top:${20+Math.random()*60}%;animation-delay:${i*.07}s;`;
    el.textContent=em;layer.appendChild(el);
    setTimeout(()=>el.remove(),1300);
  });
}

// ── RESET ──
function resetAll(){
  state.done={};state.times={};state.outfitChoice=null;
  state.figureIdx = Math.floor(Math.random()*LEGO_FIGURES.length);
  localStorage.setItem('ninjaFigIdx', state.figureIdx);
  document.getElementById('completeScreen').classList.remove('show');
  render();
}

// ── CAMERA ──
let camStream=null;
async function openCamera(){
  const w=document.getElementById('camWrap');w.classList.add('show');
  try{
    camStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'}});
    document.getElementById('camVideo').srcObject=camStream;
  }catch(e){w.classList.remove('show');alert('카메라 권한을 허용해주세요!');}
}
function closeCamera(){
  if(camStream){camStream.getTracks().forEach(t=>t.stop());camStream=null;}
  document.getElementById('camWrap').classList.remove('show');
}
function takePhoto(){
  const v=document.getElementById('camVideo'),c=document.getElementById('photoCanvas');
  c.width=v.videoWidth;c.height=v.videoHeight;
  const ctx=c.getContext('2d');ctx.save();ctx.scale(-1,1);ctx.drawImage(v,-c.width,0);ctx.restore();
  document.getElementById('resultImg').src=c.toDataURL('image/jpeg',.9);
  closeCamera();document.getElementById('photoResult').classList.add('show');spawnConfetti();
}
function savePhoto(){
  const a=document.createElement('a');a.href=document.getElementById('resultImg').src;
  const t=krNow();
  a.download='닌자전사_'+t.getFullYear()+pad(t.getMonth()+1)+pad(t.getDate())+'.jpg';a.click();
}
function closePhoto(){document.getElementById('photoResult').classList.remove('show');}

// ── EDIT PANEL ──
// Uses a draft copy so nothing changes until ✓ 완료 is pressed
let editDraft = [];

function openEdit(){
  // deep-copy current tasks into draft
  editDraft = state.tasks.map(t=>({...t}));
  renderEditPanel();
  document.getElementById('editPanel').classList.add('show');
}

function closeEdit(save){
  document.getElementById('editPanel').classList.remove('show');
  document.getElementById('emojiPicker').classList.remove('show');
  if(save){
    // flush any focused input before saving
    const focused = document.activeElement;
    if(focused && focused.dataset.draftIdx !== undefined){
      editDraft[parseInt(focused.dataset.draftIdx)].name = focused.value.trim() || editDraft[parseInt(focused.dataset.draftIdx)].name;
    }
    state.tasks = editDraft.map(t=>({...t}));
    saveTasks();
    Object.keys(state.done).forEach(id=>{
      if(!state.tasks.find(t=>t.id===parseInt(id))) delete state.done[id];
    });
    render();
  }
}

function renderEditPanel(){
  const body = document.getElementById('editBody');
  // save cursor positions before clearing
  body.innerHTML = '';
  editDraft.forEach((task, idx) => {
    const row = document.createElement('div');
    row.className = 'edit-card'; row.dataset.idx = idx;
    row.innerHTML = `
      <div class="edit-drag">⠿</div>
      <div class="emoji-pick" onclick="openEmojiPicker(${idx},this)">${task.emoji}</div>
      <input value="${task.name}" maxlength="16" data-draft-idx="${idx}"
        oninput="editDraft[${idx}].name=this.value"
        placeholder="미션 이름">
      <button class="edit-del" onclick="deleteDraftTask(${idx})">✕</button>`;
    body.appendChild(row);
  });
  initDragSort();
}

function deleteDraftTask(idx){
  editDraft.splice(idx, 1);
  renderEditPanel();
}

function addMission(){
  const inp = document.getElementById('newMissionInput');
  const name = inp.value.trim();
  if(!name) return;
  editDraft.push({id:Date.now(), name, emoji:'⭐', points:5});
  inp.value = '';
  renderEditPanel();
  // scroll to bottom so new item is visible
  const body = document.getElementById('editBody');
  body.scrollTop = body.scrollHeight;
}

// ── EMOJI PICKER ──
let _epDraftIdx = null, _epActiveCat = 0;

function openEmojiPicker(draftIdx, btn){
  _epDraftIdx = draftIdx;
  const picker = document.getElementById('emojiPicker');
  renderEmojiPicker(_epActiveCat);
  const r = btn.getBoundingClientRect();
  // position: try below, fallback above if too low
  const top = r.bottom + 6;
  const maxTop = window.innerHeight - 220;
  picker.style.top  = Math.min(top, maxTop) + 'px';
  picker.style.left = Math.max(4, Math.min(r.left, window.innerWidth - 280)) + 'px';
  picker.classList.add('show');
  setTimeout(()=>document.addEventListener('click', closeEmojiOnOutside), 10);
}

function renderEmojiPicker(catIdx){
  _epActiveCat = catIdx;
  const picker = document.getElementById('emojiPicker');
  const tabs = EMOJI_CATS.map((c,i)=>
    `<div class="ep-tab${i===catIdx?' active':''}" onclick="renderEmojiPicker(${i});event.stopPropagation();">${c.label}</div>`
  ).join('');
  const grid = EMOJI_CATS[catIdx].items.map(e=>
    `<div class="ep-item" onclick="pickEmoji('${e}')">${e}</div>`
  ).join('');
  picker.innerHTML = `<div class="ep-tabs">${tabs}</div><div class="ep-grid">${grid}</div>`;
}

function pickEmoji(em){
  if(_epDraftIdx !== null) editDraft[_epDraftIdx].emoji = em;
  document.getElementById('emojiPicker').classList.remove('show');
  document.removeEventListener('click', closeEmojiOnOutside);
  renderEditPanel();
}
function closeEmojiOnOutside(e){
  const p = document.getElementById('emojiPicker');
  if(!p.contains(e.target)){
    p.classList.remove('show');
    document.removeEventListener('click', closeEmojiOnOutside);
  }
}

// ── DRAG SORT (edit panel) ──
function initDragSort(){
  const body = document.getElementById('editBody');
  let dragEl = null, dragIdx = null, ghost = null;

  body.querySelectorAll('.edit-drag').forEach(handle => {
    handle.addEventListener('mousedown',  startDrag);
    handle.addEventListener('touchstart', startDrag, {passive:true});
  });

  function startDrag(e){
    const card = e.currentTarget.closest('.edit-card');
    dragEl = card; dragIdx = parseInt(card.dataset.idx);
    card.classList.add('edit-dragging');

    // ghost
    const r = card.getBoundingClientRect();
    ghost = card.cloneNode(true);
    ghost.style.cssText = `position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px;opacity:.85;pointer-events:none;z-index:3000;background:var(--panel2);border:1.5px solid var(--accent);border-radius:10px;`;
    document.body.appendChild(ghost);
    _startY = e.touches ? e.touches[0].clientY : e.clientY;
    _startTop = r.top;

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup',   onUp);
    document.addEventListener('touchmove', onMove, {passive:false});
    document.addEventListener('touchend',  onUp);
  }

  let _startY, _startTop;

  function onMove(e){
    if(!dragEl) return;
    e.preventDefault && e.preventDefault();
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    if(ghost) ghost.style.top = (_startTop + cy - _startY) + 'px';

    // find hovered card
    const cards = [...body.querySelectorAll('.edit-card')];
    cards.forEach(c=>c.classList.remove('edit-over'));
    const under = cards.find(c => {
      if(c === dragEl) return false;
      const cr = c.getBoundingClientRect();
      return cy >= cr.top && cy <= cr.bottom;
    });
    if(under){
      under.classList.add('edit-over');
      const toIdx = parseInt(under.dataset.idx);
      if(toIdx !== dragIdx){
        const [moved] = editDraft.splice(dragIdx, 1);
        editDraft.splice(toIdx, 0, moved);
        dragIdx = toIdx;
        renderEditPanel();
        dragEl = body.querySelectorAll('.edit-card')[dragIdx];
        if(dragEl) dragEl.classList.add('edit-dragging');
      }
    }
  }

  function onUp(){
    if(ghost){ ghost.remove(); ghost = null; }
    body.querySelectorAll('.edit-dragging').forEach(c=>c.classList.remove('edit-dragging'));
    body.querySelectorAll('.edit-over').forEach(c=>c.classList.remove('edit-over'));
    dragEl = null; dragIdx = null;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup',   onUp);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend',  onUp);
  }
}

// ── LEGO FIGURE RENDER ──
function getLegoPartsCount(){
  // map N completed missions → which parts to show (spread evenly across 3 parts)
  const done = Object.values(state.done).filter(Boolean).length;
  const total = Math.max(state.tasks.length, 1);
  // head shows after 1/3, torso after 2/3, legs at full
  const fig = LEGO_FIGURES[state.figureIdx % LEGO_FIGURES.length];
  const numParts = fig.parts.length; // always 3
  // how many parts unlocked
  const frac = done / total;
  if(frac === 0) return 0;
  if(frac <= 1/3) return 1;
  if(frac <= 2/3) return 2;
  return 3;
}

function buildLegoSVG(scale, partsCount){
  const fig = LEGO_FIGURES[state.figureIdx % LEGO_FIGURES.length];
  let svg = '';
  for(let i = 0; i < partsCount && i < fig.parts.length; i++){
    svg += fig.parts[i];
  }
  // ghost outlines for locked parts
  for(let i = partsCount; i < fig.parts.length; i++){
    svg += `<g opacity="0.12">${fig.parts[i]}</g>`;
  }
  return svg;
}

function getLegoRevealClass(){
  const parts = getLegoPartsCount();
  if(parts <= 0) return 'locked';
  if(parts === 1) return 'partial-1';
  if(parts === 2) return 'partial-2';
  return 'full';
}

function renderLegoMini(){
  const imgEl = document.getElementById('legoMiniImg');
  const progEl = document.getElementById('legoProgress');
  const nameEl = document.getElementById('legoName');
  if(!imgEl) return;
  const done = Object.values(state.done).filter(Boolean).length;
  const total = state.tasks.length;
  imgEl.className = 'lego-real-figure ' + getLegoRevealClass();
  progEl.textContent = done+'/'+total;
  const fig = LEGO_FIGURES[state.figureIdx % LEGO_FIGURES.length];
  nameEl.textContent = fig.name.toUpperCase();
}

function renderLegoBig(){
  const imgEl = document.getElementById('legoBigImg');
  const nameEl = document.getElementById('legoCompleteName');
  if(!imgEl) return;
  const fig = LEGO_FIGURES[state.figureIdx % LEGO_FIGURES.length];
  nameEl.textContent = fig.name;
}

function animateLegoGain(){
  const imgEl = document.getElementById('legoMiniImg');
  const glowEl = document.getElementById('legoMiniGlow');
  if(!imgEl || !glowEl) return;
  imgEl.classList.remove('pop');
  glowEl.classList.remove('active');
  void imgEl.offsetWidth;
  imgEl.classList.add('pop');
  glowEl.classList.add('active');
  setTimeout(()=>imgEl.classList.remove('pop'), 760);
  setTimeout(()=>glowEl.classList.remove('active'), 780);
}

function speakRandomCheckLine(task){
  const phrase = CHECK_PHRASES[Math.floor(Math.random()*CHECK_PHRASES.length)];
  const taskName = TASK_EN[task.name] || task.name;
  const line = Math.random() < 0.55 ? `${phrase} ${taskName}!` : `${taskName} complete! ${phrase}`;
  speak(line, { energetic: true });
}

// ── TITLE EDIT ──
function startTitleEdit(){
  const display = document.getElementById('titleDisplay');
  const inp = document.createElement('input');
  inp.className = 'title-input';
  inp.value = state.appTitle;
  inp.maxLength = 20;
  display.replaceWith(inp);
  inp.focus(); inp.select();
  const finish = () => {
    const val = inp.value.trim() || state.appTitle;
    state.appTitle = val;
    saveTitle(val);
    const div = document.createElement('div');
    div.className = 'title'; div.id = 'titleDisplay';
    div.textContent = val;
    div.onclick = startTitleEdit;
    inp.replaceWith(div);
  };
  inp.addEventListener('blur', finish);
  inp.addEventListener('keydown', e=>{ if(e.key==='Enter') inp.blur(); });
}

// ── VOICE ──
let _voiceReady = false;

function pickVoice(options={}){
  const voices = window.speechSynthesis.getVoices();
  if(!voices.length) return null;
  const energetic = !!options.energetic;
  const preferredPatterns = energetic
    ? [/Samantha/i,/Karen/i,/Moira/i,/Ava/i,/Jenny/i,/Google US English/i,/Aria/i,/Emma/i,/Female/i,/Woman/i,/Natural/i,/Neural/i]
    : [/Samantha/i,/Google US English/i,/Aria/i,/Jenny/i,/Natural/i,/Neural/i];

  for(const pat of preferredPatterns){
    const found = voices.find(v => /^en/i.test(v.lang) && pat.test(v.name));
    if(found) return found;
  }

  const checks = [
    v => v.lang==='en-US' && /enhanced|premium|natural|neural/i.test(v.name),
    v => v.lang==='en-US' && /female|woman|samantha|karen|moira|ava|jenny|aria|emma/i.test(v.name),
    v => v.lang==='en-US' && v.localService,
    v => v.lang.startsWith('en') && /female|woman/i.test(v.name),
    v => v.lang.startsWith('en')
  ];
  for(const fn of checks){ const v = voices.find(fn); if(v) return v; }
  return voices[0] || null;
}

function speak(text, options={}){
  if(!state.voiceEnabled) return;
  if(!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  setTimeout(()=>{
    const energetic = !!options.energetic;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = energetic ? 1.08 : 0.96;
    u.pitch = energetic ? 1.22 : 1.08;
    u.volume = 1;
    const v = pickVoice(options);
    if(v) u.voice = v;
    window.speechSynthesis.speak(u);
  }, 60);
}

// ── INTRO / START ──
function startApp(){
  const intro = document.getElementById('introScreen');
  intro.classList.add('fade-out');
  playIntroSound();
  setTimeout(()=>{
    intro.style.display='none';
    showJarvisGreeting();
  }, 600);
}

function showJarvisGreeting(){
  const overlay = document.getElementById('jarvisOverlay');
  const scan    = document.getElementById('jarvisScan');
  const l1 = document.getElementById('jLine1');
  const l2 = document.getElementById('jLine2');
  const l3 = document.getElementById('jLine3');

  const name = state.userName ? state.userName + '님' : '';
  l1.textContent = name ? 'Hello, ' + name + '!' : 'Hello, Agent!';
  l2.textContent = 'Welcome to';
  l3.textContent = 'Morning Mission System';

  overlay.classList.add('show');

  setTimeout(()=>{ scan.classList.add('show'); }, 200);
  setTimeout(()=>{ l1.classList.add('show'); }, 500);
  setTimeout(()=>{ l2.classList.add('show'); }, 900);
  setTimeout(()=>{ l3.classList.add('show'); }, 1300);

  // speak
  const greeting = name
    ? 'Hey ' + name + '! Good morning. Welcome to your Morning Mission. Let\'s get started!'
    : 'Good morning! Welcome to your Morning Mission. Let\'s get started!';
  setTimeout(()=>speak(greeting), 400);

  setTimeout(()=>{
    overlay.classList.remove('show');
    setTimeout(()=>{
      l1.classList.remove('show'); l2.classList.remove('show');
      l3.classList.remove('show'); scan.classList.remove('show');
    }, 400);
  }, 3800);
}

// ── SETTINGS ──
function openSettings(){
  document.getElementById('nameInput').value = state.userName;
  const von  = document.getElementById('voiceOnBtn');
  const voff = document.getElementById('voiceOffBtn');
  if(state.voiceEnabled){ von.classList.add('selected'); voff.classList.remove('selected'); }
  else{ voff.classList.add('selected'); von.classList.remove('selected'); }
  document.getElementById('settingsPanel').classList.add('show');
}
function closeSettings(){
  const name = document.getElementById('nameInput').value.trim();
  state.userName = name; saveName(name);
  document.getElementById('settingsPanel').classList.remove('show');
}
function setVoice(on){
  state.voiceEnabled = on; saveVoice(on);
  document.getElementById('voiceOnBtn').classList.toggle('selected', on);
  document.getElementById('voiceOffBtn').classList.toggle('selected', !on);
}

// ── INIT ──
if(!localStorage.getItem('ninjaFigIdx')){ localStorage.setItem('ninjaFigIdx',state.figureIdx); }
updateClock(); setInterval(updateClock,10000);
render(); renderTitle();

// update intro title text
const introTitleEl = document.getElementById('introTitle');
if(introTitleEl) introTitleEl.innerHTML = state.appTitle.replace(' ','<span> ')+'</span>';

// preload voices
if(window.speechSynthesis){
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = ()=>{ window.speechSynthesis.getVoices(); _voiceReady=true; };
}
