(function () {
    const main = document.querySelector('.tasbih');

    // fetch all tasbihat
    fetch('./dist/tasbihat.json', {
            cache: 'no-store'
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (tasbihat) {
            window.tasbihat = tasbihat;
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
 * Get a random Tasbih
 */
function getRandomTasbih() {
    if (typeof tasbihat === 'undefined') {
        return '';
    }

    return tasbihat[Math.floor(Math.random() * tasbihat.length)].content
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

    let tasbih = null;

    tasbihat.forEach(function(item) {
        if (item.id == id) {
            tasbih = item;
            return false;
        }
    });

    return tasbih;
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