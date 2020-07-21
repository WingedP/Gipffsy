import React,{useState, useEffect} from 'react';
import './componentstyle/giphylist.css';
 
export default function Giphylist() {
    const apiKey =process.env.REACT_APP_GIPHY_KEY;
    let [giphyImages, setGiphyImages]= useState();
    let [viewChange, setViewChange] = useState(false);
    let [trendTotal, setTrendTotal]= useState();
    let [limit, setLimit]= useState(20);

    const changeCardView =()=>{viewChange==false ? setViewChange(true) : setViewChange(false) }

useEffect(()=>{getGiphyImages()},[])

const loadMore=async()=>{
limit = limit + 20; setLimit(limit)
const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`);
let data = await response.json();
setGiphyImages(giphyImages.concat(data.data));
}

const getGiphyImages = async()=>{
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20`);
    let data = await response.json();
    setGiphyImages(data.data);
    setTrendTotal(data.pagination)
    console.log("data",data)

}

console.log("giphyImages",giphyImages)
if(giphyImages==null)return(<div>Loading...</div>)
const renderGiphyImages = giphyImages.map(el=>{return(
    <div className="renderGiphyImages">

<div className="gip-title">{el.title}</div>
<div className="userAvatar-wrapper">
<img className="userAvatar" src={el.user? el.user.avatar_url: "loading"}></img>

</div>
<img className="gify-imgs" src={el.images? el.images.downsized.url : "https://media2.giphy.com/media/lp0Z1Ye4cNsZ5Ih82r/giphy.gif"}></img>

    </div>
)
})

{/* <img src="https://media2.giphy.com/media/lp0Z1Ye4cNsZ5Ih82r/giphy.gif"></img> */}

return (<div className="giphylist">


<div className="user-display">

<div className="roundround"></div>

  <div className="usersection">
    <div className="userhere">
        <img src="https://media2.giphy.com/media/lp0Z1Ye4cNsZ5Ih82r/giphy.gif"></img>
    </div>
<div className="welcomemsg"><div>Hello,</div>

<div>lovely!</div></div>

    </div>     

<div className="brand-wrapper">it's    <div className="brand">Gipffsy</div>  
 !</div>

      </div>  

<div className="trending-part">
<div className="trending-title">TRENDING GIFsss AROUND THE BLOCK</div>
{trendTotal?  <div className="trend-number">showing <span className="highlight">{limit}</span> out of 
<span className="highlight">{trendTotal.total_count} </span></div> : <div>loading</div>}

<div className="btn-toplist"><button className="viewchange-btn" onClick={()=>{changeCardView()}}>
{viewChange==false? 
<i style={{ fontSize: "2rem" }} class="viewchangeIcon1 fab fa-slack-hash"></i> 
: <i style={{ fontSize: "2rem" }} class="viewchangeIcon2 fab fa-slack"></i>  }
          </button>


          <button className="loadmore-btn-top" onClick={()=>{loadMore()}}>Load More</button></div>



</div>


<div  className={viewChange==false ?"renderGiphyImages-wrapper2" : "renderGiphyImages-wrapper"} >



    
{renderGiphyImages}</div>  


<button className="loadmore-btn" onClick={()=>{loadMore()}}>
   <div className="loadingtext">    Load More
</div> 
    
<ul className="loading">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
    
    </button>

    {trendTotal?  <div className="trend-number">showing <span className="highlight">{limit}</span> out of 
<span className="highlight">{trendTotal.total_count} </span></div> : <div>loading</div>}        </div>
    )
}
