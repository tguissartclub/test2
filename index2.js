let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],
    b = document.getElementById("thumbnails").children,
    j, x, i,
    resultdata = [],
    csvfile = new XMLHttpRequest();
    csvfile.open("get", "index.csv", true);
    csvfile.send();
	csvfile.onload = function(){
	   let tmp = csvfile.responseText.split("\n");
    for(let i = 0; i < tmp.length; i++){
        let tmpROW = tmp[i].split(',');
        if( tmpROW !== '' ){
            resultdata[i] = tmp[i].split(',');
        }
    }
    for (let i = 0; i < a.length; i++) {
      document.getElementById("thumbnails").children[i].style.backgroundImage = "url(thumbnail/"+a[i]+".jpg)";
      document.getElementById("thumbnails").children[i].setAttribute("onclick","loadimage("+a[i]+","+(i+1)+")");
      if (resultdata[a[i]][4]) {
        var span = document.createElement("span");
        span.id = "kyodo"+parseInt(a[i]);
        span.classList.add("hide");
        document.getElementById('kyodoimages').appendChild(span);
      }
    }
  }


for (i = a.length - 1; i > 0; i--) {
  j = Math.floor(Math.random() * (i + 1));
  x = a[i];
  a[i] = a[j];
  a[j] = x;
}

function scroll(){
  let bottom = document.documentElement.scrollTop || document.body.scrollTop,
      elementno2 = document.getElementById('two'),
      elementno3 = document.getElementById('three'),
      second = elementno2.offsetTop,
      third = elementno3.offsetTop;
  if (second < bottom && third > bottom){
    document.querySelector('body').classList.remove('first');
    document.querySelector('body').classList.remove('third');
    document.querySelector('body').classList.add('second');
  }
  if (second > bottom && third > bottom){
    document.querySelector('body').classList.remove('second');
    document.querySelector('body').classList.remove('third');
    document.querySelector('body').classList.add('first');
  }
  if (third < bottom && second < bottom){
    document.querySelector('body').classList.remove('second');
    document.querySelector('body').classList.remove('first');
    document.querySelector('body').classList.add('third');
  }
}
