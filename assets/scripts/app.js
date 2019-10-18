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
            window.tasbih = tasbih;
            let id = getURLParam('id');

            if (id) {
                getTasbihByID(id);
            } else {
                main.innerHTML = getRandomTasbih();
            }
        })
        .catch(function (error) {
            console.error(error);
        });
})();

/**
 * Get random Tasbih
 */
function getRandomTasbih() {
    if (typeof tasbih === 'undefined') {
        return '';
    }

    return tasbih[Math.floor(Math.random() * tasbih.length)].content
}

/**
 * Get Tasbih by ID
 *
 * @param {String} id Tasbih ID
 */
function getTasbihByID(id) {
    if (typeof tasbih === 'undefined' || typeof id === 'undefined' ) {
        return '';
    }

    let t = null;

    tasbih.forEach(function(temp) {
        if (temp.id == id) {
            t = temp;
            return false;
        }
    });

    return t;
}

function getURLParam(param) {
    var query = window.location.search.substring(1);
    var params = query.split("&");
    for (var i = 0; i < params.length; i++) {
        var pair = params[i].split("=");

        if (pair[0] == param) {
            return pair[1];
        }
    }

    return (false);
}