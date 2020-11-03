/**
 * Created by 30947 on 2018/8/15.
 */
$(function(){
    caseTable();
})
function caseTable(){

    $('#table').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        url: "json/allFind.json",
        dataType: "json",
        pagination: true, //分页
        pageSize: 10,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams: null,
        columns: [
            {
                checkbox: "true",
                field: 'check',
                align: 'center',
                valign: 'middle'
            }
            ,
            {
                title: "编号",
                field: 'id',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '角色名称',
                field: 'logo',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '角色人数',
                field: 'type',
                align: 'center',
                valign: 'middle'
            },

            {
                title: '角色描述',
                field: 'number',
                align: 'center'
            }

        ]
    });

}
function detail(){
    parent.layer.open({
        type: 2,
        title: '详情界面',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['60%', '60%'],
        shadeClose: true,
        closeBtn: 2,
        content: 'roleDtail.html'
    })
}
