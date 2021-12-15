
module.exports = {

    ready() {
        console.log('ready');
    },
    updated() {
       console.log('updated');
    },
    generated(pagePaths) {
        console.log('pagePaths',pagePaths);
    }

}