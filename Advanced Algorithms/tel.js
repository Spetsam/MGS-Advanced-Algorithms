function telephoneCheck(str) {
    let validCountryCode=true;
    let countryCode;
  
    countryCode = str.slice(0,2);
  
    if(typeof str.split(" ")[1]!="undefined"){
      validCountryCode = countryCode=="1 "||countryCode=="1("?true:false;
    }
  
    if(countryCode=="1("){
      str=str.slice(1);
    }
    else if(countryCode=="1 "){
      str=str.slice(2);
    }
  
    let regex = /^\d{3}-{1}\d{3}-{1}\d{4}$|^\d{3}\d{3}\d{4}$|^[(]\d{3}[)]\s{0,1}\d{3}-\d{4}$|^\d{3}\s\d{3}\s\d{4}$/;
    if(regex.test(str)){return validCountryCode&&true;}
  
    return false;
  }
  telephoneCheck("(555)555-5555"); //Can input any number, as long as it's valid within the US