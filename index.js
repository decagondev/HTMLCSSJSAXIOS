const catList = document.querySelector(".catlist");
function populatecatList(catData) {

    for (let cat of catData) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      let text = document.createTextNode(cat.name);
  
      a.setAttribute('href', `./cat.html?id=${cat.id}`);
  
      a.appendChild(text);
      li.appendChild(a);
      catList.appendChild(li);
    }
}
window.onload = async function(evt) {
    evt.preventDefault();
    console.log("Getting Cat Data...");
    axios.get("http://workshop-dev.us-west-2.elasticbeanstalk.com/cats")
    .then((res) => {
      console.log(res.data);
      populatecatList(res.data);
    })
}