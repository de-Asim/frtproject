const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsdata.io/api/1/news?apikey=pub_12276b1c2d57b6da7dc43eaffe2516cd68da9&country=in',true);
xhr.getResponseHeader('content-type','application/json');

xhr.onload = function(){
    if (this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.results;
        console.log(articles);
        let newscontainer = document.getElementById("newscontainer");
        let allnews ='';
        articles.forEach(function (element,index) {
            if(element.description !==null){
                let news =`<a href=${element.link} target="_blank" class="newsCard">
                <div class="imgCon">
                <img
                src=${element.image_url}
                alt=""
                />
                </div>
                <div class="newsCon">
                <div class="newsBody">${element.description}</div>
                <div class="dateTime">${element.pubDate.slice(0,10)} | <p class="line">Read more at ${element.source_id}</p></div>
                </div></a>`
                allnews += news;
            }
            else if(element.title !==null){
                let news =`<a href=${element.link} target="_blank" class="newsCard">
                <div class="imgCon">
                <img
                src=${element.image_url}
                alt=""
                />
                </div>
                <div class="newsCon">
                <div class="newsBody">${element.title}</div>
                <div class="dateTime">${element.pubDate.slice(0,10)} | <p class="line">Read more at ${element.source_id}</p></div>
                </div></a>`
                allnews += news;
            }
        });
        newscontainer.innerHTML = allnews;
    }
    else{
        console.log("error occured");
    }
}

xhr.send()

