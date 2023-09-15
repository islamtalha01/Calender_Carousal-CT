
export const formattedDuration = (value: number) => {
  const hours: number = Math.floor(value / 60);
  const min: number = value % 60;
  const formatedHours = hours.toString().padStart(1, "0");
  const formatedMin = min.toString().padStart(2, "0");

  return `${formatedHours}:${formatedMin}`;
};

type Duration=
{
  span:number,unit:string,
}
export const getMeanDuration=(minDuration:Duration,maxDuration:Duration):number=>
{
   let meanDuration=0;
  if(minDuration.unit==="Mins")
  {
    meanDuration=Math.floor((minDuration.span + maxDuration.span) / 2);
  }
  else if(minDuration.unit==="Hrs")
  {
   
    meanDuration = ((minDuration.span + maxDuration.span)*60) / 2;
  }
  else if(minDuration.unit==="Days"){
    meanDuration = ((minDuration.span + maxDuration.span) *60*24 )/ 2;
  }

  return meanDuration
}