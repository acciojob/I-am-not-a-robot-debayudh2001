//your code here
let h1 = document.createElement("h1")
h1.innerText = "I'm not a robot"
h1.style.textAlign = "center"
let images = []
for(let i=1; i<=5; i++){
	let img = document.createElement("img")
	img.className = "img" + i
	images.push(img)
}
let main = document.querySelector("main")
main.append(h1)
let randomImg = images[parseInt(Math.random()*images.length)]
let img6 = document.createElement("img")
img6.className = randomImg.className
images.push(img6)
images.sort((x,y) => 0.5 - Math.random())
for(let v of images){
	main.append(v)
}
let h3 = document.createElement("h3")
h3.innerText = "Please click on the identical tiles to verify that you are not a robot."
main.append(h3)

for(let i=0; i< images.length; i++){
	images[i].addEventListener("click", (e) => {
		let img = e.target
		map.set(i, images[i])
	})
}