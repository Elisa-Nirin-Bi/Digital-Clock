//const date1 = new Date('December 17, 1995 03:24:00');


 function updateTime(){
  const date1 = new Date();
  let minutes= date1.getMinutes();
  const hours= date1.getHours();
  let seconds= date1.getSeconds();
  
  if(seconds >= 0 && seconds <10){
    seconds = `0${+seconds}`; 
  }
    else if(minutes >= 0 && minutes <10){
    minutes =`0${minutes}`}
    let time =`${hours}:${minutes}:${seconds}`;
  const box = document.getElementById('clock');
  box.textContent = time;
  console.log(`${hours}:${minutes}:${seconds}`)
 
 }
  setInterval(updateTime, 1000)
 
  
  