import { useRecoilValue } from "recoil";
import { userSubmissions } from "../UserInfo";

export const getQuestionsMap = (submissions: any) => {
    let acSubmissionsMap = new Map<string, string>;
    let wrongSubmissionsMap = new Map<string, string>;
    let taggedCorrectSubmissionsNumbers = new Map<string, number>;
    let taggedWrongSubmissionNumbers = new Map<string, number>;
    // console.log(submissions.result[0]);
    for(let i = 0; i < submissions.result.length; i++){
        if(acSubmissionsMap.get(submissions.result[i].id) || wrongSubmissionsMap.get(submissions.result[i].id)) continue;
        else {
            if(submissions.result[i].verdict === "OK") {
                // @ts-ignore
                acSubmissionsMap.set(submissions.result[i].id, submissions.result[i].problem.index);
            } else {
                wrongSubmissionsMap.set(submissions.result[i].id, submissions.result[i].problem.index)
            }
        }
    }
    for(let [key, value] of acSubmissionsMap.entries()) {
            // @ts-ignore
            taggedCorrectSubmissionsNumbers.set(value, taggedCorrectSubmissionsNumbers.get(value) == undefined ? 1 : taggedCorrectSubmissionsNumbers.get(value)+1);
    }
    for(let [key, value] of wrongSubmissionsMap.entries()) {
        // @ts-ignore
            taggedWrongSubmissionNumbers.set(value, taggedWrongSubmissionNumbers.get(value) == undefined ? 1 : taggedWrongSubmissionNumbers.get(value)+1);
    }
    return{taggedCorrectSubmissionsNumbers, taggedWrongSubmissionNumbers};
}