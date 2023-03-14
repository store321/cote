function solution(survey, choices) {
    let surveyAggregation = survey.reduce((acc,ele,idx)=>{
        let code = ele.split('');
        if(choices[idx]-4 > 0){ // 동의
            acc[code[1]] = acc[code[1]] + (choices[idx]-4);
        }else{ // 모르겠음 및 비동의
            acc[code[0]] = acc[code[0]] + (Math.abs(choices[idx]-4));
        }
        return acc;
    },{
        A : 0,
        C : 0,
        F : 0,
        J : 0,
        M : 0,
        N : 0,
        R : 0,
        T : 0
    });

    let result = [
        surveyAggregation['R'] >= surveyAggregation['T'] ? 'R' : 'T',
        surveyAggregation['C'] >= surveyAggregation['F'] ? 'C' : 'F',
        surveyAggregation['J'] >= surveyAggregation['M'] ? 'J' : 'M',
        surveyAggregation['A'] >= surveyAggregation['N'] ? 'A' : 'N',
    ]

    return result.join('');
}
