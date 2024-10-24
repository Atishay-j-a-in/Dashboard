const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['',"November 2023", "December 2023",
      "January 2024", "February 2024", "March 2024", "April 2024", "May 2024", "June 2024", 
      "July 2024", "August 2024", "September 2024", "October 2024", 
  ],
    datasets: [
      {
        label: 'Binance Coin',
        data: [595.94*Math.random(),595.94*Math.random(),595.94*Math.random(),595.94*Math.random(),595.94*Math.random(),595.94*Math.random(),595.94*Math.random(),595.94*Math.random(),595.94*Math.random(),595.94*Math.random(),595.94*Math.random(),595.94*Math.random(),595.94*Math.random()],
        borderColor: 'rgba(255, 159, 64, 1)',  // Binance Coin color
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderWidth: 2,
        tension: 0.4
      },

      {
        label: 'Solana',
        data: [389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),389.5*Math.random(),],
        borderColor: 'rgba(153, 102, 255, 1)',  // Solana color
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: 'Polkadot',
        data: [133.3*Math.random(),133.3*Math.random(),133.3*Math.random(),133.3*Math.random(),133.3*Math.random(),133.3*Math.random(),133.3*Math.random(),133.3*Math.random(),133.3*Math.random(),133.3*Math.random(),133.3*Math.random(),133.3*Math.random(),133.3*Math.random()],
        borderColor: 'rgba(153, 255, 51, 1)',  // Polkadot color
        backgroundColor: 'rgba(153, 255, 51, 0.2)',
        borderWidth: 2,
        tension: 0.4
      },

      {
        label: 'Litecoin',
        data: [98.5*Math.random(),98.5*Math.random(),98.5*Math.random(),98.5*Math.random(),98.5*Math.random(),98.5*Math.random(),98.5*Math.random(),98.5*Math.random(),98.5*Math.random(),98.5*Math.random(),98.5*Math.random(),98.5*Math.random(),98.5*Math.random()],
        borderColor: 'rgba(255, 165, 0, 1)',  // Litecoin color
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: 'Chainlink',
        data: [88.45*Math.random(),88.45*Math.random(),88.45*Math.random(),88.45*Math.random(),88.45*Math.random(),88.45*Math.random(),88.45*Math.random(),88.45*Math.random(),88.45*Math.random(),88.45*Math.random(),88.45*Math.random(),88.45*Math.random(),88.45*Math.random()],
        borderColor: 'rgba(0, 123, 255, 1)',  // Chainlink color
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderWidth: 2,
        tension: 0.4
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const pi=document.getElementById("pie");
new Chart(pi, {
    type: 'doughnut',
    data: {
      labels: ['Binance Coin', 'Solana', 'Polkadot', 'Litecoin', 'Chainlink'],
      datasets: [{
        label: 'value',
        data: [120345, 98567, 150234, 141876, 261020],
        backgroundColor: ['#F39C12', '#D35400', '#8E44AD', '#3498DB', '#1ABC9C'],
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'left',
          labels: {
            usePointStyle: true, 
            font:{
              size:18
            }
          }
        },
        
      },
      elements: {
        arc: {
          borderWidth: 2, 
          radius:10
        }
      },
      cutout: '40%',
      aspectRatio: 1, 
    }
  });
const bar=document.getElementById("bar");
new Chart(bar, {
  type: 'bar',
  data: {
    labels: ['Binance Coin', 'Solana', 'Polkadot', 'Litecoin', 'Chainlink'],
    datasets: [{
      label: 'Profit',
      data: [-120,194.5 , 66.7,13.4 ,37.1 ]
      ,
      borderWidth: 1
    }]
  },
  options: {
    
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size:20
          }
        }
      }
    }
  }
});
