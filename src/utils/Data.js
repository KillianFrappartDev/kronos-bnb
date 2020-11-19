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
      'https://images.unsplash.com/photo-1590673452623-cf094b5e08f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
    coords: { lat: 43.77925, lng: 11.24626 }
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
      'https://4.bp.blogspot.com/-nxdDd3Cu9VE/W3BkTi-SRwI/AAAAAAAADEI/d1IQKkIj64M-sC7q9mmasJYUTjz7VbmjwCLcBGAs/s1000/Mars%2Bhouse%2Bexterior%2Bby%2BEvexoian.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Stone_age_projekt_in_Sweden_7.jpg',
    coords: { lat: 49.460983, lng: 11.061859 }
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
      'https://images.unsplash.com/photo-1551914710-723bdd36c2b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    coords: { lat: 0, lng: 0 }
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
    image: 'https://i.pinimg.com/564x/a9/76/4a/a9764ae4d69299417e24eed61a017f59.jpg',
    coords: { lat: 0, lng: 0 }
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
    coords: { lat: 0, lng: 0 }
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
    image: 'https://www.palais-bahia.com/wp-content/uploads/2017/11/Palais-Bahia-2.jpg',
    coords: { lat: 0, lng: 0 }
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
      'https://images.unsplash.com/photo-1578004952492-69c54a10bc1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80https://images.unsplash.com/photo-1578004952492-69c54a10bc1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    coords: { lat: 0, lng: 0 }
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
    image: 'https://s21858.pcdn.co/wp-content/uploads/2012/12/Recreation.jpg',
    coords: { lat: 0, lng: 0 }
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
    coords: { lat: 0, lng: 0 }
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
      'https://www.construire-tendance.com/wp-content/grand-media/image/fa_ade-entr_e-huttes-gauloise-finistere-France.jpg',
    coords: { lat: 0, lng: 0 }
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
    image: 'https://i.ytimg.com/vi/v0-7frYF7WE/maxresdefault.jpg',
    coords: { lat: 0, lng: 0 }
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
      'https://static.cnews.fr/sites/default/files/styles/image_640_360/public/woodstock_essai_5d4d56abd9271.jpg?itok=_GENOfps',
    coords: { lat: 0, lng: 0 }
  }
];

export default bnbData;
