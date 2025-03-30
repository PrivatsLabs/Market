import { v4 as uuidv4 } from 'uuid';

export const categories = [
  {
    name: 'Samsung',
    initial: 'S',
    color: 'blue',
    url: '/samsung'
  },
  {
    name: 'Iphone',
    initial: 'I',
    color: 'grey',
    url: '/iphone'
  },
  {
    name: 'Redmi',
    initial: 'R',
    color: 'orange',
    url: '/redmi'
  },
  {
    name: 'Tecno',
    initial: 'T',
    color: '#304FFE',
    url: '/tecno'
  },
  {
    name: 'Infinix',
    initial: 'I',
    color: 'cyan',
    url: '/infinix'
  },




  // Ajoutez d'autres produits ici si nécessaire
];

export const recommander = [
  {
    id: uuidv4(),
    name: 'Samsung M33',
    details: '128 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,4 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 90Hz.  Processeur: MediaTek Helio G80(12 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 8GB de RAM et 128GB de stockage interne, extensible via microSD. Caméra principale: Quad caméra avec un capteur principal de 64 MP, un ultra grand - angle de 8 MP, un macro de 2 MP et un capteur de profondeur de 2 MP.  Caméra frontale: 20 MP.  Batterie : 5000 mAh avec une charge rapide de 25W",
    prix: '140 000',
    last_prix: '150 000',
    quantity: 1,

    url: 'https://fr.shopping.rakuten.com/photo/handy-samsung-galaxy-m32-m325-6-128gb-4g-ds-white-1951876372_L_NOPAD.jpg',
    url2: "https://fr.shopping.rakuten.com/photo/handy-samsung-galaxy-m32-m325-6-128gb-4g-ds-white-1951876372_L_NOPAD.jpg",
    url3: 'https://fr.shopping.rakuten.com/photo/handy-samsung-galaxy-m32-m325-6-128gb-4g-ds-white-1951876372_L_NOPAD.jpg',

  },
  {
    id: uuidv4(),
    name: 'Iphone 12 Pro',
    details: '128 GB',
    long_details: "L'iPhone 12 Pro est le modèle haut de gamme de la 14e génération de smartphone d'Apple annoncé le 13 octobre 2020. Il est équipé d'un écran de 6,1 pouces OLED HDR 60 Hz, d'un triple capteur photo avec ultra grand-angle et téléobjectif (x4 optique) et d'un SoC Apple A14 Bionic compatible 5G (sub-6 GHz).",
    prix: '240 000',
    last_prix: '260 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/56/b2/bd/12431958/1540-1/tsp20241015092614/Apple-iPhone-12-Pro-6-1-128-Go-Double-SIM-5G-Bleu-pacifique.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/56/b2/bd/12431958/1541-1/tsp20241015092614/Apple-iPhone-12-Pro-6-1-128-Go-Double-SIM-5G-Bleu-pacifique.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/56/b2/bd/12431958/1541-2/tsp20241015092614/Apple-iPhone-12-Pro-6-1-128-Go-Double-SIM-5G-Bleu-pacifique.jpg',
  },
  {

    id: uuidv4(),
    name: 'Samsung A23',
    details: '128 GO 6 GO ',
    long_details: "Le Samsung Galaxy A23  est un modèle d'entrée de gamme qui s'équipe d'un écran de 6,6 pouces, animé par un SoC Qualcomm Snapdragon 695, couplé jusqu'à 4 Go de RAM et 128 Go de stockage extensible jusqu'à 1 To via microSD. Il possède 4 capteurs photo à l'arrière : un grand-angle de 50 mégapixels (avec stabilisation otique), un ultra grand-angle de 5 mégapixels, un objectif macro et un capteur de profondeur de 2 mégapixels chacun. Il a une batterie de 5 000 mAh compatible charge rapide (25 W). ",
    prix: '120 000',
    last_prix: '140 000',
    quantity: 1,

    url: 'https://m.media-amazon.com/images/I/71EwZmcNkTL._AC_SX679_.jpg',
    url2: "https://m.media-amazon.com/images/I/619-fCUEg0L._AC_SX679_.jpg",
    url3: 'https://m.media-amazon.com/images/I/41axag8gnqL._AC_SX679_.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 15 Pro Max ',
    details: '256 GO ',
    long_details: "Écran : LTPO Super Retina XDR OLED de 6,7 pouces avec une résolution de 2796 x 1290 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz. Processeur : Puce A17 Pro avec un CPU à 6 cœurs et un GPU à 6 cœurs. Mémoire : Disponible en versions avec 256GB de stockage interne, non extensible. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 12 MP et un téléobjectif périscope de 12 MP avec zoom optique 5x. Caméra frontale : 12 MP. Batterie : 4441 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W",
    prix: '620 000',
    last_prix: '640 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/19/f1/52/22212889/3756-1/tsp20241105220901/Apple-iPhone-15-Pro-Max-6-7-5G-Double-SIM-1-To-Noir-Titanium.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/19/f1/52/22212889/1520-2/tsp20241105220901/Apple-iPhone-15-Pro-Max-6-7-5G-Double-SIM-1-To-Noir-Titanium.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/19/f1/52/22212889/1520-4/tsp20241105220901/Apple-iPhone-15-Pro-Max-6-7-5G-Double-SIM-1-To-Noir-Titanium.jpg',

  },
  {
    id: uuidv4(),
    name: 'Xiaomi Redmi Note 13 Pro ',
    details: '512 GO 12 GO',
    long_details: "Écran : AMOLED de 6,67 pouces avec une résolution de 1220 x 2712 pixels et un taux de rafraîchissement de 120Hz. Processeur : Qualcomm Snapdragon 7s Gen 2 (4 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 12GB de RAM et 512GB de stockage interne, non extensible. Caméra principale : Triple caméra avec un capteur principal de 200 MP, un ultra grand-angle de 8 MP et un capteur macro de 2 MP. Caméra frontale : 16 MP. Batterie : 5100 mAh avec charge rapide de 67W.",
    prix: '165 000',
    last_prix: '175 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/11/2e/5a/22687249/3756-1/tsp20241023172704/Smartphone-Xiaomi-Redmi-Note-13-Pro-6-67-Double-SIM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/11/2e/5a/22687249/1520-1/tsp20241023172704/Smartphone-Xiaomi-Redmi-Note-13-Pro-6-67-Double-SIM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/11/2e/5a/22687249/1520-2/tsp20241023172704/Smartphone-Xiaomi-Redmi-Note-13-Pro-6-67-Double-SIM-256-Go-Noir.jpg',
  
  },
  {
    id: uuidv4(),
    name: 'Iphone 16 ',
    details: '256 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,1 pouces avec une résolution de 2556 x 1179 pixels et un taux de rafraîchissement de 60Hz2. Processeur : Puce A18 avec un CPU à 6 cœurs et un GPU à 5 cœurs2. Mémoire : Disponible en versions avec 256GB de stockage interne2. Caméra principale : Double caméra avec un capteur principal de 48 MP (ouverture f/1.6) et un ultra grand-angle de 12 MP (ouverture f/2.2)2. Caméra frontale : 12 MP avec ouverture f/1.92. Batterie : 3561 mAh avec charge rapide de 25W2.",
    prix: '735 000',
    last_prix: '755 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/fe/47/66/23480318/3756-1/tsp20241105222053/Apple-iPhone-16-6-1-5G-128-Go-Double-SIM-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/fe/47/66/23480318/1520-3/tsp20241105222053/Apple-iPhone-16-6-1-5G-128-Go-Double-SIM-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/fe/47/66/23480318/1520-4/tsp20241105222053/Apple-iPhone-16-6-1-5G-128-Go-Double-SIM-Noir.jpg',

  },
  {
    id: uuidv4(),
    name: 'Xiaomi Redmi Note 11 ',
    details: '128 GO 6 GO' ,
    long_details: "Écran : AMOLED de 6,43 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 90Hz. Processeur : Qualcomm Snapdragon 680 4G (6 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 6GB de RAM et 128GB de stockage interne, extensible via microSD. Caméra principale : Quad caméra avec un capteur principal de 50 MP, un ultra grand-angle de 8 MP, un capteur macro de 2 MP et un capteur de profondeur de 2 MP. Caméra frontale : 13 MP. Batterie : 5000 mAh avec charge rapide de 33W.",
    prix: '75 000',
    last_prix: '85 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/84/ca/11/17943172/1505-1/tsp20241106020044/Smartphone-Xiaomi-Redmi-Note-11-6-43-Double-SIM-4-Go-RAM-128-Go-Gris-graphite.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/84/A8/1C/11/17943172-3-1520-2/tsp20241106020044/Smartphone-Xiaomi-Redmi-Note-11-6-43-Double-SIM-4-Go-RAM-128-Go-Gris-graphite.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/84/ca/11/17943172/1520-4/tsp20241106020044/Smartphone-Xiaomi-Redmi-Note-11-6-43-Double-SIM-4-Go-RAM-128-Go-Gris-graphite.jpg',
  
  },
  // Ajoutez d'autres produits ici si nécessaire
];

export const telephones = {
  iPhone: [

  {
    id: uuidv4(),
    name: 'Iphone X',
    details: 'couleur Blanc, 64GB',
    long_details: "Avec l’iPhone X, Apple vous réserve tout un tas d’innovations. Le nouveau flagship dispose d’un très grand écran OLED et se débloque via la reconnaissance faciale. Avec Animojis, les frontières entre les smileys et les images se confondent.",
    prix: '100 000',
    last_prix: '120 000',
    quantity: 1,
    url: 'https://th.bing.com/th/id/OIP.JgY9S2kRihz1isDTwYa9KgHaHa?rs=1&pid=ImgDetMain',
    url2: "https://montelephone.fr/6482-large_default/iphone-x-64-go-argent.jpg",
    url3: "https://cdn.tout-pour-phone.com/29159-thickbox_default/iphone-xs-blanc-256gb-reconditionne-grade-a.jpg",
  },
  {
    id: uuidv4(),
    name: 'Iphone X',
    details: 'couleur Blanc, 256GB',
    long_details: "Avec l’iPhone X, Apple vous réserve tout un tas d’innovations. Le nouveau flagship dispose d’un très grand écran OLED et se débloque via la reconnaissance faciale. Avec Animojis, les frontières entre les smileys et les images se confondent.",
    prix: '110 000',
    last_prix: '130 000',
    quantity: 1,
    url: 'https://th.bing.com/th/id/OIP.JgY9S2kRihz1isDTwYa9KgHaHa?rs=1&pid=ImgDetMain',
    url2: "https://montelephone.fr/6482-large_default/iphone-x-64-go-argent.jpg",
    url3: "https://cdn.tout-pour-phone.com/29159-thickbox_default/iphone-xs-blanc-256gb-reconditionne-grade-a.jpg",
  
  },
  {
    id: uuidv4(),
    name: 'Iphone XR',
    details: '64GB',
    long_details: "Liquid Retina HD de 6,1 pouces (LCD), résolution 1792 x 828 pixels. Puce A12 Bionic avec Neural Engine pour des performances rapides et fluides. Enregistrement 4K jusqu'à 60 ips, ralenti 1080p à 240 ips. Noir, Blanc, Bleu, Jaune, Corail, Rouge (Product RED).",
    prix: '130 000',
    last_prix: '150 000',
    quantity: 1,
    url: 'https://cdn.idealo.com/folder/Product/6306/5/6306559/s1_produktbild_gross/apple-iphone-xr-64gb-schwarz.jpg',
    url2: "https://cdn.idealo.com/folder/Product/6306/5/6306559/s1_produktbild_gross_2/apple-iphone-xr-64gb-schwarz.jpg",
    url3: "https://cdn.idealo.com/folder/Product/6306/5/6306559/s1_produktbild_gross_3/apple-iphone-xr-64gb-schwarz.jpg",
  },
  {
    id: uuidv4(),
    name: 'Iphone XR',
    details: '128 GB',
    long_details: "Liquid Retina HD de 6,1 pouces (LCD), résolution 1792 x 828 pixels. Puce A12 Bionic avec Neural Engine pour des performances rapides et fluides. Enregistrement 4K jusqu'à 60 ips, ralenti 1080p à 240 ips. Noir, Blanc, Bleu, Jaune, Corail, Rouge (Product RED).",
    prix: '140 000',
    last_prix: '160 000',
    quantity: 1,
    url: 'https://cdn.idealo.com/folder/Product/6306/5/6306559/s1_produktbild_gross/apple-iphone-xr-64gb-schwarz.jpg',
    url2: "https://cdn.idealo.com/folder/Product/6306/5/6306559/s1_produktbild_gross_2/apple-iphone-xr-64gb-schwarz.jpg",
    url3: "https://cdn.idealo.com/folder/Product/6306/5/6306559/s1_produktbild_gross_3/apple-iphone-xr-64gb-schwarz.jpg",
  },
  {
    id: uuidv4(),
    name: 'Iphone Xs Max',
    details: '64 GB',
    long_details: "Caméra TrueDepth, reconnaissance faciale 3D pour un déverrouillage plus rapide, Face ID, zoom de la caméra optique. 6,5 pouces / 16,51 cm. Encoche d’affichage, Dolby Vision, Écran HDR, HDR 10, capteur tactile 120 Hz, Always On Display, Affichage Super Retina HD, True Tone.",
    prix: '135 000',
    last_prix: '160 000',
    quantity: 1,
    url: 'https://urbanglobal.co.nz/wp-content/uploads/2021/08/Apple-iPhone-XS-Max-Goldd.jpg',
    url2: "https://th.bing.com/th/id/OIP.vjHuQq-Rf5BybhM9x3snGQHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1,5",
  },
  {
    id: uuidv4(),
    name: 'Iphone Xs Max',
    details: '256 GB',
    long_details: "Caméra TrueDepth, reconnaissance faciale 3D pour un déverrouillage plus rapide, Face ID, zoom de la caméra optique. 6,5 pouces / 16,51 cm. Encoche d’affichage, Dolby Vision, Écran HDR, HDR 10, capteur tactile 120 Hz, Always On Display, Affichage Super Retina HD, True Tone.",
    prix: '150 000',
    last_prix: '170 000',
    quantity: 1,
    url: 'https://www.bing.com/th?id=OIP.PX36ZvysSzx74XNC0_9W0gHaHa&w=185&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    url2: "https://www.bing.com/th?id=OIP.vfwBrI3eQ6XWI0T5FGLQtwHaHa&w=185&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
  {
    id: uuidv4(),
    name: 'Iphone 11 ',
    details: '64 GB',
    long_details: "Caméra TrueDepth, zoom de la caméra optique, reconnaissance faciale 3D pour un déverrouillage plus rapide, Wi-Fi 6(ax), Face ID, processeur A13 Bionic très rapide. Dolby Vision, True Tone, HDR 10, encoche d’affichage, écran Liquid Retina HD. résistant aux rayures, hydrofuge.",
    prix: '155 000',
    last_prix: '170 000',
    quantity: 1,
    url: 'https://cdn.idealo.com/folder/Product/6765/2/6765271/s1_produktbild_gross/apple-iphone-11-128gb-white.jpg',
    url2: "https://cdn.idealo.com/folder/Product/6765/2/6765271/s1_produktbild_gross_2/apple-iphone-11-128gb-white.jpg",
    url3: 'https://cdn.idealo.com/folder/Product/6765/2/6765271/s1_produktbild_gross_3/apple-iphone-11-128gb-white.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 11 ',
    details: '128 GB',
    long_details: "Caméra TrueDepth, zoom de la caméra optique, reconnaissance faciale 3D pour un déverrouillage plus rapide, Wi-Fi 6(ax), Face ID, processeur A13 Bionic très rapide. Dolby Vision, True Tone, HDR 10, encoche d’affichage, écran Liquid Retina HD. résistant aux rayures, hydrofuge.",
    prix: '170 000',
    last_prix: '200 000',
    quantity: 1,
    url: 'https://cdn.idealo.com/folder/Product/6765/2/6765271/s1_produktbild_gross/apple-iphone-11-128gb-white.jpg',
    url2: "https://cdn.idealo.com/folder/Product/6765/2/6765271/s1_produktbild_gross_2/apple-iphone-11-128gb-white.jpg",
    url3: 'https://cdn.idealo.com/folder/Product/6765/2/6765271/s1_produktbild_gross_3/apple-iphone-11-128gb-white.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 11 pro',
    details: '64 GB',
    long_details: "L'iPhone 11 Pro est le flagship de la douzième génération du célèbre smartphone d'Apple. Successeur direct de l'iPhone XS, il dispose d'un écran OLED de 5,8 pouces, un SoC Apple A13 Bionic et un triple capteur photo arrière.",
    prix: '185 000',
    last_prix: '210 000',
    quantity: 1,
    url: 'https://c0.lestechnophiles.com/www.frandroid.com/wp-content/uploads/2019/08/iphone-11-pro-2019-frandroid.png?avif=1&resize=580,580&key=5b1fcd14',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/7e/b2/bd/12431998/1541-2/tsp20241015132335/Apple-iPhone-11-Pro-512-Go-5-8-Gris-Sideral.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/7e/b2/bd/12431998/1541-3/tsp20241015132335/Apple-iPhone-11-Pro-512-Go-5-8-Gris-Sideral.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 11 pro',
    details: '256 GB',
    long_details: "L'iPhone 11 Pro est le flagship de la douzième génération du célèbre smartphone d'Apple. Successeur direct de l'iPhone XS, il dispose d'un écran OLED de 5,8 pouces, un SoC Apple A13 Bionic et un triple capteur photo arrière.",
    prix: '195 000',
    last_prix: '220 000',
    quantity: 1,
    url: 'https://c0.lestechnophiles.com/www.frandroid.com/wp-content/uploads/2019/08/iphone-11-pro-2019-frandroid.png?avif=1&resize=580,580&key=5b1fcd14',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/7e/b2/bd/12431998/1541-2/tsp20241015132335/Apple-iPhone-11-Pro-512-Go-5-8-Gris-Sideral.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/7e/b2/bd/12431998/1541-3/tsp20241015132335/Apple-iPhone-11-Pro-512-Go-5-8-Gris-Sideral.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 11 Pro Max',
    details: '64 GB',
    long_details: "L'iPhone 11 Pro Max est la version grand format de l'iPhone 11 Pro. Successeur direct de l'iPhone XS Max, il dispose d'un écran OLED de 6,5 pouces, un SoC Apple A13 Bionic et un triple capteur photo arrière.",
    prix: '205 000',
    last_prix: '225 000',
    quantity: 1,
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/63/b2/bd/12431971/1541-1/tsp20241015132057/Apple-iPhone-11-Pro-Max-Double-SIM-64-Go-Gris-sideral.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/63/b2/bd/12431971/1541-3/tsp20241015132057/Apple-iPhone-11-Pro-Max-Double-SIM-64-Go-Gris-sideral.jpg",
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/63/b2/bd/12431971/1540-1/tsp20241015132057/Apple-iPhone-11-Pro-Max-Double-SIM-64-Go-Gris-sideral.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 11 Pro Max',
    details: '256 GB',
    long_details: "L'iPhone 11 Pro Max est la version grand format de l'iPhone 11 Pro. Successeur direct de l'iPhone XS Max, il dispose d'un écran OLED de 6,5 pouces, un SoC Apple A13 Bionic et un triple capteur photo arrière.",
    prix: '225 000',
    last_prix: '240 000',
    quantity: 1,
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/63/b2/bd/12431971/1541-1/tsp20241015132057/Apple-iPhone-11-Pro-Max-Double-SIM-64-Go-Gris-sideral.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/63/b2/bd/12431971/1541-3/tsp20241015132057/Apple-iPhone-11-Pro-Max-Double-SIM-64-Go-Gris-sideral.jpg",
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/63/b2/bd/12431971/1540-1/tsp20241015132057/Apple-iPhone-11-Pro-Max-Double-SIM-64-Go-Gris-sideral.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 12',
    details: '64 GB',
    long_details: "L'iPhone 12 est le modèle principal de la 14e génération de smartphone d'Apple annoncé le 13 octobre 2020. Il est équipé d'un écran de 6,1 pouces OLED HDR 60 Hz, d'un double capteur photo avec ultra grand-angle et d'un SoC Apple A14 Bionic compatible 5G (sub-6 GHz).",
    prix: '180 000',
    last_prix: '200 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/6a/b2/bd/12431978/1540-1/tsp20241017180850/Apple-iPhone-12-6-1-128-Go-Double-SIM-5G-Bleu.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/6a/b2/bd/12431978/1541-1/tsp20241017180850/Apple-iPhone-12-6-1-128-Go-Double-SIM-5G-Bleu.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/6a/b2/bd/12431978/1541-4/tsp20241017180850/Apple-iPhone-12-6-1-128-Go-Double-SIM-5G-Bleu.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 12',
    details: '128 GB',
    long_details: "L'iPhone 12 est le modèle principal de la 14e génération de smartphone d'Apple annoncé le 13 octobre 2020. Il est équipé d'un écran de 6,1 pouces OLED HDR 60 Hz, d'un double capteur photo avec ultra grand-angle et d'un SoC Apple A14 Bionic compatible 5G (sub-6 GHz).",
    prix: '205 000',
    last_prix: '225 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/6a/b2/bd/12431978/1540-1/tsp20241017180850/Apple-iPhone-12-6-1-128-Go-Double-SIM-5G-Bleu.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/6a/b2/bd/12431978/1541-1/tsp20241017180850/Apple-iPhone-12-6-1-128-Go-Double-SIM-5G-Bleu.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/6a/b2/bd/12431978/1541-4/tsp20241017180850/Apple-iPhone-12-6-1-128-Go-Double-SIM-5G-Bleu.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 12 Pro',
    details: '128 GB',
    long_details: "L'iPhone 12 Pro est le modèle haut de gamme de la 14e génération de smartphone d'Apple annoncé le 13 octobre 2020. Il est équipé d'un écran de 6,1 pouces OLED HDR 60 Hz, d'un triple capteur photo avec ultra grand-angle et téléobjectif (x4 optique) et d'un SoC Apple A14 Bionic compatible 5G (sub-6 GHz).",
    prix: '240 000',
    last_prix: '260 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/56/b2/bd/12431958/1540-1/tsp20241015092614/Apple-iPhone-12-Pro-6-1-128-Go-Double-SIM-5G-Bleu-pacifique.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/56/b2/bd/12431958/1541-1/tsp20241015092614/Apple-iPhone-12-Pro-6-1-128-Go-Double-SIM-5G-Bleu-pacifique.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/56/b2/bd/12431958/1541-2/tsp20241015092614/Apple-iPhone-12-Pro-6-1-128-Go-Double-SIM-5G-Bleu-pacifique.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 12 Pro',
    details: '128 GB',
    long_details: "L'iPhone 12 Pro est le modèle haut de gamme de la 14e génération de smartphone d'Apple annoncé le 13 octobre 2020. Il est équipé d'un écran de 6,1 pouces OLED HDR 60 Hz, d'un triple capteur photo avec ultra grand-angle et téléobjectif (x4 optique) et d'un SoC Apple A14 Bionic compatible 5G (sub-6 GHz).",
    prix: '285 000',
    last_prix: '300 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/96/b2/bd/12432022/1540-1/tsp20240927223822/Apple-iPhone-12-Pro-Max-6-7-128-Go-Double-SIM-5G-Bleu-pacifique.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/96/b2/bd/12432022/1541-1/tsp20240927223822/Apple-iPhone-12-Pro-Max-6-7-128-Go-Double-SIM-5G-Bleu-pacifique.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/96/b2/bd/12432022/1541-3/tsp20240927223822/Apple-iPhone-12-Pro-Max-6-7-128-Go-Double-SIM-5G-Bleu-pacifique.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 12 Pro Max',
    details: '128 GB',
    long_details: "L'iPhone 12 Pro Max est le modèle grand-format haut de gamme de la 14e génération de smartphone d'Apple annoncé le 13 octobre 2020. Il est équipé d'un écran de 6,7 pouces OLED HDR 60 Hz, d'un triple capteur photo avec ultra grand-angle et téléobjectif (x5 optique) et d'un SoC Apple A14 Bionic compatible 5G (sub-6 GHz).",
    prix: '285 000',
    last_prix: '300 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/96/b2/bd/12432022/1540-1/tsp20240927223822/Apple-iPhone-12-Pro-Max-6-7-128-Go-Double-SIM-5G-Bleu-pacifique.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/96/b2/bd/12432022/1541-1/tsp20240927223822/Apple-iPhone-12-Pro-Max-6-7-128-Go-Double-SIM-5G-Bleu-pacifique.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/96/b2/bd/12432022/1541-3/tsp20240927223822/Apple-iPhone-12-Pro-Max-6-7-128-Go-Double-SIM-5G-Bleu-pacifique.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 12 Pro Max',
    details: '256 GB',
    long_details: "L'iPhone 12 Pro Max est le modèle grand-format haut de gamme de la 14e génération de smartphone d'Apple annoncé le 13 octobre 2020. Il est équipé d'un écran de 6,7 pouces OLED HDR 60 Hz, d'un triple capteur photo avec ultra grand-angle et téléobjectif (x5 optique) et d'un SoC Apple A14 Bionic compatible 5G (sub-6 GHz).",
    prix: '305 000',
    last_prix: '320 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/96/b2/bd/12432022/1540-1/tsp20240927223822/Apple-iPhone-12-Pro-Max-6-7-128-Go-Double-SIM-5G-Bleu-pacifique.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/96/b2/bd/12432022/1541-1/tsp20240927223822/Apple-iPhone-12-Pro-Max-6-7-128-Go-Double-SIM-5G-Bleu-pacifique.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/96/b2/bd/12432022/1541-3/tsp20240927223822/Apple-iPhone-12-Pro-Max-6-7-128-Go-Double-SIM-5G-Bleu-pacifique.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 13',
    details: '128 GB',
    long_details: "L'iPhone 13, annoncé le 14 septembre 2021, est le modèle central de la 15e itération du smartphone d'Apple. Il est équipé d'un écran OLED de 6,1 pouces 60 Hz, d'un SoC Apple A15 Bionic compatible 5G (NR & Sub-6) et d'un double capteur photo de 12+12 mégapixels (grand-angle et ultra grand-angle) avec OIS.",
    prix: '265 000',
    last_prix: '270 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/79/12/04/17044089/1540-1/tsp20241022182702/Apple-iPhone-13-6-1-5G-128-Go-Double-SIM-Noir-minuit.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/79/12/04/17044089/1541-1.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/79/12/04/17044089/1541-2.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 13',
    details: '256 GB',
    long_details: "L'iPhone 13, annoncé le 14 septembre 2021, est le modèle central de la 15e itération du smartphone d'Apple. Il est équipé d'un écran OLED de 6,1 pouces 60 Hz, d'un SoC Apple A15 Bionic compatible 5G (NR & Sub-6) et d'un double capteur photo de 12+12 mégapixels (grand-angle et ultra grand-angle) avec OIS.",
    prix: '295 000',
    last_prix: '300 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/79/12/04/17044089/1540-1/tsp20241022182702/Apple-iPhone-13-6-1-5G-128-Go-Double-SIM-Noir-minuit.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/79/12/04/17044089/1541-1.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/79/12/04/17044089/1541-2.jpg',
  },
  {
    id: uuidv4(),
    name: 'Iphone 13 Pro',
    details: '128 GB',
    long_details: "L'iPhone 13 Pro, annoncé le 14 septembre 2021, est le modèle haut de gamme de la 15e itération du smartphone d'Apple. Il est équipé d'un écran OLED de 6,1 pouces 120 Hz, d'un SoC Apple A15 Bionic compatible 5G (NR & Sub-6) et d'un triple capteur photo de 12+12+12 mégapixels (grand-angle, téléobjectif et ultra grand-angle) avec OIS.",
    prix: '330 000',
    last_prix: '340 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/68/12/04/17044072/1540-1/tsp20241015111725/Apple-iPhone-13-Pro-6-1-5G-128-Go-Double-SIM-Graphite.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/68/12/04/17044072/1541-1/tsp20241015111725/Apple-iPhone-13-Pro-6-1-5G-128-Go-Double-SIM-Graphite.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/68/12/04/17044072/1541-2/tsp20241015111725/Apple-iPhone-13-Pro-6-1-5G-128-Go-Double-SIM-Graphite.jpg',

  },
  {
    id: uuidv4(),
    name: 'Iphone 13 Pro',
    details: '256 GB',
    long_details: "L'iPhone 13 Pro, annoncé le 14 septembre 2021, est le modèle haut de gamme de la 15e itération du smartphone d'Apple. Il est équipé d'un écran OLED de 6,1 pouces 120 Hz, d'un SoC Apple A15 Bionic compatible 5G (NR & Sub-6) et d'un triple capteur photo de 12+12+12 mégapixels (grand-angle, téléobjectif et ultra grand-angle) avec OIS.",
    prix: '360 000',
    last_prix: '370 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/68/12/04/17044072/1540-1/tsp20241015111725/Apple-iPhone-13-Pro-6-1-5G-128-Go-Double-SIM-Graphite.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/68/12/04/17044072/1541-1/tsp20241015111725/Apple-iPhone-13-Pro-6-1-5G-128-Go-Double-SIM-Graphite.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/68/12/04/17044072/1541-2/tsp20241015111725/Apple-iPhone-13-Pro-6-1-5G-128-Go-Double-SIM-Graphite.jpg',

  },
  {
    id: uuidv4(),
    name: 'Iphone 13 Pro Max',
    details: '128 GB',
    long_details: "L'iPhone 13 Pro Max, annoncé le 14 septembre 2021, est le modèle haut de gamme et grand format de la 15e itération du smartphone d'Apple. Il est équipé d'un écran OLED de 6,7 pouces 120 Hz, d'un SoC Apple A15 Bionic compatible 5G (NR & Sub-6) et d'un triple capteur photo de 12+12+12 mégapixels (grand-angle, téléobjectif et ultra grand-angle) avec OIS.",
    prix: '375 000',
    last_prix: '380 000',
    quantity: 1,
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/6c/12/04/17044076/1540-1/tsp20241015111725/Apple-iPhone-13-Pro-Max-6-7-5G-128-Go-Double-SIM-Bleu.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/6c/12/04/17044076/1541-1/tsp20241015111725/Apple-iPhone-13-Pro-Max-6-7-5G-128-Go-Double-SIM-Bleu.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/6c/12/04/17044076/1541-2/tsp20241015111725/Apple-iPhone-13-Pro-Max-6-7-5G-128-Go-Double-SIM-Bleu.jpg',

  },
  {
    id: uuidv4(),
    name: 'Iphone 14',
    details: '128 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,1 pouces avec une résolution de 2532 x 1170 pixels et un taux de rafraîchissement de 60Hz. Processeur : Puce A15 Bionic avec un CPU à 6 cœurs et un GPU à 5 cœurs. Mémoire : Disponible en versions avec 128GO de stockage interne. Caméra principale : Double caméra avec un capteur principal de 12 MP (ouverture f/1.5) et un ultra grand-angle de 12 MP (ouverture f/2.4). Caméra frontale : 12 MP avec ouverture f/1.9. Batterie : 3279 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W ",
    prix: '355 000',
    last_prix: '365 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/f6/3a/32/20069110/1505-1/tsp20241105215541/Apple-iPhone-14-6-1-5G-Double-SIM-128-Go-Mauve.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/f6/3a/32/20069110/1520-1/tsp20241105215541/Apple-iPhone-14-6-1-5G-Double-SIM-128-Go-Mauve.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/F6/AF/23/13/20069110-3-1520-2/tsp20241105215541/Apple-iPhone-14-6-1-5G-Double-SIM-128-Go-Mauve.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 14',
    details: '256 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,1 pouces avec une résolution de 2532 x 1170 pixels et un taux de rafraîchissement de 60Hz. Processeur : Puce A15 Bionic avec un CPU à 6 cœurs et un GPU à 5 cœurs. Mémoire : Disponible en versions avec 256GO de stockage interne. Caméra principale : Double caméra avec un capteur principal de 12 MP (ouverture f/1.5) et un ultra grand-angle de 12 MP (ouverture f/2.4). Caméra frontale : 12 MP avec ouverture f/1.9. Batterie : 3279 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W ",
    prix: '385 000',
    last_prix: '400 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/f6/3a/32/20069110/1505-1/tsp20241105215541/Apple-iPhone-14-6-1-5G-Double-SIM-128-Go-Mauve.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/f6/3a/32/20069110/1520-1/tsp20241105215541/Apple-iPhone-14-6-1-5G-Double-SIM-128-Go-Mauve.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/F6/AF/23/13/20069110-3-1520-2/tsp20241105215541/Apple-iPhone-14-6-1-5G-Double-SIM-128-Go-Mauve.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 14 Pro',
    details: '128 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,1 pouces avec une résolution de 2556 x 1179 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz. Processeur : Puce A16 Bionic avec un CPU à 6 cœurs et un GPU à 5 cœurs. Mémoire : Disponible en versions avec 128GB de stockage interne. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 12 MP et un téléobjectif de 12 MP. Caméra frontale : 12 MP avec ouverture f/1.9. Batterie : 3200 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W. ",
    prix: '465 000',
    last_prix: '485 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/1505-1/tsp20241023153629/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/1520-1/tsp20241023153629/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/1520-3/tsp20241023153629/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 14 Pro',
    details: '256 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,1 pouces avec une résolution de 2556 x 1179 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz. Processeur : Puce A16 Bionic avec un CPU à 6 cœurs et un GPU à 5 cœurs. Mémoire : Disponible en versions avec 256GB de stockage interne. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 12 MP et un téléobjectif de 12 MP. Caméra frontale : 12 MP avec ouverture f/1.9. Batterie : 3200 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W. ",
    prix: '495 000',
    last_prix: '515 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/1505-1/tsp20241023153629/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/1520-1/tsp20241023153629/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/1520-3/tsp20241023153629/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 14 Pro Max',
    details: '128 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,7 pouces avec une résolution de 2796 x 1290 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz. Processeur : Puce A16 Bionic avec un CPU à 6 cœurs et un GPU à 5 cœurs. Mémoire : Disponible en versions avec 128GB de stockage interne. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 12 MP et un téléobjectif de 12 MP. Caméra frontale : 12 MP avec ouverture f/1.9. Batterie : 4323 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W ",
    prix: '535 000',
    last_prix: '555 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/00/32/32/20066816/1505-1/tsp20241023152839/Apple-iPhone-14-Pro-Max-6-7-5G-Double-SIM-128-Go-Noir-sideral.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/00/32/32/20066816/1520-1/tsp20241023152839/Apple-iPhone-14-Pro-Max-6-7-5G-Double-SIM-128-Go-Noir-sideral.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/00/32/32/20066816/1520-3/tsp20241023152839/Apple-iPhone-14-Pro-Max-6-7-5G-Double-SIM-128-Go-Noir-sideral.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 14 Pro Max',
    details: '256 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,7 pouces avec une résolution de 2796 x 1290 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz. Processeur : Puce A16 Bionic avec un CPU à 6 cœurs et un GPU à 5 cœurs. Mémoire : Disponible en versions avec 256GB de stockage interne. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 12 MP et un téléobjectif de 12 MP. Caméra frontale : 12 MP avec ouverture f/1.9. Batterie : 4323 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W ",
    prix: '540 000',
    last_prix: '560 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/00/32/32/20066816/1505-1/tsp20241023152839/Apple-iPhone-14-Pro-Max-6-7-5G-Double-SIM-128-Go-Noir-sideral.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/00/32/32/20066816/1520-1/tsp20241023152839/Apple-iPhone-14-Pro-Max-6-7-5G-Double-SIM-128-Go-Noir-sideral.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/00/32/32/20066816/1520-3/tsp20241023152839/Apple-iPhone-14-Pro-Max-6-7-5G-Double-SIM-128-Go-Noir-sideral.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 14 Pro Max',
    details: '512 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,7 pouces avec une résolution de 2796 x 1290 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz. Processeur : Puce A16 Bionic avec un CPU à 6 cœurs et un GPU à 5 cœurs. Mémoire : Disponible en versions avec 128GB de stockage interne. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 12 MP et un téléobjectif de 12 MP. Caméra frontale : 12 MP avec ouverture f/1.9. Batterie : 4323 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W ",
    prix: '595 000',
    last_prix: '615 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/00/32/32/20066816/1505-1/tsp20241023152839/Apple-iPhone-14-Pro-Max-6-7-5G-Double-SIM-128-Go-Noir-sideral.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/00/32/32/20066816/1520-1/tsp20241023152839/Apple-iPhone-14-Pro-Max-6-7-5G-Double-SIM-128-Go-Noir-sideral.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/00/32/32/20066816/1520-3/tsp20241023152839/Apple-iPhone-14-Pro-Max-6-7-5G-Double-SIM-128-Go-Noir-sideral.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 15 ',
    details: '128 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,1 pouces avec une résolution de 2556 x 1179 pixels et un taux de rafraîchissement de 60Hz2.  Processeur : Puce A16 Bionic avec un CPU à 6 cœurs et un GPU à 5 cœurs2. Mémoire : Disponible en versions avec 128GB de stockage interne2. Caméra principale : Double caméra avec un capteur principal de 48 MP (ouverture f/1.6) et un ultra grand-angle de 12 MP (ouverture f/2.4)2. Caméra frontale : 12 MP avec ouverture f/1.92. Batterie : 3349 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W. ",
    prix: '490 000',
    last_prix: '510 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/0e/f1/52/22212878/1540-1/tsp20241107091809/Apple-iPhone-15-6-1-5G-Double-SIM-128-Go-Rose.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/0e/f1/52/22212878/1520-2/tsp20241107091809/Apple-iPhone-15-6-1-5G-Double-SIM-128-Go-Rose.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/0e/f1/52/22212878/1520-4/tsp20241107091809/Apple-iPhone-15-6-1-5G-Double-SIM-128-Go-Rose.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 15 Pro ',
    details: '128 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,1 pouces avec une résolution de 2556 x 1179 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz. Processeur : Puce A17 Pro avec un CPU à 6 cœurs et un GPU à 6 cœurs. Mémoire : Disponible en versions avec 128GB de stockage interne. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 12 MP et un téléobjectif de 12 MP. Caméra frontale : 12 MP. Batterie : 3274 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W.",
    prix: '505 000',
    last_prix: '525 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/d6/f0/52/22212822/3756-1/tsp20241105220901/Apple-iPhone-15-Pro-6-1-5G-Double-SIM-1-To-Noir-Titanium.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/d6/f0/52/22212822/1520-2/tsp20241105220901/Apple-iPhone-15-Pro-6-1-5G-Double-SIM-1-To-Noir-Titanium.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/d6/f0/52/22212822/1520-4/tsp20241105220901/Apple-iPhone-15-Pro-6-1-5G-Double-SIM-1-To-Noir-Titanium.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 15 Pro ',
    details: '256 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,1 pouces avec une résolution de 2556 x 1179 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz. Processeur : Puce A17 Pro avec un CPU à 6 cœurs et un GPU à 6 cœurs. Mémoire : Disponible en versions avec 256GB de stockage interne. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 12 MP et un téléobjectif de 12 MP. Caméra frontale : 12 MP. Batterie : 3274 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W.",
    prix: '595 000',
    last_prix: '615 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/d6/f0/52/22212822/3756-1/tsp20241105220901/Apple-iPhone-15-Pro-6-1-5G-Double-SIM-1-To-Noir-Titanium.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/d6/f0/52/22212822/1520-2/tsp20241105220901/Apple-iPhone-15-Pro-6-1-5G-Double-SIM-1-To-Noir-Titanium.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/d6/f0/52/22212822/1520-4/tsp20241105220901/Apple-iPhone-15-Pro-6-1-5G-Double-SIM-1-To-Noir-Titanium.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 15 Pro Max ',
    details: '256 GO ',
    long_details: "Écran : LTPO Super Retina XDR OLED de 6,7 pouces avec une résolution de 2796 x 1290 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz. Processeur : Puce A17 Pro avec un CPU à 6 cœurs et un GPU à 6 cœurs. Mémoire : Disponible en versions avec 256GB de stockage interne, non extensible. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 12 MP et un téléobjectif périscope de 12 MP avec zoom optique 5x. Caméra frontale : 12 MP. Batterie : 4441 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W",
    prix: '620 000',
    last_prix: '640 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/19/f1/52/22212889/3756-1/tsp20241105220901/Apple-iPhone-15-Pro-Max-6-7-5G-Double-SIM-1-To-Noir-Titanium.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/19/f1/52/22212889/1520-2/tsp20241105220901/Apple-iPhone-15-Pro-Max-6-7-5G-Double-SIM-1-To-Noir-Titanium.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/19/f1/52/22212889/1520-4/tsp20241105220901/Apple-iPhone-15-Pro-Max-6-7-5G-Double-SIM-1-To-Noir-Titanium.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 15 Pro Max ',
    details: '512 GO ',
    long_details: "Écran : LTPO Super Retina XDR OLED de 6,7 pouces avec une résolution de 2796 x 1290 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz. Processeur : Puce A17 Pro avec un CPU à 6 cœurs et un GPU à 6 cœurs. Mémoire : Disponible en versions avec 512GB de stockage interne, non extensible. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 12 MP et un téléobjectif périscope de 12 MP avec zoom optique 5x. Caméra frontale : 12 MP. Batterie : 4441 mAh avec charge rapide de 20W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W",
    prix: '790 000',
    last_prix: '810 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/19/f1/52/22212889/3756-1/tsp20241105220901/Apple-iPhone-15-Pro-Max-6-7-5G-Double-SIM-1-To-Noir-Titanium.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/19/f1/52/22212889/1520-2/tsp20241105220901/Apple-iPhone-15-Pro-Max-6-7-5G-Double-SIM-1-To-Noir-Titanium.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/19/f1/52/22212889/1520-4/tsp20241105220901/Apple-iPhone-15-Pro-Max-6-7-5G-Double-SIM-1-To-Noir-Titanium.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 16 ',
    details: '128 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,1 pouces avec une résolution de 2556 x 1179 pixels et un taux de rafraîchissement de 60Hz2. Processeur : Puce A18 avec un CPU à 6 cœurs et un GPU à 5 cœurs2. Mémoire : Disponible en versions avec 128GB de stockage interne2. Caméra principale : Double caméra avec un capteur principal de 48 MP (ouverture f/1.6) et un ultra grand-angle de 12 MP (ouverture f/2.2)2. Caméra frontale : 12 MP avec ouverture f/1.92. Batterie : 3561 mAh avec charge rapide de 25W2.",
    prix: '660 000',
    last_prix: '680 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/fe/47/66/23480318/3756-1/tsp20241105222053/Apple-iPhone-16-6-1-5G-128-Go-Double-SIM-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/fe/47/66/23480318/1520-3/tsp20241105222053/Apple-iPhone-16-6-1-5G-128-Go-Double-SIM-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/fe/47/66/23480318/1520-4/tsp20241105222053/Apple-iPhone-16-6-1-5G-128-Go-Double-SIM-Noir.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 16 ',
    details: '256 GO ',
    long_details: "Écran : Super Retina XDR OLED de 6,1 pouces avec une résolution de 2556 x 1179 pixels et un taux de rafraîchissement de 60Hz2. Processeur : Puce A18 avec un CPU à 6 cœurs et un GPU à 5 cœurs2. Mémoire : Disponible en versions avec 256GB de stockage interne2. Caméra principale : Double caméra avec un capteur principal de 48 MP (ouverture f/1.6) et un ultra grand-angle de 12 MP (ouverture f/2.2)2. Caméra frontale : 12 MP avec ouverture f/1.92. Batterie : 3561 mAh avec charge rapide de 25W2.",
    prix: '735 000',
    last_prix: '755 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/fe/47/66/23480318/3756-1/tsp20241105222053/Apple-iPhone-16-6-1-5G-128-Go-Double-SIM-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/fe/47/66/23480318/1520-3/tsp20241105222053/Apple-iPhone-16-6-1-5G-128-Go-Double-SIM-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/fe/47/66/23480318/1520-4/tsp20241105222053/Apple-iPhone-16-6-1-5G-128-Go-Double-SIM-Noir.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 16 Pro',
    details: '128 GO ',
    long_details: "Écran : LTPO Super Retina XDR OLED de 6,3 pouces avec une résolution de 2622 x 1206 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz2. Processeur : Puce A18 Pro avec un CPU à 6 cœurs et un GPU à 6 cœurs2. Mémoire : Disponible en versions avec 128GB de stockage interne2. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 48 MP et un téléobjectif périscope de 12 MP avec zoom optique 5x2. Caméra frontale : 12 MP. Batterie : 3274 mAh avec charge rapide de 25W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W",
    prix: '840 000',
    last_prix: '860 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/7e/3c/66/23477374/3756-1/tsp20241024021419/Apple-iPhone-16-Pro-6-3-5G-128-Go-Double-SIM-Noir-Titane.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/7e/3c/66/23477374/1520-3/tsp20241024021419/Apple-iPhone-16-Pro-6-3-5G-128-Go-Double-SIM-Noir-Titane.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/7e/3c/66/23477374/1520-4/tsp20241024021419/Apple-iPhone-16-Pro-6-3-5G-128-Go-Double-SIM-Noir-Titane.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 16 Pro',
    details: '256 GO ',
    long_details: "Écran : LTPO Super Retina XDR OLED de 6,3 pouces avec une résolution de 2622 x 1206 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz2.  Processeur : Puce A18 Pro avec un CPU à 6 cœurs et un GPU à 6 cœurs2. Mémoire : Disponible en versions avec 256GB de stockage interne. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 48 MP et un téléobjectif périscope de 12 MP avec zoom optique 5x2. Caméra frontale : 12 MP. Batterie : 3274 mAh avec charge rapide de 25W, charge sans fil MagSafe de 15W et charge sans fil Qi de 7.5W",
    prix: '890 000',
    last_prix: '910 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/7e/3c/66/23477374/3756-1/tsp20241024021419/Apple-iPhone-16-Pro-6-3-5G-128-Go-Double-SIM-Noir-Titane.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/7e/3c/66/23477374/1520-3/tsp20241024021419/Apple-iPhone-16-Pro-6-3-5G-128-Go-Double-SIM-Noir-Titane.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/7e/3c/66/23477374/1520-4/tsp20241024021419/Apple-iPhone-16-Pro-6-3-5G-128-Go-Double-SIM-Noir-Titane.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 16 Pro Max',
    details: '256 GO ',
    long_details: "Écran : LTPO Super Retina XDR OLED de 6,9 pouces avec une résolution de 2868 x 1320 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz2. Processeur : Puce A18 Pro avec un CPU à 6 cœurs et un GPU à 6 cœurs2. Mémoire : Disponible en versions avec 256GB de stockage interne, non extensible2. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 48 MP et un téléobjectif périscope de 12 MP avec zoom optique 5x2. Caméra frontale : 12 MP2. Batterie : 4685 mAh avec charge rapide de 25W.",
    prix: '935 000',
    last_prix: '955 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/0b/3b/32/20069131/3756-1/tsp20241105152840/Apple-iPhone-16-Pro-Max-6-9-5G-512-Go-Double-SIM-Titane-Sable.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/0b/3b/32/20069131/1520-3/tsp20241105152840/Apple-iPhone-16-Pro-Max-6-9-5G-512-Go-Double-SIM-Titane-Sable.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/0b/3b/32/20069131/1520-4/tsp20241105152840/Apple-iPhone-16-Pro-Max-6-9-5G-512-Go-Double-SIM-Titane-Sable.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 16 Pro Max',
    details: '512 GO ',
    long_details: "Écran : LTPO Super Retina XDR OLED de 6,9 pouces avec une résolution de 2868 x 1320 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz2. Processeur : Puce A18 Pro avec un CPU à 6 cœurs et un GPU à 6 cœurs2. Mémoire : Disponible en versions avec 512GB de stockage interne, non extensible2. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 48 MP et un téléobjectif périscope de 12 MP avec zoom optique 5x2. Caméra frontale : 12 MP2. Batterie : 4685 mAh avec charge rapide de 25W.",
    prix: '1 015 000',
    last_prix: '1 030 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/0b/3b/32/20069131/3756-1/tsp20241105152840/Apple-iPhone-16-Pro-Max-6-9-5G-512-Go-Double-SIM-Titane-Sable.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/0b/3b/32/20069131/1520-3/tsp20241105152840/Apple-iPhone-16-Pro-Max-6-9-5G-512-Go-Double-SIM-Titane-Sable.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/0b/3b/32/20069131/1520-4/tsp20241105152840/Apple-iPhone-16-Pro-Max-6-9-5G-512-Go-Double-SIM-Titane-Sable.jpg',

  },

  {
    id: uuidv4(),
    name: 'Iphone 16 Pro Max',
    details: '1 To ',
    long_details: "Écran : LTPO Super Retina XDR OLED de 6,9 pouces avec une résolution de 2868 x 1320 pixels et un taux de rafraîchissement adaptatif ProMotion allant jusqu'à 120Hz2. Processeur : Puce A18 Pro avec un CPU à 6 cœurs et un GPU à 6 cœurs2. Mémoire : Disponible en versions avec 1To de stockage interne, non extensible2. Caméra principale : Système de triple caméra avec un capteur principal de 48 MP, un ultra grand-angle de 48 MP et un téléobjectif périscope de 12 MP avec zoom optique 5x2. Caméra frontale : 12 MP2. Batterie : 4685 mAh avec charge rapide de 25W.",
    prix: '1 185 000',
    last_prix: '1 200 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/0b/3b/32/20069131/3756-1/tsp20241105152840/Apple-iPhone-16-Pro-Max-6-9-5G-512-Go-Double-SIM-Titane-Sable.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/0b/3b/32/20069131/1520-3/tsp20241105152840/Apple-iPhone-16-Pro-Max-6-9-5G-512-Go-Double-SIM-Titane-Sable.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDMFR/MDM/0b/3b/32/20069131/1520-4/tsp20241105152840/Apple-iPhone-16-Pro-Max-6-9-5G-512-Go-Double-SIM-Titane-Sable.jpg',

  },
],


  // Samsung

  samsung: [


  {
    id: uuidv4(),
    name: 'Samsung A23',
    details: '128 GO 4 GO ',
    long_details: "Le Samsung Galaxy A23  est un modèle d'entrée de gamme qui s'équipe d'un écran de 6,6 pouces, animé par un SoC Qualcomm Snapdragon 695, couplé jusqu'à 4 Go de RAM et 128 Go de stockage extensible jusqu'à 1 To via microSD. Il possède 4 capteurs photo à l'arrière : un grand-angle de 50 mégapixels (avec stabilisation otique), un ultra grand-angle de 5 mégapixels, un objectif macro et un capteur de profondeur de 2 mégapixels chacun. Il a une batterie de 5 000 mAh compatible charge rapide (25 W). ",
    prix: '115 000',
    last_prix: '130 000',
    quantity: 1,

    url: 'https://m.media-amazon.com/images/I/71EwZmcNkTL._AC_SX679_.jpg',
    url2: "https://m.media-amazon.com/images/I/619-fCUEg0L._AC_SX679_.jpg",
    url3: 'https://m.media-amazon.com/images/I/41axag8gnqL._AC_SX679_.jpg',

  },

  {

    id: uuidv4(),
    name: 'Samsung A23',
    details: '128 GO 6 GO ',
    long_details: "Le Samsung Galaxy A23  est un modèle d'entrée de gamme qui s'équipe d'un écran de 6,6 pouces, animé par un SoC Qualcomm Snapdragon 695, couplé jusqu'à 4 Go de RAM et 128 Go de stockage extensible jusqu'à 1 To via microSD. Il possède 4 capteurs photo à l'arrière : un grand-angle de 50 mégapixels (avec stabilisation otique), un ultra grand-angle de 5 mégapixels, un objectif macro et un capteur de profondeur de 2 mégapixels chacun. Il a une batterie de 5 000 mAh compatible charge rapide (25 W). ",
    prix: '120 000',
    last_prix: '140 000',
    quantity: 1,

    url: 'https://m.media-amazon.com/images/I/71EwZmcNkTL._AC_SX679_.jpg',
    url2: "https://m.media-amazon.com/images/I/619-fCUEg0L._AC_SX679_.jpg",
    url3: 'https://m.media-amazon.com/images/I/41axag8gnqL._AC_SX679_.jpg',

  },

  {

    id: uuidv4(),
    name: 'Samsung A24',
    details: '128 GO 6 GO ',
    long_details: "Écran : Super AMOLED de 6,5 pouces avec une résolution de 1080 x 2340 pixels et un taux de rafraîchissement de 90Hz. Processeur: MediaTek Helio G99(6 nm) avec un CPU octa- core. Mémoire : Disponible en versions avec 6GB de RAM et 128GB de stockage interne, extensible via microSD jusqu'à 1TB.Caméra principale : Triple caméra avec un capteur principal de 50 MP, un ultra grand - angle de 5 MP et un macro de 2 MP. Caméra frontale : 13 MP. Batterie : 5000 mAh avec une charge rapide de 25W. ",
    prix: '120 000',
    last_prix: '140 000',
    quantity: 1,
    url: 'https://images.samsung.com/is/image/samsung/p6pim/africa_fr/sm-a245fzkvafc/gallery/africa-fr-galaxy-a24-sm-a245-sm-a245fzkvafc-536328476?$365_292_PNG$',
    url2: "https://images.samsung.com/is/image/samsung/p6pim/africa_fr/sm-a245fzkvafc/gallery/africa-fr-galaxy-a24-sm-a245-sm-a245fzkvafc-536328460?$684_547_PNG$",
    url3: 'https://images.samsung.com/is/image/samsung/p6pim/africa_fr/sm-a245fzkvafc/gallery/africa-fr-galaxy-a24-sm-a245-sm-a245fzkvafc-536328463?$684_547_PNG$',

  },

  {
    id: uuidv4(),
    name: 'Samsung A25',
    details: '128 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,5 pouces avec une résolution de 1080 x 2340 pixels et un taux de rafraîchissement de 120Hz. Processeur: Samsung Exynos 1280(5 nm) avec un CPU octa - core. Mémoire : Disponible en versions  8GB de RAM et 128GB de stockage interne, extensible via microSD. Caméra principale: Triple caméra avec un capteur principal de 50 MP, un ultra grand - angle de 8 MP et un macro de 2 MP. Caméra frontale: 13 MP. Batterie : 5000 mAh avec une charge rapide de 25W ",
    prix: '120 000',
    last_prix: '140 000',
    quantity: 1,
    url: 'https://m.media-amazon.com/images/I/71EwZmcNkTL._AC_SX679_.jpg',
    url2: "https://m.media-amazon.com/images/I/619-fCUEg0L._AC_SX679_.jpg",
    url3: 'https://m.media-amazon.com/images/I/41axag8gnqL._AC_SX679_.jpg',

  },

  {

    id: uuidv4(),
    name: 'Samsung A32',
    details: '128 GO 6 GO ',
    long_details: "Écran : Super AMOLED de 6,4 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 90Hz. Processeur: MediaTek Helio G80(12 nm) avec un CPU octa - core. Mémoire : Disponible en versions avec 6GB de RAM et 128GB de stockage interne, extensible via microSD. Caméra principale: Quad caméra avec un capteur principal de 64 MP, un ultra grand - angle de 8 MP, un macro de 5 MP et un capteur de profondeur de 5 MP. Caméra frontale: 20 MP. Batterie : 5000 mAh avec une charge rapide de 15W. ",
    prix: '160 000',
    last_prix: '175 000',
    quantity: 1,

    url: 'https://images.samsung.com/is/image/samsung/p6pim/africa_fr/sm-a325fzkhxfe/gallery/africa-fr-galaxy-a32-a325-378975-sm-a325fzkhxfe-410260791?$2052_1641_PNG$',
    url2: "https://images.samsung.com/is/image/samsung/p6pim/africa_fr/sm-a325fzkhxfe/gallery/africa-fr-galaxy-a32-a325-378975-sm-a325fzkhxfe-410260776?$684_547_PNG$",
    url3: 'https://images.samsung.com/is/image/samsung/p6pim/africa_fr/sm-a325fzkhxfe/gallery/africa-fr-galaxy-a32-a325-378975-sm-a325fzkhxfe-410260778?$684_547_PNG$',

  },

  {

    id: uuidv4(),
    name: 'Samsung A32',
    details: '128 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,4 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 90Hz. Processeur: MediaTek Helio G80(12 nm) avec un CPU octa - core. Mémoire : Disponible en versions avec 8GB de RAM et  128GB de stockage interne, extensible via microSD. Caméra principale: Quad caméra avec un capteur principal de 64 MP, un ultra grand - angle de 8 MP, un macro de 5 MP et un capteur de profondeur de 5 MP. Caméra frontale: 20 MP. Batterie : 5000 mAh avec une charge rapide de 15W. ",
    prix: '165 000',
    last_prix: '180 000',
    quantity: 1,

    url: 'https://images.samsung.com/is/image/samsung/p6pim/africa_fr/sm-a325fzkhxfe/gallery/africa-fr-galaxy-a32-a325-378975-sm-a325fzkhxfe-410260791?$2052_1641_PNG$',
    url2: "https://images.samsung.com/is/image/samsung/p6pim/africa_fr/sm-a325fzkhxfe/gallery/africa-fr-galaxy-a32-a325-378975-sm-a325fzkhxfe-410260776?$684_547_PNG$",
    url3: 'https://images.samsung.com/is/image/samsung/p6pim/africa_fr/sm-a325fzkhxfe/gallery/africa-fr-galaxy-a32-a325-378975-sm-a325fzkhxfe-410260778?$684_547_PNG$',

  },


  {
    id: uuidv4(),
    name: 'Samsung A33',
    details: '128 GO 6 GO ',
    long_details: "Écran : Super AMOLED de 6,4 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 90Hz. Processeur: Samsung Exynos 1280(5 nm) avec un CPU octa - core. Mémoire : Disponible en versions avec 6GB de RAM et 128GB de stockage interne, extensible via microSD. Caméra principale: Quad caméra avec un capteur principal de 48 MP, un ultra grand - angle de 8 MP, un macro de 5 MP et un capteur de profondeur de 2 MP.  Caméra frontale: 13 MP.  Batterie : 5000 mAh avec une charge rapide de 25W. ",
    prix: '150 000',
    last_prix: '175 000',
    quantity: 1,

    url: 'https://www.cdiscount.com/pdt2/1/6/4/2/700x700/bun8806094268164/rw/pack-samsung-galaxy-a33-5g-128go-noir-jbl-go-3-b.jpg',
    url2: "https://www.cdiscount.com/pdt2/1/6/4/6/700x700/bun8806094268164/rw/pack-samsung-galaxy-a33-5g-128go-noir-jbl-go-3-b.jpg",
    url3: 'https://www.cdiscount.com/pdt2/1/6/4/7/700x700/bun8806094268164/rw/pack-samsung-galaxy-a33-5g-128go-noir-jbl-go-3-b.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung A33',
    details: '128 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,4 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 90Hz. Processeur: Samsung Exynos 1280(5 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 8GB de RAM et 128GB de stockage interne, extensible via microSD.  Caméra principale: Quad caméra avec un capteur principal de 48 MP, un ultra grand - angle de 8 MP, un macro de 5 MP et un capteur de profondeur de 2 MP.  Caméra frontale: 13 MP. Batterie : 5000 mAh avec une charge rapide de 25W. ",
    prix: '160 000',
    last_prix: '180 000',
    quantity: 1,

    url: 'https://www.cdiscount.com/pdt2/1/6/4/2/700x700/bun8806094268164/rw/pack-samsung-galaxy-a33-5g-128go-noir-jbl-go-3-b.jpg',
    url2: "https://www.cdiscount.com/pdt2/1/6/4/6/700x700/bun8806094268164/rw/pack-samsung-galaxy-a33-5g-128go-noir-jbl-go-3-b.jpg",
    url3: 'https://www.cdiscount.com/pdt2/1/6/4/7/700x700/bun8806094268164/rw/pack-samsung-galaxy-a33-5g-128go-noir-jbl-go-3-b.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung A34',
    details: '128 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,6 pouces avec une résolution de 1080 x 2340 pixels et un taux de rafraîchissement de 120Hz. Processeur: MediaTek Dimensity 1080(6 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 8GB de RAM et 128GB de stockage interne, extensible via microSD.  Caméra principale: Triple caméra avec un capteur principal de 48 MP, un ultra grand - angle de 8 MP et un macro de 5 MP.  Caméra frontale: 13 MP.  Batterie : 5000 mAh avec une charge rapide de 25W.",
    prix: '142 000',
    last_prix: '152 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/8a/48/4c/21776522/1540-1/tsp20241105153244/Smartphone-Samsung-Galaxy-A34-6-6-5G-Nano-SIM-128-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/8A/88/C4/14/21776522-3-1520-1/tsp20241105153244/Smartphone-Samsung-Galaxy-A34-6-6-5G-Nano-SIM-128-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/8A/88/C4/14/21776522-3-1520-3/tsp20241105153244/Smartphone-Samsung-Galaxy-A34-6-6-5G-Nano-SIM-128-Go-Noir.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung A53',
    details: '256 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,5 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 120Hz. Processeur: Samsung Exynos 1280(5 nm) avec un CPU octa - core. Mémoire : Disponible en versions avec 8GB de RAM et 256GB de stockage interne, extensible via microSD. Caméra principale: Quad caméra avec un capteur principal de 64 MP, un ultra grand - angle de 12 MP, un macro de 5 MP et un capteur de profondeur de 5 MP.  Caméra frontale: 32 MP. Batterie : 5000 mAh avec une charge rapide de 25W ",
    prix: '215 000',
    last_prix: '125 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/8d/2c/4e/21900429/1540-1/tsp20240927195059/Smartphone-Samsung-Galaxy-A53-6-5-5G-Double-nano-SIM-128-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/8d/2c/4e/21900429/1520-3/tsp20240927195059/Smartphone-Samsung-Galaxy-A53-6-5-5G-Double-nano-SIM-128-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/8d/2c/4e/21900429/1520-2/tsp20240927195059/Smartphone-Samsung-Galaxy-A53-6-5-5G-Double-nano-SIM-128-Go-Noir.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung A53',
    details: '128 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,5 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 120Hz. Processeur: Samsung Exynos 1280(5 nm) avec un CPU octa - core. Mémoire : Disponible en versions avec 8GB de RAM et 128GB de stockage interne, extensible via microSD.  Caméra principale: Quad caméra avec un capteur principal de 64 MP, un ultra grand - angle de 12 MP, un macro de 5 MP et un capteur de profondeur de 5 MP. Caméra frontale: 32 MP. Batterie : 5000 mAh avec une charge rapide de 25W ", prix: '195 000',
    last_prix: '205 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/8d/2c/4e/21900429/1540-1/tsp20240927195059/Smartphone-Samsung-Galaxy-A53-6-5-5G-Double-nano-SIM-128-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/8d/2c/4e/21900429/1520-3/tsp20240927195059/Smartphone-Samsung-Galaxy-A53-6-5-5G-Double-nano-SIM-128-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/8d/2c/4e/21900429/1520-2/tsp20240927195059/Smartphone-Samsung-Galaxy-A53-6-5-5G-Double-nano-SIM-128-Go-Noir.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung A54',
    details: '128 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,4 pouces avec une résolution de 1080 x 2340 pixels et un taux de rafraîchissement de 120Hz. Processeur: Samsung Exynos 1380(5 nm) avec un CPU octa - core. Mémoire : Disponible en versions avec  8GB de RAM et 128GB de stockage interne, extensible via microSD. Caméra principale: Triple caméra avec un capteur principal de 50 MP, un ultra grand - angle de 12 MP et un macro de 5 MP. Caméra frontale: 32 MP. Batterie : 5000 mAh avec une charge rapide de 25W.. ",
    prix: '177 000',
    last_prix: '187 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/D0/1D/F5/14/21975504-1505-1505-1/tsp20230516174634/Smartphone-Samsung-Galaxy-A54-5G-256-Go-6-4-Noir.jpg#46634781-511c-4314-9f3c-3da9f248b357',
    url2: "https://static.fnac-static.com/multimedia/Images/D0/1D/F5/14/21975504-3-1520-3/tsp20230516174612/Smartphone-Samsung-Galaxy-A54-5G-256-Go-6-4-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/D0/1D/F5/14/21975504-3-1520-2/tsp20230516174710/Smartphone-Samsung-Galaxy-A54-5G-256-Go-6-4-Noir.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung A54',
    details: '256 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,4 pouces avec une résolution de 1080 x 2340 pixels et un taux de rafraîchissement de 120Hz. Processeur: Samsung Exynos 1380(5 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec  8GB de RAM et 256GB de stockage interne, extensible via microSD. Caméra principale: Triple caméra avec un capteur principal de 50 MP, un ultra grand - angle de 12 MP et un macro de 5 MP.  Caméra frontale: 32 MP.  Batterie : 5000 mAh avec une charge rapide de 25W.. ",
    prix: '190 000',
    last_prix: '200 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/D0/1D/F5/14/21975504-1505-1505-1/tsp20230516174634/Smartphone-Samsung-Galaxy-A54-5G-256-Go-6-4-Noir.jpg#46634781-511c-4314-9f3c-3da9f248b357',
    url2: "https://static.fnac-static.com/multimedia/Images/D0/1D/F5/14/21975504-3-1520-3/tsp20230516174612/Smartphone-Samsung-Galaxy-A54-5G-256-Go-6-4-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/D0/1D/F5/14/21975504-3-1520-2/tsp20230516174710/Smartphone-Samsung-Galaxy-A54-5G-256-Go-6-4-Noir.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung A55',
    details: '128 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,6 pouces avec une résolution de 1080 x 2340 pixels et un taux de rafraîchissement de 120Hz.  Processeur: Samsung Exynos 1480(4 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 8GB et 128GB de stockage interne, extensible via microSD. Caméra principale: Triple caméra avec un capteur principal de 50 MP, un ultra grand - angle de 12 MP et un macro de 5 MP. Caméra frontale: 32 MP.  Batterie : 5000 mAh avec une charge rapide de 25W",
    prix: '187 000',
    last_prix: '197 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/fa/a0/67/23568634/3756-1/tsp20241105154153/Smartphone-Samsung-Galaxy-A55-6-6-5G-Nano-SIM-256-Go-Bleu.jpg',
    url2: "https://www.cdiscount.com/pdt2/0/6/1/1/700x700/sam8806095467061/rw/samsung-galaxy-a55-smartphone-128-go-5g-bleu-nuit.jpg",
    url3: 'https://www.cdiscount.com/pdt2/6/0/4/1/700x700/sam8806095457604/rw/samsung-galaxy-a35-smartphone-128-go-5g-bleu.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung A55',
    details: '256 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,6 pouces avec une résolution de 1080 x 2340 pixels et un taux de rafraîchissement de 120Hz.  Processeur: Samsung Exynos 1480(4 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 8GB et 256GB de stockage interne, extensible via microSD. Caméra principale: Triple caméra avec un capteur principal de 50 MP, un ultra grand - angle de 12 MP et un macro de 5 MP.  Caméra frontale: 32 MP. Batterie : 5000 mAh avec une charge rapide de 25W",
    prix: '215 000',
    last_prix: '225 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/fa/a0/67/23568634/3756-1/tsp20241105154153/Smartphone-Samsung-Galaxy-A55-6-6-5G-Nano-SIM-256-Go-Bleu.jpg',
    url2: "https://www.cdiscount.com/pdt2/0/6/1/1/700x700/sam8806095467061/rw/samsung-galaxy-a55-smartphone-128-go-5g-bleu-nuit.jpg",
    url3: 'https://www.cdiscount.com/pdt2/6/0/4/1/700x700/sam8806095457604/rw/samsung-galaxy-a35-smartphone-128-go-5g-bleu.jpg',

  },


  {
    id: uuidv4(),
    name: 'Samsung M32',
    details: '128 GO 6 GO ',
    long_details: "Écran : Super AMOLED de 6,4 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 90Hz. Processeur: MediaTek Helio G80(12 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 6GB de RAM et 128GB de stockage interne, extensible via microSD.  Caméra principale: Quad caméra avec un capteur principal de 64 MP, un ultra grand - angle de 8 MP, un macro de 2 MP et un capteur de profondeur de 2 MP. Caméra frontale: 20 MP.  Batterie : 5000 mAh avec une charge rapide de 25W",
    prix: '115 000',
    last_prix: '125 000',
    quantity: 1,

    url: 'https://fr.shopping.rakuten.com/photo/handy-samsung-galaxy-m32-m325-6-128gb-4g-ds-white-1951876372_L_NOPAD.jpg',
    url2: "https://fr.shopping.rakuten.com/photo/handy-samsung-galaxy-m32-m325-6-128gb-4g-ds-white-1951876372_L_NOPAD.jpg",
    url3: 'https://fr.shopping.rakuten.com/photo/handy-samsung-galaxy-m32-m325-6-128gb-4g-ds-white-1951876372_L_NOPAD.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung M33',
    details: '128 GO 8 GO ',
    long_details: "Écran : Super AMOLED de 6,4 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 90Hz.  Processeur: MediaTek Helio G80(12 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 8GB de RAM et 128GB de stockage interne, extensible via microSD. Caméra principale: Quad caméra avec un capteur principal de 64 MP, un ultra grand - angle de 8 MP, un macro de 2 MP et un capteur de profondeur de 2 MP.  Caméra frontale: 20 MP.  Batterie : 5000 mAh avec une charge rapide de 25W",
    prix: '140 000',
    last_prix: '150 000',
    quantity: 1,

    url: 'https://fr.shopping.rakuten.com/photo/handy-samsung-galaxy-m32-m325-6-128gb-4g-ds-white-1951876372_L_NOPAD.jpg',
    url2: "https://fr.shopping.rakuten.com/photo/handy-samsung-galaxy-m32-m325-6-128gb-4g-ds-white-1951876372_L_NOPAD.jpg",
    url3: 'https://fr.shopping.rakuten.com/photo/handy-samsung-galaxy-m32-m325-6-128gb-4g-ds-white-1951876372_L_NOPAD.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung M53',
    details: '128 GO 6 GO ',
    long_details: "Écran : Super AMOLED Plus de 6,7 pouces avec une résolution de 1080 x 2408 pixels et un taux de rafraîchissement de 120Hz. Processeur: MediaTek Dimensity 900(6 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 6GB RAM et 128GB de stockage interne, extensible via microSD.  Caméra principale: Quad caméra avec un capteur principal de 108 MP, un ultra grand - angle de 8 MP, un macro de 2 MP et un capteur de profondeur de 2 MP.  Caméra frontale: 32 MP.  Batterie : 5000 mAh avec une charge rapide de 25W",
    prix: '155 000',
    last_prix: '165 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/30/93/CC/14/21809456-1505-1505-1/tsp20230313180408/Samsung-m536b-dsn-galaxy-m53-5g-double-sim-ecran-de-6-7-128-go-6-go-ram-marron.jpg#2cf9279c-92b4-4e70-9ed2-a2f6dac78f5d',
    url2: "https://static.fnac-static.com/multimedia/Images/30/93/CC/14/21809456-3-1520-3/tsp20230313180408/Samsung-m536b-dsn-galaxy-m53-5g-double-sim-ecran-de-6-7-128-go-6-go-ram-marron.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/30/93/CC/14/21809456-3-1520-2/tsp20230313180408/Samsung-m536b-dsn-galaxy-m53-5g-double-sim-ecran-de-6-7-128-go-6-go-ram-marron.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung M53',
    details: '128 GO 8 GO ',
    long_details: "Écran : Super AMOLED Plus de 6,7 pouces avec une résolution de 1080 x 2408 pixels et un taux de rafraîchissement de 120Hz. Processeur: MediaTek Dimensity 900(6 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 8GB RAM et 128GB de stockage interne, extensible via microSD.  Caméra principale: Quad caméra avec un capteur principal de 108 MP, un ultra grand - angle de 8 MP, un macro de 2 MP et un capteur de profondeur de 2 MP. Caméra frontale: 32 MP.  Batterie : 5000 mAh avec une charge rapide de 25W",
    prix: '175 000',
    last_prix: '185 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/30/93/CC/14/21809456-1505-1505-1/tsp20230313180408/Samsung-m536b-dsn-galaxy-m53-5g-double-sim-ecran-de-6-7-128-go-6-go-ram-marron.jpg#2cf9279c-92b4-4e70-9ed2-a2f6dac78f5d',
    url2: "https://static.fnac-static.com/multimedia/Images/30/93/CC/14/21809456-3-1520-3/tsp20230313180408/Samsung-m536b-dsn-galaxy-m53-5g-double-sim-ecran-de-6-7-128-go-6-go-ram-marron.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/30/93/CC/14/21809456-3-1520-2/tsp20230313180408/Samsung-m536b-dsn-galaxy-m53-5g-double-sim-ecran-de-6-7-128-go-6-go-ram-marron.jpg',

  },


  {
    id: uuidv4(),
    name: 'Samsung S8',
    details: '64 GO ',
    long_details: "Écran : Super AMOLED de 5,8 pouces avec une résolution de 1440 x 2960 pixels et un ratio 18.5:9. Processeur: Exynos 8895(10 nm) pour les versions EMEA et Qualcomm Snapdragon 835(10 nm) pour les versions USA et Chine. Mémoire : 4GB de RAM et 64GB de stockage interne, extensible via microSD. Caméra principale: 12 MP avec ouverture f / 1.7, OIS, et capacité d'enregistrement vidéo 4K. Caméra frontale: 8 MP avec ouverture f / 1.7.  Batterie : 3000 mAh avec charge rapide de 15W et charge sans fil.",
    prix: '67 000',
    last_prix: '77 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/14/14/B8/E9/15317012-1505-1505-1/tsp20200723180519/Smartphone-Samsung-Galaxy-S8-64-Go-Noir-Carbone-Reconditionne.jpg#a5eabf74-d933-4636-b071-cd5dfb339cfa',
    url2: "https://static.fnac-static.com/multimedia/Images/14/14/B8/E9/15317012-3-1520-1/tsp20200723180519/Smartphone-Samsung-Galaxy-S8-64-Go-Noir-Carbone-Reconditionne.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/14/14/B8/E9/15317012-3-1520-3/tsp20200723180520/Smartphone-Samsung-Galaxy-S8-64-Go-Noir-Carbone-Reconditionne.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung S9',
    details: '64 GO ',
    long_details: "Écran : Super AMOLED de 5,8 pouces avec une résolution de 1440 x 2960 pixels et un ratio 18.5:9. Processeur: Exynos 9810(10 nm) pour les versions EMEA et Qualcomm Snapdragon 845(10 nm) pour les versions USA et Chine.  Mémoire : Disponible en versions avec 4GB de RAM et 64GB, 128GB ou 256GB de stockage interne, extensible via microSD.  Caméra principale: 12 MP avec ouverture variable f / 1.5 - 2.4, OIS, et capacité d'enregistrement vidéo 4K.  Caméra frontale: 8 MP avec ouverture f / 1.7.  Batterie : 3000 mAh avec charge rapide de 15W et charge sans fil.",
    prix: '82 000',
    last_prix: '92 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/73/7a/43/4422259/1505-1/tsp20241023175526/Smartphone-Samsung-Galaxy-S9-Double-SIM-64-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/73/7a/43/4422259/1520-2/tsp20241023175526/Smartphone-Samsung-Galaxy-S9-Double-SIM-64-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/73/7a/43/4422259/1520-4/tsp20241023175526/Smartphone-Samsung-Galaxy-S9-Double-SIM-64-Go-Noir.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung S10',
    details: '128 GO ',
    long_details: "Écran : Dynamic AMOLED de 6,1 pouces avec une résolution de 1440 x 3040 pixels et un ratio 19:9. Processeur: Exynos 9820(8 nm) pour les versions EMEA / LATAM et Qualcomm Snapdragon 855(7 nm) pour les versions USA / Chine. Mémoire : Disponible en versions avec 6GB ou 8GB de RAM et 128GB ou 512GB de stockage interne, extensible via microSD.  Caméra principale: Triple caméra avec un capteur principal de 12 MP(ouverture variable f / 1.5 - 2.4), un téléobjectif de 12 MP et un ultra grand - angle de 16 MP.  Caméra frontale: 10 MP avec ouverture f / 1.9. Batterie : 3400 mAh avec charge rapide de 15W, charge sans fil de 15W et charge sans fil inversée de 4.5W.",
    prix: '105 000',
    last_prix: '115 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/71/9a/a6/10918513/1505-1/tsp20241105230429/Smartphone-Samsung-Galaxy-S10-Double-SIM-128-Go-Noir-Prisme.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/71/9a/a6/10918513/1520-1/tsp20241105230429/Smartphone-Samsung-Galaxy-S10-Double-SIM-128-Go-Noir-Prisme.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/71/9a/a6/10918513/1520-5/tsp20241105230429/Smartphone-Samsung-Galaxy-S10-Double-SIM-128-Go-Noir-Prisme.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung S20 plus',
    details: '256 GO 12GO  ',
    long_details: "Écran : Dynamic AMOLED 2X de 6,7 pouces avec une résolution de 1440 x 3200 pixels et un taux de rafraîchissement de 120Hz. Processeur: Exynos 990(7 nm +) pour les versions globales et Qualcomm Snapdragon 865(7 nm +) pour les versions USA. Mémoire : Disponible en versions avec 12GB de RAM et 256GB de stockage interne, extensible via microSD.  Caméra principale: Quad caméra avec un capteur principal de 12 MP(ouverture f / 1.8), un téléobjectif de 64 MP(ouverture f / 2.0), un ultra grand - angle de 12 MP(ouverture f / 2.2) et un capteur de profondeur TOF 3D. Caméra frontale: 10 MP avec ouverture f / 2.2. Batterie : 4500 mAh avec charge rapide de 25W, charge sans fil de 15W et charge sans fil inversée de 4.5W.",
    prix: '125 000',
    last_prix: '135 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/fb/ba/d4/13941499/1505-1/tsp20241105212530/Smartphone-Samsung-Galaxy-S20-5G-Double-SIM-128-Go-Gris.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/fb/ba/d4/13941499/1520-2/tsp20241105212530/Smartphone-Samsung-Galaxy-S20-5G-Double-SIM-128-Go-Gris.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/fb/ba/d4/13941499/1520-5/tsp20241105212530/Smartphone-Samsung-Galaxy-S20-5G-Double-SIM-128-Go-Gris.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung S22 Ultra',
    details: '256 GO 12GO  ',
    long_details: "Écran : Dynamic AMOLED 2X de 6,8 pouces avec une résolution de 1440 x 3088 pixels et un taux de rafraîchissement de 120Hz.  Processeur: Exynos 2200(4 nm) pour les versions européennes et Qualcomm Snapdragon 8 Gen 1(4 nm) pour les versions internationales. Mémoire : Disponible en versions avec 12GB de RAM  256GB de stockage interne, non extensible.  Caméra principale: Quad caméra avec un capteur principal de 108 MP, un téléobjectif de 10 MP avec zoom optique 3x, un périscope téléobjectif de 10 MP avec zoom optique 10x, et un ultra grand - angle de 12 MP.  Caméra frontale: 40 MP.  Batterie : 5000 mAh avec charge rapide de 45W, charge sans fil de 15W et charge sans fil inversée de 4.5W.",
    prix: '320 000',
    last_prix: '330 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/a6/10/13/18026662/1540-1/tsp20241105132545/Smartphone-Samsung-Galaxy-S22-Ultra-6-8-Double-SIM-5G-12-Go-RAM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/a6/10/13/18026662/1520-1.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/a6/10/13/18026662/1520-4/tsp20241105132545/Smartphone-Samsung-Galaxy-S22-Ultra-6-8-Double-SIM-5G-12-Go-RAM-256-Go-Noir.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung S23 Ultra',
    details: '256 GO 12GO  ',
    long_details: "Écran : Dynamic AMOLED 2X de 6,8 pouces avec une résolution de 1440 x 3088 pixels et un taux de rafraîchissement de 120Hz.Processeur: Qualcomm Snapdragon 8 Gen 2(4 nm) avec un CPU octa - core. Mémoire : Disponible en versions avec 12GB de RAM et 256GB de stockage interne, non extensible. Caméra principale: Quad caméra avec un capteur principal de 200 MP, un téléobjectif de 10 MP avec zoom optique 3x, un périscope téléobjectif de 10 MP avec zoom optique 10x, et un ultra grand - angle de 12 MP. Caméra frontale: 12 MP. Batterie : 5000 mAh avec charge rapide de 45W, charge sans fil de 15W et charge sans fil inversée de 4.5W.",
    prix: '440 000',
    last_prix: '450 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/05/c0/44/21282821/1540-1/tsp20241106082049/Smartphone-Samsung-Galaxy-S23-Ultra-6-8-Nano-SIM-5G-8-Go-RAM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/05/c0/44/21282821/1520-3/tsp20241106082049/Smartphone-Samsung-Galaxy-S23-Ultra-6-8-Nano-SIM-5G-8-Go-RAM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/05/c0/44/21282821/1520-1.jpg',

  },


  {
    id: uuidv4(),
    name: 'Samsung S24 Ultra',
    details: '256 GO 12GO  ',
    long_details: "Écran : Dynamic LTPO AMOLED 2X de 6,8 pouces avec une résolution de 1440 x 3120 pixels et un taux de rafraîchissement de 120Hz. Processeur: Qualcomm Snapdragon 8 Gen 3(4 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 12GB de RAM et 256GB de stockage interne, non extensible.  Caméra principale: Quad caméra avec un capteur principal de 200 MP, un téléobjectif de 10 MP avec zoom optique 3x, un périscope téléobjectif de 50 MP avec zoom optique 5x, et un ultra grand - angle de 12 MP.  Caméra frontale: 12 MP.  Batterie : 5000 mAh avec charge rapide de 45W, charge sans fil de 15W et charge sans fil inversée.",
    prix: '660 000',
    last_prix: '670 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/b7/f6/5a/22738615/3756-1/tsp20241105221519/Smartphone-Samsung-Galaxy-S24-Ultra-6-8-5G-Nano-SIM-256-Go-Gris.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/b7/f6/5a/22738615/1520-3/tsp20241105221519/Smartphone-Samsung-Galaxy-S24-Ultra-6-8-5G-Nano-SIM-256-Go-Gris.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/a9/f6/5a/22738601/3756-1/tsp20241105221519/Smartphone-Samsung-Galaxy-S24-Ultra-6-8-5G-Nano-SIM-256-Go-Violet.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung Galaxy Z Fold 3',
    details: '256 GO 12GO  ',
    long_details: "Écran : Dynamic AMOLED 2X pliable de 7,6 pouces avec une résolution de 1768 x 2208 pixels et un taux de rafraîchissement de 120Hz. L'écran de couverture est un Dynamic AMOLED 2X de 6,2 pouces avec une résolution de 832 x 2268 pixels. Processeur: Qualcomm Snapdragon 888 5G(5 nm) avec un CPU octa - core.  Mémoire : Disponible en versions avec 12GB de RAM et 256GB de stockage interne, non extensible. Caméra principale: Triple caméra avec un capteur principal de 12 MP(large), un téléobjectif de 12 MP avec zoom optique 2x, et un ultra grand - angle de 12 MP. Caméra frontale: 4 MP sous l'écran principal et 10 MP sur l'écran de couverture. Batterie : 4400 mAh avec charge rapide de 25W, charge sans fil de 11W et charge sans fil inversée de 4.5W.",
    prix: '335 000',
    last_prix: '345 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/83/ba/01/16890499/3756-1/tsp20241105132001/Smartphone-Samsung-Galaxy-Z-Fold3-5G-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/83/ba/01/16890499/1520-1/tsp20241105132001/Smartphone-Samsung-Galaxy-Z-Fold3-5G-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/83/ba/01/16890499/1520-3/tsp20241105132001/Smartphone-Samsung-Galaxy-Z-Fold3-5G-256-Go-Noir.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung Galaxy Z Fold 4',
    details: '256 GO 12GO  ',
    long_details: "Écran : Dynamic AMOLED 2X pliable de 7,6 pouces avec une résolution de 1812 x 2176 pixels et un taux de rafraîchissement de 120Hz. L'écran de couverture est un Dynamic AMOLED 2X de 6,2 pouces avec une résolution de 904 x 2316 pixels.  Processeur: Qualcomm Snapdragon 8 + Gen 1(4 nm) avec un CPU octa - core. Mémoire : Disponible en versions avec 12GB de RAM et 256GB de stockage interne, non extensible. Caméra principale: Triple caméra avec un capteur principal de 50 MP, un téléobjectif de 10 MP avec zoom optique 3x, et un ultra grand - angle de 12 MP. Caméra frontale: 4 MP sous l'écran principal et 10 MP sur l'écran de couverture. Batterie : 4400 mAh avec charge rapide de 25W, charge sans fil de 15W et charge sans fil inversée de 4.5W",
    prix: '480 000',
    last_prix: '490 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/28/28/30/19933224/1505-1/tsp20241105132545/Smartphone-Samsung-Galaxy-Z-Fold4-5G-7-6-Double-nano-SIM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/28/28/30/19933224/1520-4/tsp20241105132545/Smartphone-Samsung-Galaxy-Z-Fold4-5G-7-6-Double-nano-SIM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/28/28/30/19933224/1520-6/tsp20241105132545/Smartphone-Samsung-Galaxy-Z-Fold4-5G-7-6-Double-nano-SIM-256-Go-Noir.jpg',

  },


  {
    id: uuidv4(),
    name: 'Samsung Galaxy Z Fold 5',
    details: '256 GO 12GO  ',
    long_details: "Écran : Dynamic AMOLED 2X pliable de 7,6 pouces avec une résolution de 1812 x 2176 pixels et un taux de rafraîchissement de 120Hz. L'écran de couverture est un Dynamic AMOLED 2X de 6,2 pouces avec une résolution de 904 x 2316 pixels. Processeur: Qualcomm Snapdragon 8 Gen 2(4 nm) avec un CPU octa - core. Mémoire : Disponible en versions avec 12GB de RAM et 256GBde stockage interne, non extensible. Caméra principale: Triple caméra avec un capteur principal de 50 MP, un téléobjectif de 10 MP avec zoom optique 3x, et un ultra grand - angle de 12 MP. Caméra frontale: 4 MP sous l'écran principal et 10 MP sur l'écran de couverture.  Batterie : 4400 mAh avec charge rapide de 25W, charge sans fil de 15W et charge sans fil inversée de 4.5W.",
    prix: '610 000',
    last_prix: '620 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/3d/95/51/22123837/3756-1/tsp20241023160411/Smartphone-Samsung-Galaxy-Z-Fold5-7-6-5G-Nano-SIM-512-Go-Noir.jpg',
    url2: "https://images.samsung.com/africa_fr/smartphones/galaxy-z-fold5/accessories/images/galaxy-z-fold5-accessories-eco-leather-case-black.jpg?imbypass=true",
    url3: 'https://images.samsung.com/africa_fr/smartphones/galaxy-z-fold5/buy/nonshop_icyBlue.jpg',

  },


  {
    id: uuidv4(),
    name: 'Samsung Galaxy Z Fold 6',
    details: '256 GO 12GO  ',
    long_details: "Écran : Dynamic LTPO AMOLED 2X pliable de 7,6 pouces avec une résolution de 1856 x 2160 pixels et un taux de rafraîchissement de 120Hz. L'écran de couverture est un Dynamic LTPO AMOLED 2X de 6,3 pouces avec une résolution de 968 x 2376 pixels. Processeur: Qualcomm Snapdragon 8 Gen 3(4 nm) avec un CPU octa - core. Mémoire : Disponible en versions avec 12GB de RAM et 256GBde stockage interne, non extensible. Caméra principale: Triple caméra avec un capteur principal de 50 MP, un téléobjectif de 10 MP avec zoom optique 3x, et un ultra grand - angle de 12 MP. Caméra frontale: 4 MP sous l'écran principal et 10 MP sur l'écran de couverture. Batterie : 4400 mAh avec charge rapide de 25W, charge sans fil de 15W et charge sans fil inversée.",
    prix: '835 000',
    last_prix: '845 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/aa/a2/6c/23896746/3756-1/tsp20241023173810/Smartphone-Samsung-Galaxy-Z-Fold6-7-6-5G-Nano-SIM-256-Go-Bleu-nuit.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/aa/a2/6c/23896746/1520-2/tsp20241023173810/Smartphone-Samsung-Galaxy-Z-Fold6-7-6-5G-Nano-SIM-256-Go-Bleu-nuit.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/aa/a2/6c/23896746/1520-1/tsp20241023173810/Smartphone-Samsung-Galaxy-Z-Fold6-7-6-5G-Nano-SIM-256-Go-Bleu-nuit.jpg',

  },

  {
    id: uuidv4(),
    name: 'Samsung Galaxy Note 10',
    details: '256 GO 12GO  ',
    long_details: "Écran : Dynamic AMOLED de 6,3 pouces avec une résolution de 1080 x 2280 pixels et un ratio 19:9. Processeur: Exynos 9825(7 nm) pour les versions EMEA / LATAM et Qualcomm Snapdragon 855(7 nm) pour les versions USA / Chine. Mémoire : Disponible en versions avec 12GB de RAM et 256GB de stockage interne, non extensible. Caméra principale: Triple caméra avec un capteur principal de 12 MP(ouverture variable f / 1.5 - 2.4), un téléobjectif de 12 MP et un ultra grand - angle de 16 MP. Caméra frontale: 10 MP. Batterie : 3500 mAh avec charge rapide de 25W, charge sans fil de 12W et charge sans fil inversée de 4.5W.",
    prix: '155 000',
    last_prix: '165 000',
    quantity: 1,

    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/20/18/bc/12326944/1540-1/tsp20241023131514/Smartphone-Samsung-Galaxy-Note-10-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/20/18/bc/12326944/1520-1/tsp20241023131514/Smartphone-Samsung-Galaxy-Note-10-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/20/18/bc/12326944/1520-3/tsp20241023131514/Smartphone-Samsung-Galaxy-Note-10-256-Go-Noir.jpg',

  },
],

  redmi: [

  {
    id: uuidv4(),
    name: 'Xiaomi Redmi A2',
    details: '32 GO 2 GO',
    long_details:  "Écran : IPS LCD de 6,52 pouces avec une résolution de 1600 x 720 pixels. Processeur : MediaTek Helio G36 (12 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 2GB de RAM et 32 de stockage interne, extensible via microSD. Caméra principale : Double caméra avec un capteur principal de 8 MP et un capteur de profondeur. Caméra frontale : 5 MP. Batterie : 5000 mAh avec charge rapide de 10W." ,
    prix: '51 000',
    last_prix: '62 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/95/07/4b/21694357/1505-1/tsp20241105220348/Smartphone-Xiaomi-Redmi-A2-6-52-Double-nano-SIM-32-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/95/07/4b/21694357/1520-1/tsp20241105220348/Smartphone-Xiaomi-Redmi-A2-6-52-Double-nano-SIM-32-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/95/07/4b/21694357/1520-5/tsp20241105220348/Smartphone-Xiaomi-Redmi-A2-6-52-Double-nano-SIM-32-Go-Noir.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: 'Xiaomi Redmi A3',
    details: '128 GO 4 GO' ,
    long_details: "Écran : IPS LCD de 6,71 pouces avec une résolution de 720 x 1650 pixels et un taux de rafraîchissement de 90Hz. Processeur : MediaTek Helio G36 (12 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 4GB de RAM et 128GB de stockage interne, extensible via microSD. Caméra principale : Double caméra avec un capteur principal de 8 MP et un capteur auxiliaire. Caméra frontale : 5 MP. Batterie : 5000 mAh avec charge rapide de 10W." ,
    prix: '63 000',
    last_prix: '73 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/BB/5B/15/16/23156155-1505-1540-1/tsp20241106010337/Smartphone-Xiaomi-Redmi-A3-6-71-Double-SIM-128-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/BB/5B/15/16/23156155-3-1520-1/tsp20241106010337/Smartphone-Xiaomi-Redmi-A3-6-71-Double-SIM-128-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/BB/5B/15/16/23156155-3-1520-2/tsp20241106010337/Smartphone-Xiaomi-Redmi-A3-6-71-Double-SIM-128-Go-Noir.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: 'Xiaomi Redmi A9',
    details: '64 GO 4 GO',
    long_details: "Écran : IPS LCD de 6,53 pouces avec une résolution de 720 x 1600 pixels. Processeur : MediaTek Helio G25 (12 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 4GB et 64GB de stockage interne, extensible via microSD. Caméra principale : 13 MP avec ouverture f/2.2. Caméra frontale : 5 MP. Batterie : 5000 mAh avec charge rapide de 10W." ,
    prix: '52 000',
    last_prix: '62 000',
    quantity: 1,
  
    url: 'https://m.media-amazon.com/images/I/61P3w1DUxbL._AC_SL1200_.jpg',
    url2: "https://m.media-amazon.com/images/I/51cuD+V9qTL._AC_SL1200_.jpg",
    url3: 'https://m.media-amazon.com/images/I/51SFEb5iZaL._AC_SL1200_.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: 'Xiaomi Redmi 13 C ',
    details:' 256 GO 8 GO',
    long_details: "Écran : IPS LCD de 6,74 pouces avec une résolution de 720 x 1600 pixels et un taux de rafraîchissement de 90Hz2. Processeur : MediaTek Helio G85 (12 nm) avec un CPU octa-core2. Mémoire : Disponible en versions avec 8GB de RAM et 256GB de stockage interne, extensible via microSD2. Caméra principale : Double caméra avec un capteur principal de 50 MP (ouverture f/1.8) et un capteur macro de 2 MP2. Caméra frontale : 8 MP2. Batterie : 5000 mAh avec charge rapide de 18W2. ",
    prix: '75 000',
    last_prix: '85 000',
    quantity: 1,
  
    url: 'https://m.media-amazon.com/images/I/51ROQzNutPL._AC_SX522_.jpg',
    url2: "https://m.media-amazon.com/images/I/51Jl9YNRLXL._AC_SX522_.jpg",
    url3: 'https://m.media-amazon.com/images/I/510ahnkiK3L._AC_SX522_.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: 'Xiaomi Redmi Note 11 ',
    details: '128 GO 6 GO' ,
    long_details: "Écran : AMOLED de 6,43 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 90Hz. Processeur : Qualcomm Snapdragon 680 4G (6 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 6GB de RAM et 128GB de stockage interne, extensible via microSD. Caméra principale : Quad caméra avec un capteur principal de 50 MP, un ultra grand-angle de 8 MP, un capteur macro de 2 MP et un capteur de profondeur de 2 MP. Caméra frontale : 13 MP. Batterie : 5000 mAh avec charge rapide de 33W.",
    prix: '75 000',
    last_prix: '85 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/84/ca/11/17943172/1505-1/tsp20241106020044/Smartphone-Xiaomi-Redmi-Note-11-6-43-Double-SIM-4-Go-RAM-128-Go-Gris-graphite.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/84/A8/1C/11/17943172-3-1520-2/tsp20241106020044/Smartphone-Xiaomi-Redmi-Note-11-6-43-Double-SIM-4-Go-RAM-128-Go-Gris-graphite.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/84/ca/11/17943172/1520-4/tsp20241106020044/Smartphone-Xiaomi-Redmi-Note-11-6-43-Double-SIM-4-Go-RAM-128-Go-Gris-graphite.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: 'Xiaomi Redmi Note 13 ',
    details: '256 GO 8 GO' ,
    long_details: "Écran : AMOLED de 6,67 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 120Hz2. Processeur : MediaTek Dimensity 6080 (6 nm) avec un CPU octa-core2. Mémoire : Disponible en versions avec 8GB de RAM et 256GB de stockage interne, extensible via microSD2. Caméra principale : Triple caméra avec un capteur principal de 108 MP, un ultra grand-angle de 8 MP et un capteur de profondeur de 2 MP2. Caméra frontale : 16 MP2. Batterie : 5000 mAh avec charge rapide de 33W2.",
    prix: '110 000',
    last_prix: '120 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/0d/2e/5a/22687245/3756-1/tsp20241023171959/Smartphone-Xiaomi-Redmi-Note-13-6-67-Double-SIM-256-Go-Bleu.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/0d/2e/5a/22687245/1520-1/tsp20241023171959/Smartphone-Xiaomi-Redmi-Note-13-6-67-Double-SIM-256-Go-Bleu.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/0d/2e/5a/22687245/1520-2/tsp20241023171959/Smartphone-Xiaomi-Redmi-Note-13-6-67-Double-SIM-256-Go-Bleu.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: 'Xiaomi Redmi Note 13 Pro ',
    details: "256 GO 8 GO",
    long_details: "Écran : AMOLED de 6,67 pouces avec une résolution de 1220 x 2712 pixels et un taux de rafraîchissement de 120Hz. Processeur : Qualcomm Snapdragon 7s Gen 2 (4 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 8GB de RAM et 256GB de stockage interne, non extensible. Caméra principale : Triple caméra avec un capteur principal de 200 MP, un ultra grand-angle de 8 MP et un capteur macro de 2 MP. Caméra frontale : 16 MP. Batterie : 5100 mAh avec charge rapide de 67W.",
    prix: '140 000',
    last_prix: '150 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/11/2e/5a/22687249/3756-1/tsp20241023172704/Smartphone-Xiaomi-Redmi-Note-13-Pro-6-67-Double-SIM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/11/2e/5a/22687249/1520-1/tsp20241023172704/Smartphone-Xiaomi-Redmi-Note-13-Pro-6-67-Double-SIM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/11/2e/5a/22687249/1520-2/tsp20241023172704/Smartphone-Xiaomi-Redmi-Note-13-Pro-6-67-Double-SIM-256-Go-Noir.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: 'Xiaomi Redmi Note 13 Pro ',
    details: '512 GO 12 GO',
    long_details: "Écran : AMOLED de 6,67 pouces avec une résolution de 1220 x 2712 pixels et un taux de rafraîchissement de 120Hz. Processeur : Qualcomm Snapdragon 7s Gen 2 (4 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 12GB de RAM et 512GB de stockage interne, non extensible. Caméra principale : Triple caméra avec un capteur principal de 200 MP, un ultra grand-angle de 8 MP et un capteur macro de 2 MP. Caméra frontale : 16 MP. Batterie : 5100 mAh avec charge rapide de 67W.",
    prix: '165 000',
    last_prix: '175 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/11/2e/5a/22687249/3756-1/tsp20241023172704/Smartphone-Xiaomi-Redmi-Note-13-Pro-6-67-Double-SIM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/11/2e/5a/22687249/1520-1/tsp20241023172704/Smartphone-Xiaomi-Redmi-Note-13-Pro-6-67-Double-SIM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/11/2e/5a/22687249/1520-2/tsp20241023172704/Smartphone-Xiaomi-Redmi-Note-13-Pro-6-67-Double-SIM-256-Go-Noir.jpg',
  
  },
  
  
  {
    id: uuidv4(),
    name: ' Xiaomi Redmi Note 13 Pro+ ',
    details: '512 GO 12 GO' ,
    long_details: "Écran : AMOLED de 6,67 pouces avec une résolution de 1220 x 2712 pixels et un taux de rafraîchissement de 120Hz. Processeur : MediaTek Dimensity 7200 Ultra (4 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 12GB de RAM et 512GB de stockage interne, non extensible. Caméra principale : Triple caméra avec un capteur principal de 200 MP, un ultra grand-angle de 8 MP et un capteur macro de 2 MP. Caméra frontale : 16 MP. Batterie : 5000 mAh avec charge rapide de 120W.",
    prix: '215 000',
    last_prix: '225 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/08/2e/5a/22687240/3756-1/tsp20241030094830/Smartphone-Xiaomi-Redmi-Note-13-Pro-5G-6-67-Double-SIM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/08/2e/5a/22687240/1520-1/tsp20241030094830/Smartphone-Xiaomi-Redmi-Note-13-Pro-5G-6-67-Double-SIM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/08/2e/5a/22687240/1520-2/tsp20241030094830/Smartphone-Xiaomi-Redmi-Note-13-Pro-5G-6-67-Double-SIM-256-Go-Noir.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: ' Xiaomi Redmi Note 13 Pro+ ',
    details: '256 GO 8 GO ',
    long_details: "Écran : AMOLED de 6,67 pouces avec une résolution de 1220 x 2712 pixels et un taux de rafraîchissement de 120Hz. Processeur : MediaTek Dimensity 7200 Ultra (4 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 8GB de RAM et 256GB de stockage interne, non extensible. Caméra principale : Triple caméra avec un capteur principal de 200 MP, un ultra grand-angle de 8 MP et un capteur macro de 2 MP. Caméra frontale : 16 MP. Batterie : 5000 mAh avec charge rapide de 120W.",
    prix: '195 000',
    last_prix: '205 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/08/2e/5a/22687240/3756-1/tsp20241030094830/Smartphone-Xiaomi-Redmi-Note-13-Pro-5G-6-67-Double-SIM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/08/2e/5a/22687240/1520-1/tsp20241030094830/Smartphone-Xiaomi-Redmi-Note-13-Pro-5G-6-67-Double-SIM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/08/2e/5a/22687240/1520-2/tsp20241030094830/Smartphone-Xiaomi-Redmi-Note-13-Pro-5G-6-67-Double-SIM-256-Go-Noir.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: ' Xiaomi Redmi Note 12 Pro+ ',
    details: '256 GO 8 GO',
    long_details: "Écran : AMOLED de 6,67 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 120Hz. Processeur : MediaTek Dimensity 1080 (6 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 8GB de RAM et 256GB de stockage interne, non extensible. Caméra principale : Triple caméra avec un capteur principal de 50 MP, un ultra grand-angle de 8 MP et un capteur macro de 2 MP. Caméra frontale : 16 MP. Batterie : 5000 mAh avec charge rapide de 67W.",
    prix: '197 000',
    last_prix: '210 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1505-1/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1520-1/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1520-2/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg',
  
  },
  
  
  {
    id: uuidv4(),
    name: ' Xiaomi Redmi Note 12 Pro ',
    details: '128 GO 8 GO' ,
    long_details: "Écran : AMOLED de 6,67 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 120Hz. Processeur : MediaTek Dimensity 1080 (6 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 8GB de RAM et 128GB de stockage interne, non extensible. Caméra principale : Triple caméra avec un capteur principal de 50 MP, un ultra grand-angle de 8 MP et un capteur macro de 2 MP. Caméra frontale : 16 MP. Batterie : 5000 mAh avec charge rapide de 67W",
    prix: '160 000',
    last_prix: '170 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1505-1/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1520-1/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1520-2/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: ' Xiaomi Redmi Note 12 Pro ',
    details: '256 GO 12 GO',
    long_details: "Écran : AMOLED de 6,67 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 120Hz. Processeur : MediaTek Dimensity 1080 (6 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 12GB de RAM et 256GB de stockage interne, non extensible. Caméra principale : Triple caméra avec un capteur principal de 50 MP, un ultra grand-angle de 8 MP et un capteur macro de 2 MP. Caméra frontale : 16 MP. Batterie : 5000 mAh avec charge rapide de 67W",
    prix: '175 000',
    last_prix: '185 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1505-1/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1520-1/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1520-2/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: ' Xiaomi Redmi Note 12 Pro ',
    details: '256 GO 8 GO' ,
    long_details: "Écran : AMOLED de 6,67 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 120Hz. Processeur : MediaTek Dimensity 1080 (6 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 8GB de RAM et 256GB de stockage interne, non extensible. Caméra principale : Triple caméra avec un capteur principal de 50 MP, un ultra grand-angle de 8 MP et un capteur macro de 2 MP. Caméra frontale : 16 MP. Batterie : 5000 mAh avec charge rapide de 67W",
    prix: '145 000',
    last_prix: '155 000',
    quantity: 1,
  
    url: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1505-1/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg',
    url2: "https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1520-1/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg",
    url3: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/58/ba/4a/21674584/1520-2/tsp20241023155214/Smartphone-Xiaomi-Redmi-Note-12-Pro-Plus-6-67-5G-Double-nano-SIM-256-Go-Noir.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: ' Xiaomi Redmi Note 11E ',
    details: '128 GO 4 GO' ,
    long_details: "Écran : IPS LCD de 6,58 pouces avec une résolution de 1080 x 2408 pixels et un taux de rafraîchissement de 90Hz.  Processeur : MediaTek Dimensity 700 (7 nm) avec un CPU octa-core. Mémoire : Disponible en versions avec 4GB de RAM et 128GB de stockage interne, non extensible. Caméra principale : Double caméra avec un capteur principal de 50 MP (ouverture f/1.8) et un capteur de profondeur de 2 MP. Caméra frontale : 5 MP. Batterie : 5000 mAh avec charge rapide de 18W",
    prix: '90 000',
    last_prix: '1OO 000',
    quantity: 1,
  
    url: 'https://phonesdata.com/files/models/Xiaomi-Redmi-Note-11E-157.jpg',
    url2: "https://phonesdata.com/files/models/Xiaomi-Redmi-Note-11E-578.jpg",
    url3: 'https://phonesdata.com/files/models/Xiaomi-Redmi-Note-11E-789.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: ' Xiaomi Redmi Note 11R ',
    details: '128 GO 6 GO',
    long_details: "Écran : IPS LCD de 6,58 pouces avec une résolution de 1080 x 2408 pixels et un taux de rafraîchissement de 90Hz2. Processeur : MediaTek Dimensity 700 (7 nm) avec un CPU octa-core2. Mémoire : Disponible en versions avec 6GB de RAM et 128GB de stockage interne, extensible via microSD2. Caméra principale : Double caméra avec un capteur principal de 13 MP et un capteur de profondeur de 2 MP2. Caméra frontale : 5 MP2.Batterie : 5000 mAh avec charge rapide de 18W2.",
    prix: '80 000',
    last_prix: '9O 000',
    quantity: 1,
  
    url: 'https://phonesdata.com/files/models/Xiaomi-Redmi-Note-11R-944.jpg',
    url2: "https://phonesdata.com/files/models/Xiaomi-Redmi-Note-11R-148.jpg",
    url3: 'https://phonesdata.com/files/models/Xiaomi-Redmi-Note-11R-135.jpg',
  
  },
  
  {
    id: uuidv4(),
    name: ' Xiaomi Redmi Note 11SE ',
    details: '128 GO 8 GO',
    long_details: "Écran : IPS LCD de 6,5 pouces avec une résolution de 1080 x 2400 pixels et un taux de rafraîchissement de 90Hz2. Processeur : MediaTek Dimensity 700 (7 nm) avec un CPU octa-core2. Mémoire : Disponible en versions avec 8GB de RAM et 128GB de stockage interne, non extensible2. Caméra principale : Double caméra avec un capteur principal de 48 MP (ouverture f/1.8) et un capteur macro de 2 MP2. Caméra frontale : 8 MP (ouverture f/2.0)2. Batterie : 5000 mAh avec charge rapide de 18W2.",
    prix: '100 000',
    last_prix: '110 000',
    quantity: 1,
  
    url: 'https://phonesdata.com/files/models/Xiaomi-Redmi-Note-11SE-329.jpg',
    url2: "https://phonesdata.com/files/models/Xiaomi-Redmi-Note-11SE-985.jpg",
    url3: 'https://phonesdata.com/files/models/Xiaomi-Redmi-Note-11SE-824.jpg',
  
  },
],




};



export const pc = [
  {
    id: uuidv4(),
    name: 'PC 8 pro',
    details: 'couleur blue, 64GB, etc ..',
    prix: '799',
    last_prix: '1023',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/E2J7hG3ZRWpFOO0NBrkg1s6K1ZKYLwEuCK_lAO7LrPVH3C0eTbFCycYgqs4gr8caAr27S-PKLy2yLhIVGCy4byZ5wZ8kzQpnyQk=rw-e365-w1200'
  },
  {
    id: uuidv4(),
    name: 'Pixel Buds pro',
    details: 'couleur blue, 64GB, etc ..',
    prix: '149',
    last_prix: '229',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/9G5VkratxCGLyYy5NLfL2-AMs-BymXE4erYP3_N7LsGGWf439j2Htj1Vf80Dr94nn-Rf4c9k9xRuAMpd0RbYGvH0zgSbU4vqkso=rw-e365-nu-w601'
  },
  {
    id: uuidv4(),
    name: 'Pixel 8 a',
    details: 'couleur blue, 64GB, etc ..',
    prix: '499',
    last_prix: '549',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/4mBe7W_xXYt4JNMQHR0wIX7n4Vv6VPxw3MRJWLCiUJAPCoHz5r7oHEKu4wr_KszIouzwCnk7XabMRJ135ae1niTXr6AT0_gRpzE=s1400-w1400-e365-rw-v1'
  },
  {
    id: uuidv4(),
    name: 'Fitbit Charge 6',
    details: 'couleur blue, 64GB, etc ..',
    prix: '119,95',
    last_prix: '159,95',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/1irhYbVhHpMUXbVuRtM2erpOC4BMFhZuplK63D_K6wrUR5Zep6EcbHW-VN81QJV3RwvmHiQRS3FuHOXuTDfiCo0oISYPle-CDjXo=rw-e365-w1200'
  },
  {
    id: uuidv4(),
    name: 'Google Pixel Watch',
    details: 'couleur blue, 64GB, etc ..',
    prix: '799',
    last_prix: '1023',
    quantity: 1,
    url: '/article/montre.webp'
  },
  // Ajoutez d'autres produits ici si nécessaire
];


export const tablettes = [
  {
    id: uuidv4(),
    name: 'Pixel 8 pro',
    details: 'couleur blue, 64GB, etc ..',
    prix: '799',
    last_prix: '1023',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/E2J7hG3ZRWpFOO0NBrkg1s6K1ZKYLwEuCK_lAO7LrPVH3C0eTbFCycYgqs4gr8caAr27S-PKLy2yLhIVGCy4byZ5wZ8kzQpnyQk=rw-e365-w1200'
  },
  {
    id: uuidv4(),
    name: 'Pixel Buds pro',
    details: 'couleur blue, 64GB, etc ..',
    prix: '149',
    last_prix: '229',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/9G5VkratxCGLyYy5NLfL2-AMs-BymXE4erYP3_N7LsGGWf439j2Htj1Vf80Dr94nn-Rf4c9k9xRuAMpd0RbYGvH0zgSbU4vqkso=rw-e365-nu-w601'
  },
  {
    id: uuidv4(),
    name: 'Pixel 8 a',
    details: 'couleur blue, 64GB, etc ..',
    prix: '499',
    last_prix: '549',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/4mBe7W_xXYt4JNMQHR0wIX7n4Vv6VPxw3MRJWLCiUJAPCoHz5r7oHEKu4wr_KszIouzwCnk7XabMRJ135ae1niTXr6AT0_gRpzE=s1400-w1400-e365-rw-v1'
  },
  {
    id: uuidv4(),
    name: 'Fitbit Charge 6',
    details: 'couleur blue, 64GB, etc ..',
    prix: '119,95',
    last_prix: '159,95',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/1irhYbVhHpMUXbVuRtM2erpOC4BMFhZuplK63D_K6wrUR5Zep6EcbHW-VN81QJV3RwvmHiQRS3FuHOXuTDfiCo0oISYPle-CDjXo=rw-e365-w1200'
  },
  {
    id: uuidv4(),
    name: 'Google Pixel Watch',
    details: 'couleur blue, 64GB, etc ..',
    prix: '799',
    last_prix: '1023',
    quantity: 1,
    url: '/article/montre.webp'
  },
  // Ajoutez d'autres produits ici si nécessaire
];
export const accessoires = [
  {
    id: uuidv4(),
    name: 'Pixel 8 pro',
    details: 'couleur blue, 64GB, etc ..',
    prix: '799',
    last_prix: '1023',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/E2J7hG3ZRWpFOO0NBrkg1s6K1ZKYLwEuCK_lAO7LrPVH3C0eTbFCycYgqs4gr8caAr27S-PKLy2yLhIVGCy4byZ5wZ8kzQpnyQk=rw-e365-w1200'
  },
  {
    id: uuidv4(),
    name: 'Pixel Buds pro',
    details: 'couleur blue, 64GB, etc ..',
    prix: '149',
    last_prix: '229',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/9G5VkratxCGLyYy5NLfL2-AMs-BymXE4erYP3_N7LsGGWf439j2Htj1Vf80Dr94nn-Rf4c9k9xRuAMpd0RbYGvH0zgSbU4vqkso=rw-e365-nu-w601'
  },
  {
    id: uuidv4(),
    name: 'Pixel 8 a',
    details: 'couleur blue, 64GB, etc ..',
    prix: '499',
    last_prix: '549',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/4mBe7W_xXYt4JNMQHR0wIX7n4Vv6VPxw3MRJWLCiUJAPCoHz5r7oHEKu4wr_KszIouzwCnk7XabMRJ135ae1niTXr6AT0_gRpzE=s1400-w1400-e365-rw-v1'
  },
  {
    id: uuidv4(),
    quantity: 1,
    name: 'Fitbit Charge 6',
    details: 'couleur blue, 64GB, etc ..',
    prix: '119,95',
    last_prix: '159,95',
    url: 'https://lh3.googleusercontent.com/1irhYbVhHpMUXbVuRtM2erpOC4BMFhZuplK63D_K6wrUR5Zep6EcbHW-VN81QJV3RwvmHiQRS3FuHOXuTDfiCo0oISYPle-CDjXo=rw-e365-w1200'
  },
  {
    id: uuidv4(),
    name: 'Google Pixel Watch',
    details: 'couleur blue, 64GB, etc ..',
    prix: '799',
    last_prix: '1023',
    quantity: 1,
    url: '/article/montre.webp'
  },
  // Ajoutez d'autres produits ici si nécessaire
];
export const montres = [
  {
    id: uuidv4(),
    name: 'Pixel 8 pro',
    details: 'couleur blue, 64GB, etc ..',
    prix: '799',
    last_prix: '1023',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/E2J7hG3ZRWpFOO0NBrkg1s6K1ZKYLwEuCK_lAO7LrPVH3C0eTbFCycYgqs4gr8caAr27S-PKLy2yLhIVGCy4byZ5wZ8kzQpnyQk=rw-e365-w1200'
  },
  {
    id: uuidv4(),
    name: 'Pixel Buds pro',
    details: 'couleur blue, 64GB, etc ..',
    prix: '149',
    last_prix: '229',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/9G5VkratxCGLyYy5NLfL2-AMs-BymXE4erYP3_N7LsGGWf439j2Htj1Vf80Dr94nn-Rf4c9k9xRuAMpd0RbYGvH0zgSbU4vqkso=rw-e365-nu-w601'
  },
  {
    id: uuidv4(),
    name: 'Pixel 8 a',
    details: 'couleur blue, 64GB, etc ..',
    prix: '499',
    last_prix: '549',
    url: 'https://lh3.googleusercontent.com/4mBe7W_xXYt4JNMQHR0wIX7n4Vv6VPxw3MRJWLCiUJAPCoHz5r7oHEKu4wr_KszIouzwCnk7XabMRJ135ae1niTXr6AT0_gRpzE=s1400-w1400-e365-rw-v1'
  },
  {
    id: uuidv4(),
    name: 'Fitbit Charge 6',
    details: 'couleur blue, 64GB, etc ..',
    prix: '119,95',
    last_prix: '159,95',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/1irhYbVhHpMUXbVuRtM2erpOC4BMFhZuplK63D_K6wrUR5Zep6EcbHW-VN81QJV3RwvmHiQRS3FuHOXuTDfiCo0oISYPle-CDjXo=rw-e365-w1200'
  },
  {
    id: uuidv4(),
    name: 'Google Pixel Watch',
    details: 'couleur blue, 64GB, etc ..',
    prix: '799',
    last_prix: '1023',
    quantity: 1,
    url: '/article/montre.webp'
  },
  // Ajoutez d'autres produits ici si nécessaire
];
export const ecouteurs = [
  {
    id: uuidv4(),
    name: 'Pixel 8 pro',
    details: 'couleur blue, 64GB, etc ..',
    prix: '799',
    last_prix: '1023',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/E2J7hG3ZRWpFOO0NBrkg1s6K1ZKYLwEuCK_lAO7LrPVH3C0eTbFCycYgqs4gr8caAr27S-PKLy2yLhIVGCy4byZ5wZ8kzQpnyQk=rw-e365-w1200'
  },
  {
    id: uuidv4(),
    name: 'Pixel Buds pro',
    details: 'couleur blue, 64GB, etc ..',
    prix: '149',
    last_prix: '229',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/9G5VkratxCGLyYy5NLfL2-AMs-BymXE4erYP3_N7LsGGWf439j2Htj1Vf80Dr94nn-Rf4c9k9xRuAMpd0RbYGvH0zgSbU4vqkso=rw-e365-nu-w601'
  },
  {
    id: uuidv4(),
    name: 'Pixel 8 a',
    details: 'couleur blue, 64GB, etc ..',
    prix: '499',
    last_prix: '549',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/4mBe7W_xXYt4JNMQHR0wIX7n4Vv6VPxw3MRJWLCiUJAPCoHz5r7oHEKu4wr_KszIouzwCnk7XabMRJ135ae1niTXr6AT0_gRpzE=s1400-w1400-e365-rw-v1'
  },
  {
    id: uuidv4(),
    name: 'Fitbit Charge 6',
    details: 'couleur blue, 64GB, etc ..',
    prix: '119,95',
    last_prix: '159,95',
    quantity: 1,
    url: 'https://lh3.googleusercontent.com/1irhYbVhHpMUXbVuRtM2erpOC4BMFhZuplK63D_K6wrUR5Zep6EcbHW-VN81QJV3RwvmHiQRS3FuHOXuTDfiCo0oISYPle-CDjXo=rw-e365-w1200'
  },
  {
    id: uuidv4(),
    name: 'Google Pixel Watch',
    details: 'couleur blue, 64GB, etc ..',
    prix: '799',
    last_prix: '1023',
    quantity: 1,
    url: '/article/montre.webp'
  },
  // Ajoutez d'autres produits ici si nécessaire
];
