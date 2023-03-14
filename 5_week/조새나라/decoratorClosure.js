/* 
  기본 아메리카노는 4천원
  우유 추가 메뉴는 300원 추가
  샷 추가는 500원 추가일때
*/

let americano = (()=>{
  return{
    cost: 4000
  }
})();

let cafeLatte = ((beverage)=>{
  let thisBeverage = beverage;
  return{
    cost : thisBeverage.cost + 300
  }
})(americano);

let cafeLatteTwoShot = ((beverage)=>{
  let thisBeverage = beverage;
  return{
    cost: thisBeverage.cost + 500
  }
})(milk);
