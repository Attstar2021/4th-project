var templateParams = {
    from_name: 'name',
    from_email: 'email',
    notes: 'The question I want to ask is...'
};
 
emailjs.send('service_oxs23un', 'template_yu7s4up', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

