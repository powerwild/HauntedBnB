'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
    {
      spotId: 1,
      url: 'https://www.google.com/maps/uv?pb=!1s0x808fcade58763a8f%3A0x644ba6010465ef66!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN9j_k1RDzMXTOQCkwGKrHWMQV-VVvnCPhHFbZ_%3Dw300-h200-k-no!5swinchester%20house%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipN9j_k1RDzMXTOQCkwGKrHWMQV-VVvnCPhHFbZ_&hl=en&sa=X&ved=2ahUKEwjRweS4-vD1AhWEFjQIHYrXBCoQoip6BAhnEAM#'
    },
    {
     spotId: 2,
     url: 'https://www.google.com/maps/uv?pb=!1s0x89e809fa72cafac5%3A0x8925a7555ce3c6d2!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNMXWP09XR8mPI2fweon-sqEZdpHAYhFXW4sMl2%3Dw355-h200-k-no!5swarrens%20museum%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipMwDD6SXMRw4eZyKsUlnXq3fiddAQR9k-Y7WXre&hl=en&sa=X&ved=2ahUKEwjipc3L-_D1AhUuGDQIHWBQC_YQoip6BAg0EAM#'
   },
   {
     spotId: 3,
     url: 'https://www.djtricities.com/amityville/images/rescent1.jpg'
   },
   {
     spotId: 4,
     url: 'https://www.google.com/maps/uv?pb=!1s0x396d8522c8a74f25%3A0x59400bd073d17528!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPvqAdrjIhBcE2SZDqhiHoooncNNv9fdh1hCNIj%3Dw266-h200-k-no!5sbhangarh%20fort%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNLVFqYewJossY8Raqj_NhzISw-qr_hcI9Y97xd&hl=en&sa=X&ved=2ahUKEwiAoMThgvH1AhUIFzQIHVYODN8Qoip6BAhLEAM# '
   },
   {
     spotId: 5,
     url: 'https://www.google.com/maps/uv?pb=!1s0x48719fbdec98881b%3A0xb06711e407a11abb!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNrcaUf2PQBRiMeONn6nd586Rt7GNkdnJuNzulG%3Dw150-h200-k-no!5sancient%20ram%20inn%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPilQ_xpQlH4tI2hWxAdtwyudaNEMImOI6Uvuc9&hl=en&sa=X&ved=2ahUKEwjWg4adg_H1AhUFJzQIHR1vDScQoip6BAgyEAM#'
   }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
