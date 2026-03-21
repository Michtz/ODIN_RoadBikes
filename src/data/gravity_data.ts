export interface FrameData {
  versions: {
    name: string;
    model: string;
    size: string;
    weight: string;
    rigidity: {
      headtube: string;
      bottomBracket: string;
      dropout: string;
    };
  }[];
  testItems: {
    name: string;
    status: string;
    standard: string;
  }[];
  details: {
    label: string;
    value: string;
  }[];
  description: string[];
  keywords: string[];
}

export interface Details {
  frame: string;
  color: string;
  settings: string;
  components: string;
  service: string;
}
export interface GeometryData {
  firstText: string;
  details: Details;
  imageUrlGeometry: string;
  imageUrlFrame: string;
  imageAlt: string;
  headers: string[];
  rows: string[][];
}

export const gravityData: FrameData = {
  versions: [
    {
      name: 'Normal Weight Version (Latex)',
      model: '316',
      size: '560',
      weight: '1008 (Including Fittings)',
      rigidity: {
        headtube: '116',
        bottomBracket: '181',
        dropout: '63',
      },
    },
    {
      name: 'Light Weight Version (Latex)',
      model: '316',
      size: '560',
      weight: '890 (Including Fittings)',
      rigidity: {
        headtube: '116',
        bottomBracket: '181',
        dropout: '70',
      },
    },
  ],
  testItems: [
    {
      name: 'Drop Impact Test',
      status: 'pass',
      standard: 'EN raised to 256 height',
    },
    {
      name: 'Front Forward Test',
      status: 'pass',
      standard: 'EN raised to 300 height',
    },
    { name: 'Back Forward Test', status: 'pass', standard: '250 height' },
    {
      name: 'Disc Brake Fatigue Test',
      status: 'pass',
      standard: 'Standard 24000 times for each 600N/800N',
    },
    {
      name: 'Vertical Force Fatigue Test of Frame Seattube',
      status: 'pass',
      standard: 'EN standard 122kgf 500000 times',
    },
    {
      name: 'Horizontal Force Fatigue Test of Frame',
      status: 'pass',
      standard: 'EN standard +122.4kgf/-61.2kgf 50000 times',
    },
    {
      name: 'Fatigue Test of Frame Treading Force',
      status: 'pass',
      standard: '122kg f 100000 times',
    },
    {
      name: 'Seattube Strength Test',
      status: 'pass',
      standard: '300kg f above',
    },
    { name: 'Headtube Strength Test', status: 'pass', standard: '300kgf ↑' },
    {
      name: 'BottomBracket Compression Test',
      status: 'pass',
      standard: '500kgf ↑',
    },
    {
      name: 'Vibration Fatigue Load Test',
      status: 'pass',
      standard: 'EN standard ST:30kg/BB:22.5kg/HT:10kg 30000 times',
    },
  ],
  details: [
    { label: 'Material', value: 'Toray prepreg' },
    {
      label: 'Headset size',
      value: 'top 1-1/2 down 1-1/2 (special used headset)',
    },
    { label: 'Seatpost', value: '400mm (special used)' },
    {
      label: 'Handlebar',
      value:
        'monocoque handlebar matched with Tien Hsin(FSA-ACR) full internal cable routing',
    },
    { label: 'BB', value: 'BB86' },
    { label: 'Size', value: '46/49/52/54/56/58' },
    { label: 'Brake', value: 'Flat mount Disc Brake' },
    {
      label: 'Fork spacer',
      value: '100*12mm (Flat mount disc brake 140 and 160 interchange)',
    },
    { label: 'Frame rear spacer', value: '142*12mm (Flat mount disc brake)' },
    { label: 'Cable routing', value: 'full internal cable routing' },
    { label: 'Max tire', value: '700*32C' },
  ],
  description: [
    'The carbon endurance bike frame is a high-performance and lightweight component designed for long-distance cycling. Made from advanced carbon fiber materials, it offers excellent durability and rigidity while keeping the weight to a minimum.',
    'This bike frame is engineered to provide a smooth and comfortable ride, even on challenging terrains. Its aerodynamic shape reduces wind resistance, allowing you to ride faster with less effort.',
    'The carbon endurance bike frame also features precise handling and stability, ensuring a safe and enjoyable cycling experience. It is compatible with a wide range of components, allowing you to customize your bike to your specific needs.',
    'Whether you are a professional cyclist or an enthusiast, this carbon endurance bike frame is an ideal choice for those looking to push their limits and take on long rides with confidence.',
  ],
  keywords: [
    'carbon gravel bike frame',
    'carbon MTB bike frame',
    'carbon road bike fork',
    'carbon kids bike',
    'disc brake road bike frame',
  ],
};

export const gravityGeometry: GeometryData = {
  firstText:
    'Das Wort „Gravity“ sagt es schon: Schwerkraft! Dieser Rahmen zeichnet sich besonders durch sein geringes Gewicht und seine Steifigkeit im Tretlagerbereich aus, wodurch du mit diesem Fahrrad bestens für Bergauffahrten gerüstet bist. Mit diesem Rahmen ist es möglich, ein Fahrrad mit einem Gewicht von unter 6 kg zu bauen! Diese Fahrräder werden ausschließlich in Kombination mit einer Lackierung deiner Wahl verkauft! Alles ist möglich!',
  details: {
    frame:
      'Der Rahmen aus dem hochwertigsten Taroy-Carbon, das auf dem Markt erhältlich ist, ermöglicht es, diesen Rahmen steif und leicht zu gestalten! Mit einer Geometrie, die perfekt dafür geeignet ist, die Berge hinaufzufahren.',
    color:
      'Jede Farbe ist möglich! Entwerfen Sie Ihren eigenen Rahmen und lassen Sie sich von allem inspirieren, was auf dem Markt ist. Von diesem Fahrrad wird es weltweit nur ein einziges Exemplar geben!',
    components:
      'Shimano oder Sram – kein Problem. Sie wählen gemeinsam mit uns die Komponenten aus, die am besten zu Ihnen passen. Wir sind da, um Sie bei der besten Wahl zu unterstützen! Auch beim Thema Laufräder ist alles möglich! Für das beste Preis-Leistungs-Verhältnis bauen wir die Laufräder selbst für Sie, mit Naben, Speichen und Felgen Ihrer Wahl!',
    settings:
      'Vielleicht das Wichtigste von allem: das Bikefitting! Jedes Fahrrad, das von uns gebaut wird, wird nach Mass gefertigt und anschließend in unserem Bikefitting-Räumlichkeiten millimetergenau eingestellt. Mit der Technik von Gebiomized können wir Ihr Fahrrad perfekt auf Sie abstimmen.',
    service:
      'Jedes Fahrrad ist uns ein Herzensanliegen. Deshalb ist es uns wichtig, dass die Fahrräder in Topzustand bleiben. In unserer modernen Werkstatt tun wir daher alles, um Ihr Fahrrad in Topzustand zu halten! Ihr Fahrrad ist auch für uns wichtig!',
  },
  imageUrlGeometry:
    'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774096124/gravity_frame_geometry_1600px_qviwsv.png',
  imageUrlFrame:
    'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774102582/odin_frame_yellow_gravity_ai_transparent_u5fvyw.png',
  imageAlt: 'Gravity OdinBike',
  headers: [
    'SIZE',
    'ST',
    'TT',
    'HT',
    'HA',
    'CA',
    'BB',
    'RC',
    'FC',
    'OFFSETE',
    'WB',
    'STACK',
    'REACH',
  ],
  rows: [
    [
      '46',
      '435',
      '501',
      '95',
      '70.5°',
      '75.5°',
      '72',
      '406',
      '574',
      '45',
      '968',
      '502',
      '371',
    ],
    [
      '49',
      '445',
      '515',
      '105',
      '71°',
      '75°',
      '72',
      '406',
      '579',
      '45',
      '974',
      '513',
      '378',
    ],
    [
      '52',
      '465',
      '531',
      '115',
      '71.5°',
      '74°',
      '72',
      '406',
      '582',
      '45',
      '977',
      '524',
      '380',
    ],
    [
      '54',
      '485',
      '543',
      '135',
      '72°',
      '74°',
      '72',
      '406',
      '591',
      '45',
      '984',
      '545',
      '386',
    ],
    [
      '56',
      '505',
      '562',
      '155',
      '72.5°',
      '73.5°',
      '72',
      '406',
      '599',
      '45',
      '985',
      '565',
      '395',
    ],
    [
      '58',
      '525',
      '577',
      '175',
      '72.5°',
      '73.5°',
      '72',
      '406',
      '615',
      '45',
      '1010',
      '585',
      '404',
    ],
  ],
};
