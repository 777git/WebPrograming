//let init = document.getElementById("swe")
//init.addEventListener("onclick", LightTema)
//alert("init")
function DarkTema() {
    Header(true)
    Body(true)
    //changePicture(true)
    Navigation(true)
    //Submenu(true)
    Footer(true)
    //alert("not problem")
    //Button( "LightTema")
    //alert("workDark")
    DarkOn()
}
function LightTema() {
    Header(false)
    //changePicture(false)
    Body(false)
    Navigation(false)
    //Submenu(false)
    Footer(false)
    //Button("DarkTema")
    LightOn()
    //alert("workLight")
}
function DarkOn() {
    let th = document.getElementById("dark")
    let tt = document.getElementById("light")
    tt.style.display = "none"
    th.style.display = "block"
    //alert("dark ON!!")
}
function LightOn() {
    let th = document.getElementById("dark")
    let tt = document.getElementById("light")
    th.style.display = "none"
    tt.style.display = "block"
    //alert("light ON!!")
}
function Button(str) {
    let th = document.getElementById("swe")
    th.innerHTML = str
    th.style.position = "abosulte"
    th.style.background = "green"
    if (str == "DarkTema") {
        th.removeEventListener("onclick", LightTema)
        th.addEventListener("onclick", DarkTema)
        //alert("must remove")
    }
    if (str == "LightTema") {
        th.removeEventListener("onclick", DarkTema)
        th.addEventListener("onclick", LightTema)

    }

}
function Header(tema) {
    let el = document.getElementsByClassName("header_logo")
for(i = 0; i < el.length; i++){
    if (tema) {
        el[i].style.color = "black";
	el[i].style.backgroundColor = "silver";
    }
    if (!tema) {
        el[i].style.color = "white";
	el[i].style.backgroundColor = "black";
    }
}
}

function Body(tema) {
  	let cont = document.getElementsByClassName("container2")
	for(i = 0; i < cont.length; i++){
    		if (tema) {
			cont[i].style.backgroundColor = "white";
    		}
    		if (!tema) {
			cont[i].style.backgroundColor = "grey";
    		}
	} 

}
function Navigation(tema) {
     	let nav = document.getElementsByClassName("nav")
	for(i = 0; i < nav.length; i++){
    		if (tema) {
			nav[i].style.backgroundColor = "blue";
    		}
    		if (!tema) {
			nav[i].style.backgroundColor = "green";
    		}
	}
}

function Submenu(tema) {
    //var child_elements = document.getElementsByClassName("nav_inner_sub")
    //alert (child_elements)
    for (let i = 1; i < 5; i++) {
        let child_element = document.getElementById("nw" + i)
        child_element.style.color = "white"
        child_element.style.opacity = "1"
        child_element.style.padding = "10px"
        child_element.style.paddingRight = "110px"
        child_element.style.textDecoration = "none"
        if (tema) {
            child_element.style.backgroundColor = "#404040"
        }
        else {
            child_element.style.backgroundColor = "#261717"
            //child_element.style.color="b"
        }
    }

}

function changePicture(tema) {
    let str = "picture"
    let txt = "txt"
    let colors = { 1: "white", 2: "red", 3: "blue", 4: "black" }
    for (let i = 1; i < 5; i++) {
        let obj = document.getElementById(str + i)
        obj.style.marginLeft = "2%"
        obj.style.marginRight = "4%"
        obj.style.width = "450px"
        obj.style.height = "300px"
        obj.style.display = "flex"
        obj.style.alignItems = "flex-end"
        obj.style.backgroundSize = "cover"

        let text = document.getElementById(txt + i)
        text.style.textDecoration = "none"
        text.style.fontSize = "60px"
        text.style.paddingBottom = "20px"
        text.style.paddingLeft = "20px"
        if (tema) {
            obj.style.background = "url(./img/ee" + i + ".jpg)center no-repeat"
            text.style.color = "#B6E7F2"
        } else {

            obj.style.background = "url(./img/lle" + i + ".jpg)center no-repeat"
            text.style.color = colors[i]//"#BAE02A"//"#A9BF04" ///"#594246"
        }
    }

}

function Footer(tema) {
	let nav = document.getElementsByClassName("footer")
	for(i = 0; i < nav.length; i++){
    	if (tema) {
		nav[i].style.color = "black";
		nav[i].style.backgroundColor = "silver";
    	}
    	if (!tema) {
		nav[i].style.color = "white";
		nav[i].style.backgroundColor = "black";
    	}
	}
}
