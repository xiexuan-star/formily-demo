import { connect, mapProps } from "@formily/vue";
import { NInputGroup } from "naive-ui";

export const INPUT_GROUP = connect(
  NInputGroup,
  mapProps(props => {
    return { style: { "--column": props.span || 3 }, class: "formily-render__inputGroup" };
  })
);
