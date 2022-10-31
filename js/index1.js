const res = document.getElementById("res")
    let apikey = "AIzaSyCdP73ap1ygErmGt2t5B76J7nwgf0kpmzs";
        let url = "https://tenor.googleapis.com/v2/featured?key=" +  apikey ;
        console.log(url);

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let myArr = JSON.parse(this.responseText);
                console.log(myArr);
                let i = 0;
                console.log(myArr["results"].length);
                while(i < myArr["results"].length) {
                    let src = myArr["results"][i]["media_formats"]["mediumgif"]["url"];
                    const img = document.createElement("img")
                    img.setAttribute("src",src)
                    res.appendChild(img)
                    i++;
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    
        
