getDate = ()=>{
    document.getElementById('date').innerHTML = Date();
}

getTomorrow = ()=>{
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('tomorrow').innerHTML = tomorrow;
}