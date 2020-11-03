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
                title: '文件名称',
                field: 'logo',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '文件类型',
                field: 'type',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '类型',
                field: 'color',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '大小',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '进度',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },

            {
                title: '状态',
                field: 'number',
                align: 'center'
            },
            {
                title: '操作',
                field: 'opear',
                align: 'center',
                formatter: function (value, row) {
                    var e = '<button  href="javascript:void(0)"  class="btn btn-xs btn-primary" title="上传" onclick="detail(\'' + row.id + '\')">上传' +
                        '</button> ';



                    return e;
                }
            }
        ]
    });

}

function lawSelect(){
    layer.open({
        type: 2,
        title: '文书选择',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['98%', '98%'],
        shadeClose: true,
        closeBtn: 2,
        content: 'lawSelect.html'
    })
}
function lawlook(){
    parent.parent.layer.open({
        type: 2,
        title: '文书选择',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['98%', '98%'],
        shadeClose: true,
        closeBtn: 2,
        content: 'pdf.html'
    })
}