// 1.Есть кнопка button рядом с ней есть текст (Hello) необходимо при нажатии на кнопку поменять текст кнопки на (Привет)

var button = document.querySelector("#button");
button.onclick = function () {
	document.querySelector("#text").innerText = text_true[1];
};
console.log(button);