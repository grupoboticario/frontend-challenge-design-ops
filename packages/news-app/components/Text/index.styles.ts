const defaultProps = {
  fontFamily: "Source Sans Pro",
  fontStyle: "normal",
  letterSpacing: "0.08em",
};

const TitleMobile = {
  ...defaultProps,
  fontWeight: "bold",
  fontSize: "36px",
  lineHeight: "45px",
};

const SubtitleMobile = {
  ...defaultProps,
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "30px",
};

const Text = {
  ...defaultProps,
  fontWeight: "normal",
  fontSize: "16px",
  lineHeight: "24px",
};

const TextButton = {
  ...defaultProps,
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
};

const TitleDesktop = {
  ...defaultProps,
  fontWeight: "bold",
  fontSize: "48px",
  lineHeight: "60px",
};

const SubtitleDesktop = {
  ...defaultProps,
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "50px",
};

const ArticleTitleDesktop = {
  ...defaultProps,
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "30px",
};

const HeadlineDesktop = {
  ...defaultProps,
  fontWeight: 600,
  fontSize: "36px",
  lineHeight: "45px",
};

const HeadlineMobile = {
  ...defaultProps,
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "30px",
};

const ArticleTitleMobile = {
  ...defaultProps,
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "23px",
};

const TextMenu = {
  ...defaultProps,
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
};

export const textStyles = {
  TitleMobile,
  SubtitleMobile,
  Text,
  TextButton,
  TitleDesktop,
  SubtitleDesktop,
  ArticleTitleDesktop,
  HeadlineDesktop,
  HeadlineMobile,
  ArticleTitleMobile,
  TextMenu,
};
