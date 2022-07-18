function maxProfitWithKTransactions(prices, k) {
  // Write your code here.
   var n=prices.length;
   var profit = Array(k+1).fill(0).map(x => Array(n+1).fill(0));
 
    for (j = 0; j <= n; j++)
        profit[0][j] = 0; 
    
    for (var i = 0; i <= k; i++)
        profit[i][0] = 0;
 
    for (var i = 1; i <= k; i++)
    {
        var diff = -Number.MAX_VALUE;
        for (var j = 1; j < n; j++)
        {
            diff = Math.max( diff, (profit[i-1][j-1]-price[j-1]) );
            profit[i][j] = Math.max(profit[i][j-1], (price[j]+diff) );
        }
    }
 
    return profit[k][n - 1];
   
	
}

// Do not edit the line below.
exports.maxProfitWithKTransactions = maxProfitWithKTransactions;