import { useRecoilValue } from "recoil";
import { VictoryPie, VictoryTooltip } from "victory";
import { userSubmissions } from "../../../api/UserInfo";
import { getQuestionsMap } from "../../../api/utils/getQuestionMap";

export const QuestionsRatingChart = () => {
  const submissions = useRecoilValue(userSubmissions);
  const correctSubmissionsMap: Map<string, number> =
    getQuestionsMap(submissions).taggedCorrectSubmissionsNumbers;
  let sumCorrectSubmissions = 0;
  correctSubmissionsMap.forEach((v) => {
    sumCorrectSubmissions += v;
  });
  const dataObject = [
    {
      x: `Type: A1 ${correctSubmissionsMap.get("A1")}/${sumCorrectSubmissions}`,
      y: correctSubmissionsMap.get("A1"),
    },
    {
      x: `Type: A
      ${correctSubmissionsMap.get("A")}/${sumCorrectSubmissions}`,
      y: correctSubmissionsMap.get("A"),
    },
    {
      x: `Type: B 
      ${correctSubmissionsMap.get("B")}/${sumCorrectSubmissions}`,
      y: correctSubmissionsMap.get("B"),
    },
    {
      x: `Type: C 
      ${correctSubmissionsMap.get("C")}/${sumCorrectSubmissions}`,
      y: correctSubmissionsMap.get("C"),
    },
    {
      x: `Type: D
      ${correctSubmissionsMap.get("D")}/${sumCorrectSubmissions}`,
      y: correctSubmissionsMap.get("D"),
    },
    {
      x: `Type: E
      ${correctSubmissionsMap.get("E")}/${sumCorrectSubmissions}`,
      y: correctSubmissionsMap.get("E"),
    },
    // @ts-ignore
  ];

  return (
    <>
      <div style={{ height: "40vh" }}>
        <VictoryPie
          labelComponent={<CustomLabel />}
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

const CustomLabel = (props: any) => {
  return (
    <g>
      <VictoryTooltip
        {...props}
        x={200}
        y={287.5}
        style={{ fontSize: "18px", fontWeight: "bold" }}
        orientation="top"
        pointerLength={0}
        cornerRadius={87.5}
        flyoutWidth={175}
        flyoutHeight={175}
        flyoutStyle={{
          fill: "whitesmoke",
          strokeWidth: "2",
          stroke: "greysmoke",
        }}
      />
    </g>
  );
};

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
