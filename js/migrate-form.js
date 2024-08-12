const myform=document.getElementById('myform');

  myform.addEventListener('submit',async function(e){
      e.preventDefault();

      const userName=myform.InputName;
      const userEmail=myform.InputEmail;
      const userDesignation=myform.InputDesignation;
      const userCountryCode=myform.countryCode;
      const userPhone_no=myform.InputPhonenumber;
      const userCompany=myform.InputCompany;
      const userCompanyLink=myform.InputCompanyLink;
      const userCountry=myform.InputCountry;
      let submitBtn=document.getElementById('submitbtn');
      var checkValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
     if(userName.value && userEmail.value && userPhone_no.value){
        if (userEmail.value.match(checkValidEmail) && userPhone_no.value.length == userPhone_no.maxLength){

                userPhone_no.value = userPhone_no.value.slice(0, userPhone_no.maxLength); 
                submitBtn.innerHTML = '<i class="fa fa-circle-o-notch fa-spin"></i> Submitting...';
                const res = await fetch("https://app.blinkcrm.in/api/leads", {
                method: "POST",
                mode: "cors",
                    headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "api_key": "19a5c89fb2ef43c1969d00e4554ab99e",
                    },
                    body: JSON.stringify({
                    lead: {
                        first_name: userName.value || "",
                        email: userEmail.value || "",
                        title: userDesignation.value || "",
                        phone: '+'+ userCountryCode.value + userPhone_no.value || "",
                        company_name: userCompany.value || "",
                        company_linkedin: userCompanyLink || "",
                        location: userCountry.value || "",
                        lead_source: "jenkins_alternative",
                        status: "Not Sent",
                        campaign_id: "6",
                    },
                    
                    }),
                
                        }).then((response)=>{
                            return response.json();
                        }).then((data)=>{
                        console.log(data);
                        location.href = "/thank-you-jenkins-alternative";
                        submitBtn.innerHTML = 'Submit'; 
                        }).catch((err)=>{
                        console.error(err);
                        });

                        userName.value='';
                        userEmail.value='';
                        userDesignation.value='';
                        userPhone_no.value='';
                        userCompany.value='';
                        userCompanyLink.value='';
                        userCountry.value='';     
                        
            }
            else{
                alert('Enter a valid Input!!');
              }
    }        
                            
        });

   
const devconform = document.getElementById("devconform");

devconform.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userName = devconform.InputName;
  const userEmail = devconform.InputEmail;
  const userDesignation = devconform.InputDesignation;
  const userCountryCode = devconform.countryCode;
  const userPhone_no = devconform.InputPhonenumber;
  const userCompany = devconform.InputCompany;
  const userCompanyLink = devconform.InputCompanyLink;
  const userCountry = devconform.InputCountry;
  let submitBtn = document.getElementById("submitbtn");
  var checkValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (userName.value && userEmail.value && userPhone_no.value) {
    if (
      userEmail.value.match(checkValidEmail) &&
      userPhone_no.value.length == userPhone_no.maxLength
    ) {
      userPhone_no.value = userPhone_no.value.slice(0, userPhone_no.maxLength);
      submitBtn.innerHTML =
        '<i class="fa fa-circle-o-notch fa-spin"></i> Submitting...';
        
      const res = await fetch("https://app.blinkcrm.in/api/leads", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          api_key: "19a5c89fb2ef43c1969d00e4554ab99e",
        },
        body: JSON.stringify({
          lead: {
            first_name: userName.value || "",
            email: userEmail.value || "",
            title: userDesignation.value || "",
            phone: "+" + userCountryCode.value + userPhone_no.value || "",
            company_name: userCompany.value || "",
            company_linkedin: userCompanyLink || "",
            location: userCountry.value || "",
            lead_source: "devcon-event",
            status: "Not Sent",
            campaign_id: "200",
          },
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          location.href =
            "https://dashboard.razorops.com/users/sign_up?utm_source=devcon-event";
          submitBtn.innerHTML = "Submit";
        })
        .catch((err) => {
          console.error(err);
        });

      userName.value = "";
      userEmail.value = "";
      userDesignation.value = "";
      userPhone_no.value = "";
      userCompany.value = "";
      userCompanyLink.value = "";
      userCountry.value = "";
    } else {
      alert("Enter a valid Input!!");
    }
  }
});


   
