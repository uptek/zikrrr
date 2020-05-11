window.app = {
    items: []
};
window.content = document.querySelector('.content');

/**
 * Get a random Zikr
 */
app.random = function () {
    if (typeof app.items === 'undefined') {
        return '';
    }

    return app.items[Math.floor(Math.random() * app.items.length)].content;
}

/**
 * Get Zikr by ID
 *
 * @param {String} id Zikr ID
 */
app.get = function (id) {
    id = (typeof id !== 'undefined') ? id : null;

    if (!id) {
        return app.random();
    }

    if (typeof app.items === 'undefined' || typeof id === 'undefined') {
        return '';
    }

    var zikr = '';

    app.items.forEach(function (item) {
        if (item.id == id) {
            zikr = item.content;
            return false;
        }
    });

    return zikr;
}

/**
 * Initialize loading of items from data.json and printing to DOM
 */
app.init = function () {
    // fetch all items
    fetch('./dist/data.json', {
            cache: 'no-store'
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (items) {
            app.items = items;
            content.innerHTML = app.get(getURLParam('id'));
        })
        .catch(function (error) {
            console.error(error);
        });
};

(function () {
    app.init();
})();

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