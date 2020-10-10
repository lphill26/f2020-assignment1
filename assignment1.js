(function () {
    function Start() {
      console.log("App Started...");
  
      if (document.title === "Contact") {
        let sendButton = document.getElementById("SendButton");
        let cancelButton = document.getElementById("CancelButton");
  
        let fName = document.getElementById("First Name");
        let lName = document.getElementById("Last Name");
        let emailAddress = document.getElementById("Email Address");
        let contactNumber = document.getElementById("Contact Number");
        let message = document.getElementById("Message");
  
        /*sendButton.addEventListener("click", (event) => {
          event.preventDefault();
          console.info((FirstName = $(fName.value);
            LastName : $(lName.value);
            EmailAddress  : $(emailAddress.value);
            ContactNumber : $(contactNumber.value);
            Message   : $(message.value);*/
  
        cancelButton.addEventListener("click", (event) => {
          event.preventDefault();
          if (confirm("Confirm?")) {
            location.href = "/home";
          }
        });
      }
    }
  
    window.addEventListener("load", Start);
  })();