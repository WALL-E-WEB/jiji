

    var urlItem = document.getElementsByClassName('sidebar-item');
    console.log('dddd2')
    console.log(urlItem);
    for (let index = 0; index < urlItem.length; index++) {
        var element = urlItem[index];
      
        element.addEventListener("click", function () {
           alert('dd');
            console.log('dddd')
            var sibling = this.nextElementSibling;
            for (let index = 0; index < sibling.children.length; index++) {
                const element2 = sibling.children[index];
                element2.style.display = 'none';
                
            }
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