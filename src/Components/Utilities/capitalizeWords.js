

const capitalizeWords = (string) => {

   let capitalizeEachWords = string.split('_')?.map(word => word?.charAt(0).toUpperCase() + word.slice(1));
   const capitalizeString = capitalizeEachWords.join(' ')?.replace("Or", "/")
   
   return capitalizeString;
}
export default capitalizeWords;