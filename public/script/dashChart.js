// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


let drawChart = function(labels, data, total) {
    // Area Chart Example
  var ctx = document.getElementById("influxChart");
  var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: labels,
      datasets: [{
      label: "Items received",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data,
      }],
  },
  options: {
      scales: {
      xAxes: [{
          time: {
          unit: 'date'
          },
          gridLines: {
          display: false
          },
          ticks: {
          maxTicksLimit: 7
          }
      }],
      yAxes: [{
          ticks: {
          min: 0,
          max: total+30,
          maxTicksLimit: 5
          },
          gridLines: {
          color: "rgba(0, 0, 0, .125)",
          }
      }],
      },
      legend: {
      display: false
      }
    }
  });
}

$.getJSON( "/product/chart", function( data ) {
    let labels = [];
    let results = [];
    let total = 0;
    $.each( data, function( key, val ) {
      labels.push( val._id );
      results.push(val.totalInflux);
      total = total + val.totalInflux;
    });
   
    drawChart(labels, results, total)
});


