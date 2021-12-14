module.exports =()=> {
    var urlItem = document.getElementsByClassName('sidebar-item');
    urlItem.click = function () {
        alert('d');
        console.log('dddd')
    }
    urlItem.addEventListener("click", function () {
        alert('d');
        console.log('dddd')
    })
}
// module.exports = {

//     ready() {
//         console.log('ready')
//         var urlItem = document.getElementsByClassName('sidebar-item');
//         urlItem.click = function () {
//             alert('d');
//             console.log('dddd')
//         }
//         urlItem.addEventListener("click", function () {
//             alert('d');
//             console.log('dddd')
//         })
//     },
//     updated() {
//         console.log('updated')
//         var urlItem = document.getElementsByTagName('div');
//         urlItem.click = function () {
//             alert('d2');
//             console.log('dddd2')
//         }
//         urlItem.addEventListener("click", function () {
//             alert('d');
//             console.log('dddd')
//         })
//     },
//     generated(pagePaths) {
//         console.log('updated')
//         var urlItem = document.getElementsByTagName('div');
//         urlItem.click = function () {
//             alert('d2');
//             console.log('dddd2')
//         }
//         urlItem.addEventListener("click", function () {
//             alert('d');
//             console.log('dddd')
//         })
//     }

// }