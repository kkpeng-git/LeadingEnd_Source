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
                title: '标题',
                field: 'logo',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '发布人',
                field: 'type',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '发布时间',
                field: 'color',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '点击率',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },

            {
                title: '操作',
                field: 'opear',
                align: 'center',
                formatter: function (value, row) {
                    var e = '<button  href="javascript:void(0)"  class="btn btn-xs btn-primary" title="案件详情" onclick="detail(\'' + row.id + '\')">详情</button> ';


                    return e ;
                }
            }
        ]
    });

}
function detail(){
    layer.open({
        type: 2,
        title: '详情界面',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['90%', '90%'],
        shadeClose: true,
        closeBtn: 2,
        content: 'notice.html'
    })
}
function enter(){
    layer.open({
        type: 2,
        title: '案件录入',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['90%', '90%'],
        shadeClose: true,
        closeBtn: 2,
        content: 'caseDtail.html'
    })
}