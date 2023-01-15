import { isArray, isNumber } from "lodash";
import storage from "./storage";

// 解析rpx
export function parseRpx(val: any): string {
	return isArray(val) ? val.map(parseRpx).join(" ") : isNumber(val) ? `${val}rpx` : val;
}

export { storage };
