import { styled } from "../../../stitches.config";

const StyledForm = styled('form', {
  color: "$secondary",
});

export const Form = () => {
  return(
    <StyledForm>
      <label>
        <input type="text" />
      </label>
      <button type="submit">Search</button>
    </StyledForm>
  )
}