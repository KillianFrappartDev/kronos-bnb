const bnbData = [
  {
    id: 1,
    title: 'Storming of the Bastille',
    year: 1789,
    city: 'Paris',
    country: 'France',
    continent: 'Europe',
    isTaken: true,
    description:
      'This studio has been entirely renovated ans is brand new. It is an amzing place to wath the Storming of the Bastille ans all the beheaded people running around. Really Lovely place ',
    rating: 4.16,
    image: 'https://i.ebayimg.com/images/g/Vi0AAOSwQXlcPkMx/s-l1600.jpg',
    coords: { lat: 48.8534, lng: 2.3488 }
  },
  {
    id: 2,
    title: 'Painting of Mona Lisa',
    year: 1517,
    city: 'Florence',
    country: 'Italie',
    continent: 'Europe',
    isTaken: false,
    description:
      'Lovely House in Florence where you the 2nd floor is available. The 1st floor is occupied by the owner Mr. Da Vinci.',
    rating: 3.89,
    image:
      'https://images.unsplash.com/photo-1516186366443-0744a82bffef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    coords: { lat: 43.77925, lng: 11.24626 }
  },
  {
    id: 3,
    title: 'Tiny House on Mars',
    year: 2572,
    city: 'Sector 2',
    country: 'Mars',
    continent: 'Space',
    isTaken: false,
    description:
      'Beautiful tiny house en Mars With incredible view on the martian desert. Two minutes away from Elon Musk Penthouse.',
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1367&q=80',
    coords: { lat: 0, lng: 0 }
  },
  {
    id: 4,
    title: 'Paleolithic hut',
    year: -10000,
    city: 'Nuremberg',
    country: 'Germany',
    continent: 'Europe',
    isTaken: true,
    description:
      'Really nice hut in the forest. Be carrefull at night because of the wolves ... and also the neighbour that kidnapped my wife a couple of time',
    rating: 2.67,
    image:
      'https://images.unsplash.com/photo-1564429247506-322ee8fc5190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    coords: { lat: 49.460983, lng: 11.061859 }
  },
  {
    id: 5,
    title: 'Aztec house',
    year: 1428,
    city: 'Guadalajara',
    country: 'Mexico',
    continent: 'America',
    isTaken: false,
    description:
      'Rectangular hut with an open doorway onto the patio, the house backed onto the street. The neighbourhood is quiet except when the Hernán Cortés and his Spanish conquistadors have drinks outside.',
    rating: 3.9,
    image:
      'https://images.unsplash.com/photo-1503187680590-525b6e7a793f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
    coords: { lat: 20.659698, lng: -103.349609 }
  },
  {
    id: 6,
    title: ' Egyptian Antique house',
    year: 1634,
    city: 'Cairo',
    country: 'Egypte',
    continent: 'Africa',
    isTaken: false,
    description: 'Beautiful house in Egypte with fantastic view with pyramids',
    rating: 4.48,
    image:
      'https://images.unsplash.com/photo-1557640047-75c97a5f1ea4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1372&q=80',
    coords: { lat: 30.033333, lng: 31.233334 }
  },
  {
    id: 7,
    title: 'Flat with view on Berlin Wall',
    year: 1989,
    city: 'Berlin',
    country: 'Germany',
    continent: 'Europe',
    isTaken: false,
    description: 'Nice modern flat in front of the Berlin Wall. Perfect place for celebration.',
    rating: 2.56,
    image:
      'https://images.unsplash.com/photo-1600661991570-ccd9563faaaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    coords: { lat: 52.520008, lng: 13.404954 }
  },
  {
    id: 8,
    title: 'Ryad Bahia',
    year: 1900,
    city: 'Marrakech',
    country: 'Morocco',
    continent: 'Africa',
    isTaken: false,
    description:
      ' An inspiring place, Ryad Bahia is a place were you live, eat, sleep and relax. A fantastic place with 3 rooms, two minutes walk from the magic square of Jemaa Elfna  ',
    rating: 4.1,
    image:
      'https://images.unsplash.com/photo-1548018560-c7196548e84b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    coords: { lat: 31.669746, lng: -7.973328 }
  },
  {
    id: 9,
    title: 'Ottman Empire house',
    year: 1665,
    city: 'Istanbul',
    country: 'Turkey',
    continent: 'Asia',
    isTaken: false,
    description:
      ' A big house with a fantsatic view sea view, just a five minutes to the Blue Mosque and Hagia Sofia  ',
    rating: 4.23,
    image:
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1319&q=80',
    coords: { lat: 41.015137, lng: 28.97953 }
  },
  {
    id: 10,
    title: 'Birth of Jesus',
    year: 0,
    city: 'Nazareth',
    country: 'Israel',
    continent: 'Asia',
    isTaken: false,
    description: 'Welcoming family in Nazareth. The house is not really big but the son washes feet very well.',
    rating: 3.76,
    image:
      'https://images.unsplash.com/photo-1581080565335-47b4b5e7abf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    coords: { lat: 32.699635, lng: 35.303547 }
  },
  {
    id: 11,
    title: 'First class room on Titanic',
    year: 1912,
    city: 'Ocean',
    country: 'Ocean',
    continent: 'America',
    isTaken: false,
    description: '',
    rating: 4.9,
    image: 'https://img.over-blog-kiwi.com/1/04/49/45/20181026/ob_6c1a3f_titanic-via-encyclopedia-titanica-2.jpg',
    coords: { lat: 41.726931, lng: -49.948253 }
  },
  {
    id: 12,
    title: 'Gallic hut',
    year: 347,
    city: 'Burdigala',
    country: 'France',
    continent: 'Europe',
    isTaken: false,
    description: '',
    rating: 1.2,
    image:
      'https://images.unsplash.com/photo-1500231261460-8db8e9f334e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    coords: { lat: 44.836151, lng: -0.580816 }
  },
  {
    id: 13,
    title: 'Nuclear fallout shelter',
    year: 2231,
    city: 'Los Angeles',
    country: 'USA',
    continent: 'America',
    isTaken: false,
    description: '',
    rating: 2.5,
    image:
      'https://images.unsplash.com/photo-1567583789793-87f44f80ab61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    coords: { lat: 34.052235, lng: -118.243683 }
  },
  {
    id: 14,
    title: 'Campervan spot near Woodstock',
    year: 1969,
    city: 'Woodstock',
    country: 'USA',
    continent: 'America',
    isTaken: false,
    description: '',
    rating: 3,
    image: 'https://www.cbc.ca/passionateeye/content/images/woodstock_1920.jpg',
    coords: { lat: 41.4775, lng: -74.3636 }
  },
  {
    id: 15,
    title: 'Studio in Chernobyl',
    year: 1981,
    city: 'Prypiat',
    country: 'Ukraine',
    continent: 'Europe',
    isTaken: false,
    description:
      "Studio located in Chernobyl before it gets yoinked by the nuclear power plant's explosion, near the unfamous big Wheel",
    rating: 3,
    image: 'https://images.unsplash.com/photo-1558724490-51ca9494768e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    coords: { lat: 51.386998452, lng: 30.092666296 }
  },
  {
    id: 16,
    title: "Loft with Jeanne d'Arc pyre's view",
    year: 1431,
    city: 'Rouen',
    country: 'France',
    continent: 'Europe',
    isTaken: false,
    description: `nice loft with balcony, 3 chambers, direct view on the execution of Jeanne "La Pucelle" d'Arc. `,
    rating: 4,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Place_du_Vieux-March%C3%A9%2C_Rouen_3.JPG',
    coords: { lat: 49.443489, lng: 1.0885 }
  },
  {
    id: 17,
    title: 'Room inside Villers Tower',
    year: 1500,
    city: 'Brussels',
    country: 'Belgium',
    continent: 'Europe',
    isTaken: false,
    description: 'Luxury room amenaged inside the enclosure of brussels before his destruction',
    rating: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/1er_enceinte_Tour_de_Villers_Bxl.JPG',
    coords: { lat: 50.85045, lng: 4.34878 }
  },
  {
    id: 18,
    title: 'Appartment at the top of a tower',
    year: 2001,
    city: 'New-York',
    country: 'United-state',
    continent: 'America',
    isTaken: false,
    description: 'Good looking appartment in a tower near his twin, view on all the city. Plane might fly near you.',
    rating: 0,
    image:
      'https://images.unsplash.com/photo-1596491690105-2916ddc03050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    coords: { lat: 44.185909, lng: -75.051003 }
  }
];

export default bnbData;
