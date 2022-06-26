var templateParams = {
    'from_name': contactForm.name.value,
    'from_email': contactForm.emailaddress.value,
    'farmhouse_booking': contactForm.booking-info.value
   };
function sendMail(contactForm){
   emailjs.send('service_oxs23un', 'template_yu7s4up', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
      }
   );return false; 
   
}
