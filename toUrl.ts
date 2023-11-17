function toUrl(...args: Array<string>): string {
  return args.join("/").replace("//", "/");
}

export default toUrl;
