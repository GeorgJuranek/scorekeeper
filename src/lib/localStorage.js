export function setToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  /* players wird uebergeben als value an diese Function, 
    Mit setItem wird ein Name für players im localStorage vergeben (der key)
    UND players als value uebergeben, muss aber zuvor in einen String umgewandelt werden.
    Beides liegt nun im localStorage*/
}

export function getFromLocal(key) {
  try {
    const jsonString = localStorage.getItem(key); // getItem holt etwas aus dem localStorage
    const data = JSON.parse(jsonString); //string wird wieder zu einem Array
    return data;
  } catch (error) {
    console.error(error);
  }
}
