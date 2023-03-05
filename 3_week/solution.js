function solution(id_list, report, k) {
    
    //신고자 객체 reporterObj 생성
    let reporterObj = id_list.reduce((acc,ele)=>{
        acc[ele] = 0;
        return acc;
    },{});
    
    //신고 내역을 계산한 신고 객체 reportObj 생성
    let reportObj = [report.reduce((acc,ele)=>{
        let reportArray = ele.split(' '); // 현재 엘리먼트를 [신고자,피신고자] 형태의 배열로 재생성
        
        //Set으로 신고자의 피신고자 중복 신고 불가 처리
        if(!acc[reportArray[1]]) acc[reportArray[1]] = new Set(); 
        acc[reportArray[1]].add(reportArray[0]); 
        
        return acc;
    },{});

    
    //신고 객체를 확인해서 신고자별 메일 통지 횟수 산정  
    Object.values(reportObj).forEach(ele=>{
       if(ele.size >= k){
           for (let reporter of ele) reporterObj[reporter]++;
       } 
    });
    
    //만든 해쉬맵을 value만 return
    return Object.values(reporterObj);
}
