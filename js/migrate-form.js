const myform=document.getElementById('myform');

  myform.addEventListener('submit',async function(e){
      e.preventDefault();

      const userName=myform.InputName;
      const userEmail=myform.InputEmail;
      const userDesignation=myform.InputDesignation;
      const userPhone_no=myform.InputPhonenumber;
      const userCompany=myform.InputCompany;
      const userCompanyLink=myform.InputCompanyLink;
      const userCountry=myform.InputCountry;
      let submitBtn=document.getElementById('submitbtn');
      var checkValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
     if(userName.value && userEmail.value && userPhone_no.value){
        if (userEmail.value.match(checkValidEmail)) {
      
                submitBtn.innerHTML = '<i class="fa fa-circle-o-notch fa-spin"></i> Submitting...';
                const res = await fetch("https://blinkcrm.razorops.com/api/leads", {
                method: "POST",
                mode: "cors",
                    headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    },
                    body: JSON.stringify({
                    lead: {
                        first_name: userName.value || "",
                        email: userEmail.value || "",
                        title: userDesignation.value || "",
                        phone: userPhone_no.value || "",
                        company_name: userCompany.value || "",
                        company_linkedin: userCompanyLink || "",
                        location: userCountry.value || "",
                        user_email: "teamrazorops@gmail.com",
                        status: "Not Sent",
                        campaign_id: 6,
                    },
                    
                    }),
                
                        }).then((response)=>{
                            return response.json();
                        }).then((data)=>{
                        console.log(data);
                        location.href = "https://dashboard.razorops.com/users/sign_up"; 
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
                alert('Enter a valid email!!');
              }
    }        
                            
        });


   
