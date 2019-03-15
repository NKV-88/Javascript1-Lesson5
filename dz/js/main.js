// 1.Есть кнопка button рядом с ней есть текст (Hello) необходимо при нажатии на кнопку поменять текст кнопки на (Привет)

var button = document.querySelector("#button");
//var text = document.querySelector("#temp").content.cloneNode(true);
button.onclick = function () {
	button.innerText = 'Привет';
};

//2.Есть кнопка button рядом с ней есть тэг <b></b>(Hello) необходимо при нажатии на кнопку поменять тэг на <h3></h3>

var button2 = document.querySelector("#button2");
//var tag = document.querySelector("#trueTag").content.cloneNode(true);
button2.onclick = function () {
	document.querySelector("#changedTag").innerHTML = "<h3>h3h3</h3>";
};