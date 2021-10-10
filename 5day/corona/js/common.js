const ctx = document.getElementById('myChart');
const cities = [];
const dataArray = [];

function makeCoronaChart(pDate) {


$.ajax({
  url: `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?ServiceKey=SaqPNX%2Fub%2FFdA3w2TFEoYdecDbMxS0Ex%2B2JhBJhJcD6tJYd13CFIMtwvtiwIwpCMoTiEyULLsp1QEs286MoGsA%3D%3D&startCreateDt=${pDate}&endCreateDt=${pDate}&_type=json`,
  success: function (data) {
    console.log(data)
    const items = data.response.body.items.item
    $('.corona').append(`<ul class="list"></ul>`)
    items.forEach(v => {
      cities.push(v.gubun);
      dataArray.push(v.incDec);
      /* $('.corona .list').append(`
      <li>
      <div class="title">${v.gubun}</div>
      <div class="title">${v.incDec}</div>
      </li>
      `) */
    });
    // chat.js
    const myChart = new Chart(ctx, {
      type: 'bar',
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
}

// 달력
const dayArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const korDayArray = ['일', '월', '화', '수', '목', '금', '토']
const monthArray = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 윤년
const nonLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const now = new Date()
const startDay = new Date(now.getFullYear(), now.getMonth(), 1) // 첫날
const startYear = startDay.getFullYear()
const startMonth = now.getMonth()

function makeCal(year, month) {

}

let selectedYear = startDay.getFullYear()
if(selectedYear%4 === 0) {
  if(selectedYear%100 === 0) {
    if(selectedYear%400 === 0) { // 윤년
      selectedYear = leapYear
    }
    else { // 윤년 아님
      selectedYear = nonLeapYear
    }
  }
  else { // 윤년
    selectedYear = leapYear
  }
}
else { // 윤년 아님
  selectedYear = nonLeapYear
}

dayArray.forEach(v => {
  $('#datePicker .days .list').append(`<li class=""><span>${v}</span></li>`)
})

let count = 1
for (let i=0; i<42; i++) {
  if(i<startDay.getDay()) { // 공백 넣기
    $('#datePicker .dates .list').append(`<li class="blank"><span></span></li>`)
  }
  else { // 숫자 넣기
    $('#datePicker .dates .list').append(`<li class=""><span>${count}</span></li>`)
    count++;
  }
  if(count > selectedYear[startMonth]) {
    break
  }
}

function addZero(pNum) {
  if(pNum < 10) {
    return '0' + pNum
  }
  else {
    '' + pNum
  }
}
makeCoronaChart(now.getFullYear() + addZero(now.getMonth()) + addZero(now.getDate() - 1))

$('#datePicker')