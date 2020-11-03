/**
 * Created by Administrator on 2017/4/25.
 */
function myEcharts(){
    orderMyEcharts();
    salesMyEcharts();
    monthOrderMyEcharts();
    monthSalesMyEcharts();
    salesRankMyEcharts();
    returnRankMyEcharts();
    salesProportionMyEcharts();
    profitProportionMyEcharts();
}
function orderMyEcharts(){
    var orderMyChart = echarts.init($("#container")[0]);
    var option = {
        title: {
            text: '1-12月销售订单量走势图',
            x:'center',
            y:'bottom'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['酒店订单','食品订单','家电订单','日用品订单','其他']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月',"12月"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'酒店订单',
                type:'line',
                stack: '（单）',
                data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'食品订单',
                type:'line',
                stack: '（单）',
                data:[220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'家电订单',
                type:'line',
                stack: '（单）',
                data:[150, 232, 201, 154, 190, 330, 410, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'日用品订单',
                type:'line',
                stack: '（单）',
                data:[320, 332, 301, 334, 390, 330, 320, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'其他',
                type:'line',
                stack: '（单）',
                data:[820, 932, 901, 934, 1290, 1330, 1320, 132, 101, 134, 90, 230, 210]
            }
        ]
    };
    orderMyChart.setOption(option);
}
function salesMyEcharts(){
    var salesMyChart = echarts.init($("#container1")[0]);
    var option = {
        title: {
            text: '1-12月销售额走势图',
            x:'center',
            y:'bottom'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['酒店订单','食品订单','家电订单','日用品订单','其他']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月',"12月"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'酒店订单',
                type:'line',
                stack: '总额（万元）',
                data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'食品订单',
                type:'line',
                stack: '总额（万元）',
                data:[220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'家电订单',
                type:'line',
                stack: '总额（万元）',
                data:[150, 232, 201, 154, 190, 330, 410, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'日用品订单',
                type:'line',
                stack: '总额（万元）',
                data:[320, 332, 301, 334, 390, 330, 320, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'其他',
                type:'line',
                stack: '总额（万元）',
                data:[820, 932, 901, 934, 1290, 1330, 1320, 132, 101, 134, 90, 230, 210]
            }
        ]
    };
    salesMyChart.setOption(option);
}
function monthOrderMyEcharts(){
    var monthOrderMyChart = echarts.init($("#container2")[0]);
    var option = {
        title: {
            text: '7月销售订单量走势图',
            x:'center',
            y:'bottom'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['酒店订单','食品订单','家电订单','日用品订单','其他']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'酒店订单',
                type:'line',
                stack: '（单）',
                data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230]
            },
            {
                name:'食品订单',
                type:'line',
                stack: '（单）',
                data:[220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 210, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 210, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'家电订单',
                type:'line',
                stack: '（单）',
                data:[150, 232, 201, 154, 190, 330, 410, 132, 101, 134, 90, 230, 210,150, 232, 201, 154, 190, 330, 410, 132, 101, 134, 90,150, 232, 201, 154, 190, 330, 410, 132, 101, 134, 90]
            },
            {
                name:'日用品订单',
                type:'line',
                stack: '（单）',
                data:[320, 332, 301, 334, 390, 330, 320, 132, 101, 134, 90, 230, 210, 932, 901, 934, 1290, 1330, 1320, 132, 101, 134, 90, 230, 932, 901, 934, 1290, 1330, 1320, 132, 101, 134, 90, 23]
            },
            {
                name:'其他',
                type:'line',
                stack: '（单）',
                data:[820, 932, 901, 934, 1290, 1330, 1320, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 932, 901, 934, 1290, 132, 101, 134, 90, 230, 210, 932, 901, 934, 1290]
            }
        ]
    };
    monthOrderMyChart.setOption(option);
}
function monthSalesMyEcharts(){
    var monthSalesMyChart = echarts.init($("#monthSalesMyChart")[0]);
    var option = {
        title: {
            text: '7月销售额走势图',
            x:'center',
            y:'bottom'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['酒店订单','食品订单','家电订单','日用品订单','其他']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'酒店订单',
                type:'line',
                stack: '（单）',
                data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230]
            },
            {
                name:'食品订单',
                type:'line',
                stack: '（单）',
                data:[220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 210, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 210, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'家电订单',
                type:'line',
                stack: '（单）',
                data:[150, 232, 201, 154, 190, 330, 410, 132, 101, 134, 90, 230, 210,150, 232, 201, 154, 190, 330, 410, 132, 101, 134, 90,150, 232, 201, 154, 190, 330, 410, 132, 101, 134, 90]
            },
            {
                name:'日用品订单',
                type:'line',
                stack: '（单）',
                data:[320, 332, 301, 334, 390, 330, 320, 132, 101, 134, 90, 230, 210, 932, 901, 934, 1290, 1330, 1320, 132, 101, 134, 90, 230, 932, 901, 934, 1290, 1330, 1320, 132, 101, 134, 90, 23]
            },
            {
                name:'其他',
                type:'line',
                stack: '（单）',
                data:[820, 932, 901, 934, 1290, 1330, 1320, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 932, 901, 934, 1290, 132, 101, 134, 90, 230, 210, 932, 901, 934, 1290]
            }
        ]
    };
    monthSalesMyChart.setOption(option);
}
function salesRankMyEcharts(){
        var salesRank = echarts.init($("#salesRank")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:[]

            },
            toolbox: {
                show : true,
                //orient: 'vertical',
                x: 'right',
                y: 'top',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['酒店订单','食品订单','家电订单','日用品订单','其他']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'承办会议（次）',
                    type:'bar',
                    barWidth:'30',
                    data:[927, 785, 652, 521, 157, 20],
                    itemStyle: {
                        normal: {
                            color:"#269fec"
                        }
                    }

                }
            ]
        };
    salesRank.setOption(option);
    }
function returnRankMyEcharts(){
    var returnRank = echarts.init($("#returnRank")[0]);
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:[]
        },
        toolbox: {
            show : true,
            //orient: 'vertical',
            x: 'right',
            y: 'top',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data:['酒店订单','食品订单','家电订单','日用品订单','其他']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'承办会议（次）',
                type:'bar',
                barWidth:'30',
                data:[927, 785, 652, 521, 157, 20],
                itemStyle: {
                    normal: {
                        color:"#269fec"
                    }
                }

            }
        ]
    };
    returnRank.setOption(option);
}
function salesProportionMyEcharts(){
    var salesProportion = echarts.init($("#salesProportion")[0]);
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['西北区门店','东区门店','北区门店','其他']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'会议类型',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {
                        value:124,
                        name:'西北区门店',
                        itemStyle:{
                            normal:{
                                color:""
                            }
                        }
                    },
                    {
                        value:86,
                        name:'东区门店'
                    },
                    {
                        value:9,
                        name:'北区门店'
                    },
                    {
                        value:39,
                        name:'其他'
                    }

                ]
            }
        ]
    };
    salesProportion.setOption(option);
}
function profitProportionMyEcharts(){
    var profitProportion = echarts.init($("#profitProportion")[0]);
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['西北区门店','东区门店','北区门店','其他']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'会议类型',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {
                        value:124,
                        name:'西北区门店',
                        itemStyle:{
                            normal:{
                                color:""
                            }
                        }
                    },
                    {
                        value:86,
                        name:'东区门店'
                    },
                    {
                        value:9,
                        name:'北区门店'
                    },
                    {
                        value:39,
                        name:'其他'
                    }

                ]
            }
        ]
    };
    profitProportion.setOption(option);
}


$(function(){
    var myChart = echarts.init($("#container2")[0]);
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            }
        ]
    };
    myChart.setOption(option);
});

