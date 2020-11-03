/**
 * Created by 30947 on 2018/8/22.
 */
var setting = {
    view: {

        showLine: true,
        selectedMulti: false,

        },
    callback:{
        onClick:getValue

    }
}
function init() {


    $.ajax({
        type: "get",
        url: "json/ztreeList.json",
        dataType: "json",
        success: function (res) {
            var zNodes = res.data;
            $.fn.zTree.init($("#userZtree"), setting, zNodes);
        }
    })
}
function getValue(){
var treeObj= $.fn.zTree.getZTreeObj("userZtree");
treeObj.expandAll(false);
    var treeNodes=treeObj.getSelectedNodes();
    var selectText=treeNodes[0].name;
    $("#partNme").val(selectText);
    $(".formPub").hide();
}
    $(function(){
        init();

    })