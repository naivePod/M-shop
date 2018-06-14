$(document).ready(function () {

    $(".plus").live('click',function () {
        var id = $(this).attr('id');//获取目标的Id
        if(localStorage.getItem(id) == null) {
            //判断localStorage是否存在该key
            var item = data[id];
            item.quantity = "0";
            var str = JSON.stringify(item);
            localStorage.setItem(id, str);
        }
        //修改数量，并存储到localStorage
        var oldItem = JSON.parse(localStorage.getItem(id));
        var newItem = oldItem;
        newItem.quantity = parseInt(oldItem.quantity)+1;
        var newItemStr = JSON.stringify(newItem);
        localStorage.setItem(id, newItemStr);
    });

});