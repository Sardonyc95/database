const container = document.getElementById('container');

var api = `https://fakestoreapi.com/products`

fetch(api)
.then(res => res.json())
.then(result =>{
        result.map(item => {
        const div = document.createElement('div');
        const title = document.createElement('h1');
        const img = document.createElement('img');
        const description = document.createElement('p');
        const price = document.createElement('span');
        const button = document.createElement("button");
        const bold = document.createElement('strong');
        title.innerText = item.title.substring(0,20);
        img.src = item.image;
        price.innerText = `$` + item.price;
        description.innerText = item.description.substring(0,50);
        button.innerText = "Buy now";
        bold.append(price)
        div.append(img);
        div.append(title);
        div.append(description);
        div.append(bold);
        div.append(button);
        container.append(div);
    })
} 
)






