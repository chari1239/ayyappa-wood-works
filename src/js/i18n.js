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
      cnc: 'CNC Carving',
      about: 'About',
      contact: 'Contact',
    },
    cnc: {
      eyebrow: 'Inside the Workshop',
      title: 'Precision CNC Carving',
      descriptionOne: 'Some designs begin on our CNC machine, where detailed patterns and panels are shaped with precision.',
      descriptionTwo: 'From carved door panels to custom patterns, CNC carving helps us keep fine details accurate across every piece.',
      cta: 'Discuss a custom design',
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
      descriptionTwo: 'We serve homes in Proddatur, Kadapa and nearby areas of Andhra Pradesh. Pick a design you like, share your measurements, and we build it to your size, wood and finish.',
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
      'traditional-doors': 'Traditional Doors',
      'modern-doors': 'Modern Doors',
      'carved-doors': 'Carved Doors',
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
      cnc: 'CNC కార్వింగ్',
      about: 'మా గురించి',
      contact: 'సంప్రదించండి',
    },
    cnc: {
      eyebrow: 'వర్క్‌షాప్ లోపల',
      title: 'ఖచ్చితమైన CNC కార్వింగ్',
      descriptionOne: 'కొన్ని డిజైన్లు మా CNC మెషీన్‌పై ప్రారంభమవుతాయి. అక్కడ వివరమైన నమూనాలు మరియు ప్యానెల్‌లు ఖచ్చితత్వంతో రూపుదిద్దుకుంటాయి.',
      descriptionTwo: 'చెక్కిన డోర్ ప్యానెల్‌ల నుండి కస్టమ్ నమూనాల వరకు, సున్నితమైన వివరాలను ఖచ్చితంగా తయారు చేయడంలో CNC కార్వింగ్ సహాయపడుతుంది.',
      cta: 'కస్టమ్ డిజైన్ గురించి అడగండి',
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
      descriptionTwo: 'మేము ప్రొద్దుటూరు, కడప మరియు ఆంధ్రప్రదేశ్‌లోని చుట్టుపక్కల ప్రాంతాల్లోని ఇళ్లకు సేవలు అందిస్తాము. మీకు నచ్చిన డిజైన్‌ను ఎంచుకోండి, మీ కొలతలు చెప్పండి — మేము దానిని మీ సైజు, చెక్క మరియు ఫినిష్‌కు తగ్గట్టు తయారు చేస్తాము.',
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
      'traditional-doors': 'సాంప్రదాయ ద్వారాలు',
      'modern-doors': 'ఆధునిక ద్వారాలు',
      'carved-doors': 'చెక్కిన ద్వారాలు',
      traditional: 'సాంప్రదాయ',
      modern: 'ఆధునిక',
      carved: 'చెక్కివేసిన',
      windows: 'కిటికీలు',
      furniture: 'ఫర్నిచర్',
      'pooja-mandirs': 'పూజా మందిరాలు',
      staircases: 'మెట్లు',
      partitions: 'పార్టిషన్స్',
      'custom-woodwork': 'కస్టమ్ వుడ్ వర్క్',
    },
    gallery: {
      emptyState: 'ఈ విభాగంలో ప్రాజెక్టులు ఇంకా అందుబాటులో లేవు.',
    },
    categoryNames: {
      'main-doors': 'ముఖ్య ద్వారాలు',
      'pooja-doors': 'పూజా ద్వారాలు',
      'double-doors': 'డబుల్ డోర్లు',
      'traditional-doors': 'సాంప్రదాయ ద్వారాలు',
      'modern-doors': 'ఆధునిక ద్వారాలు',
      'carved-doors': 'చెక్కిన ద్వారాలు',
      windows: 'కిటికీలు',
      'pooja-mandirs': 'పూజా మందిరాలు',
      furniture: 'ఫర్నిచర్',
      staircases: 'మెట్లు',
      partitions: 'పార్టిషన్లు',
      'custom-woodwork': 'కస్టమ్ వుడ్‌వర్క్',
    },
    categoryDescriptions: {
      'main-doors': 'ఇళ్లు మరియు విల్లాల కోసం ఆకర్షణీయమైన ప్రవేశ ద్వారాలు.',
      'pooja-doors': 'పూజా గదులు మరియు మందిరాల కోసం పవిత్రమైన డోర్ డిజైన్లు.',
      'double-doors': 'సమతుల్య ప్యానెల్‌లతో విశాలమైన డబుల్ డోర్ డిజైన్లు.',
      'traditional-doors': 'కాలాతీతమైన చెక్కడాలతో క్లాసిక్ భారతీయ శైలులు.',
      'modern-doors': 'ప్రీమియం చెక్క ఫినిష్‌లతో శుభ్రమైన ఆధునిక గీతలు.',
      'carved-doors': 'అలంకార చెక్కడం, ప్యానెల్ లోతు మరియు అలంకార వివరాలు.',
      'custom-woodwork': 'ప్రత్యేక స్థలాల కోసం కొలతలకు తగ్గట్టు తయారు చేసిన వుడ్‌వర్క్.',
      windows: 'క్లాసిక్ మరియు ఆధునిక నిష్పత్తులతో చెక్క కిటికీలు.',
      'pooja-mandirs': 'కస్టమ్ మందిర యూనిట్లు మరియు దేవాలయ వుడ్‌వర్క్.',
      furniture: 'నివాస ఇంటీరియర్‌ల కోసం ప్రత్యేకంగా తయారు చేసిన చెక్క ఫర్నిచర్.',
      staircases: 'చెక్క మెట్ల వివరాలు, రైలింగ్‌లు మరియు ట్రెడ్‌లు.',
      partitions: 'అలంకార చెక్క పార్టిషన్‌లు మరియు ఇంటీరియర్ స్క్రీన్‌లు.',
    },
    woodTypes: {
      'teak-wood': 'టేక్ చెక్క',
      'custom-wood': 'కస్టమ్ చెక్క',
    },
    projectTitles: {
      'traditional-teak-double-door-with-gold-carved-frame': 'బంగారు చెక్కిన ఫ్రేమ్‌తో సాంప్రదాయ టేక్ డబుల్ డోర్',
      'pooja-door-with-sacred-symbols-and-jaali-panels': 'పవిత్ర చిహ్నాలు మరియు జాలీ ప్యానెల్‌లతో పూజా ద్వారం',
      'classic-panelled-teak-door-with-leaf-carving': 'ఆకు చెక్కడంతో క్లాసిక్ ప్యానెల్ టేక్ డోర్',
      'teak-door-with-bold-grain-and-floral-corner-carvings': 'బలమైన గ్రెయిన్ మరియు పూల మూల చెక్కడాలతో టేక్ డోర్',
      'louvered-door-and-window-set-with-geometric-carved-frame': 'జ్యామితీయ చెక్కిన ఫ్రేమ్‌తో లూవర్ డోర్ మరియు కిటికీ సెట్',
      'custom-wooden-pooja-mandir': 'కస్టమ్ చెక్క పూజా మందిరం',
      'carved-teak-wardrobe-and-bed-set': 'చెక్కిన టేక్ వార్డ్‌రోబ్ మరియు బెడ్ సెట్',
      'wooden-staircase-with-carved-railing': 'చెక్కిన రైలింగ్‌తో చెక్క మెట్లు',
      'carved-wooden-partition-screen': 'చెక్కిన చెక్క పార్టిషన్ స్క్రీన్',
      'grand-ganesh-double-door-with-brass-jaali': 'ఇత్తడి జాలీతో గణేశ్ గ్రాండ్ డబుల్ డోర్',
      'traditional-teak-double-door-with-carved-medallions': 'చెక్కిన గుండ్రని మెడాలియన్‌లతో సాంప్రదాయ టేక్ డబుల్ డోర్',
      'floral-main-door-with-glass-sidelights': 'గాజు సైడ్‌లైట్‌లతో పూల డిజైన్ ప్రధాన ద్వారం',
      'polished-floral-vine-door': 'పాలిష్ చేసిన పూల తీగ చెక్కడంతో డోర్',
      'carved-pooja-door-frame-with-lakshmi-and-elephants': 'లక్ష్మీదేవి మరియు ఏనుగుల చెక్కడంతో పూజా డోర్ ఫ్రేమ్',
      'lord-venkateswara-carved-pooja-door': 'వేంకటేశ్వర స్వామి చెక్కడంతో పూజా ద్వారం',
      'polished-double-door-with-carved-medallion': 'చెక్కిన మెడాలియన్‌తో పాలిష్ చేసిన డబుల్ డోర్',
      'carved-door-with-lattice-panels-and-floral-medallion': 'జాలీ ప్యానెల్‌లు మరియు పూల మెడాలియన్‌తో చెక్కిన డోర్',
      'inside-the-workshop-cnc-carving-in-progress': 'వర్క్‌షాప్ లోపల: CNC కార్వింగ్ జరుగుతోంది',
    },
    projectDescriptions: {
      'pooja-door-with-sacred-symbols-and-jaali-panels': 'ఏనుగులు మరియు పవిత్ర చిహ్నాలైన ఓం, త్రిశూల్, స్వస్తిక్ చెక్కడంతో ఉన్న హెడర్, జ్యామితీయ జాలీ డబుల్ డోర్‌లు మరియు కమలం సైడ్‌లైట్ ప్యానెల్‌లతో పూజా ద్వారం. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'classic-panelled-teak-door-with-leaf-carving': 'లోతైన దీర్ఘచతురస్ర ప్యానెల్‌లు మరియు మధ్యలో ఆకు చెక్కడంతో, వెచ్చని టేక్ ఫినిష్‌లో క్లాసిక్ సింగిల్ డోర్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'teak-door-with-bold-grain-and-floral-corner-carvings': 'బలమైన సహజ టేక్ గ్రెయిన్, మూలల్లో పూల చెక్కడాలు మరియు గుండ్రని స్టడ్ వివరాలతో సింగిల్ డోర్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'louvered-door-and-window-set-with-geometric-carved-frame': 'జ్యామితీయ చెక్కిన ఫ్రేమ్‌లో లూవర్ డబుల్ డోర్ మరియు దానికి తగ్గ కిటికీ సెట్, హెడర్‌పై చెక్కిన శాసనంతో. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'custom-wooden-pooja-mandir': 'గుడి శైలి పైభాగం, చెక్కిన స్తంభాలు, ఇత్తడి గంటలు మరియు దీపాలు, విగ్రహాల కోసం స్థలంతో చేతితో తయారు చేసిన చెక్క పూజా మందిరం డిజైన్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'carved-teak-wardrobe-and-bed-set': 'చెక్కిన టేక్ వార్డ్‌రోబ్ మరియు దానికి తగ్గ బెడ్ హెడ్‌బోర్డ్‌తో ప్రత్యేక చెక్క ఫర్నిచర్ డిజైన్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'wooden-staircase-with-carved-railing': 'ఇంటి ఇంటీరియర్‌ల కోసం చెక్కిన రైలింగ్ మరియు బాలస్టర్ వివరాలతో చెక్క మెట్ల డిజైన్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'carved-wooden-partition-screen': 'వెలుతురు వెళ్లేలా చేస్తూ స్థలాలను వేరుచేసే చెక్కిన చెక్క జాలీ పార్టిషన్ డిజైన్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'grand-ganesh-double-door-with-brass-jaali': 'చెక్కిన గణేశ్ మరియు ఏనుగుల హెడర్, ఇత్తడి జాలీ ప్యానెల్‌లు మరియు రంగు గాజు సైడ్‌లైట్‌లతో గ్రాండ్ డబుల్ డోర్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'traditional-teak-double-door-with-carved-medallions': 'చెక్కిన గుండ్రని మెడాలియన్ ప్యానెల్‌లు, రింగ్ నాకర్‌లు మరియు చెక్కిన ఫ్రేమ్‌తో సాంప్రదాయ డబుల్ డోర్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'floral-main-door-with-glass-sidelights': 'పూల చెక్కడం మరియు పెయింట్ చేసిన పూల గాజు సైడ్‌లైట్‌లతో ప్రధాన ద్వారం, భద్రతా షట్టర్ డోర్‌లతో. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'polished-floral-vine-door': 'బంగారు రంగుతో హైలైట్ చేసిన అందమైన పూల తీగ చెక్కడంతో పాలిష్ చేసిన సింగిల్ డోర్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'carved-pooja-door-frame-with-lakshmi-and-elephants': 'హెడర్‌పై లక్ష్మీదేవి మరియు ఏనుగుల చెక్కడం, నెమలి స్తంభాల వివరాలతో చేతితో చెక్కిన పూజా డోర్ ఫ్రేమ్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'lord-venkateswara-carved-pooja-door': 'గుడి శైలి ఫ్రేమ్‌లో వేంకటేశ్వర స్వామి మరియు లక్ష్మీదేవి చెక్కడంతో చేతితో చెక్కిన పూజా ద్వారం. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'polished-double-door-with-carved-medallion': 'మధ్యలో చెక్కిన గుండ్రని మెడాలియన్ డిజైన్‌తో పాలిష్ చేసిన డబుల్ డోర్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'carved-door-with-lattice-panels-and-floral-medallion': 'జాలీ ప్యానెల్‌లు, ఆకుల చెక్కడం మరియు మధ్యలో పూల మెడాలియన్‌తో చెక్కిన డోర్. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
      'inside-the-workshop-cnc-carving-in-progress': 'కస్టమ్ ప్రాజెక్ట్ కోసం చెక్క ప్యానెల్ రూపుదిద్దుకుంటున్న వర్క్‌షాప్ లోపలి దృశ్యం. కస్టమ్ సైజులు, ఫినిష్‌లు మరియు చెక్కడం వివరాలు అందుబాటులో ఉన్నాయి.',
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
