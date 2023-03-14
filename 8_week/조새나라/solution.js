function solution(n, arr1, arr2) {
    let result = [...Array(n)].reduce((acc,ele,idx)=>{
        /*
         지도 1,2의 현재 순번의 값을 비트연산 |(or)을 통해 계산한다. 
         이후 값을 2진수로 변환 후 최종적으로 Lpad로 한 변의 크기만큼 0을 채운다.
         그리고 1과 0을 #으로 치환하여 지도를 완성시킨다.
         */
        
        let combineNumMap = (arr1[idx]|arr2[idx]).toString(2).padStart(n, 0);
        acc.push(combineNumMap.toString().replace(/1/g,'#').replace(/0/g,' '));
        return acc;
    },[]);
    return result;
}
