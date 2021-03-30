function prime(number)
{
    if(number==1)
        return 0;
    else if(number>=2)
    {
        for(i=2;i<number;i++)
        {
            if(number%i==0)
                return 0;
        }
        return 1;
    }

}
a=1,b=100,primecount=0;
for(j=a;j<=b;j++)
{
    if(prime(j)==1)
        primecount++;
}
console.log("countPrime(%d, %d) =>%d ",a,b,primecount);
