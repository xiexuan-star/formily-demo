import { FIELD_SEX_VALUE } from "../constants";
import { GeneralField, isField } from "@formily/core";
import { differenceInDays, differenceInMonths } from "date-fns";
import { inject, InjectionKey, provide } from "vue";
import { IdCardParseInfo } from "../types";

export function formRenderLog(message: string, type: keyof Console = "log") {
  console[type as "log"](`[FormRender]: ${message}`);
}

export function arrayed<T>(maybeArray: T): T extends Array<any> ? T : [T] {
  if (Array.isArray(maybeArray)) return maybeArray as any;
  return [maybeArray] as any;
}

export function assignUpdateValue(props: any, field: GeneralField) {
  const _props = { ...props };
  if (isField(field)) {
    Object.assign(_props, {
      "onUpdate:value"(value: any) {
        field.setValue(value);
      },
    });
  }
  return _props;
}

export function transformDateFormat(format: string) {
  return format.includes("HH") ? "datetime" : "date";
}

export function isIdCard(idCardNo: string) {
  return /^\d{6}(((19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}(\d|x|X))|(\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}))$/.test(
    idCardNo
  );
}

export function parseIdCard(idCardNo: string) {
  const parseInner = (certificateNo: any, idxSexStart: number, birthYearSpan: number) => {
    const res: Partial<IdCardParseInfo> = {};
    const idxSex = 1 - (certificateNo.substr(idxSexStart, 1) % 2);
    res.sex = idxSex === 1 ? FIELD_SEX_VALUE.FEMALE : FIELD_SEX_VALUE.MALE;

    const year = (birthYearSpan == 2 ? "19" : "") + certificateNo.substr(6, birthYearSpan);
    const month = certificateNo.substr(6 + birthYearSpan, 2);
    const day = certificateNo.substr(8 + birthYearSpan, 2);
    res.birthday = year + "-" + month + "-" + day;

    const d = new Date();
    const monthFloor =
      d.getMonth() + 1 < parseInt(month, 10) ||
      (d.getMonth() + 1 == parseInt(month, 10) && d.getDate() < parseInt(day, 10))
        ? 1
        : 0;
    res.age = res.year = d.getFullYear() - parseInt(year, 10) - monthFloor;
    res.day = differenceInDays(d, new Date(res.birthday));
    res.month = differenceInMonths(d, new Date(res.birthday));
    return <IdCardParseInfo>res;
  };
  return parseInner(idCardNo, idCardNo.length == 15 ? 14 : 16, idCardNo.length == 15 ? 2 : 4);
}

export function injectOrProvide<T>(key: InjectionKey<T>, creator: () => T) {
  let injected = inject(key, null);
  if (!injected) {
    injected = creator();
    provide(key, injected);
  }
  return injected;
}
