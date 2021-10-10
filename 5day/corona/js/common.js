const ctx = document.getElementById('myChart');
const cities = [];
const dataArray = [];
$.ajax({
  url: 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?ServiceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D&startCreateDt=20211009&endCreateDt=20211009&_type=json',
  success: function (data) {
    console.log(data.response.body.items.item)
    const items =  data.response.body.items.item
    items.forEach(v => {
      cities.push(v.gubun);
      dataArray.push(v.incDec);
    });
    // chat.js
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: cities,
        datasets: [{
          label: '코로나 발생 현황',
          data: dataArray,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    // chat.js 끝
  }
})
