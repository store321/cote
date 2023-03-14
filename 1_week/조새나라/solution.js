function solution(ingredient){
    let calcBuger = ingredient.reduce((acc,ele)=>{
        /*
          일단 재료를 push하고 버거가 만들어지는 경우면 4회 pop하여 재료를 비운다.    
        */
        
        acc.remain.push(ele);
        
        //버거가 완성되는 경우
        if(acc.remain.slice(-4).join('') === '1231'){
            acc.remain.pop();
            acc.remain.pop();
            acc.remain.pop();
            acc.remain.pop();
            acc.bugerCount++;
        }
        return acc
    },{
        remain:[],
        bugerCount:0
    });
    return calcBuger.bugerCount;
}
