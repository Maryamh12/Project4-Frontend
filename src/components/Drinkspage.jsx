import {useEffect , useState, useRef} from "react";
import axios from "axios";
import {API_URL} from "../consts";
import { Link } from "react-router-dom";
// import "../Index.css";
import "./Drink.css"
// import "bootstrap/dist/css/bootstrap.min"
import { Container , Row , Col, Card , Badge , Button} from "react-bootstrap";
import {onEnded} from "react-audio-player"
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsFillSkipEndCircleFill} from "react-icons/bs"
// import { execFile } from "child_process";





const Drinkspage = ()=> {
    const [data , setData]= useState([]);
    const [foundId , setFoundId]= useState();
    const [songSelect , setSongSelect]= useState();
    const [songStart , setSongStart]= useState(0);
    const [songReader , setSongReader]= useState();
    const [currentSong , setCurrentSong]= useState();
    const [trackIndex , setTrackIndex]= useState();
    const [isLoading, setISLoading]= useState(localStorage.userId);
    const [changeStatus , setChangeStatus]= useState(false);
    const [songsAlbum , setSongsAlbum]= useState();
    const [isplaying , setIsPlaying]= useState(false);
    const [searchSong, setSearchSong] = useState([]);
    const [searchAlbum, setSearchAlbum] = useState([]);
    const [currentSongName , setCurrentSongName]= useState();
    const [currentMenu , setCurrentMenu]= useState(false);
    const [searcFault , setSearchFault]= useState(false);
    const audioElem = useRef();

    const initialFormData = {
      artist: "",
     
    };
    
    const [formData, setFormData] = useState(initialFormData);



    const initialCommentData = {
      text: "",
      album: 2
     
    };
    
    const [commentData, setCommentData] = useState(initialCommentData);






    useEffect (()=> {
        const fetchData = async()=> {
            const {data} = await axios.get(`http://127.0.0.1:8000/albums/`);
          
            setData(data);
            // setISLoading(false);
            console.log(data);
            setSearchAlbum(data);
        };
        // setTimeout(fetchData, 500); 
        if(!foundId){
        fetchData();
        }
      if((foundId && isLoading)){
        audioElem.current.play();
      }
  
        }, [changeStatus]);

        console.log(searchAlbum);
        console.log(data);

// axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.token}`;
const onChange = (e) => {
  
  setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData);
};

const onSubmit = async (e) => {
  e.preventDefault();
  console.log(formData);
  setFoundId(false);
  setSearchFault(true);
  let initialSearchSong = [];
  searchAlbum.map((album)=>{
    console.log(album);
    const sectionOne = album.title.toLowerCase();
    console.log(sectionOne);
    const sectionTwo = formData["artist"].toLowerCase();
    console.log(sectionTwo);
    const resultSearch = sectionOne.includes(sectionTwo);
    console.log(resultSearch);
    if(resultSearch){
      initialSearchSong = [...initialSearchSong, album];
      
    }

  })
  setSearchSong(initialSearchSong);
  setData(initialSearchSong);
 
};


console.log(searchSong);



const onClickAlbum = (songG) => {
  setChangeStatus(!changeStatus);

 setFoundId(true);
 setSongSelect(songG);
 setTrackIndex(0);

 setIsPlaying(true);

 console.log(songG)

 const gg = songG.songs;
  // const SongCount= songSelect.songs;
  const ggLength = gg.length;
  console.log(ggLength);
  let songAll = [];
  console.log(songReader);
  for(let i= 0 ; i< ggLength ; i++){
    console.log(gg[i]);
   
    songAll.push(gg[i]);
   
    console.log(songAll);
 
  }
  setSongReader(songAll);
  setSongsAlbum(songAll);
  setCurrentSong(songAll[0].url_voice);
  setCurrentSongName(songAll[0].name);

  console.log(songReader);


console.log(songsAlbum);
  
};

console.log(songReader);


console.log(songsAlbum);


const onClickSong = (numberOfSong) => {
  audioElem.current.pause();

  setIsPlaying(true);
  


 
  console.log(numberOfSong);
  const kk = songsAlbum ; 
  const mm = kk ; 

  console.log(kk);
  console.log(mm);


  console.log(songsAlbum);
  
  const partTwo = kk.splice(numberOfSong);
  console.log(partTwo );
  const partOne = kk.splice(0,numberOfSong);
  console.log(partOne);

  console.log(songReader);

  console.log(songsAlbum);

  console.log(kk);

  console.log(mm);

  const newSongs = [...partTwo, ...partOne];

  const oldSongs = [...partOne, ...partTwo];

  console.log(newSongs);

  console.log(oldSongs);


  
  console.log(songReader);

  console.log(songsAlbum);

  setSongReader(newSongs);

  console.log(songReader);

  console.log(kk);

  console.log(mm);

  setSongsAlbum(oldSongs);

  console.log(songsAlbum);

  setCurrentSong(newSongs[0].url_voice);
  setCurrentSongName(newSongs[0].name);
  setChangeStatus(!changeStatus);
   
  }
 
  const handlerNext = ()=> {
    setChangeStatus(!changeStatus);
    if (trackIndex >= songReader.length ) {
      setTrackIndex(0);
      setCurrentSong(songReader[0]);
   
      // audioElem.current.play();
      console.log(trackIndex);
    } else {
      const next = trackIndex+1;
      setTrackIndex(next);
    
      // audioElem.current.play();
      console.log(trackIndex);
     
     
      setCurrentSong(songReader[next].url_voice);
      setCurrentSongName(songReader[next].name);
    }
  }

  const handlerPrevios = ()=> {
    setChangeStatus(!changeStatus);
    if (trackIndex <= 1 ) {
      setTrackIndex(0);
      setCurrentSong(songReader[0]);
   
      // audioElem.current.play();
      console.log(trackIndex);
    } else {
      const prev = trackIndex-1;
      setTrackIndex(prev);
    
      // audioElem.current.play();
      console.log(trackIndex);
     
     
      setCurrentSong(songReader[prev].url_voice);
      setCurrentSongName(songReader[prev].name);
    }
  }


  const palyPause = ()=> {
    setIsPlaying(!isplaying);
    if(isplaying){
      audioElem.current.play();
    }else{
      audioElem.current.pause();
    }
  }

  const clickMenu = () => {
    setCurrentMenu(!currentMenu);
    
  }




  // header token

  const updateN = axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.token}`;
  console.log(updateN);




  // write and send comment

  const onChangeComment = (e)=> {
    // setConfirmationMessage("");
    // setError("");
    console.log(songSelect.id);
    console.log({...commentData, ["text"]:e.target.value,["album"]:songSelect.id});
    setCommentData({...commentData, ["text"]:e.target.value,["album"]:songSelect.id});
};


const onSubmitComment = async(e) => {
  e.preventDefault();
  console.log(commentData);

 
  

  try {
      const {data} = await axios.post(`http://127.0.0.1:8000/comments/`, {...commentData});
      console.log(commentData);
      console.log(data);
     
      // navigate("/drinks");

  }catch(err){
      // setError(err.response.data.message);
      console.log(err);
  }};



  //  inside web page


  return (

    <div className="page" >



      {/* menue bar */}

      <aside className="menubar">
  
  <div className="hamburger-icon"  onClick={clickMenu}>
    {currentMenu ? (<div><div className="a"></div>
    <div className="b" ></div>
    <div className="c"></div>
    <div className="clear"></div></div>):
    (<div><div className="icon-1"></div>
    <div className="icon-2" ></div>
    <div className="icon-3" ></div>
    <div className="clear"></div></div>)}
    
  </div>
  {currentMenu ? (<nav className="navMenu">
     
     <ul>
       <li>HOme</li>
       <li>About</li>
       <li>Contact</li>
       <li>Help</li>
     </ul>
   
   </nav>):
   (<nav className="navMenuDisapper">
     
   <ul>
     <li>HOme</li>
     <li>About</li>
     <li>Contact</li>
     <li>Help</li>
   </ul>
 
 </nav>)}
  
  </aside>
 

    {/* <div className="menu-list-container">
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </div> */}
{/* </section>
</div> */}

{/* <form className="auth-form" onSubmit={onSubmit}>
        <input
          placeholder="name of the album"
          name="artist"
          value={formData.artist}
          onChange={onChange}
        />
       

        <Button type="submit">Search!</Button>
</form> */}




{/* Search Box animated */}
<header>

<div className="wrap">
  <form action="" autocomplete="on" onSubmit={onSubmit}>
  <input id="search" name="artist" type="text" placeholder="What're we looking for ?"  value={formData.artist} onChange={onChange}/><input id="search_submit" value="Rechercher" type="submit"/>
  </form>
</div>
</header>


{/* section about the albums */}

<section>

{(foundId && isLoading && !searcFault)?
    
     (<section>
     
       <>
      <Row xs={3} md={3} className="g-4 rowSong">
      
      {data.map((element)=> {
        return (
        <Col className="Drinkcol" key={element.id}  >
       
       
          <Card className="Drinkcontain"  >
            <Card.Img className="drink-image" variant="top" src={element.cover_image} onClick={() =>onClickAlbum(element)}/>
            <Card.Body className="drink-text">
              <Card.Title>{element.title}</Card.Title>
            
            </Card.Body>
          </Card>
          
          </Col>)
      })}

</Row>
       </>
     
     </section>
     ) :(!(foundId && isLoading)&& searcFault) ?
     (<section>
   
       <>
      <Row xs={2} md={3} className="g-4 searchSongContainer">
      
      {data.map((element)=> {
        return (
        <Col className="Drinkcol" key={element.id}  >
       
       
          <Card className="Drinkcontain"  >
            <Card.Img className="drink-image" variant="top" src={element.cover_image} onClick={() =>onClickAlbum(element)}/>
            <Card.Body className="drink-text">
              <Card.Title>{element.title}</Card.Title>
            
            </Card.Body>
          </Card>
          
          </Col>)
      })}

</Row>
       </>
     
     </section>
     ):((foundId && isLoading)&& searcFault) ?
     (<section>
   
       <>
      <Row xs={2} md={3} className="g-4 searchSongContainerWithPlaying">
      
      {data.map((element)=> {
        return (
        <Col className="Drinkcol" key={element.id}  >
       
       
          <Card className="Drinkcontain"  >
            <Card.Img className="drink-image" variant="top" src={element.cover_image} onClick={() =>onClickAlbum(element)}/>
            <Card.Body className="drink-text">
              <Card.Title>{element.title}</Card.Title>
            
            </Card.Body>
          </Card>
          
          </Col>)
      })}

</Row>
       </>
     
     </section>
     ):
     (<section>
   
      <>
     <Row xs={2} md={3} className="g-4 containerD">
     
     {data.map((element)=> {
       return (
       <Col className="Drinkcol" key={element.id}  >
      
      
         <Card className="Drinkcontain"  >
           <Card.Img className="drink-image" variant="top" src={element.cover_image} onClick={() =>onClickAlbum(element)}/>
           <Card.Body className="drink-text">
             <Card.Title>{element.title}</Card.Title>
           
           </Card.Body>
         </Card>
         
         </Col>)
     })}

</Row>
      </>
    
    </section>
    )
    }


     </section>





{/* selector album section */}

<section>
<>
{(foundId && isLoading) && (
  <aside className="songSelected">
  <Card className="drinkContainSong">
  <Card.Img className="drink-image" variant="top" src={songSelect.cover_image} />
  <Card.Body className="drink-text">
    <Card.Title>{songSelect.title}</Card.Title>
    <ol>
  
    {songSelect["songs"].map((element, index) => {
     return(
      <li  className="drinkContainSongText"  onClick={() =>onClickSong(index)}>{element.name}</li>)
      
    })}
    
    </ol>
 
  </Card.Body>
</Card>
   </aside>
) }  
</>


</section>



{/* comment section for Albums */}


<section>


<>
{(foundId && isLoading) && (

<section>
  <div className="inputComment">
  <form action="" autocomplete="on" onSubmit={onSubmitComment}>
  <input id="search" name="text" type="text" 
  placeholder="What're Your Coment ?" 
   value={commentData.text} 
   onChange={onChangeComment}/>
   <input id="search_submit" value="Rechercher" type="submit"/>
  </form>
</div>


  <div className="songSelectedcomment">
  <Card className="Drinkcontaincomment">
  <Card.Title>Comments</Card.Title>
  <Card.Body className="drink-textcomment">
   
    <ul>
  
    {songSelect["comments"].map((element, index) => {
     return(
      <li >{element.text}</li>)
      
    })}
    
    </ul>
 
  </Card.Body>
</Card>
   </div>

   </section>

) }  
</>

</section>









<>
 
     {(foundId && isLoading) && 
     (
    //  <div  className="audioNav">
    //   <p>{currentSongName}</p>
    //   <audio src={currentSong} onEnded={handlerPrevios}  ref={audioElem}/>

    //  <div className="controls">
    //   <BsFillSkipStartCircleFill className='btn-action' onClick={handlerNext}/>
    //   {isplaying ? <BsFillPauseCircleFill className='btn-action pp' onClick={palyPause}/> :
    //   <BsFillPlayCircleFill className='btn-action pp' onClick={palyPause}/>}

    //   <BsFillSkipEndCircleFill className='btn-action' onClick={handlerNext}/> 

    //  </div>


    //  </div>


<div>

    <div class="container-audio-gg">
        <audio controls
                   src={currentSong} onEnded={handlerPrevios}  ref={audioElem}/>
                  
               
    </div>
    <div class="container-audio">
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
    </div>
     

    </div>


     
     )}

</>


       
   
           
      
      </div>
   
  )

};

export default Drinkspage;






// The page fetches the drinks data using the useEffect hook, then maps the data to
// create a Card component for each drink with an image, title, and a link to a detailed view of the drink.
// The Placeholder component is used to create an empty space for the last card should there not be a third
// card on the row.


























