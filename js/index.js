function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      Subject: document.getElementById("Subject").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_o9z30rj";
    const templateID = "template_zkkecg6";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("Subject").value="",
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }