```javascript
const ctx = document.getElementById('barChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Janvye', 'Fevriye', 'Mas', 'Avril'],
    datasets: [{
      labels: 'Pwofi ()',
      data: [120, 190, 300, 250],
      backgroundColor: ['blue', 'green', 'yellow', 'orange'],
      borderColor: 'black',
      borderWidth: 1
    ]
  ,
  options: 
    responsive: true,
    plugins: 
      legend: 
        labels: 
          color: 'black'
        ,
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
      y: {
        beginAtZero: true,
        ticks: {
          color: 'black'
        }
      },
      x: {
        ticks: {
          color: 'black'
        }
      }
    }
  }
});
```
