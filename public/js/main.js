const cityName =document.getElementById('cityName')
const city_name =document.getElementById('city_name')
const submitBtn=document.getElementById('submitBtn');
const temp=document.getElementById('main-temp');
const datahide=document.querySelector('.middle_layer')
const temp_status=document.getElementById('temp_status');

//for geting day
const dayData=document.getElementById('day')
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const d = new Date();
        let day = days[d.getDay()];
        dayData.innerText=day;
///for geting month
const todaydate=document.querySelector('#today_data')
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[d.getMonth()];
let date=d.getDate();
todaydate.innerText=`${date} - ${month}`;


const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText="Oops please enter city name";
        datahide.classList.add('data_hide');
    }
    else{
        try {
                  let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b0f3a9bae041a0de252745a4eeeda53d`
                  const response=await fetch(url);
                  const data= await response.json();
                  const arrData= [data];
                  city_name.innerText=`${arrData[0].name} || ${arrData[0].sys.country}`;
                  const tempData=arrData[0].main.temp;
                  temp.innerText=tempData;
                  const tempMode=arrData[0].weather[0].main;

                  if(tempMode=="Clear"){
                        temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68;'></i>"
                  }else if(tempMode=="Cloud"){
                    temp_status.innerHTML="<i class='fa-solid fa-cloud-bolt' style='color:#f1f2f6;'></i>"
                  }else if(tempMode=="Rain"){
                    temp_status.innerHTML="<i class='fa-solid fa-cloud-showers' style='color:#a4b0be;'></i>"
                  }else{
                    temp_status.innerHTML="<i class='fa-solid fa-cloud-bolt' style='color:#f1f2f6;'></i>"
                  }
                  datahide.classList.remove('data_hide');
                  
        } catch{
            city_name.innerText="Oops please enter city name properly";
            datahide.classList.add('data_hide');
        }
      
    }

   
}
submitBtn.addEventListener('click',getInfo);

