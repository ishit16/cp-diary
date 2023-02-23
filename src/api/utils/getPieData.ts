export const getPieData = (submissionsMap: Map<string, number>, totalSubmissions:number) => {
    const dataObject: any = [];
    for(let [key, value] of submissionsMap.entries()) {
        dataObject.push({
            x: key,
            y: value,
            label: `Type:${key}
            ${value}/${totalSubmissions} = ${Math.ceil((value * 100) / totalSubmissions)}%`
        })
    }
    return dataObject;
}