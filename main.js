var counter = 0;
const internshipsdiv = document.getElementById("internships");
const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{


const myrequest = new XMLHttpRequest();
const url = "http://localhost:3000/internships"
myrequest.open('GET', url);

myrequest.onload = function(){
   const mydata = JSON.parse(myrequest.responseText);
   mydata.reverse();
   renderhtml(mydata);
};
myrequest.send();

});
function renderhtml(thedata){
	var htmlstring= "";
	for (var i = thedata.length - 1; i >= 0; i--) {
		htmlstring += "<p>" + thedata[i].description + ".</p> <hr>";
		console.log(thedata[i].description);
		counter++;
	}
	if (counter>9) {
		btn.classList.add("invisible");
		console.log(counter);
	}
	internshipsdiv.insertAdjacentHTML('beforeend', htmlstring);
}
