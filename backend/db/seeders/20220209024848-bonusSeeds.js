'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.bulkInsert('Users', [
       {
         email: 'mrs@winchester.com',
         username: 'MrsWinchester',
         hashedPassword: bcrypt.hashSync('password')
       },
       {
        email: 'mrsmr@warren.com',
        username: 'TheWarrens',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'stanley@hotel.com',
        username: 'SKing',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'amityville@house.com',
        username: 'TheLutzs',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'bhanharh@fort.com',
        username: 'YES Please come to my home',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'ancientram@inn.com',
        username: 'AncientRam',
        hashedPassword: bcrypt.hashSync('password')
      },
    ], {});
    queryInterface.bulkInsert('Spots', [
      {
        userId: 6,
        name: 'Winchester House',
        description: '',
        address: '525 S Winchester Blvd',
        city: 'San Jose',
        state: 'California',
        country: 'North America',
        price: 232.10
      },
      {
        userId: 7,
        name: 'Museum Of The Warrens',
        description: '',
        address: '30 Knollwood St',
        city: 'Monroe',
        state: 'Connecticut',
        country: 'North America',
        price: 166.66
      },
      {
        userId: 8,
        name: 'Amityville House',
        description: 'It was thought that the house became haunted after Ronald DeFeo, Jr., murdered his six family members at 112 Ocean Avenue in Amityville in 1974. A year after the murders, another family moved in and then abruptly moved out, claiming the house was haunted.',
        address: '112 Ocean Avenue',
        city: 'Amityville, Long Island',
        state: 'New York',
        country: 'North America',
        price: 369.24
      },
      {
        userId: 9,
        name: 'Bhangarh Fort',
        description: 'Two hundred miles from Delhi, this abandoned fortress sticks out in the middle of the desert. Legend has it that a sorcerer cast a curse on the area after being rejected by a local princess.',
        address: 'Tehsil, Gola ka baas',
        city: 'Rajgarh, Bhangarh',
        state: 'Rajasthan',
        country: 'India',
        price: 0.00
      },
      {
        userId: 10,
        name: 'The Ancient Ram Inn',
        description: 'This 12th-century inn is one of the oldest in the Western world. It is believed to have once been a pagan burial ground, and boasts that it is haunted by more than 20 spirits, including ghost children and a pagan high priestess. Fearless travelers can book a ghost hunt at the inn in hopes of experiencing the spirits themselves. ',
        address: ' 8 Potters Pond',
        city: 'Wotton-under-Edge',
        state: 'GL12 7HF',
        country: 'United Kingdom',
        price: 500.00
      },
    ], {});
     return queryInterface.bulkInsert('Images', [
       {
         spotId: 10,
         url: 'https://www.google.com/maps/uv?pb=!1s0x808fcade58763a8f%3A0x644ba6010465ef66!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN9j_k1RDzMXTOQCkwGKrHWMQV-VVvnCPhHFbZ_%3Dw300-h200-k-no!5swinchester%20house%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipN9j_k1RDzMXTOQCkwGKrHWMQV-VVvnCPhHFbZ_&hl=en&sa=X&ved=2ahUKEwjRweS4-vD1AhWEFjQIHYrXBCoQoip6BAhnEAM#'
       },
       {
        spotId: 11,
        url: 'https://www.google.com/maps/uv?pb=!1s0x89e809fa72cafac5%3A0x8925a7555ce3c6d2!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNMXWP09XR8mPI2fweon-sqEZdpHAYhFXW4sMl2%3Dw355-h200-k-no!5swarrens%20museum%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipMwDD6SXMRw4eZyKsUlnXq3fiddAQR9k-Y7WXre&hl=en&sa=X&ved=2ahUKEwjipc3L-_D1AhUuGDQIHWBQC_YQoip6BAg0EAM#'
      },
      {
        spotId: 12,
        url: 'https://www.djtricities.com/amityville/images/rescent1.jpg'
      },
      {
        spotId: 13,
        url: 'https://www.google.com/maps/uv?pb=!1s0x396d8522c8a74f25%3A0x59400bd073d17528!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPvqAdrjIhBcE2SZDqhiHoooncNNv9fdh1hCNIj%3Dw266-h200-k-no!5sbhangarh%20fort%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNLVFqYewJossY8Raqj_NhzISw-qr_hcI9Y97xd&hl=en&sa=X&ved=2ahUKEwiAoMThgvH1AhUIFzQIHVYODN8Qoip6BAhLEAM# '
      },
      {
        spotId: 14,
        url: 'https://www.google.com/maps/uv?pb=!1s0x48719fbdec98881b%3A0xb06711e407a11abb!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNrcaUf2PQBRiMeONn6nd586Rt7GNkdnJuNzulG%3Dw150-h200-k-no!5sancient%20ram%20inn%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPilQ_xpQlH4tI2hWxAdtwyudaNEMImOI6Uvuc9&hl=en&sa=X&ved=2ahUKEwjWg4adg_H1AhUFJzQIHR1vDScQoip6BAgyEAM#'
      },
     ], {});
    //  return queryInterface.bulkInsert('Tables', [], {});
    //  return queryInterface.bulkInsert('Tables', [], {});
  },

  down: (queryInterface, Sequelize) => {

   return;
  }
};
