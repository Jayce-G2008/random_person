// console.log(data.results[0]);
// console.log(data);

const results = data.results;

const resultsImg0 = document.getElementById("img0");

resultsImg0.src = results[0].picture.large;
document.getElementById("img1").src = results[1].picture.large;
document.getElementById("img2").src = results[2].picture.large;
document.getElementById("img3").src = results[3].picture.large;
document.getElementById("img4").src = results[4].picture.large;
document.getElementById("img5").src = results[5].picture.large;
document.getElementById("img6").src = results[6].picture.large;
document.getElementById("img7").src = results[7].picture.large;
document.getElementById("img8").src = results[8].picture.large;
document.getElementById("img9").src = results[9].picture.large;
document.getElementById("img10").src = results[10].picture.large;
document.getElementById("img11").src = results[11].picture.large;
document.getElementById("img12").src = results[12].picture.large;
document.getElementById("img13").src = results[13].picture.large;

const mainImg = document.getElementById("interchangable");



mainImg.style.display = "flex";
mainImg.style.justifyContent = "center";
mainImg.style.alignItems = "flex-end";

resultsImg0.addEventListener("click", (e) => {
    e.preventDefault;

    mainImg.src = results[0].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[0].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[0].name.title + " " + results[0].name.first + " " + results[0].name.last;

    document.getElementById("3").innerText = "Location: " + results[0].location.city + ", " + results[0].location.country;
});

document.getElementById("img1").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[1].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[1].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[1].name.title + " " + results[1].name.first + " " + results[1].name.last;

    document.getElementById("3").innerText = "Location: " + results[1].location.city + ", " + results[1].location.country;
})

document.getElementById("img2").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[2].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[2].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[2].name.title + " " + results[2].name.first + " " + results[2].name.last;

    document.getElementById("3").innerText = "Location: " + results[2].location.city + ", " + results[2].location.country;
})

document.getElementById("img3").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[3].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[3].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[3].name.title + " " + results[3].name.first + " " + results[3].name.last;

    document.getElementById("3").innerText = "Location: " + results[3].location.city + ", " + results[3].location.country;
})

document.getElementById("img4").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[4].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[4].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[4].name.title + " " + results[4].name.first + " " + results[4].name.last;

    document.getElementById("3").innerText = "Location: " + results[4].location.city + ", " + results[4].location.country;
})

document.getElementById("img5").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[5].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[5].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[5].name.title + " " + results[5].name.first + " " + results[5].name.last;

    document.getElementById("3").innerText = "Location: " + results[5].location.city + ", " + results[5].location.country;
})

document.getElementById("img6").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[6].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[6].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[6].name.title + " " + results[6].name.first + " " + results[6].name.last;

    document.getElementById("3").innerText = "Location: " + results[6].location.city + ", " + results[6].location.country;
})

document.getElementById("img7").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[7].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[7].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[7].name.title + " " + results[7].name.first + " " + results[7].name.last;

    document.getElementById("3").innerText = "Location: " + results[7].location.city + ", " + results[7].location.country;
})

document.getElementById("img8").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[8].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[8].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[8].name.title + " " + results[8].name.first + " " + results[8].name.last;

    document.getElementById("3").innerText = "Location: " + results[8].location.city + ", " + results[8].location.country;
})

document.getElementById("img9").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[9].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[9].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[9].name.title + " " + results[9].name.first + " " + results[9].name.last;

    document.getElementById("3").innerText = "Location: " + results[9].location.city + ", " + results[9].location.country;
})

document.getElementById("img10").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[10].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[10].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[10].name.title + " " + results[10].name.first + " " + results[10].name.last;

    document.getElementById("3").innerText = "Location: " + results[10].location.city + ", " + results[10].location.country;
})

document.getElementById("img11").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[11].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[11].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[11].name.title + " " + results[11].name.first + " " + results[11].name.last;

    document.getElementById("3").innerText = "Location: " + results[11].location.city + ", " + results[11].location.country;
})

document.getElementById("img12").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[12].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[12].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[12].name.title + " " + results[12].name.first + " " + results[12].name.last;

    document.getElementById("3").innerText = "Location: " + results[12].location.city + ", " + results[12].location.country;
})

document.getElementById("img13").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = results[13].picture.large;

    document.getElementById("1").innerText = "Gender: " + results[13].gender;

    document.getElementById("2").innerText = "Title and Name: " + results[13].name.title + " " + results[13].name.first + " " + results[13].name.last;

    document.getElementById("3").innerText = "Location: " + results[13].location.city + ", " + results[13].location.country;
})

document.getElementById("interchangable").addEventListener("click", (e) => {
    e.preventDefault();

    mainImg.src = "images/Junior_Richard_J.R._Smith.png";

    document.getElementById("1").innerText = "Gender: " + "male";

    document.getElementById("2").innerText = "Title and Name: " + "Junior" + " " + "Richard" + " " + "Smith";

    document.getElementById("3").innerText = "Occupation:" + "Arbiter of Code";
})