/**
 * Get a random item
 *
 * @return {String} Tasbih content
 */
app.random = function () {
    if (typeof app.items === 'undefined' || !app.itemCount) {
        return '';
    }

    return app.items[Math.floor(Math.random() * app.itemCount)].content;
}

/**
 * Get item by ID
 *
 * @param {int} id Tasbih ID
 * @return {String} Tasbih content
 */
app.get = function (id) {
    id = (typeof id !== 'undefined') ? id : null;

    if (!id) {
        return app.random();
    }

    if (typeof app.items === 'undefined' || !app.itemCount) {
        return;
    }

    if (typeof id === 'undefined') {
        return;
    }

    return app.items.find(function (item) {
        return item.id == id;
    }).content;
}

/**
 * Initialize
 *
 * - Counts all Tasbih items
 * - Caches DOM element for content
 * - Loads mentioned or a random Tasbih
 */
app.init = function () {
    // Count all tasbih items
    window.app['itemCount'] = window.app.items.length;

    // Get DOM element for tasbih content
    window.app['content'] = document.querySelector('.content');

    // Get the mentioned Tasbih from URL parameter or a random one if not mentioned
    var item = app.get(getURLParam('id'));

    // Print the chosen Tasbih to DOM
    app.content.innerHTML = item;
    app.content.title = item;
    app.content.ariaLabel = item;
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
    var params = query.split('&');

    for (var i = 0; i < params.length; i++) {
        var pair = params[i].split('=');

        if (pair[0] == param) {
            return pair[1];
        }
    }

    return (false);
}