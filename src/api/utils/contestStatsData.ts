export const getBestAndWorstRank = (contestData: any) => {
    let bestRank: number = Number.MAX_VALUE;
    let worstRank: number = -Number.MAX_VALUE;
    let bestChangeInRating: number = -Number.MAX_VALUE;
    let worstChangeInRating: number = Number.MAX_VALUE;
    const currentRating: number = contestData.result[contestData.result.length-1].newRating;
    for(let i = 0; i < contestData.result.length; i++) {
        bestChangeInRating = Math.max(contestData.result[i].newRating - contestData.result[i].oldRating, bestChangeInRating);
        worstChangeInRating = Math.min(contestData.result[i].newRating - contestData.result[i].oldRating, worstChangeInRating);
        bestRank = Math.min(contestData.result[i].rank, bestRank);
        worstRank = Math.max(contestData.result[i].rank, worstRank);
    }
    return {bestRank, worstRank, currentRating, bestChangeInRating, worstChangeInRating};
}

