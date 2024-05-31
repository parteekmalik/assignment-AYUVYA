import React, { useEffect, useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function YN({ onChange }: { onChange: (x: "yes" | "no") => void }) {
  const [value, setvalue] = useState<{
    isSelected: boolean;
    value: "yes" | "no";
  }>({ isSelected: false, value: "yes" });
  useEffect(() => {
    if (value.isSelected) onChange(value.value);
  }, [value]);
  return (
    <div className="flex gap-6">
      <div onClick={() => setvalue({ isSelected: true, value: "no" })}>
        {value.value === "no" && value.isSelected ? (
          <ThumbDownIcon fontSize="large" />
        ) : (
          <ThumbDownOffAltIcon fontSize="large" />
        )}
      </div>
      <div onClick={() => setvalue({ isSelected: true, value: "yes" })}>
        {value.value === "yes" && value.isSelected ? (
          <ThumbUpIcon fontSize="large" />
        ) : (
          <ThumbUpOffAltIcon fontSize="large" />
        )}
      </div>
    </div>
  );
}

export default YN;
