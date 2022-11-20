import { ButtonButton } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.accent};
`;

export default { ButtonButton };

//const styledForm = { StyledButton };
/* export const Formcontactlabel = styled.label`
  display: inline-block;
  margin-left: 20px;
  font-size: 20px;
  font-family: sans-serif;
  cursor: pointer;
  color: black;
`; */
