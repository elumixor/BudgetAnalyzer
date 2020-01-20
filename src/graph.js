const ctx = document.getElementById('graph').getContext('2d')
const graph = new Chart(ctx, {
    type: 'line',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        // datasets: [{
        //     label:,
        //     data: [12, 19, 3, 5, 2, 3],
        //     backgroundColor: [
        //         'rgba(255, 99, 132, 0.2)',
        //         'rgba(54, 162, 235, 0.2)',
        //         'rgba(255, 206, 86, 0.2)',
        //         'rgba(75, 192, 192, 0.2)',
        //         'rgba(153, 102, 255, 0.2)',
        //         'rgba(255, 159, 64, 0.2)'
        //     ],
        //     borderColor: [
        //         'rgba(255, 99, 132, 1)',
        //         'rgba(54, 162, 235, 1)',
        //         'rgba(255, 206, 86, 1)',
        //         'rgba(75, 192, 192, 1)',
        //         'rgba(153, 102, 255, 1)',
        //         'rgba(255, 159, 64, 1)'
        //     ],
        //     borderWidth: 1
        // }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Total Money Spent'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                type: 'time',
                time: {
                    unit: 'month'
                },
                stacked: true

            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Spent'
                },
                stacked: true
            }]
        }
    }
})

function updateGraph(datasets) {
    // each dataset represents one displayed category/expense, alongside its name and color
    // dataset should contain an array of points where
    //  x -> date
    //  y -> total money spent

    const firstsLasts = datasets.map(dataset => ({first: dataset.data[0], last: dataset.data[dataset.data.length - 1]}))
    const first = firstsLasts.sort((a, b) => a.first.t < b.first.t ? -1 : 1)[0].first
    const last = firstsLasts.sort((a, b) => a.last.t > b.last.t ? -1 : 1)[0].last

    datasets.forEach(ds => {
        ds.data.unshift({t: first.t, y: 0})
        // console.log(ds.data[ds.data.length - 1])
        ds.data.push({t: last.t, y: ds.data[ds.data.length - 1].y})
    })

    let sumds = []
    const sets = datasets.map(ds => {

    })

    const gdata = graph.data
    gdata.datasets = datasets.map(dataset => {
        return {
            label: dataset.name,
            data: dataset.data,
            backgroundColor: dataset.color,

            steppedLine: 'before',
        }
    })


    graph.update();
}