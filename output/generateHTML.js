
module.exports = function generateHTML(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
<script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Kalam:300|Permanent+Marker&display=swap" rel="stylesheet">
<script src="https://use.fontawesome.com/3e98d27fed.js"></script>
<title>Our Team!!</title>
</head>
<body>
<div id="main" class="ui cards">
    <card id="manager" class="ui card">
        <h1>${data[0].title}</h1>
        <h3>${data[0].name}</h3>
        <h4 class="email"><a href="mailto: ${data[0].email}"> Email: ${ data[0].email}</a> </h4>
        <p class="extra"> Office Number: ${data[0].officeNumber} </p>
        <p class="id"> ID: ${data[0].id} </p>
    </card>

    <card id="card" class=${data[1] ? "'ui card'" : "'hide'"} >
        <h2 id="title">${data[1] ? data[1].title : ""}</h2>
        <h3>${data[1] ? data[1].name : ""}</h3>
        <h4 class="email"><a href="mailto: ${data[1] ? data[1].email : ""}"> Email: ${data[1] ? data[1].email : ""}</a> </h4>
        <p class="extra"> ${data[1] ? data[1].extra : ""} </p>
        <p class="id"> ID: ${data[1] ? data[1].id : ""} </p>
    </card>

    <card id="card" class=${data[2] ? "'ui card'" : "'hide'"}>
    <h2 id="title">${data[2] ? data[2].title : ""}</h2>
    <h3>${data[2] ? data[2].name : ""}</h3>
    <h4 class="email"><a href="mailto: ${data[2] ? data[2].email : ""}"> Email: ${data[2] ? data[2].email : ""}</a> </h4>
    <p class="extra"> ${data[2] ? data[2].extra : ""} </p>
    <p class="id"> ID: ${data[2] ? data[2].id : ""} </p>
    </card>

    <card id="card" class=${data[3] ? "'ui card'" : "'hide'"}>
    <h2 id="title">${data[3] ? data[3].title : ""}</h2>
    <h3>${data[3] ? data[3].name : ""}</h3>
    <h4 class="email"><a href="mailto: ${data[3] ? data[3].email : ""}"> Email: ${data[3] ? data[3].email : ""}</a> </h4>
    <p class="extra"> ${data[3] ? data[3].extra : ""} </p>
    <p class="id"> ID: ${data[3] ? data[3].id : ""} </p>
    </card>

    <card id="card" class=${data[4] ? "'ui card'" : "'hide'"}>
    <h2 id="title">${data[4] ? data[4].title : ""}</h2>
    <h3>${data[4] ? data[4].name : ""}</h3>
    <h4 class="email"><a href="mailto: ${data[4] ? data[4].email : ""}"> Email: ${data[4] ? data[4].email : ""}</a> </h4>
    <p class="extra"> ${data[4] ? data[4].extra : ""} </p>
    <p class="id"> ID: ${data[4] ? data[4].id : ""} </p>
    </card>

    <card id="card" class=${data[5] ? "'ui card'" : "'hide'"}>
    <h2 id="title">${data[5] ? data[5].title : ""}</h2>
    <h3>${data[5] ? data[5].name : ""}</h3>
    <h4 class="email"><a href="mailto: ${data[5] ? data[5].email : ""}"> Email: ${data[5] ? data[5].email : ""}</a> </h4>
    <p class="extra"> ${data[5] ? data[5].extra : ""} </p>
    <p class="id"> ID: ${data[5] ? data[5].id : ""} </p>
    </card>

    <card id="card" class=${data[6] ? "'ui card'" : "'hide'"}>
    <h2 id="title">${data[6] ? data[6].title : ""}</h2>
    <h3>${data[6] ? data[6].name : ""}</h3>
    <h4 class="email"><a href="mailto: ${data[6] ? data[6].email : ""}"> Email: ${data[6] ? data[6].email : ""}</a> </h4>
    <p class="extra"> ${data[6] ? data[6].extra : ""} </p>
    <p class="id"> ID: ${data[6] ? data[6].id : ""} </p>
    </card>

    <card id="card" class=${data[7] ? "'ui card'" : "'hide'"}>
    <h2 id="title">${data[7] ? data[7].title : ""}</h2>
    <h3>${data[7] ? data[7].name : ""}</h3>
    <h4 class="email"><a href="mailto: ${data[7] ? data[7].email : ""}"> Email: ${data[7] ? data[7].email : ""}</a> </h4>
    <p class="extra"> ${data[7] ? data[7].extra : ""} </p>
    <p class="id"> ID: ${data[7] ? data[7].id : ""} </p>
    </card>
</div>

</body>

<style>

body{
    background-image: url("pinboard.png");
    background-repeat: no-repeat;
    background-size: auto;
    padding: 5rem;
}
.hide {
    display: none;
    border: none;
}
#card {

width: 250px;
min-height:250px;
max-height:250px;
padding-top:35px;

background: #ffff88;
border-bottom-right-radius: 60px 5px;
box-shadow:2px 15px 5px rgba(0, 0, 0, 0.40);
text-align: center;

}
* {
    font-family: 'Kalam', cursive;
}
#manager{
    
    text-align: center;
    width: 400px;
    min-height:350px;
    max-height:350px;
    background-image: url("notebook.jpeg");
    background-size: cover;
}

#main {
    width: 100%;
  
}

h2{
    font-family: 'Kalam', cursive;
    text-decoration: underline;
}
h3{
    margin: 0;
    font-family: 'Kalam', cursive;
}
h1 {
    font-family: 'Permanent Marker', cursive;

}
</style>
</html> `
}