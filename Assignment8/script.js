function validateForm() {
    // get form inputs
    const firstName = document.getElementById("name1").value;
    const lastName = document.getElementById("name2").value;
    const phone = document.getElementById("number").value;
    const email = document.getElementById("mail").value;
    const password = document.getElementById("passw").value;
    const terms = document.getElementById("terms").checked;

    // validate name
    if(firstName==""||lastName=="")
    {
        alert("Name cannot be empty");
    return false;
    }
    else{
        console.log(firstName)
        console.log(lastName)
    }

    // validat phone
    var phoneno = /^\d{10}$/;
        if(!phone.match(phoneno))
        {
            alert("Please enter a valid phone number");
        return false;
      
        }
      else
        {
            console.log(phone)
        
        }


        //validate email
        if (!email.match((/^[^\s@]+@[^\s@]+\.[^\s@]+$/))) {
            alert("Please enter a valid email address");
            return false;
        }
        else{
            console.log(email)
        }

        //validate Password
        
        if(!password.match(/^(?=.[A-Z])(?=.\d)[A-Za-z\d]{8,}$/))
        {
            alert("Password must be at least 8 characters long and contain at least one uppercase letter and one numeric digit");
            return false;

        }
        else{
            console.log(password)
        }
        //checkbox
        if (!terms) {
            // document.getElementById("error-message").innerHTML = "Please agree to the given Terms and Conditions";
            alert("Please agree to the given Terms and Conditions")
            return false;
        }
        else {
            console.log(terms)
        }
              
         
}
    //      const check= document.getElementById("submit")
    //    check.addEventListener("click", validateForm)