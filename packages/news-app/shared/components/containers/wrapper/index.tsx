import { styled } from "../../../../stitches.config";

export const Wrapper = styled('div', {
  px: "$8",

  "@desktop": {
    px: "0",
    width: "1136px",
    margin: "0 auto"
  },

});

(children: any) => {
  <Wrapper>
    {children}
  </Wrapper>
}