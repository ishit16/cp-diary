import { VictoryPie } from "victory";

export const QuestionsRatingChart = () => {
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
