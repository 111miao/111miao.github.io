var myChart2=echarts.init(document.getElementById('main'));
var data = {
    area: ['2016', '2017', '2018', '2019','2020','2021'],
    legend: ['冲动消费型冰淇淋主打健康理念的消费额', '家庭装和散装冰淇淋主打健康理念的消费额'],
    data: [
        [798.9, 865, 949.9, 1041.2, 1143.8, 1250.1],
        [43.5, 47.7, 52.8, 58.4, 64.9, 71.8],
    ],
};
var colors = ['#F5DEB3', ' #D2691E',];
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
    },
    color: colors,
    legend: {
        top: 10,
        left: 200,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            fontSize: 14,
            padding: [10, 0, 0, 0, 0, 0],
        },
        data: data.legend,
    },
    backgroundColor: '#FFFFF0',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: data.area
    },
    yAxis: {
        type: 'value',
        axisLine: {
            width: 5,
        },
        splitLine: {
            show: false,
        },
    },
    series: [],
};
for (var i = 0; i < data.legend.length; i++) {
    option.series.push({
        name: data.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: '45%',
        label: {
            show: false,
            position: 'insideRight',
        },
        data: data.data[i],
    });
}

myChart2.setOption(option);
window.onresize=function (){
    myChart2.resize()
}