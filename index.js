function s(s) {
  return document.querySelector(s);
}

let cal = s("#cal");
let line1 = s(".lin1");
let line2 = s(".lin2");
let line3 = s(".lin3");
let line4 = s(".lin4");
let line5 = s(".lin5");
copy.innerHTML = "&copy2020 robbet88 || //commentline_ || Saripdn || Belajar Pemograman(coding)"
function createButton(line,chr) {
  let charr = chr.split("");
  charr.forEach((txt,index)=>{
    let btn = document.createElement("button");
    let teks = document.createTextNode(txt);
    btn.appendChild(teks);
    btn.setAttribute("id","id"+teks);
    btn.classList.add("btn");
    if(txt=="C"){
      btn.addEventListener("click",()=>{
        inp.value = "0";
        res.value = "0";
      })
    }else if(txt == "<"){
      btn.addEventListener("click",()=>{
        let val = inp.value;
        inp.value = val.substring(0,val.length -1);
        if(inp.value == ""){
          res.value = "0";
          inp.value = "0";
        }else{
          res.value = eval(inp.value);
        }
      })
    }else if(txt == "="){
       btn.addEventListener("click",()=>{
        res.value = eval(inp.value);
       })
    }else{
      btn.addEventListener("click",()=>{
        if(inp.value == 0){
          inp.value = txt;
        }else{
          if (txt == "÷") {
            inp.value += "/";
          }else if(txt == "×"){
            inp.value += "*";
          }else if(txt == "^"){
            inp.value +="**";
          }else{
            inp.value += txt;
          }
        }
      })
    }
    line.appendChild(btn);
  })
}
createButton(line1,"C%<÷");
createButton(line2,"789×");
createButton(line3,"456-");
createButton(line4,"123+");
createButton(line5,"0.=");
