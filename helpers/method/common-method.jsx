export const transferHomeData = (rawData) => {
  const newData = [];
  rawData.forEach(element => {
    const filterData = newData.find((item) => item.name == element.room);
    if(filterData){
      filterData.devices.push(element);
    } else{
      newData.push(
        {
          name:element.room,
          devices:[element]
        }
      )
    }
  });
  return newData;
}