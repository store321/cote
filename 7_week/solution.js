function solution(N, stages) {
    /* 
      모든 스테이지를 key로 한 base 객체 생성.
      {스테이지 : [클리어 못한 유저 : 도달한 유저]}
      위의 형태의 base를 만든 후 사용
    */ 
    let baseObject = [...Array(N)].reduce((acc,ele,idx)=>{
        acc[idx+1] = [0,0];
        return acc;
    },{});

    /*
      스테이지별 실패율 계산
      {스테이지번호 : [실패한 유저, 도달한 유저]}
      위의 형태로 구성.
    */
    let calcStage = stages.reduce((acc,ele)=>{
        // 각 스테이지 별로 실패한 유저 집계
        if(ele!==N+1) acc[ele][0] = acc[ele][0]+1;
        
        // 각 스테이지 별로 도달한 유저 집계
        for(let i=1; i<=ele; i++){
            if(i===N+1) continue; //전체 클리어는 집계에서 제외.
            acc[i][1] = acc[i][1]+1;
        }

        return acc;
    },baseObject);
    
    // 계산된 스테이지별 실패율을 가지고 실패율이 높은 순으로 스테이지 정렬.
    let sortedStage = Object.entries(calcStage).sort((a,b)=>{
        if(b[1][0]/b[1][1] === a[1][0]/a[1][1]){ // 실패율이 같은 경우는 작은 번호가 앞으로.
            return a[0]-b[0];
        }else{ // 그외는 실패율이 높은 순
            return b[1][0]/b[1][1]-a[1][0]/a[1][1];
        }
    });
    return sortedStage.map(ele=>ele[0]*1);
}
