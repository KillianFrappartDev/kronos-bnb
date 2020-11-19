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
      'This studio has been entirely renovated ans is brand new. The studio was a former bellman loge, it is on the ground floor in a small yard. It has 2 windows, wooden walls, high ceilings, a mezzanina for the bed. it is an amzing place to wath the Storming of the Bastille ans all the beheaded people running around. Really Lovely place ',
    rating: 4.16,
    image: 'https://i.ebayimg.com/images/g/Vi0AAOSwQXlcPkMx/s-l1600.jpg'
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
      'https://images.unsplash.com/photo-1516186366443-0744a82bffef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 3,
    title: 'Tiny House on Mars',
    year: 2572,
    city: 'Mars',
    country: 'Mars',
    continent: 'Mars',
    isTaken: false,
    description:
      'Beautiful tiny house en Mars With incredible view on the martian desert. Two minutes away from Elon Musk Penthouse.',
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1367&q=80'
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
    image: 'https://images.unsplash.com/photo-1564429247506-322ee8fc5190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    title: 'Aztec house',
    year: 1428,
    city: 'Guadalajara',
    country: 'Mexico',
    continent: 'North America',
    isTaken: false,
    description:
      'Rectangular hut with an open doorway onto the patio, the house backed onto the street. The neighbourhood is quiet except when the Hernán Cortés and his Spanish conquistadors have drinks outside.',
    rating: 3.9,
    image:
      'https://images.unsplash.com/photo-1503187680590-525b6e7a793f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80'
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
    image: 'https://images.unsplash.com/photo-1557640047-75c97a5f1ea4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1372&q=80'
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
      'https://images.unsplash.com/photo-1600661991570-ccd9563faaaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 8,
    title: 'Ryad Bahia',
    year: 1900,
    city: 'Marrakech',
    country: 'Maorocco',
    continent: 'Africa',
    isTaken: false,
    description:
      ' An inspiring place, Ryad Bahia is a place were you live, eat, sleep and relax. A fantastic place with 3 rooms, two minutes walk from the magic square of Jemaa Elfna  ',
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1548018560-c7196548e84b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    id: 9,
    title: 'Ottman Empire house',
    year: 1665,
    city: 'Istanbul',
    country: 'Turkey',
    continent: 'Asie',
    isTaken: false,
    description:
      ' A big house with a fantsatic view sea view, just a five minutes to the Blue Mosque and Hagia Sofia  ',
    rating: 4.23,
    image:
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1319&q=80'
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
    image: 'https://images.unsplash.com/photo-1581080565335-47b4b5e7abf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
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
    image: 'https://img.over-blog-kiwi.com/1/04/49/45/20181026/ob_6c1a3f_titanic-via-encyclopedia-titanica-2.jpg'
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
      'https://images.unsplash.com/photo-1500231261460-8db8e9f334e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
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
    image: 'https://images.unsplash.com/photo-1567583789793-87f44f80ab61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 14,
    title: 'Campervan spot near Woodstock',
    year: 1969,
    city: 'Bethel',
    country: 'USA',
    continent: 'America',
    isTaken: false,
    description: '',
    rating: 3,
    image:
      'https://www.cbc.ca/passionateeye/content/images/woodstock_1920.jpg'
  }
];

export default bnbData;
