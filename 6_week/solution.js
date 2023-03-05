function solution(board, moves) {
    let flushCount = 0;
    let boardSize = board.length;
    
    let basket = moves.reduce((acc,ele,idx)=>{
        for(let i=0; i<boardSize; i++){
            if(board[i][ele-1]) {
                /* 
                  pop으로 가장 최근의 인형을 꺼낸 후 현재 넣을 인형과 비교
                  비교해서 같지 않으면 둘 다 다시 집어넣기
                  동일하면 집어넣지 않고 flushCount만 증감하여 flush 처리.
                */ 
                let preItem = acc.pop();
                if(preItem !== board[i][ele-1]) { 
                    acc.push(preItem);
                    acc.push(board[i][ele-1]);
                }else{
                    flushCount++;
                }
                board[i][ele-1] = 0;
                break;
            }
            else {
                continue;   
            }
            
        }
        return acc;
    },[]);
    
    return flushCount*2; //1회의 flush당 인형 2개 이므로 *2
}
