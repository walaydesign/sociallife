function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        // To : "yl301114@gmail.com",
        To : "zhulixdesign@gmail.com, zhuleservice@gmail.com, yxtang329@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "宜宸建設預約賞屋",
        Body : "姓名:" + document.getElementById("name").value
                + "<br>手機:" + document.getElementById("phone").value
                + "<br>信箱:" + document.getElementById("email").value
                + "<br>居住地區:" + document.getElementById("city").value
                + "<br>房型意願:" + document.getElementById("houseType").value
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}
