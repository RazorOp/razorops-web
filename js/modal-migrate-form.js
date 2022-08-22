var competitorsmodal = document.getElementById("contactusmodal");
var competitorsbtn = document.getElementById("talktous");
var competitorspan = document.getElementsByClassName("competitorsclose")[0];

competitorspan.onclick = function() {
  competitorsmodal.style.display = "none";

}

competitorsbtn.onclick = function() {
  competitorsmodal.style.display = "block";

}

window.onclick = function (event) {

    if (event.target == modal) {
      competitorsmodal.style.display = "none";

    }

  }

// Phone Number validation
function checkNumber(evt){
         
  var charCode = (evt.which) ? evt.which : evt.keyCode
 if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
    

 return true;

}

//Check valid Email


//migrate form submission script


const migrateform=document.getElementById('migrateform');

migrateform.addEventListener('submit',async function(e){
    e.preventDefault();

    const migrateName=migrateform.InputName;
    const migrateEmail=migrateform.InputEmail;
    const migrateDesignation=migrateform.InputDesignation;
    const migrateCountryCode=migrateform.countryCode;
    const migratePhone_no=migrateform.InputPhonenumber;
    const migrateCompany=migrateform.InputCompany;
    const migrateCompanyLink=migrateform.InputCompanyLink;
    const migrateCountry=migrateform.InputCountry;
    let migrateSubmitBtn=document.getElementById('migrateSubmitBtn');
    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
  
    if(migrateName.value && migrateEmail.value && migratePhone_no.value){
      if (migrateEmail.value.match(validEmail) && migratePhone_no.value.length == migratePhone_no.maxLength){

            migrateSubmitBtn.innerHTML = '<i class="fa fa-circle-o-notch fa-spin"></i> Submitting...';  
            const result = await fetch("https://blinkcrm.razorops.com/api/leads", {
            method: "POST",
            mode: "cors",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "api_key": "19a5c89fb2ef43c1969d00e4554ab99e",
              },
              body: JSON.stringify({
                lead: {
                  first_name: migrateName.value || "",
                  email: migrateEmail.value || "",
                  title: migrateDesignation.value || "",
                  phone: '+'+ migrateCountryCode.value +'-'+ migratePhone_no.value || "",
                  company_name: migrateCompany.value || "",
                  company_linkedin:migrateCompanyLink.valid || "",
                  location: migrateCountry.value || "",
                  user_email: "teamrazorops@gmail.com",
                  lead_source: "jenkins_alternative",
                  status: "Not Sent",
                  campaign_id: 6,
                },
              }),
          
                }).then((response)=>{
                    return response.json();
                }).then((data)=>{
                  console.log(data);
                  location.href = "https://razorops.com/signup/?utm_source=Jenkins-alternative&utm_medium=Form-Successful&utm_campaign=signup-Jenkins-alternative"; 
                }).catch((err)=>{
                  console.error(err);
                });
                
                migrateName.value='';
                migrateEmail.value='';
                migrateDesignation.value='';
                migratePhone_no.value='';
                migrateCompany.value='';
                migrateCompanyLink.valid='';
                migrateCountry.value='';
            } 
            else{
              alert('Enter a valid input!!');
            }
    }
      
});
