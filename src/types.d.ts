type Problem = {
  "contestId": number,
  "index": string,
  "name": string,
  "type": string,
  "rating": number,
  "points"?: number | undefined,
  "tags": string[]
}



type SubmissionType = {
  "id": number,
  "contestId": number,
  "creationTimeSeconds": number,
  "relativeTimeSeconds": number,
  "problem": Problem,
  "author": {
    "contestId": number,
    "members": { handle: string }[],
    "participantType": string,
    "ghost": boolean,
    "room"?: number,
    "startTimeSeconds": number
  },
  "programmingLanguage": string,
  "verdict": string,
  "testset": string,
  "passedTestCount": number,
  "timeConsumedMillis": number,
  "memoryConsumedBytes": number
}

interface QuestionMapWrapperType extends Problem {
  solved: boolean;
  incorrectSubmissions: number
}

// adding two extra properties to the SubmissionType for ease of use while calculating things with HashMap
type QuestionMapType = Record<string, QuestionMapWrapperType>;

export {QuestionMapWrapperType, QuestionMapType, SubmissionType, Problem}