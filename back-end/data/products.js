const products = [
  // Bikes //
  // Mountain bikes
  {
    name: 'Vitus Sentier 27 VR Mountain Bike',
    price: 1099,
    description:
      "Ready for fast and fun hardtail trail riding, the Vitus Sentier 27 VR Mountain Bike (2021) is a multi-award winning model that's capable, playful and confident over all terrain",
    images: [
      '/images/cycle/mountain-bikes/Vitus-Sentier:image1.jpg',
      '/images/cycle/mountain-bikes/Vitus-Sentier:image2.jpg',
      '/images/cycle/mountain-bikes/Vitus-Sentier:image3.jpg',
      '/images/cycle/mountain-bikes/Vitus-Sentier:image4.jpg',
    ],
    stock: 10,
    size: [{ small: 2, medium: 3, large: 5 }],
    reviews: [],
    brand: 'Vitus',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'Graphite',
  },
  {
    name: 'Nukeproof Giga 290 Elite Carbon Bike (SLX - 2021)',
    price: 4599,
    description:
      "The Nukeproof Giga 290 Elite Carbon Bike (SLX) features a carbon frame that's equipped with Fox Performance suspension, a Shimano SLX 12-Speed groupset and a 29' DT Swiss E1900 Spline wheelset wrapped in Michelin Wild Enduro tyres.Ready for fast and fun hardtail trail riding, the Vitus Sentier 27 VR Mountain Bike (2021) is a multi-award winning model that's capable, playful and confident over all terrain",
    images: [
      '/images/cycle/mountain-bikes/Nukeproof_Giga:image1.jpg',
      '/images/cycle/mountain-bikes/Nukeproof_Giga:image2.jpg',
      '/images/cycle/mountain-bikes/Nukeproof_Giga:image3.jpg',
      '/images/cycle/mountain-bikes/Nukeproof_Giga:image4.jpg',
    ],
    stock: 22,
    size: [{ small: 10, medium: 8, large: 4 }],
    reviews: [],
    brand: 'Nukeproof',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'Bullet Grey',
  },
  {
    name: 'Fuji Nevada 29 1.7 Hardtail Bike (2021)',
    price: 649,
    description:
      "The Nukeproof Giga 290 Elite Carbon Bike (SLX) features a carbon frame that's equipped with Fox Performance suspension, a Shimano SLX 12-Speed groupset and a 29' DT Swiss E1900 Spline wheelset wrapped in Michelin Wild Enduro tyres.Ready for fast and fun hardtail trail riding, the Vitus Sentier 27 VR Mountain Bike (2021) is a multi-award winning model that's capable, playful and confident over all terrain",
    images: [
      '/images/cycle/mountain-bikes/Fuji-Nevada:image1.jpg',
      '/images/cycle/mountain-bikes/Fuji-Nevada:image2.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [],
    brand: 'Fuji',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'Satin Grey',
  },
  {
    name: 'Commencal Meta HT AM Origin 29 Hardtail Bike (2021)',
    price: 1249,
    description:
      'TA rider favourite year after year, the Commencal Meta HT AM Origin 29 Hardtail Bike (2021) features updated geometry to suit the needs of modern riders and modern MTB components.',
    images: [
      '/images/cycle/mountain-bikes/Meta-HT-Origin:image1.jpg',
      '/images/cycle/mountain-bikes/Meta-HT-Origin:image2.jpg',
      '/images/cycle/mountain-bikes/Meta-HT-Origin:image3.jpg',
    ],
    stock: 9,
    size: [{ small: 3, medium: 3, large: 3 }],
    reviews: [],
    brand: 'Commencal Meta HT',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'British Racing Green',
  },
  {
    name: 'Ghost Lanao Base 27.5 Hardtail Bike (2021)',
    price: 499,
    description:
      "The Ghost Lanao Base 27.5 Hardtail Bike features female optimised geometry to provide outstanding comfort and control, plus, it's equipped with SR Suntour suspension, a Shimano Tourney 3x7-Speed drivetrain and disc brakes..",
    images: ['/images/cycle/mountain-bikes/Ghost-Lanao:image1.jpg'],
    stock: 3,
    size: [{ small: 0, medium: 3, large: 0 }],
    reviews: [],
    brand: 'Ghost',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'Dust - Mud',
  },
  {
    name: 'GT Aggressor Expert 29 Hardtail Bike (2021)',
    price: 449,
    description:
      'Ready for technical trail descents and long rides in the mountains, the GT Aggressor Expert 29 Hardtail Bike can handle it all. Its tough and light aluminium frame is combined with reliable MicroShift gears and Tektro disc brakes.',
    images: [
      '/images/cycle/mountain-bikes/GT Aggressor:image1.jpg',
      '/images/cycle/mountain-bikes/GT Aggressor:image2.jpg',
      '/images/cycle/mountain-bikes/GT Aggressor:image3.jpg',
    ],
    stock: 21,
    size: [{ small: 10, medium: 0, large: 11 }],
    reviews: [],
    brand: 'GT',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'Blue',
  },
  // Hybrid bikes
  {
    name: 'Vitus Mach 3 VR Urban Bike (Claris - 2021)',
    price: 579,
    description:
      "The Vitus Mach 3 VR Urban Bike (Claris - 2021) is a modern 700c wheel hybrid bike that's capable of challenging your fitness.",
    images: [
      '/images/cycle/hybrid-bikes/Vitus-Mach:image1.jpg',
      '/images/cycle/hybrid-bikes/Vitus-Mach:image2.jpg',
      '/images/cycle/hybrid-bikes/Vitus-Mach:image3.jpg',
    ],
    stock: 8,
    size: [{ small: 0, medium: 3, large: 5 }],
    reviews: [],
    brand: 'Vitus',
    subcategory: 'Hybrid bikes',
    category: 'cycle',
    colour: 'Nardo Grey',
  },
  {
    name: 'Fuji Declaration Urban Bike (2021)',
    price: 449,
    description:
      'With a less aggressive riding position than the Feather model, the Fuji Declaration Urban Bike is built to own the urban jungle. Its steel frameset provides a comfortable ride and the rear wheel offers you a fixed or freewheel option.',
    images: [
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image1.jpg',
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image2.jpg',
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image3.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [],
    brand: 'Fuji',
    subcategory: 'Hybrid bikes',
    category: 'cycle',
    colour: 'Khaki green',
  },
  {
    name: 'Fuji Declaration Urban Bike (2021)',
    price: 449,
    description:
      'With a less aggressive riding position than the Feather model, the Fuji Declaration Urban Bike is built to own the urban jungle. Its steel frameset provides a comfortable ride and the rear wheel offers you a fixed or freewheel option.',
    images: [
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image1.jpg',
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image2.jpg',
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image3.jpg',
    ],
    stock: 31,
    size: [{ small: 20, medium: 2, large: 9 }],
    reviews: [],
    brand: 'Fuji',
    subcategory: 'Hybrid bikes',
    category: 'cycle',
    colour: 'Khaki green',
  },
  {
    name: 'Cube SL Road Bike (2021)',
    price: 849,
    description:
      'Created to get you from A to B quickly, the Cube SL Road Bike brings you cycling in its purest form with minimum fuss. Its light, efficient aluminium frame is backed up by reliable Shimano Tourney gears and powerful Tektro disc brakes.',
    images: [
      '/images/cycle/hybrid-bikes/Cube-SL:image1.jpg',
      '/images/cycle/hybrid-bikes/Cube-SL:image2.jpg',
      '/images/cycle/hybrid-bikes/Cube-SL:image3.jpg',
    ],
    stock: 3,
    size: [{ small: 2, medium: 1, large: 0 }],
    reviews: [],
    brand: 'Cube',
    subcategory: 'Hybrid bikes',
    category: 'cycle',
    colour: 'Iridium - Black',
  },
  // road bikes //
  {
    name: 'Vitus Vitesse EVO CRS Road Bike (Ultegra - 2021)',
    price: 2999,
    description:
      'Setting the standard for other race-ready bikes, the Vitus Vitesse Evo CRS Road Bike brings you ultra-efficient power transfer. It has a full carbon frameset, a slick-shifting Shimano Ultegra groupset and carbon Reynolds AR29 wheels.',
    images: [
      '/images/cycle/road-bikes/Vitus-Vitesse:image1.jpg',
      '/images/cycle/road-bikes/Vitus-Vitesse:image2.jpg',
      '/images/cycle/road-bikes/Vitus-Vitesse:image3.jpg',
    ],
    stock: 7,
    size: [{ small: 0, medium: 2, large: 5 }],
    reviews: [],
    brand: 'Vitus',
    subcategory: 'Road bikes',
    category: 'cycle',
    colour: 'Blue Chameleon',
  },
  {
    name: 'Zannata Z25 Road Bike',
    price: 499,
    description:
      'Bringing you responsive handling and efficient power delivery, the Zannata Z25 Road Bike is ideal for new road cyclists. Its light aluminium frame is built up with reliable Shimano Claris 3x8 gearing and Velox Roadrunner wheels.',
    images: [
      '/images/cycle/road-bikes/Zannata-Z25:image1.jpg',
      '/images/cycle/road-bikes/Zannata-Z25:image2.jpg',
      '/images/cycle/road-bikes/Zannata-Z25:image3.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [],
    brand: 'Zannata',
    subcategory: 'Road bikes',
    category: 'cycle',
    colour: 'Yellow',
  },
  {
    name: 'Fuji Transonic 1.1 Road Bike (2021)',
    price: 6999,
    description:
      'The Fuji Transonic 1.1 Road Bike features a quality C15 Ultra High-Modulus carbon frameset, a SRAM 2x12 Force eTap wireless electronic groupset with hydraulic disc brakes while rolling on carbon Vision wheels and Vittoria Corsa tyres.',
    images: [
      '/images/cycle/road-bikes/Fuji:image1.jpg',
      '/images/cycle/road-bikes/Fuji:image2.jpg',
    ],
    stock: 2,
    size: [{ small: 2, medium: 30, large: 0 }],
    reviews: [],
    brand: 'Fuji',
    subcategory: 'Road bikes',
    category: 'cycle',
    colour: 'Satin Carbon - Black',
  },
  {
    name: 'Fuji Transonic 2.3 Road Bike (2021)',
    price: 3499,
    description:
      'The Fuji Transonic 2.3 Road Bike is a fast, agile and reliable race bike that features a full C10 carbon frameset, a Shimano 105 2x11 groupset, hydraulic disc brakes and Oval Concepts wheels wrapped in Vittoria Zaffiro Pro V tyres.',
    images: [
      '/images/cycle/road-bikes/Fuji2.3:image1.jpg',
      '/images/cycle/road-bikes/Fuji2.3:image2.jpg',
    ],
    stock: 2,
    size: [{ small: 2, medium: 0, large: 0 }],
    reviews: [],
    brand: 'Fuji',
    subcategory: 'Road bikes',
    category: 'cycle',
    colour: 'Satin Carbon - Black',
  },

  {
    name: 'De Rosa IDOL Ultegra Racing500Disc Grey 46.2',
    price: 2959,
    description:
      'The De Rosa Idol Racing 500 Disc Ultegra Road Race Bike features a high-end carbon fibre construction, exceptional performing Shimano Ultegra mechanical drivetrain and hydraulic disc brakes.',
    images: [
      '/images/cycle/road-bikes/DeRosa_IDOL:image1.jpg',
      '/images/cycle/road-bikes/DeRosa_IDOL:image2.jpg',
      '/images/cycle/road-bikes/DeRosa_IDOL:image3.jpg',
      '/images/cycle/road-bikes/DeRosa_IDOL:image4.jpg',
    ],
    stock: 17,
    size: [{ small: 0, medium: 12, large: 5 }],
    reviews: [],
    brand: 'De Rosa',
    subcategory: 'Road bikes',
    category: 'cycle',
    colour: ' Red',
  },
  // helmets //
  {
    name: 'Abus Macator Road Cycling Helmet',
    price: 39,
    description:
      "An entry-level cycle helmet, the Macator Road Helmet offers superb levels of protection alongside a stylish design. Whether just getting into the sporting side of cycling or looking for a commuter lid, it's a great choice.",
    images: [
      '/images/cycle/helmets/Abus-Macator:image1.jpg',
      '/images/cycle/helmets/Abus-Macator:image2.jpg',
    ],
    stock: 7,
    size: [{ small: 1, medium: 2, large: 4 }],
    reviews: [],
    brand: 'Abus',
    subcategory: 'Helmets',
    category: 'cycle',
    colour: 'Black',
  },
  {
    name: 'Kask Protone Road Helmet',
    price: 185,
    description:
      "First seen worn by WorldTour professional cyclists, the Kask Protone Road Cycle Helmet proves that a cycling helmet can be both breathable and aerodynamic. Offering incredible comfort, this is a bike helmet you'll want to use for training and racing.",
    images: [
      '/images/cycle/helmets/Kask-Protone:image1.jpg',
      '/images/cycle/helmets/Kask-Protone:image1.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [],
    brand: 'Kask',
    subcategory: 'Helmets',
    category: 'cycle',
    colour: 'White',
  },
];

export default products;
