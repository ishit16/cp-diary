import { SubmissionType, QuestionMapType } from "../types";

const getQuestionsMap = (questionList: SubmissionType[]): QuestionMapType => {
    let QuestionMap: QuestionMapType = {};
    questionList.forEach((attempt: SubmissionType, idx: number) => {
        const key = attempt.problem.contestId + "-" + attempt.problem.index;
        if(attempt.verdict === "OK") {
            let value = 0;
            if(QuestionMap[key] && QuestionMap[key].incorrectSubmissions)
            value = QuestionMap[key].incorrectSubmissions;
            QuestionMap[key] = {
                ...attempt.problem,
                solved: true,
                incorrectSubmissions:value,
            };
        } else {
            if(QuestionMap[key] === undefined)
            QuestionMap[key] = {
                ...attempt.problem,
                solved: false,
                incorrectSubmissions: 1
            }; else {
                QuestionMap[key].incorrectSubmissions += 1;
            }
        }
    });
    return QuestionMap;
};

export default getQuestionsMap;