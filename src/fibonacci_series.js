'use strict';

function fibonacci_series(n) 
{
    	var newarr=[];// 空数组
	if(n==0)
	{
		newarr.push(0);
	}											
	if(n==1)                     
				
	{
		newarr=[0,1];
	}
	else	
	{
		newarr=[0,1];
		for(var i=2; i < (n+1); i++)
		{
			newarr[i]=(newarr[i-2]+newarr[i-1]);//注意：执行该语句时newarr[i]已经存在了，
								 //不需要再将newarr[i]，push到newarr数组中						                                                需要再push到newarr数组中。若push，则会多输出一个数
		}	
	}
return newarr;
}

sum(10);
}



module.exports = fibonacci_series;
