/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length==0) return 0;
    let buy=prices[0];
    let profit=0;

    for (let i=0;i<prices.length;i++){
        if (prices[i]<buy){
            buy=prices[i]
        } else {
            profit=Math.max(profit,prices[i]-buy);
        }
    }
    return profit;
};