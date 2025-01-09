import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Search: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "search") {
    window.open("https://search.peterkam.top/", "_blank");
  }

  return <span></span>;
};

export default Search;
