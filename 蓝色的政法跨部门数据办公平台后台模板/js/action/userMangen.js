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
                title: "用户编号",
                field: 'id',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '用户名称',
                field: 'logo',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '性别',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '联系电话',
                field: 'type',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '所在单位',
                field: 'color',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '登录名',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '授权',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '用户状态',
                field: 'number',
                align: 'center'
            }

        ]
    });

}
function detail(){
    parent.layer.open({
        type: 2,
        title: '用户详情界面',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['80%', '90%'],
        shadeClose: true,
        closeBtn: 2,
        content: 'userDtail.html'
    })
}
