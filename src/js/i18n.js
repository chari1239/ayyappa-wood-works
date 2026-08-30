const STORAGE_KEY = 'ayyapa-wood-works-language';

export const supportedLanguages = {
  en: { label: 'English', shortLabel: 'EN' },
  te: { label: 'తెలుగు', shortLabel: 'TE' },
};

const translations = {
  en: {
    meta: {
      title: 'Ayyapa Wood Works | Custom Wooden Doors & Woodwork',
      description: 'Ayyapa Wood Works creates custom wooden doors, traditional door designs and handcrafted woodwork.',
    },
    nav: {
      home: 'Home',
      doorDesigns: 'Door Designs',
      woodWorks: 'Wood Works',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Custom wooden doors and handcrafted woodwork',
      title: 'Crafting Doors That Make an Entrance',
      subtitle: 'Traditional craftsmanship, timeless designs and custom woodwork made with care.',
      primaryCta: 'Explore Door Designs',
      secondaryCta: 'Contact Us',
    },
    studio: {
      eyebrow: 'Studio Highlights',
      title: 'Made for real homes',
      description: 'Layouts, proportions and finishes can be adapted for homes, apartments, mandirs and interior woodwork.',
      cards: {
        first: {
          number: '01',
          title: 'Doors as the focal point',
          description: 'Custom entrance, pooja, carved, traditional and modern wooden doors presented with the attention they deserve.',
        },
        second: {
          number: '02',
          title: 'Made for real homes',
          description: 'Layouts, proportions and finishes can be adapted for homes, apartments, mandirs and interior woodwork.',
        },
        third: {
          number: '03',
          title: 'Simple enquiry flow',
          description: 'Every featured project opens to a detailed view with a direct WhatsApp enquiry option.',
        },
      },
    },
    categories: {
      eyebrow: 'Portfolio Categories',
      title: 'Explore Custom Woodwork',
      description: 'Browse door design styles first, then explore other woodwork crafted for interiors and architectural details.',
      doorTitle: 'Door Designs',
      woodworkTitle: 'Wood Works',
      doorLabel: 'Main Category',
      woodworkLabel: 'Other Woodwork',
    },
    featuredDoors: {
      eyebrow: 'Featured Door Gallery',
      title: 'Custom Wooden Door Designs',
      description: 'Filter by style and open each project for larger images, wood type details and direct enquiry.',
    },
    otherWoodwork: {
      eyebrow: 'Beyond Doors',
      title: 'Other Wood Works',
      description: 'Windows, furniture, pooja mandirs, staircases, wooden partitions and custom pieces.',
    },
    about: {
      eyebrow: 'About Ayyapa Wood Works',
      title: 'Crafted With Experience',
      descriptionOne:
        'Ayyapa Wood Works specializes in custom woodwork and handcrafted wooden doors. The portfolio focuses on door designs that can be tailored by style, wood type, carving detail and finish.',
      descriptionTwo:
        'This section is intentionally editable content. Replace it with the business story, workshop details, service area and process when those details are ready.',
      cta: 'Discuss a custom project',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ayyapa Wood Works',
      note: 'The contact details below are placeholders and can be changed in <code>src/config.js</code> or environment variables.',
      phoneLabel: 'Phone:',
      whatsappLabel: 'WhatsApp:',
      locationLabel: 'Location:',
      locationValue: 'Open in Google Maps',
      callCta: 'Call Now',
      whatsappCta: 'WhatsApp',
      directionsCta: 'Open Map',
    },
    footer: {
      title: 'AYYAPA WOOD WORKS',
      description: 'Custom wooden doors and handcrafted woodwork.',
    },
    lightbox: {
      woodTypeLabel: 'Wood type:',
      enquireCta: 'Enquire on WhatsApp',
      previous: 'Previous project',
      next: 'Next project',
      close: 'Close project details',
      openDetails: 'Open {{title}} details',
      fallbackDescription: 'Custom woodwork project by Ayyapa Wood Works.',
      fallbackWood: 'Custom wood',
    },
    filters: {
      all: 'All',
      'main-doors': 'Main Doors',
      'pooja-doors': 'Pooja Doors',
      'double-doors': 'Double Doors',
      traditional: 'Traditional',
      modern: 'Modern',
      carved: 'Carved',
      windows: 'Windows',
      furniture: 'Furniture',
      'pooja-mandirs': 'Pooja Mandirs',
      staircases: 'Staircases',
      partitions: 'Partitions',
      'custom-woodwork': 'Custom Woodwork',
    },
    gallery: {
      emptyState: 'No projects found for this category yet.',
    },
    languagePrompt: {
      eyebrow: 'Language',
      title: 'Choose your language',
      description: 'You can switch between English and Telugu at any time.',
      english: 'English',
      telugu: 'తెలుగు',
    },
    languageSwitcher: {
      label: 'Language',
    },
  },
  te: {
    meta: {
      title: 'అయ్యప్పా వుడ్ వర్క్స్ | కస్టమ్ చెక్క తలుపులు & వుడ్ వర్క్',
      description: 'అయ్యప్పా వుడ్ వర్క్స్ కస్టమ్ చెక్క తలుపులు, సాంప్రదాయ తలుపు డిజైన్లు మరియు చేతితో చేసిన వుడ్ వర్క్‌ను అందిస్తుంది.',
    },
    nav: {
      home: 'హోమ్',
      doorDesigns: 'తలుపుల డిజైన్లు',
      woodWorks: 'వుడ్ వర్క్స్',
      about: 'మా గురించి',
      contact: 'సంప్రదింపు',
    },
    hero: {
      eyebrow: 'కస్టమ్ చెక్క తలుపులు మరియు చేతితో చేసిన వుడ్ వర్క్',
      title: 'ప్రభావం చూపించే తలుపుల తయారీ',
      subtitle: 'సాంప్రదాయ నైపుణ్యం, శాశ్వత డిజైన్లు మరియు జాగ్రత్తగా చేసిన వుడ్ వర్క్.',
      primaryCta: 'తలుపుల డిజైన్లు చూడండి',
      secondaryCta: 'మమ్మల్ని సంప్రదించండి',
    },
    studio: {
      eyebrow: 'స్టూడియో హైలైట్స్',
      title: 'నిజమైన ఇళ్ల కోసం రూపొందించాం',
      description: 'ఇళ్లకు, అపార్ట్‌మెంట్లకు, మందిరాలకు మరియు ఇంటీరియర్ వుడ్ వర్క్‌కి లేఅవుట్లు, పరిమాణాలు, ఫినిష్‌లు సరిపెట్టుకోవచ్చు.',
      cards: {
        first: {
          number: '01',
          title: 'కేంద్రీయ ఆకర్షణగా తలుపులు',
          description: 'ఎంట్రెన్స్, పూజా, చెక్కిన, సాంప్రదాయ మరియు ఆధునిక చెక్క తలుపులను వాటికి తగిన ప్రాధాన్యంతో చూపిస్తున్నాం.',
        },
        second: {
          number: '02',
          title: 'నిజమైన ఇళ్ల కోసం',
          description: 'ఇళ్లకు, అపార్ట్‌మెంట్లకు, మందిరాలకు మరియు ఇంటీరియర్ వుడ్ వర్క్‌కి లేఅవుట్లు, పరిమాణాలు, ఫినిష్‌లు సరిపెట్టుకోవచ్చు.',
        },
        third: {
          number: '03',
          title: 'సులభమైన విచారణ విధానం',
          description: 'ప్రతి ఫీచర్ చేసిన ప్రాజెక్ట్ డైరెక్ట్ WhatsApp విచారణతో విస్తృత వీక్షణను తెరుస్తుంది.',
        },
      },
    },
    categories: {
      eyebrow: 'పోర్ట్‌ఫోలియో కేటగిరీలు',
      title: 'కస్టమ్ వుడ్ వర్క్‌ను చూడండి',
      description: 'ముందుగా తలుపుల డిజైన్ శైలులను చూసి, తరువాత ఇంటీరియర్ మరియు ఆర్కిటెక్చరల్ వివరాల కోసం ఇతర వుడ్ వర్క్‌ను చూడండి.',
      doorTitle: 'తలుపుల డిజైన్లు',
      woodworkTitle: 'వుడ్ వర్క్స్',
      doorLabel: 'ముఖ్య కేటగిరీ',
      woodworkLabel: 'ఇతర వుడ్ వర్క్',
    },
    featuredDoors: {
      eyebrow: 'ఫీచర్ చేసిన తలుపుల గ్యాలరీ',
      title: 'కస్టమ్ చెక్క తలుపుల డిజైన్లు',
      description: 'స్టైల్ ఆధారంగా ఫిల్టర్ చేసి, పెద్ద చిత్రాలు, చెక్క రకం వివరాలు మరియు నేరుగా విచారణ కోసం ప్రతి ప్రాజెక్ట్‌ను తెరవండి.',
    },
    otherWoodwork: {
      eyebrow: 'తలుపులకంటే ముందుకు',
      title: 'ఇతర వుడ్ వర్క్స్',
      description: 'కిటికీలు, ఫర్నిచర్, పూజా మందిరాలు, మెట్లు, చెక్క పార్టిషన్లు మరియు కస్టమ్ పీసులు.',
    },
    about: {
      eyebrow: 'అయ్యప్పా వుడ్ వర్క్స్ గురించి',
      title: 'అనుభవంతో రూపొందించిన పని',
      descriptionOne:
        'అయ్యప్పా వుడ్ వర్క్స్ కస్టమ్ వుడ్ వర్క్ మరియు చేతితో చేసిన చెక్క తలుపులపై ప్రత్యేకత కలిగి ఉంది. ఈ పోర్ట్‌ఫోలియో స్టైల్, చెక్క రకం, చెక్కదనం మరియు ఫినిష్ ఆధారంగా మార్చుకోగలిగే తలుపు డిజైన్లపై దృష్టి పెడుతుంది.',
      descriptionTwo:
        'ఈ విభాగం ఉద్దేశపూర్వకంగా సవరించగల కంటెంట్‌గా ఉంచబడింది. వ్యాపార కథ, వర్క్‌షాప్ వివరాలు, సేవా ప్రాంతం మరియు ప్రక్రియ సిద్ధమైనప్పుడు వాటితో మార్చండి.',
      cta: 'కస్టమ్ ప్రాజెక్ట్‌ను చర్చించండి',
    },
    contact: {
      eyebrow: 'సంప్రదింపు',
      title: 'అయ్యప్పా వుడ్ వర్క్స్',
      note: 'క్రింద ఉన్న సంప్రదింపు వివరాలు తాత్కాలికమైనవి. వాటిని <code>src/config.js</code> లేదా environment variables ద్వారా మార్చవచ్చు.',
      phoneLabel: 'ఫోన్:',
      whatsappLabel: 'WhatsApp:',
      locationLabel: 'స్థానం:',
      locationValue: 'Google Maps లో తెరవండి',
      callCta: 'ఇప్పుడే కాల్ చేయండి',
      whatsappCta: 'WhatsApp',
      directionsCta: 'మ్యాప్ తెరవండి',
    },
    footer: {
      title: 'అయ్యప్పా వుడ్ వర్క్స్',
      description: 'కస్టమ్ చెక్క తలుపులు మరియు చేతితో చేసిన వుడ్ వర్క్.',
    },
    lightbox: {
      woodTypeLabel: 'చెక్క రకం:',
      enquireCta: 'WhatsApp లో విచారించండి',
      previous: 'మునుపటి ప్రాజెక్ట్',
      next: 'తదుపరి ప్రాజెక్ట్',
      close: 'ప్రాజెక్ట్ వివరాలను మూసివేయండి',
      openDetails: '{{title}} వివరాలు తెరవండి',
      fallbackDescription: 'అయ్యప్పా వుడ్ వర్క్స్ అందించిన కస్టమ్ వుడ్ వర్క్ ప్రాజెక్ట్.',
      fallbackWood: 'కస్టమ్ చెక్క',
    },
    filters: {
      all: 'అన్నీ',
      'main-doors': 'ప్రధాన తలుపులు',
      'pooja-doors': 'పూజా తలుపులు',
      'double-doors': 'డబుల్ తలుపులు',
      traditional: 'సాంప్రదాయ',
      modern: 'ఆధునిక',
      carved: 'చెక్కిన',
      windows: 'కిటికీలు',
      furniture: 'ఫర్నిచర్',
      'pooja-mandirs': 'పూజా మందిరాలు',
      staircases: 'మెట్లు',
      partitions: 'పార్టిషన్లు',
      'custom-woodwork': 'కస్టమ్ వుడ్ వర్క్',
    },
    gallery: {
      emptyState: 'ఈ కేటగిరీలో ఇప్పటికీ ప్రాజెక్టులు లేవు.',
    },
    languagePrompt: {
      eyebrow: 'భాష',
      title: 'మీ భాషను ఎంచుకోండి',
      description: 'మీరు ఏ సమయంలోనైనా English మరియు తెలుగు మధ్య మారవచ్చు.',
      english: 'English',
      telugu: 'తెలుగు',
    },
    languageSwitcher: {
      label: 'భాష',
    },
  },
};

let currentLanguage = 'en';

export function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored && translations[stored] ? stored : '';
  } catch {
    return '';
  }
}

export function setStoredLanguage(language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Ignore storage failures.
  }
}

export function getCurrentLanguage() {
  return currentLanguage;
}

export function setCurrentLanguage(language) {
  currentLanguage = translations[language] ? language : 'en';
  return currentLanguage;
}

export function t(path, variables = {}) {
  const value = lookup(translations[currentLanguage] || translations.en, path);
  if (typeof value !== 'string') return '';
  return value.replace(/{{(\w+)}}/g, (_, key) => (variables[key] ?? ''));
}

function lookup(source, path) {
  return path.split('.').reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), source);
}
