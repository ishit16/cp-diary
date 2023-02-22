import { useRecoilValue } from "recoil";
import { VictoryPie } from "victory";
import { userSubmissions } from "../../../api/UserInfo";
import { getQuestionsMap } from "../../../api/utils/getQuestionMap";

export const QuestionsRatingChart = () => {
  const submissions = useRecoilValue(userSubmissions);
  // const correctSubmissionsMap: Map<String, String> =
  //   getQuestionsMap(submissions).acSubmissionsMap;
  // const wrongSubmissionsMap: Map<String, String> =
  //   getQuestionsMap(submissions).wrongSubmissionsMap;

  return (
    <>
      <div style={{ height: "20vh" }}>
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
        ></VictoryPie>
      </div>
    </>
  );
};
