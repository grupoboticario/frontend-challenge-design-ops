import { styled } from "../../../stitches.config";

const StyledMenuLocation = styled('menu', {
  color: "$secondary",
});

export const MenuLocation = () => {
  return(
    <StyledMenuLocation>
      <ul>
        <li>
          <button>PT-BR</button>
          <button>ENG</button>
        </li>
      </ul>
      
    </StyledMenuLocation>
  )
  
}