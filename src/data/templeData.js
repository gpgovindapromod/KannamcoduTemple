/**
 * Vettikkavala Kannamcodu Sree Subrahmanya Swami Temple
 * Structured Master Data Source (Categorized & Strongly Typed)
 */

// ── COMMITTEE & ADMINISTRATION ──
export const COMMITTEE_DATA = {
  spiritualLeader: {
    id: 'tantri',
    name: 'Keshawar Harikumar',
    nameMal: 'കേശവർ ഹരികുമാർ',
    role: 'ക്ഷേത്രം തന്ത്രി (Chief Priest / Tantri)',
    phone: '',
    img: '/images/committee/tharndri-harikumar.jpg',
  },
  executives: [
    {
      id: 'c1',
      name: 'A Kishore',
      nameMal: 'എ. കിഷോർ',
      role: 'President / പ്രസിഡന്റ്',
      phone: '',
      img: '/images/committee/kishore.jpg',
    },
    {
      id: 'c2',
      name: 'K.S Promod',
      nameMal: 'കെ.എസ് പ്രമോദ്',
      role: 'Vice President / വൈസ് പ്രസിഡന്റ്',
      phone: '+919074439789',
      img: '/images/committee/pramod.jpg',
    },
    {
      id: 'c3',
      name: 'B. Sasidharan',
      nameMal: 'ബി. ശശിധരൻ',
      role: 'Secretary / സെക്രട്ടറി',
      phone: '+919446332498',
      img: '/images/committee/sasi.jpg',
    },
    {
      id: 'c4',
      name: 'Liju V',
      nameMal: 'ലിജു വി',
      role: 'Union Representative / യൂണിയൻ പ്രതിനിധി',
      phone: '+918289812193',
      img: '/images/committee/liju.jpg',
    },
  ],
  members: [
    {
      id: 'c5',
      name: 'L Vasudevan',
      nameMal: 'എൽ. വാസുദേവൻ',
      role: 'സമിതി അംഗം (Member)',
      phone: '+914742403398',
      img: '/images/committee/vasudevan.jpg',
    },
    {
      id: 'c6',
      name: 'Deepu K.S',
      nameMal: 'ദീപു കെ.എസ്',
      role: 'സമിതി അംഗം (Member)',
      phone: '+918111867565',
      img: '/images/committee/deepu.jpg',
    },
    {
      id: 'c7',
      name: 'G. Mohanan',
      nameMal: 'ജി. മോഹനൻ',
      role: 'സമിതി അംഗം (Member)',
      phone: '+919961819314',
      img: '/images/committee/mohanan.jpg',
    },
    {
      id: 'c8',
      name: 'Babu P.V',
      nameMal: 'ബാബു പി.വി',
      role: 'സമിതി അംഗം (Member)',
      phone: '+919526498135',
      img: '/images/committee/babu.jpg',
    },
    {
      id: 'c9',
      name: 'R. SureshKumar',
      nameMal: 'ആർ. സുരേഷ് കുമാർ',
      role: 'സമിതി അംഗം (Member)',
      phone: '+919846354462',
      img: '/images/committee/suresh-kumar.jpg',
    },
    {
      id: 'c10',
      name: 'N. Suresh',
      nameMal: 'എൻ. സുരേഷ്',
      role: 'സമിതി അംഗം (Member)',
      phone: '+919747185899',
      img: '/images/committee/n-suresh.jpg',
    },
    {
      id: 'c11',
      name: 'Suresh S',
      nameMal: 'സുരേഷ് എസ്',
      role: 'സമിതി അംഗം (Member)',
      phone: '+919947694811',
      img: '/images/committee/suresh-s.jpg',
    },
  ],
};

// Flat list helper for legacy compatibility
export const COMMITTEE_FLAT = [
  COMMITTEE_DATA.spiritualLeader,
  ...COMMITTEE_DATA.executives,
  ...COMMITTEE_DATA.members,
];

// ── CATEGORIZED VAZHIPADU (OFFERINGS) ──
export const VAZHIPADU_CATEGORIES = {
  archana: {
    id: 'archana',
    title: 'അർച്ചനകൾ (Archana)',
    items: [
      'അർചന',
      'ഗുരുപുഷ്‌പാഞ്ജലി',
      'അഷ്ടോത്തരാർച്ചന',
      'കുങ്കുമാർച്ചന',
      'ഗുരുദേവാർച്ചന',
      'കുടുബാർച്ചന',
      'സ്വയംവരാർച്ചന',
      'പുഷ്പാഞ്ജലി',
      'വിദ്യാഗോപാല മന്ത്രാർച്ചന',
      'വിദ്യ ഗോപാല മന്ത്രാർച്ചന (വിശേഷാൽ)',
    ],
  },
  abhishekam: {
    id: 'abhishekam',
    title: 'അഭിഷേകങ്ങൾ (Abhishekam)',
    items: [
      'അഭിഷേകം',
      'കളഭാഭിഷേകം',
      'ഭസ്മാഭിഷേകം',
      'പഞ്ചാമൃത അഭിഷേകം',
      'പനിനീർ അഭിഷേകം',
      'കളഭാഭിഷേകം (വിശേഷാൽ)',
      'പനിനീർ അഭിഷേകം (വിശേഷാൽ)',
    ],
  },
  nivedyam: {
    id: 'nivedyam',
    title: 'നിവേദ്യങ്ങൾ & പായസങ്ങൾ (Nivedyam & Payasam)',
    items: ['പായസം', 'പാൽപായസം', 'കടുംപായസം', 'വെള്ളനിവേദ്യം', 'ത്രിമധുരം', 'ഉണ്ണിയപ്പം വഴിപാട്'],
  },
  homam: {
    id: 'homam',
    title: 'ഹോമങ്ങൾ & സൂക്തങ്ങൾ (Homam & Suktham)',
    items: [
      'ഗണപതിഹോമം',
      'സമൂഹ ഗണപതിഹോമം',
      'കുമാര സൂക്തം',
      'സംവാദസൂക്തം',
      'ഭാഗ്യസൂക്തം',
      'പുരുഷസൂക്തം',
      'ഐകമത്യസൂക്തം',
    ],
  },
  specialPoojas: {
    id: 'special',
    title: 'പ്രത്യേക പൂജകൾ & നേർച്ചകൾ (Special Poojas & Vrutham)',
    items: [
      'മാലപൂജ',
      'നെയ്യ് വിളക്ക്',
      'ചരട്‌പൂജ',
      'സർപ്പപൂജ',
      'ചാവിപൂജ',
      'പേനപൂജ',
      'സമർപ്പണം',
      'തുലാഭാരം',
      'കെട്ടുനിറ',
      'സുബ്രഹ്മണ്യപൂജ',
      'ഗണപതി പൂജ',
      'യോഗീശ്വരപൂജ',
      'പിതൃപൂജ',
      'കാവടിനിറ',
      'ശത്രുസംഹാര പൂജ',
      'ശക്തിവേൽ ശരവണപൂജ',
      'വായനയോടുകൂടി ഒറുദിവസത്തെ പൂജ',
      'ഷഷ്ഠി നേർച്ച',
      'ദിവസ പൂജ',
      'പിറന്നാൾ പൂജ',
      'നൂറും പാലും',
    ],
  },
};

// 51 Vazhipadu Array (maintained for flat search and calculator)
export const VAZHIPADU_DATA = [
  ...VAZHIPADU_CATEGORIES.archana.items,
  ...VAZHIPADU_CATEGORIES.abhishekam.items,
  ...VAZHIPADU_CATEGORIES.nivedyam.items,
  ...VAZHIPADU_CATEGORIES.homam.items,
  ...VAZHIPADU_CATEGORIES.specialPoojas.items,
];

// ── DAILY POOJA TIMETABLE ──
export const POOJA_TIMETABLE = {
  morning: [
    { time: '5:30 AM', name: 'നടതുറക്കൽ', desc: 'നിർമ്മാല്യ ദർശനത്തോടെയുള്ള പ്രഭാത നടതുറക്കൽ' },
    { time: '6:30 AM', name: 'ഉഷഃ പൂജ', desc: 'പ്രഭാത അഭിഷേകം, അർച്ചന, നിവേദ്യം' },
    { time: '8:00 AM', name: 'എതിരേറ്റ പൂജ', desc: 'വിശേഷാൽ പുഷ്പാർച്ചനയും ദീപാരാധനയും' },
    { time: '9:45 AM', name: 'ഉച്ചപൂജ', desc: 'മഹാ നിവേദ്യ സമർപ്പണം' },
    { time: '10:00 AM', name: 'നടയടക്കൽ', desc: 'ഉച്ചയ്ക്ക് നടയടക്കൽ' },
  ],
  evening: [
    { time: '5:00 PM', name: 'നടതുറക്കൽ', desc: 'വൈകുന്നേരത്തെ നടതുറക്കൽ' },
    { time: '6:30 PM', name: 'ദീപാരാധന', desc: 'സന്ധ്യാ ദീപാരാധനയും വിശേഷാൽ നാമജപവും' },
    { time: '7:15 PM', name: 'അത്താഴപൂജ', desc: 'നിവേദ്യ സമർപ്പണം' },
    { time: '7:30 PM', name: 'നടയടക്കൽ', desc: 'രാത്രിയിലെ നടയടക്കൽ' },
  ],
};

// ── PHOTO GALLERY ──
export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photos / എല്ലാം' },
  { id: 'vel-kavadi', label: 'വേൽ കാവടി' },
  { id: 'manj-neerattu', label: 'മഞ്ഞൾ നീരാട്ട്' },
  { id: 'agni-kavadi', label: 'അഗ്നി കാവടി' },
  { id: 'temple', label: 'ക്ഷേത്ര ദൃശ്യങ്ങൾ' },
];

export const GALLERY_DATA = [
  {
    id: 'g1',
    url: '/images/gallery/Vel/VKP1.jpg',
    caption: 'വേൽ കാവടി',
    captionEng: 'Vel Kavadi Procession',
    category: 'vel-kavadi',
  },
  {
    id: 'g2',
    url: '/images/gallery/Vel/VKP2.jpg',
    caption: 'വേൽ കാവടി സമർപ്പണം',
    captionEng: 'Vel Kavadi Devotion',
    category: 'vel-kavadi',
  },
  {
    id: 'g3',
    url: '/images/gallery/Vel/VKL1.jpg',
    caption: 'മഹാ വേൽ കാവടി',
    captionEng: 'Maha Vel Kavadi',
    category: 'vel-kavadi',
  },
  {
    id: 'g4',
    url: '/images/gallery/VelliNeerattu/VNP1.jpg',
    caption: 'മഞ്ഞൾ നീരാട്ട്',
    captionEng: 'Manj Neerattu Ritual',
    category: 'manj-neerattu',
  },
  {
    id: 'g5',
    url: '/images/gallery/VelliNeerattu/VNL1.jpg',
    caption: 'മഞ്ഞൾ അഭിഷേക ചടങ്ങ്',
    captionEng: 'Turmeric Bathing Ceremony',
    category: 'manj-neerattu',
  },
  {
    id: 'g6',
    url: '/images/gallery/VelliNeerattu/VNL2.jpg',
    caption: 'ഭക്തിസാന്ദ്രമായ മഞ്ഞൾ നീരാട്ട്',
    captionEng: 'Manj Neerattu Procession',
    category: 'manj-neerattu',
  },
  {
    id: 'g7',
    url: '/images/gallery/Agni/AKL1.jpg',
    caption: 'അഗ്നി കാവടി',
    captionEng: 'Agni Kavadi Holy Fire',
    category: 'agni-kavadi',
  },
  {
    id: 'g8',
    url: '/images/gallery/Agni/AKP1.jpg',
    caption: 'അഗ്നി കാവടി വ്രതം',
    captionEng: 'Agni Kavadi Penance',
    category: 'agni-kavadi',
  },
  {
    id: 'g9',
    url: '/images/gallery/Agni/AKL2.jpg',
    caption: 'മഹാ അഗ്നി കാവടി പ്രദക്ഷിണം',
    captionEng: 'Agni Kavadi Circumambulation',
    category: 'agni-kavadi',
  },
  {
    id: 'g10',
    url: '/images/temple/temple-hero.jpg',
    caption: 'ക്ഷേത്ര പ്രധാന ഗോപുരം',
    captionEng: 'Temple Gopuram & Sanctum',
    category: 'temple',
  },
  {
    id: 'g11',
    url: '/images/temple/temple-main.jpg',
    caption: 'ക്ഷേത്ര അങ്കണം',
    captionEng: 'Temple Courtyard',
    category: 'temple',
  },
  {
    id: 'g12',
    url: '/images/temple/deity.jpg',
    caption: 'ശ്രീ സുബ്രഹ്മണ്യ സ്വാമി',
    captionEng: 'Lord Sree Subrahmanya Swami',
    category: 'temple',
  },
  {
    id: 'g13',
    url: '/images/temple/temple-evening.jpg',
    caption: 'ക്ഷേത്ര ദീപക്കാഴ്ച',
    captionEng: 'Temple Evening Illumination',
    category: 'temple',
  },
  {
    id: 'g14',
    url: '/images/temple/temple-front.jpg',
    caption: 'ക്ഷേത്ര പ്രവേശന കവാടം',
    captionEng: 'Temple Entrance',
    category: 'temple',
  },
  {
    id: 'g15',
    url: '/images/temple/temple-aerial.jpg',
    caption: 'മഹാ ഉത്സവ വേദി',
    captionEng: 'Temple Festival Arena',
    category: 'temple',
  },
];

// ── EVENTS & CELEBRATIONS ──
export const EVENTS_DATA = {
  yearly: [
    {
      id: 'thaipooyam',
      title: 'മഹാ തൈപൂയം',
      badge: '10 ദിവസത്തെ ഉത്സവം',
      eng: 'Maha Thaipooyam Mahotsavam · 22 January 2027',
      month: 'മകരമാസം · പൂയം നക്ഷത്രം',
      images: [
        '/images/events/thaipusam-1.jpg',
        '/images/events/thaipusam-2.jpg',
        '/images/events/thaipusam-3.jpg',
      ],
      paragraphs: [
        'മകരമാസത്തിലെ പൂയം നക്ഷത്രത്തിൽ കണ്ണങ്കോട് ക്ഷേത്രത്തിൽ ഭക്തിസാന്ദ്രമായ ആഘോഷമായി മഹാ തൈപ്പൂയം നടത്തപ്പെടുന്നു. മകരമാസത്തിലെ പൂയം നക്ഷത്രം ലോകമെമ്പാടുമുള്ള ഭക്തജനങ്ങൾ തൈപ്പൂയമായി ആഘോഷിക്കുന്നു. ഭഗവാന്റെ തിരുനാൾ ദിനം ആയിട്ടാണ് ഇതിനെ കണക്കാക്കുന്നത്.',
        "മറ്റുള്ള ക്ഷേത്രങ്ങളിൽ നിന്നും വ്യത്യസ്തമായി തൈപ്പൂയത്തിന് 'മഹാ' എന്നൊരു വിശേഷണം കൂടി കണ്ണങ്കോട് ക്ഷേത്രത്തിൽ ചേർത്തിട്ടുണ്ട്. ഭഗവാന്റെ തിരുനാൾ ദിനത്തിന് അത്രയേറെ പ്രാധാന്യമുണ്ട് എന്ന് കണക്കാക്കുന്നതിനുവേണ്ടിയാണ് മഹാ എന്ന വിശേഷണം നൽകിയിട്ടുള്ളത്. 10 ദിവസത്തെ കൊടിയേറ്റ ഉത്സവമാണ് മഹാ തൈപ്പൂയം. പള്ളിവേട്ടയും ആറാട്ടും മുഴുവൻ സമയ അന്നദാനവും നടക്കുന്നു.",
        'ഉത്സവ ദിവസങ്ങളിൽ വൈകിട്ട് നടക്കുന്ന ശീവേലി എഴുന്നള്ളിപ്പും വിളക്കും ഭഗവത് സാന്നിധ്യത്തിന്റെ നേർക്കാഴ്ചയാണ്. എട്ടാം ഉത്സവ ദിവസം രാത്രിയിൽ നടക്കുന്ന കളമെഴുത്തും പാട്ടും സർപ്പ ദൈവസാന്നിധ്യത്തിന് ഏറ്റവും വലിയ തെളിവാണ്. ഒമ്പതാം ഉത്സവ ദിവസം വൈകിട്ട് ചന്ദ്രപ്പൊങ്കാലയും തുടർന്നുള്ള മഞ്ഞൾ നീരാട്ടും ഭക്തിസാന്ദ്രമായി അരങ്ങേറുന്നു.',
      ],
    },
    {
      id: 'skanda-shashti',
      title: 'സ്കന്ദ ഷഷ്ഠി',
      badge: 'തുലാമാസം',
      eng: 'Skanda Shashti Vrutham & Festival',
      month: 'തുലാമാസം',
      images: ['/images/events/skanda-shasti.jpg'],
      paragraphs: [
        'സ്കന്ദഷഷ്ഠി വ്രതം ശ്രീ സുബ്രഹ്മണ്യസ്വാമിയുടെ യുദ്ധവിജയത്തിനായി ആചരിക്കപ്പെടുന്ന മുഖ്യ ആരാധനയാണ്. സത്യധർമ്മാദികളെ നശിപ്പിച്ച് ദേവേന്ദ്രാദി ദേവന്മാരെ സ്ഥാനഭ്രഷ്ടരാക്കി അശാന്തി വിതച്ച താരകാസുര ശൂരപദ്മാസുര നിഗ്രഹത്തിനായി തിരു അവതാരം ചെയ്തതാണ് ശ്രീ സുബ്രഹ്മണ്യസ്വാമി.',
        'ഭഗവാന്റെ യുദ്ധവിജയത്തിനായി മാതാവായ പാർവതി ദേവി അനുഷ്ഠിച്ച 6 ദിവസത്തെ വ്രതമാണ് സ്കന്ദഷഷ്ഠി വ്രതമായി ആചരിച്ചു വരുന്നത്. കണ്ണങ്കോട് ക്ഷേത്രത്തിൽ ഷഷ്ഠി വ്രതവും കാവടി അഭിഷേകങ്ങളും പായസ നിവേദ്യങ്ങളുമായി അതിവിപുലമായി സ്കന്ദഷഷ്ഠി ആഘോഷിക്കുന്നു.',
      ],
    },
    {
      id: 'vinayaka-chathurthi',
      title: 'വിനായക ചതുർത്ഥി',
      badge: 'ചിങ്ങമാസം',
      eng: 'Vinayaka Chathurthi Mahotsavam',
      month: 'ചിങ്ങമാസം',
      images: ['/images/events/vinayaka-chathurthi.jpg'],
      paragraphs: [
        'കണ്ണങ്കോട് ശ്രീ സുബ്രഹ്മണ്യസ്വാമി ക്ഷേത്രത്തിലെ ആട്ടവിശേഷങ്ങളിൽ അതിപ്രാധാന്യമേറിയ ദിവസങ്ങളിൽ ഒന്നാണ് വിനായക ചതുർത്ഥി. നൂറുകണക്കിന് നാളികേരത്തിന്റെ അഷ്ടദ്രവ്യ മഹാഗണപതിഹോമമാണ് അന്നേദിവസം അതിരാവിലെ മുതൽ നടക്കുക.',
        'സർവ്വ വിഘ്ന നിവാരണത്തിനും ഗണപതി ഭഗവാന്റെ അനുഗ്രഹ ആശിസ്സുകൾ ലഭിക്കുന്നതിനും വേണ്ടി ധാരാളം ഭക്തജനങ്ങൾ അന്നേദിവസം ക്ഷേത്രത്തിൽ എത്തി ഗണപതിഹോമത്തിൽ പങ്കെടുക്കുന്നു.',
      ],
    },
    {
      id: 'mandala-chirappu',
      title: 'മണ്ഡലച്ചിറപ്പ് മഹോത്സവം',
      badge: '41 ദിവസക്കാലം',
      eng: 'Mandala Chirappu Mahotsavam',
      month: 'വൃശ്ചികം 1 മുതൽ',
      images: ['/images/events/mandala-chirappu.jpg'],
      paragraphs: [
        'ശബരിമല തീർത്ഥാടന കാലവുമായി ബന്ധപ്പെട്ട മണ്ഡലച്ചിറപ്പ് മഹോത്സവം വൃശ്ചികം ഒന്നു മുതൽ 41 ദിവസക്കാലം ആഘോഷിച്ചു വരുന്നു. നമ്മുടെ ക്ഷേത്രത്തിലും 41 ദിവസക്കാലം ഭക്തിനിർഭരമായ ദീപാരാധനയും പ്രത്യേക പൂജകളുമായി മണ്ഡല ചിറപ്പ് മഹോത്സവം വിപുലമായി കൊണ്ടാടുന്നു.',
      ],
    },
    {
      id: 'chathayam-jayanthi',
      title: 'ശ്രീനാരായണ ഗുരുദേവ ജയന്തി (ചതയ ദിനം)',
      badge: 'ചിങ്ങമാസം',
      eng: 'Chathayam Jayanthi',
      month: 'ചിങ്ങമാസം · ചതയം നക്ഷത്രം',
      images: ['/images/events/chathayam.jpg'],
      paragraphs: [
        'ഭഗവാൻ ശ്രീനാരായണ ഗുരുദേവന്റെ തിരു അവതാര ദിനമാണ് ചിങ്ങമാസത്തിലെ ചതയം നക്ഷത്രം. വിശേഷാൽ പൂജാദി കർമ്മങ്ങളും തിരു ജയന്തി ഘോഷയാത്രയും ശാഖാ കമ്മിറ്റിയുടെ ആഭിമുഖ്യത്തിൽ വലിയ ഭക്തജന പങ്കാളിത്തത്തോടെ നടത്തപ്പെടുന്നു.',
      ],
    },
    {
      id: 'maha-samadhi',
      title: 'ഗുരുദേവ മഹാ സമാധി ദിനം',
      badge: 'കന്നി 5',
      eng: 'Maha Samadhi Observance',
      month: 'കന്നിമാസം 5',
      images: ['/images/events/chathayam.jpg'],
      paragraphs: [
        'ഭഗവാൻ ശ്രീനാരായണ ഗുരുദേവന്റെ മഹാസമാധി ദിനമായ കന്നിമാസം അഞ്ചാം തീയതി ഭക്തിനിർഭരമായി ആചരിച്ചു വരുന്നു. ക്ഷേത്രത്തിൽ ഭക്തജന പങ്കാളിത്തത്തോടെ വിപുലമായ കഞ്ഞി സദ്യയും മഹാസമാധി സമയത്തെ സമാധി പൂജയും നടത്തപ്പെടുന്നു.',
      ],
    },
  ],
  monthly: [
    {
      id: 'shasti',
      title: 'ഷഷ്ഠി വ്രതം',
      eng: 'Monthly Shashti Vrutham',
      recurrence: 'എല്ലാ മാസവും ഷഷ്ഠി തിഥി',
      images: ['/images/events/shasti.jpg'],
      desc: 'വ്രതങ്ങളിൽ ഏറ്റവും ശ്രേഷ്ഠമായ വ്രതമാണ് ഷഷ്ഠിവ്രതം. ഉദ്ദിഷ്ടകാര്യ സിദ്ധിക്കായി ഭക്തജനങ്ങൾ മാസംതോറും അനുഷ്ഠിക്കുന്നു. ക്ഷേത്രദർശനവും ക്ഷേത്രത്തിൽ നിന്ന് ലഭിക്കുന്ന വെള്ള നിവേദ്യം ഉച്ചയ്ക്ക് ഒരു നേരം മാത്രം ഭുജിച്ചും ഭക്തിപൂർവ്വം സുബ്രഹ്മണ്യ ഭജനം നടത്തിയും വ്രതം പൂർത്തിയാക്കുന്നു.',
    },
    {
      id: 'ayilyam',
      title: 'ആയില്യ പൂജ & നൂറും പാലും',
      eng: 'Ayilyam Pooja & Noorum Palum',
      recurrence: 'എല്ലാ മാസവും ആയില്യം നക്ഷത്രം',
      images: ['/images/events/ayilyam.jpg'],
      desc: 'സർപ്പദോഷ നിവാരണം നേടി സർവ്വൈശ്വര്യം സിദ്ധിക്കുന്നതിനു വേണ്ടി എല്ലാ മലയാള മാസവും ആയില്യം നക്ഷത്ര ദിവസത്തിൽ ആചരിക്കുന്നു. ആയില്യ പൂജ, നൂറും പാലും എന്നിവയാണ് പ്രധാന വഴിപാടുകൾ.',
    },
    {
      id: 'ganapathi-homam',
      title: 'അഷ്ടദ്രവ്യ മഹാഗണപതിഹോമം',
      eng: 'Maha Ganapathi Homam',
      recurrence: 'എല്ലാ മലയാള മാസവും 1-ാം തീയതി',
      images: ['/images/events/ganapathi-homam.jpg'],
      desc: 'എല്ലാ മലയാള മാസവും ഒന്നാം തീയതിതോറും ഭക്തജന പങ്കാളിത്തത്തോടെ നടത്തുന്നു. സർവ്വ വിഘ്ന നിവാരണത്തിനും ഗണേശ പ്രീതിക്കുമായി നടത്തുന്ന ഈ വിശേഷാൽ ഹോമത്തിൽ നൂറുകണക്കിന് ആളുകൾ പങ്കെടുക്കുന്നു.',
    },
    {
      id: 'uthram',
      title: 'ഉത്രം നക്ഷത്ര പൂജ',
      eng: 'Uthram Nakshathra Pooja (Prathishta Dinam)',
      recurrence: 'എല്ലാ മാസവും ഉത്രം നക്ഷത്രം',
      images: ['/images/events/uthram-pooja.jpg'],
      desc: 'ദേവപ്രശ്ന വിധിപ്രകാരം ക്ഷേത്ര നിർമ്മാണം നടത്തി 1178 മേട മാസത്തിലെ ഉത്രം നക്ഷത്ര ദിവസമാണ് ക്ഷേത്ര പുനഃപ്രതിഷ്ഠ നടന്നത്. ക്ഷേത്ര ദേവന്മാരുടെ പ്രതിഷ്ഠാ നക്ഷത്രമായ ഉത്രം നക്ഷത്രദിവസം എല്ലാ മലയാള മാസവും ഭക്തിപൂർവ്വം ആചരിച്ചു വരുന്നു.',
    },
    {
      id: 'chathayam-monthly',
      title: 'മാസ ചതയ ദിന പൂജ',
      eng: 'Monthly Chathayam Pooja',
      recurrence: 'എല്ലാ മാസവും ചതയം നക്ഷത്രം',
      images: ['/images/events/chathayam.jpg'],
      desc: 'കണ്ണങ്കോട് സുബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രത്തിന്റെ ഉത്ഭവത്തിന് കാരണഭൂതനായ ഭഗവാൻ ശ്രീനാരായണഗുരുദേവന്റെ തിരു അവതാര ദിനമാണ് ചതയം നക്ഷത്രം. ക്ഷേത്ര സമുച്ചയത്തിലുള്ള ഗുരുദേവ ക്ഷേത്രത്തിൽ എല്ലാ മാസവും ചതയ പൂജ നടത്തപ്പെടുന്നു.',
    },
  ],
};
