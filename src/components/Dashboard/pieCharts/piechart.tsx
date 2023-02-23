import { useRecoilValue } from "recoil";
import { VictoryPie, VictoryTooltip } from "victory";
import { userSubmissions } from "../../../api/UserInfo";
import { getQuestionsMap } from "../../../api/utils/getQuestionMap";

export const QuestionsRatingChart = (props: any) => {
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
          data={props.dataObject}
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
