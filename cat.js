const catCard = document.querySelector(".catCard");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


function populateCatCard(cat) {
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let p = document.createElement("p");
        let text = document.createTextNode(cat.name);  
        img.setAttribute("src", cat.imageUrl);
        h2.appendChild(text);
        text = document.createTextNode(cat.color);  
        p.appendChild(text);
        catCard.appendChild(h2);
        catCard.appendChild(p);
        catCard.appendChild(img);
}


window.onload = async function(evt) {
    evt.preventDefault();
    console.log("Getting Album Track Data...");
    axios.get("http://workshop-dev.us-west-2.elasticbeanstalk.com/cats/"+id)
    .then(res => {
      console.log(res.data);
      if (!res.data) {
        throw "No data for playlist with id:" + id;
      }
    populateCatCard(res.data);

    })
}