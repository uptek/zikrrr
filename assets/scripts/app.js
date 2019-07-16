(function () {
    const main = document.querySelector('.tasbih');

    // load random tasbih
    fetch('./dist/tasbih.json', {
            cache: 'no-store'
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (tasbih) {
            main.innerText = getRandomTasbih(tasbih);
        })
        .catch(function (error) {
            console.error(error);
        });

    // make text fit size of the container
    // fitty('.tasbih', {
    //     minSize: 100,
    //     maxSize: 250
    // });
})();

function getRandomTasbih(tasbih) {
    return tasbih[Math.floor(Math.random() * tasbih.length)].content
}