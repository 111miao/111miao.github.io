var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    tooltip: {
        trigger: 'item'
    },
    color:['#CDAA7D', '#D2B48C', '#FFFACD', '#FFF8DC', '#FFFAF0'],
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: '占比',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 17, name: '伊利' },
                { value: 16, name: '和路雪' },
                { value: 10, name: '蒙牛' },
                { value: 8, name: '雀巢' },
                { value: 6, name: '美登·高' }


            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);