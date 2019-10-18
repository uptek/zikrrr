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
            let id = getURLParam('id'),
                tasbih = '';

            if (id) {
                tasbih = getTasbihByID(id);
            } else {
                tasbih = getRandomTasbih();
            }

            main.innerHTML = tasbih;
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
    if (typeof tasbihat === 'undefined' || typeof id === 'undefined') {
        return '';
    }

    let tasbih = '';
    cl(id)

    tasbihat.forEach(function (item) {

        if (item.id == id) {
            console.log('item', item);
            tasbih = item.content;
            return false;
        }
    });

    return tasbih;
}

/**
 * Get parameter from URL
 * @param {String} param Parameter to get
 */
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

function cl(s) {
    console.log(s);
}