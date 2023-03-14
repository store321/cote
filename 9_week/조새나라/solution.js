function solution(today, terms, privacies) {
    //{약관종류 : 유효기간} 형태의 객체로 terms 재생성.
    let termsObj = terms.reduce((acc,ele)=>{
        let splitArr = ele.split(' ');
        acc[splitArr[0]] = splitArr[1]*1;
        return acc;
    },{});
    
    let result = privacies.reduce((acc,ele,idx)=>{
        //Date 객체로 변환하여 약관에 맞게 기한일까지 올린 후 현재 날짜와 비교 후 배열에 담기.
        let splitArr = ele.split(' ');
        let toDayDateObj = new Date(today);
        let privacyDateObj = new Date(splitArr[0]);
        
        privacyDateObj.setMonth(privacyDateObj.getMonth()+termsObj[splitArr[1]]);
       
        if(toDayDateObj >= privacyDateObj) acc.push(idx+1);
        return acc;
    },[]);
    return result;
}
