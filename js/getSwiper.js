const getSwiper=()=>axios.get('http://localhost:3000/silders')
const gethapy=()=>axios.get('http://localhost:3000/hotsale')
const getCommodity=(mag)=>axios.get(`http://localhost:3000/hotsale/${mag}?_embed=details`)