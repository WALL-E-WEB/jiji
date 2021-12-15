


window.onload = function () {
    var urlItem = document.getElementsByClassName('sidebar-item');
    for (let index = 0; index < urlItem.length; index++) {
        var element = urlItem[index];
   
        // if (element.nextElementSibling) {
        //     element.classList.add('showTag');
        //     var sibling = element.nextElementSibling;
        //     sibling.style.display = 'none';

        // }
        element.addEventListener("click", function () {
            element.classList.add('showTag');
            if (element.classList.contains('isHied')) {
                element.classList.remove('isHied');
                var sibling = this.nextElementSibling;
                sibling.style.display = 'block';
            } else {
                element.classList.add('isHied');
                var sibling = this.nextElementSibling;
                sibling.style.display = 'none';
            }
        })
    }

    var urlItem = document.getElementsByClassName('sidebar-sub-items');
    for (let index = 0; index < urlItem.length; index++) {
        var element = urlItem[index];
        var frist = element.parentElement.children[0];
        frist.style.color = '#000';
        frist.style.fontWeight = 700;
        var span = document.createElement("span");
        frist.appendChild(span);
    }
};
