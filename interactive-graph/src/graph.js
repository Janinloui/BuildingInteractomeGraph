function createGraph(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'My Dataset',
                data: data.values,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return myChart;
}

function updateGraph(myChart, newData) {
    myChart.data.labels = newData.labels;
    myChart.data.datasets[0].data = newData.values;
    myChart.update();
}

export { createGraph, updateGraph };