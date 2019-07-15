(function () {
    // const tasbih = require('../../data/tasbih.json');
    const main = document.querySelector('.tasbih');

    // load random tasbih
    loadJSON(function (response) {
        // Parse JSON string into object
        const tasbih = JSON.parse(response);
        main.innerText = getRandomTasbih(tasbih);
    });

    // make text fit size of the container
    // fitty('.tasbih', {
    //     minSize: 100,
    //     maxSize: 150
    // });
})();

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './data/tasbih.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function getRandomTasbih(tasbih) {
    return tasbih[Math.floor(Math.random() * tasbih.length)].content
}