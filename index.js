import _ from 'lodash';
export default function solution(content){
// BEGIN
// step 1
const rows = content.split('\r\n');
const data = rows.slice(1, rows.length-1)
console.log(`Count: ${data.length}`)
// step 2 
const cities = data.map((row)=>row.split(',')[7])
const uniques = [];
for (let city of cities) {
  if(!uniques.includes(city)) {
    uniques.push(city)
  }
}
console.log(`Cities: ${uniques.sort().join(', ')}`)
// step 3 
const humidities = data.map(row=>row.split(',')[3])
const minHumidity = humidities.reduce((acc, elem)=>{
  if (elem<acc){
   return elem
  } else return acc
})
const maxHumidity = humidities.reduce((acc, elem)=>{
  if (elem>acc){
   return elem
  } else return acc
})
console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`)
// step 4 
const hottestTemp = _.max(data, (row) => parseFloat(row.split(',')[1]))
console.log(`HottestDay: ${hottestTemp.split(',')[0]} ${hottestTemp.split(',')[7]}`)
// step 5 
const obj = _.groupBy(data, (row) => row.split(',')[7])
const res = _.map(obj, (rows, city) => {
  const meanTemp = _.mean(rows.map((el) => Number(el.split(',')[1])))
  return [meanTemp, city]
})
const hottestCity = _.maxBy(res, (row) => row[0])
console.log(`HottestCity: ${hottestCity[1]}`)
// END
}
