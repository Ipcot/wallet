import { StatisticsSelectForm } from "./StatisticsSelectForm.styled";
import { StatisticsSelectStyle } from "./StatisticsSelectStyle.styled";
const StatisticsSelect = ({ operation }) => {
  const name = operation.map((element) => element.name);
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <StatisticsSelectForm>
      <StatisticsSelectStyle onChange={handleChange}>
        {name.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </StatisticsSelectStyle>
      <StatisticsSelectStyle onChange={handleChange}>
        {name.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </StatisticsSelectStyle>
    </StatisticsSelectForm>
  );
};

export default StatisticsSelect;
