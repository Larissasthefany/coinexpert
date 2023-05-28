const ctx = document.getElementsByClassName('line-chart')

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            labels: 'Taxa de clique - 2023',
            data: [5, 6, 10, 14, 6, 12, 23, 10, 15, 18, 19],
            borderWidth: 6,
            borderColor: 'rgba(77, 166, 253, 0.085)',
            backgroundColor: 'transparent',

            options: {
                title: {
                    display: true,
                    fontSize: 20,
                    text: "Relatório anual"
                },
                labels: {
                    fontStle: "bold"
                }
            }


        }
        ]

    }

})
