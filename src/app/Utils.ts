import { UrlWithParsedQuery, parse } from "url";

export class Utils {
  //   1
  /* istanbul ignore next */
  public static toUpperCase(arg: string): string {
    return arg.toUpperCase();
  }
  //   2
  public static parseUrl(url: string): UrlWithParsedQuery {
    if (!url) throw new Error("Empty url!");
    return parse(url, true);
  }
}
