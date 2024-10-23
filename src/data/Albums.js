// data/albums.js

const albums = [
    {
      id: 1,
      title: 'Midnight Chill',
      artist: 'Lofi Beats Collective',
      cover: 'https://i.scdn.co/image/ab67706f00000002f4954496ff81acc91e0288e9',
      releaseYear: 2023,
      genre: 'Lofi',
      description: 'A collection of smooth lofi beats perfect for studying or relaxing.'
    },
    {
      id: 2,
      title: 'Retro Synthwave',
      artist: 'Synthwave Dreams',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzvglDcA8cxfXs9EiFE7tAizyECIbQM-EFcw&s',
      releaseYear: 2022,
      genre: 'Synthwave',
      description: 'Dive into the neon-lit nostalgia of the 80s with pulsating synth beats.'
    },
    {
      id: 3,
      title: 'Acoustic Moods',
      artist: 'Acoustic Vibes',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBtW6voQJ4j7z4Ns_VMgUj9hBMQbK08jP6g&s',
      releaseYear: 2021,
      genre: 'Acoustic',
      description: 'Relax with soft acoustic tunes that warm the heart and calm the mind.'
    },
    {
      id: 4,
      title: 'Epic Cinematic',
      artist: 'Film Score Masters',
      cover: 'https://i.scdn.co/image/ab67616d0000b273d1758493a1bd9ad413daaf8c',
      releaseYear: 2020,
      genre: 'Cinematic',
      description: 'Immerse yourself in the grandeur of cinematic soundtracks.'
    },
    {
      id: 5,
      title: 'Vibes of Summer',
      artist: 'Tropical Grooves',
      cover: 'https://i.scdn.co/image/ab67616d0000b27346e4e8079743a66a5467d091',
      releaseYear: 2023,
      genre: 'Reggae',
      description: 'Feel the warmth of summer with upbeat reggae tunes.'
    },
    {
      id: 6,
      title: 'Electronic Pulse',
      artist: 'DJ Electro',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEZj43na7Z6oq73-ttLXl70swqUpDPHz5sg&s',
      releaseYear: 2023,
      genre: 'Electronic',
      description: 'Get ready to dance with this electrifying collection of electronic tracks.'
    },
    {
      id: 7,
      title: 'Jazz Essentials',
      artist: 'Jazz Legends',
      cover: 'https://i.scdn.co/image/ab67616d0000b273273f96ffbc6079c20539cdc2',
      releaseYear: 2019,
      genre: 'Jazz',
      description: 'A timeless selection of jazz classics from legendary artists.'
    },
    {
      id: 8,
      title: 'Hip Hop Vibes',
      artist: 'Rhythm & Flow',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdF7zOi-yp9b8xOqI19U-U0PNFCF85a-3Ezg&s',
      releaseYear: 2022,
      genre: 'Hip Hop',
      description: 'Discover the latest tracks from the vibrant hip hop scene.'
    },
    {
      id: 9,
      title: 'Mahalini Albums',
      artist: 'Mahalini Ayu Raharja',
      cover: 'https://i.scdn.co/image/ab6761610000e5eb1264a169b9cdf4acaeab5e8f',
      releaseYear: 2023,
      genre: 'Lofi',
      description: 'A collection of smooth lofi beats perfect for studying or relaxing.'
    },
    {
      id: 10,
      title: 'Last Child Albums',
      artist: 'Dimas Rangga Abdul Jamil',
      cover: 'https://i.scdn.co/image/ab676161000051743e2192453d16aa93116434b8',
      releaseYear: 2022,
      genre: 'Synthwave',
      description: 'Dive into the neon-lit nostalgia of the 80s with pulsating synth beats.'
    },
    {
      id: 11,
      title: 'Lagu Romantis',
      artist: 'Mr. Ehan, Ms. Raa',
      cover: 'https://mosaic.scdn.co/300/ab67616d00001e0213b3e37318a0c247b550bccdab67616d00001e022af68ef6f31a2619e4f6dcb6ab67616d00001e0254270208627aa8061a8abe21ab67616d00001e0286e70fcccc080a24626b16ea',
      releaseYear: 2021,
      genre: 'Acoustic',
      description: 'Relax with soft acoustic tunes that warm the heart and calm the mind.'
    },
    {
      id: 12,
      title: 'Treat You Better',
      artist: 'Shawn Mendes',
      cover: 'https://i.scdn.co/image/ab67616d0000b2731376b4b16f4bfcba02dc571b',
      releaseYear: 2020,
      genre: 'Cinematic',
      description: 'Immerse yourself in the grandeur of cinematic soundtracks.'
    },
    {
      id: 13,
      title: 'Into You',
      artist: 'Ariana Grande',
      cover: 'https://i1.sndcdn.com/artworks-000237549070-area0j-t500x500.jpg',
      releaseYear: 2023,
      genre: 'Reggae',
      description: 'Feel the warmth of summer with upbeat reggae tunes.'
    },
    {
      id: 14,
      title: 'Jiwa Yang Bersedih',
      artist: 'Ghea Indrawari',
      cover: 'https://i.scdn.co/image/ab67616d0000b273d5e19a9b55c764573748989d',
      releaseYear: 2023,
      genre: 'Electronic',
      description: 'Get ready to dance with this electrifying collection of electronic tracks.'
    },
    {
      id: 15,
      title: 'Senyumlah',
      artist: 'Andmesh',
      cover: 'https://i.scdn.co/image/ab67616d0000b273273f96ffbc6079c20539cdc2',
      releaseYear: 2019,
      genre: 'Jazz',
      description: 'A timeless selection of jazz classics from legendary artists.'
    },
    {
      id: 16,
      title: 'Full album',
      artist: 'Nadin Amizah',
      cover: 'https://i.scdn.co/image/ab6761610000e5eb53f93c516b1f5e853151f06f',
      releaseYear: 2022,
      genre: 'Hip Hop',
      description: 'Discover the latest tracks from the vibrant hip hop scene.'
    },
    {
      id: 17,
      title: 'Muak',
      artist: 'Aruma',
      cover: 'https://i.scdn.co/image/ab67616d0000b27378dcf7c664ac1d53fd5a78db',
      releaseYear: 2023,
      genre: 'Lofi',
      description: 'A collection of smooth lofi beats perfect for studying or relaxing.'
    },
    {
      id: 18,
      title: 'Night Changes',
      artist: 'One Direction',
      cover: 'https://i.scdn.co/image/289c7f686f5b78ceeb224453cf9a15697a678a79',
      releaseYear: 2022,
      genre: 'Synthwave',
      description: 'Dive into the neon-lit nostalgia of the 80s with pulsating synth beats.'
    },
    {
      id: 19,
      title: 'Evaluasi',
      artist: 'Hindia',
      cover: 'https://i.scdn.co/image/ab67616d0000b273e954df3212ce89c5f08e3732',
      releaseYear: 2021,
      genre: 'Acoustic',
      description: 'Relax with soft acoustic tunes that warm the heart and calm the mind.'
    },
    {
      id: 20,
      title: 'Kembali Pulang',
      artist: 'Suara Kayu, Feby Putri',
      cover: 'https://i.scdn.co/image/ab67616d00001e02eca409ddd639be75c4d998b9',
      releaseYear: 2020,
      genre: 'Cinematic',
      description: 'Immerse yourself in the grandeur of cinematic soundtracks.'
    },
    {
      id: 21,
      title: 'Kejar Mimpi',
      artist: 'Maudy Ayunda',
      cover: 'https://i.scdn.co/image/ab67616d0000b273397d812324b41333ab9c91ae',
      releaseYear: 2023,
      genre: 'Reggae',
      description: 'Feel the warmth of summer with upbeat reggae tunes.'
    },
    {
      id: 22,
      title: 'Teramini',
      artist: 'Ghea Indrawari',
      cover: 'https://i.scdn.co/image/ab67616d00001e02f626fd227222d8b1c77c5d11',
      releaseYear: 2023,
      genre: 'Electronic',
      description: 'Get ready to dance with this electrifying collection of electronic tracks.'
    },
    {
      id: 23,
      title: 'SAVENTEEN FULL ALBUMS',
      artist: 'SAVENTEEN',
      cover: 'https://i.scdn.co/image/ab67616d00001e02a1b5414e7aafe321995f4ff0',
      releaseYear: 2019,
      genre: 'Jazz',
      description: 'A timeless selection of jazz classics from legendary artists.'
    },
    {
      id: 24,
      title: 'Selamat Tinggal',
      artist: 'Virgoun, Audy',
      cover: 'https://i.scdn.co/image/ab67616d0000b2739df93f68b7a2e0f8d4eafbab',
      releaseYear: 2022,
      genre: 'Hip Hop',
      description: 'Discover the latest tracks from the vibrant hip hop scene.'
    },
  ];
  
  export default albums;
  