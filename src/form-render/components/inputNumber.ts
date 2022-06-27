import { assignUpdateValue } from "../utils";
import { connect, mapProps } from "@formily/vue";
import { NInputNumber } from "naive-ui";

export const INPUT_NUMBER = connect(NInputNumber, mapProps(assignUpdateValue));
