export function log(toLog: any) {
  let asString =
    typeof toLog === "function"
      ? toLog.toString()
      : JSON.stringify(toLog, null, 2);
  console.log(asString);
}
