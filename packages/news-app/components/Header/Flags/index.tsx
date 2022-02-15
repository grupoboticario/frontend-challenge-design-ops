import { Box } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Flags = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [flags, setFlags] = useState<string[] | []>([]);

  useEffect(() => {
    setFlags(
      ["br", "pt", "us"].filter(
        (flag) => flag !== resolvedTheme?.replace("Theme", "")
      )
    );
  }, [resolvedTheme]);

  const handleTheme = (flag: string) => {
    setTheme(`${flag}Theme`);
  };

  return (
    <Box sx={{ display: "flex", gap: "24px" }}>
      {flags.map((flag) => {
        return (
          <Box
            key={flag}
            component="img"
            alt={`${flag} flag`}
            src={`/${flag}.png`}
            onClick={() => handleTheme(flag)}
            sx={{ cursor: "pointer" }}
          />
        );
      })}
    </Box>
  );
};

export default Flags;
