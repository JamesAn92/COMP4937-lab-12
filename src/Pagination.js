function Pagination({ pokemons, pageNumber ,setPageNumber }) {
    const pageSize = 10;
    const pageCount = Math.ceil(pokemons.length / pageSize);
   
    return (
        <div className="page-numbers">
            <div>
            <button onClick={() => setPageNumber(pageNumber - 1)} hidden={pageNumber === 1}>Prev</button>
            {Array.from({ length: pageCount }, (_, index) => index +1).map(
            (page, index) => {
                if (index < pageNumber + 5 && index > pageNumber - 6) {
                    return (
                        <button key={index} onClick={() => setPageNumber(index + 1)} className={(index + 1 === pageNumber)? 'active' : ''}>
                            {index + 1}
                        </button>
                        );
                    }
                }                
            )}
            <button onClick={() => setPageNumber(pageNumber + 1)} hidden={pageNumber === pageCount}>Next</button>
            </div>
        </div>
    );
  }
  
  export default Pagination;