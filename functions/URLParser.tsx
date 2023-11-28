// parse urls by removing spaces (indicated by %20)
const URLParser = (url: string) => {
    const parameter = url.split("%20");
    var parsedParameter: string = "";
    parameter.forEach((e: string) => {
      parsedParameter += e + " ";
    })
    parsedParameter = parsedParameter.slice(0, -1); 
    return parsedParameter;
}

export { URLParser }