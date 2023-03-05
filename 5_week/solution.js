function solution(numbers, hand) {
    //2,5,8,0 가까운 손 찾기 펑션
    const findHand = (leftHand, rightHand, number) =>{
        const XY = {
            1:[0,0],2:[0,1],3:[0,2],
            4:[1,0],5:[1,1],6:[1,2],
            7:[2,0],8:[2,1],9:[2,2],
            "*":[3,0],0:[3,1],"#":[3,2]
        }
        
        let leftDist = Math.abs(XY[number][0]-XY[leftHand][0]) + Math.abs(XY[number][1]-XY[leftHand][1]);
        let rightDist = Math.abs(XY[number][0]-XY[rightHand][0]) + Math.abs(XY[number][1]-XY[rightHand][1]);
        return leftDist === rightDist? hand.substr(0,1).toUpperCase() : (leftDist > rightDist? 'R':'L');
    };
    
    //손 위치 계산
    let handCalc = numbers.reduce((acc,ele,idx)=>{
        let nowHand = acc.handNumObj[ele]? acc.handNumObj[ele] : findHand(acc.L, acc.R, ele);
        acc[nowHand] = ele;
        acc.handString += nowHand;
        
        return acc;
    },{
        handNumObj : {
            1:'L', 4:'L', 7:'L',
            3:'R', 6:'R', 9:'R',
            2:'',  5:'',  8:'',  0:''
        },
        L : '*',
        R : '#',
        handString : ''
    });
    return handCalc.handString;
}
