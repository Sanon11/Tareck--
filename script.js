```javascript
const ctx = document.getElementById('barChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janvye', 'Fevriye', 'Mas'],
        datasets: [{
            label: 'Pwofi ($)',
            data: [100, 150, 200],
            backgroundColor: ['black']
        }]
    },
    options: {
        responsive: true,
        plugins: {
legend:  display: false ,
            tooltip: 
                callbacks: 
                    label: function(context) 
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const val = context.raw;
                        const percent = ((val / total) * 100).toFixed(1);
                        return `{val} USD (${percent}%)`;
                    }
                }
            }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});
```