import { useRecoilValue } from "recoil";
import { VictoryPie } from "victory";
import { userSubmissions } from "../../../api/UserInfo";
import { getQuestionsMap } from "../../../api/utils/getQuestionMap";

export const QuestionsRatingChart = () => {
  const submissions = useRecoilValue(userSubmissions);
  const correctSubmissionsMap: Map<string, number> =
    getQuestionsMap(submissions).taggedCorrectSubmissionsNumbers;
  const dataObject = [
    { x: "A1", y: correctSubmissionsMap.get("A1") },
    { x: "A", y: correctSubmissionsMap.get("A") },
    { x: "B", y: correctSubmissionsMap.get("B") },
    { x: "C", y: correctSubmissionsMap.get("C") },
    { x: "D", y: correctSubmissionsMap.get("D") },
    { x: "E", y: correctSubmissionsMap.get("E") },
    // @ts-ignore
  ];
  console.log(dataObject);
  console.log([
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 },
  ]);
  // const wrongSubmissionsMap: Map<String, String> =
  //   getQuestionsMap(submissions).wrongSubmissionsMap;

  return (
    <>
      <div style={{ height: "40vh" }}>
        <VictoryPie
          animate={{ easing: "exp" }}
          innerRadius={100}
          labelRadius={120}
          colorScale={[
            "#F94144",
            "#F3722C",
            "#F8961E",
            "#F9C74F",
            "#90BE6D",
            "#43AA8B",
            "#577590",
          ]}
          data={dataObject}
        ></VictoryPie>
      </div>
    </>
  );
};
