if(searchTerm !==''){
    alert(searchTerm);
    results = results.filter(funtion (element)){
        return ( element.title.toLowerCae().indexOf(searchTerm) > -1);
    };
}
results.forEach(element => {
    const el = document.createElement('div');
    const image= document.createElement('img');
    const text= document.createElement('h2');

    text.innerHTML = `${element.title}`;
    image.src = IMGPATH + element.poster_path;
    el.appendChild(image);
    el.appendChild(text);
    main.appendChild(el);
});