const name = document.querySelector('#name');
const phone_no = document.querySelector('#mobnum')
const address = document.querySelector('#address')
const detail = document.querySelector('#desc')
const button = document.querySelector('#button')

button.addEventListener('click', () => {
    let data =
        `<h2>Name : ${name.value}</h2><br>
                  <h2> Phone No : ${phone_no.value}</h2><br>
                  <h2> Address : ${address.value}</h2><br>
                  <h2> Detail : ${detail.value}
                  </h2>`;

    Email.send({
        SecureToken: "d656994b-3698-4c7b-b0d0-d07b606162ce",
        To: "anoopvipin58@gmail.com",
        From: "tresalroks@gmail.com",
        Subject: "Cloth Collection & Donation",
        Body: data

    }).then(
        message => alert("Response Submitted")
    );
})