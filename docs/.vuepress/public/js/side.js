


var urlItem = document.getElementsByClassName('sidebar-item');

console.log('dddd2')
console.log(urlItem);
for (let index = 0; index < urlItem.length; index++) {
    var element = urlItem[index];

    element.addEventListener("click", function () {
        if (element.classList.contains('isHied')) {
           element. classList.remove('isHied');
            var sibling = this.nextElementSibling;
            console.log(element);
                sibling.style.display = 'block';
              

        } else {
            element. classList.add('isHied');
            var sibling = this.nextElementSibling;
          console.log(element);
            sibling.style.display = 'none';

        }

    })
}