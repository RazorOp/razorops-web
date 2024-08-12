document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  const formData = {
    lead: {
      first_name: ((document.getElementById('name')||{}).value)||"",
      email: ((document.getElementById('email')||{}).value)||"",
      phone: ((document.getElementById('phone')||{}).value)||"",
      linkedin_profile: ((document.getElementById('company_linkedin')||{}).value)||"",
      lead_source: ((document.getElementById('lead_source')||{}).value)||"",
      campaign_id: ((document.getElementById('campaign_id')||{}).value)||"",
    },
  };

  // Replace with your API endpoint URL
  const apiUrl = 'https://app.blinkcrm.in/api/leads';

  fetch(apiUrl, {
      method: 'POST',
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        api_key: "19a5c89fb2ef43c1969d00e4554ab99e",
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById('responseMessage').textContent = 'Thank you for your message!';
      document.getElementById('contactForm').reset();
  })
  .catch(error => {
      document.getElementById('responseMessage').textContent = 'Oops! Something went wrong. Please try again.';
      console.error('Error:', error);
  });
});
