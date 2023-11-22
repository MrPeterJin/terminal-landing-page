import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Assistant: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "assistant") {
    window.open("https://assistant.peterkam.top/", "_blank");
  }

  return <span></span>;
};

export default Assistant;
