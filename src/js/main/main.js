window.app = {
    items: [],
    content: document.querySelector('.content'),
};

/**
 * Get a random item
 *
 * @return {String} Zikr content
 */
app.random = function () {
    if (typeof app.items === 'undefined') {
        return '';
    }

    return app.items[Math.floor(Math.random() * app.items.length)].content;
}

/**
 * Get item by ID
 *
 * @param {int} id Zikr ID
 * @return {String} Zikr content
 */
app.get = function (id) {
    id = (typeof id !== 'undefined') ? id : null;

    if (!id) {
        return app.random();
    }

    if (typeof app.items === 'undefined' || !app.items.length) {
        return;
    }

    if (typeof id === 'undefined' ) {
        return;
    }

    return app.items.find(function (item) {
        return item.id == id;
    }).content;
}

/**
 * Initialize loading of items from data.json and printing to DOM
 */
app.init = function () {
    // fetch all items
    fetch('./dist/data/data.json', {
            cache: 'no-store'
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (items) {
            app.items = items;
            var item = app.get(getURLParam('id'));

            app.content.innerHTML = item;
            app.content.title = item;
            app.content.ariaLabel = item;
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