/**
 * Created by 30947 on 2018/8/15.
 */
$(function(){
    noticeChange();
    numEcharts()
})
//公告系统切换
function noticeChange(){
    $("#hometit a").click(function(){
        var ins=$(this).index();
        $(this).addClass("homeFootActive").siblings().removeClass("homeFootActive");
        $("#notcebox .notic_con").eq(ins).show().siblings().hide();
    })
}
//办理量统计
function numEcharts(){
    var salesProportion = echarts.init($("#numStaic")[0]);
    var option = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#1ec5c6', '#1696d5','#2416c1'],


        calculable : false,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : ['30%', '70%'],
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'公安'},
                    {value:310, name:'法院'},
                    {value:234, name:'检查院'}

                ]
            }
        ]
    };
    salesProportion.setOption(option);
}