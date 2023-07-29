const allItems=["product1","product2"];


  function displayItems(pageNumber, itemsPerPage) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = allItems.slice(startIndex, endIndex);
   
    console.log(itemsToShow);
  }
   
  const itemsPerPage = 5;  
  const currentPage = 1;  
   
  displayItems(currentPage, itemsPerPage);