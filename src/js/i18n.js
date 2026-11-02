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
      cards: {
        first: {
          title: 'Doors as the focal point',
          description: 'Custom entrance, pooja, carved, traditional and modern wooden doors presented with the attention they deserve.',
        },
        second: {
          title: 'Made for real homes',
          description: 'Layouts, proportions and finishes can be adapted for homes, apartments, mandirs and interior woodwork.',
        },
        third: {
          title: 'Simple enquiry flow',
          description: 'Every featured project opens to a detailed view with a direct WhatsApp enquiry option.',
        },
      },
    },
    categories: {
      eyebrow: 'Portfolio Categories',
      title: 'Explore Custom Woodwork',
      description: 'Browse door design styles first, then explore other woodwork crafted for interiors and architectural details.',
      doorLabel: 'Main Category',
      doorTitle: 'Door Designs',
      woodworkLabel: 'Other Woodwork',
      woodworkTitle: 'Wood Works',
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
      descriptionOne: 'Ayyapa Wood Works specializes in custom woodwork and handcrafted wooden doors. The portfolio focuses on door designs that can be tailored by style, wood type, carving detail and finish.',
      descriptionTwo: 'This section is intentionally editable content. Replace it with the business story, workshop details, service area and process when those details are ready.',
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
      directionsCta: 'Get Directions',
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
      title: 'అయ్యప్ప వుడ్ వర్క్స్ | కస్టమ్ వుడెన్ డోర్లు & వుడ్ వర్క్',
      description: 'అయ్యప్ప వుడ్ వర్క్స్ కస్టమ్ వుడెన్ డోర్లు, సాంప్రదాయ డోర్ డిజైన్లు మరియు హ్యాండ్‌క్రాఫ్ట్ వుడ్ వర్క్‌ను తయారు చేస్తుంది.',
    },
    nav: {
      home: 'హోమ్',
      doorDesigns: 'డోర్ డిజైన్లు',
      woodWorks: 'వుడ్ వర్క్స్',
      about: 'మా గురించి',
      contact: 'సంప్రదించండి',
    },
    hero: {
      eyebrow: 'కస్టమ్ వుడెన్ డోర్లు మరియు చేతివృత్తి వుడ్ వర్క్',
      title: 'ద్వారాలు అద్భుతంగా కనిపిస్తాయి',
      subtitle: 'సాంప్రదాయపు కృషి, శాశ్వత డిజైన్లు మరియు కస్టమ్ వుడ్ వర్క్.',
      primaryCta: 'డోర్ డిజైన్లు చూడండి',
      secondaryCta: 'సంప్రదించండి',
    },
    studio: {
      cards: {
        first: {
          title: 'ద్వారాలే ప్రధాన ఆకర్షణ',
          description: 'కస్టమ్ ప్రవేశ, పూజా, చెక్కిన, సాంప్రదాయ మరియు ఆధునిక చెక్క ద్వారాలను వాటికి తగిన ప్రాధాన్యంతో ప్రదర్శిస్తాము.',
        },
        second: {
          title: 'నిజమైన ఇళ్ల కోసం తయారు',
          description: 'లేఅవుట్లు, నిష్పత్తులు మరియు ఫినిష్‌లను ఇళ్లు, అపార్ట్‌మెంట్లు, మందిరాలు మరియు ఇంటీరియర్ వుడ్‌వర్క్‌కు అనుగుణంగా మార్చవచ్చు.',
        },
        third: {
          title: 'సులభమైన విచారణ ప్రక్రియ',
          description: 'ప్రతి ప్రదర్శిత ప్రాజెక్ట్ వివరాల వీక్షణను తెరుస్తుంది, అందులో నేరుగా WhatsAppలో విచారించే అవకాశం ఉంటుంది.',
        },
      },
    },
    categories: {
      eyebrow: 'పోర్ట్‌ఫోలియో విభాగాలు',
      title: 'కస్టమ్ వుడ్‌వర్క్‌ను చూడండి',
      description: 'ముందు డోర్ డిజైన్ శైలులను చూడండి, తరువాత ఇంటీరియర్‌లు మరియు నిర్మాణ వివరాల కోసం తయారు చేసిన ఇతర వుడ్‌వర్క్‌ను చూడండి.',
      doorLabel: 'ప్రధాన విభాగం',
      doorTitle: 'డోర్ డిజైన్లు',
      woodworkLabel: 'ఇతర వుడ్‌వర్క్',
      woodworkTitle: 'వుడ్ వర్క్స్',
    },
    featuredDoors: {
      eyebrow: 'ప్రత్యేక డోర్ గ్యాలరీ',
      title: 'కస్టమ్ వుడెన్ డోర్ డిజైన్లు',
      description: 'శైలి ప్రకారం ఫిల్టర్ చేయండి. పెద్ద చిత్రాలు, చెక్క రకం వివరాలు మరియు నేరుగా విచారించేందుకు ప్రతి ప్రాజెక్ట్‌ను తెరవండి.',
    },
    otherWoodwork: {
      eyebrow: 'ద్వారాలకు మించి',
      title: 'ఇతర వుడ్ వర్క్స్',
      description: 'కిటికీలు, ఫర్నిచర్, పూజా మందిరాలు, మెట్లు, చెక్క పార్టిషన్లు మరియు కస్టమ్ పనులు.',
    },
    about: {
      eyebrow: 'అయ్యప్ప వుడ్ వర్క్స్ గురించి',
      title: 'అనుభవంతో తయారు',
      descriptionOne: 'అయ్యప్ప వుడ్ వర్క్స్ కస్టమ్ వుడ్ వర్క్ మరియు హ్యాండ్‌క్రాఫ్ట్ వుడెన్ డోర్లలో ప్రత్యేకత కలిగి ఉంది. ఈ పోర్ట్‌ఫోలియో డోర్ డిజైన్లను శైలి, చెక్క రకం, చెక్క పని మరియు ఫినిష్‌కు అనుగుణంగా రూపొందించగలదు.',
      descriptionTwo: 'మీరు ఈ సమాచారం మీ వ్యాపార కథ, వర్క్‌షాప్ వివరాలు మరియు సేవా ప్రాంతంతో భర్తీ చేయవచ్చు.',
      cta: 'కస్టమ్ ప్రాజెక్ట్ గురించి అడగండి',
    },
    contact: {
      eyebrow: 'సంప్రదించండి',
      title: 'అయ్యప్ప వుడ్ వర్క్స్',
      note: 'క్రింద ఉన్న వివరాలు ప్లేస్‌హోల్డర్‌లు. <code>src/config.js</code> లేదా పర్యావరణ వేరియబుల్స్‌లో సవరించవచ్చు.',
      phoneLabel: 'ఫోన్:',
      whatsappLabel: 'WhatsApp:',
      locationLabel: 'స్థానం:',
      locationValue: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
      callCta: 'ఇప్పుడు కాల్ చేయండి',
      whatsappCta: 'WhatsApp',
      directionsCta: 'మార్గదర్శనం',
    },
    footer: {
      title: 'అయ్యప్ప వుడ్ వర్క్స్',
      description: 'కస్టమ్ వుడెన్ డోర్లు మరియు చేతివృత్తి వుడ్ వర్క్.',
    },
    lightbox: {
      woodTypeLabel: 'చెక్క రకం:',
      enquireCta: 'WhatsAppలో enquire చేయండి',
      previous: 'మునుపటి ప్రాజెక్ట్',
      next: 'తదుపరి ప్రాజెక్ట్',
      close: 'ప్రాజెక్ట్ వివరాలు మూసివేయండి',
      openDetails: '{{title}} వివరాలు తెరవండి',
      fallbackDescription: 'అయ్యప్ప వుడ్ వర్క్స్ యొక్క కస్టమ్ వుడ్ వర్క్ ప్రాజెక్ట్.',
      fallbackWood: 'కస్టమ్ చెక్క',
    },
    filters: {
      all: 'అన్నీ',
      'main-doors': 'ముఖ్య ద్వారాలు',
      'pooja-doors': 'పూజా ద్వారాలు',
      'double-doors': 'డబుల్ డోర్లు',
      traditional: 'సాంప్రదాయ',
      modern: 'ఆధునిక',
      carved: 'చెక్కివేసిన',
      windows: 'కిటికీలు',
      furniture: 'ఫర్నిచర్',
      'pooja-mandirs': 'పూజా మందిరాలు',
      staircases: 'సీట్లు',
      partitions: 'పార్టిషన్స్',
      'custom-woodwork': 'కస్టమ్ వుడ్ వర్క్',
    },
    gallery: {
      emptyState: 'ఈ విభాగంలో ప్రాజెక్టులు ఇంకా అందుబాటులో లేవు.',
    },
    languagePrompt: {
      eyebrow: 'భాష',
      title: 'మీ భాషను ఎంచుకోండి',
      description: 'మీరు ఇంగ్లీష్ మరియు తెలుగు మధ్య ఎప్పుడైనా మార్చుకోవచ్చు.',
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
  const localizedValue = lookup(translations[currentLanguage] || translations.en, path);
  const value = typeof localizedValue === 'string' ? localizedValue : lookup(translations.en, path);
  if (typeof value !== 'string') return '';
  return value.replace(/{{(\w+)}}/g, (_, key) => (variables[key] ?? ''));
}

function lookup(source, path) {
  return path.split('.').reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), source);
}
