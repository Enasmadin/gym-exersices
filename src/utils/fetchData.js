 export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dde75055d0mshec07c650138fdc1p1bf5aejsna646a93ff093',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await  response.json();
    return data ;
}