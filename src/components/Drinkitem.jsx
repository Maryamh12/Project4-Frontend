import {useEffect , useState} from "react";
import axios from "axios";
import {API_URL} from "../consts";
import { Link , useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";
import {CSSTransition} from "react-transition-group"

import "../Index.css";
// import "./Drink.css"

const Drinkitem = () => {
    const navigate = useNavigate();
    const [drink , setDrink]= useState([]);
    const [edit , setEdit] = useState("");
    const [nonEdit , setNonEdit]= useState(true);
    const [error , setError]= useState("");
    const [confirmationMessage , setConfirmationMessage]=useState("");
    const [foundId , setFoundId]= useState(localStorage.userId);
    
    

    const initialFormData = 
    {
        name: "",
        flavour: "",
        alcohol: false,
        image: "",
      };

      const [formData , setFormData]= useState(initialFormData); 
    

   
    

      const {id} = useParams();
       console.log(id);




    useEffect(()=>{

        const fetchData = async () => {
            const {data}= await axios.get(`${API_URL}/drinks/${id}`);
            setDrink(data.data);
            // console.log(id);
            console.log(data.data);
            // setFormData({...formData, name: drink.name,
            //         flavour: drink.flavour,
            //         calories: drink.calories,
            //         alcohol: drink.alcohol,
            //         image: drink.image,})

        };
        setTimeout(fetchData, 500);
     
    },[]);

    // const initialFormData = 
    // {
    //     name: drink.name,
    //     flavour: drink.flavour,
    //     calories: drink.calories,
    //     alcohol: drink.alcohol,
    //     image: drink.image,
    //   };


    //   console.log(initialFormData);

    //   const initialFormData = 
    // {
    //     name: "",
    //     flavour: "",
    //     calories: "",
    //     alcohol: "",
    //     image: "",
    //   };

    //   const [formData , setFormData]= useState(initialFormData); 



    
    const updateN = axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.token}`;
    console.log(updateN);

const deleteDrink = async (id) => {

    try{
        await axios.delete(`${API_URL}/drinks/${id}`);
        navigate("/drinks");
    }catch(err){
        console.log(err);
        setError(err.response.data.message);
        console.log(error);
    }
};

const editDrink = (id) => {

    if(localStorage.token){
       setEdit(true);
       setNonEdit(false);
    }
   };

const onChange = (e)=> {
    setConfirmationMessage("");
    setError("");
    console.log({...formData, [e.target.name]:e.target.value});
    setFormData({...formData, [e.target.name]:e.target.value});
};


const onSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    

    try {
        const {data} = await axios.patch(`${API_URL}/drinks/${id}`, formData);
        console.log(formData);
        console.log(data);
        // setConfirmationMessage(res.data.message);
        // setFormData(initialFormData);
        navigate("/drinks");

    }catch(err){
        // setError(err.response.data.message);
        console.log(err);
    }};





const inputFields = [
    {
        placeholder: "name",
        name: "name",
        type:"text"
    },
    {
        placeholder: "flavour",
        name: "flavour",
        type:"text"
    },
  
    {
        placeholder: "alcohol",
        name: "alcohol",
        type:"select"
    },
    {
        placeholder: "image",
        name: "image",
    }
];



    return (
        
       

<div className="drinkpage" >
{error && (<h4 className="alert-failure">{error}</h4>)}

    <div className="containerAlbum" >

   

    
    { nonEdit &&


            
            <div className="containerAlbuminside">
            <img src={drink.image} alt="" className="imageAlbum" />


            

                        <div>
                            <p className="drinkName">Name: {drink.name}</p>
                            <p className="drinkFlav">Flavor: {drink.flavour}</p>
                            <p className="drinkCal">Calories: {drink.calories}</p>
                            <p className="drinkAl">Alcohol content: {drink.alcohol}</p>
                            <section className="sectionCard">
                           {foundId && <Button className="delete-button" onClick={()=>deleteDrink(drink._id)}>Delete!</Button>}
                         

                           
                                {foundId && <Button className="drinkCard"  onClick={()=>editDrink(drink._id)}>Edit!</Button>}
                           
                            </section>
                         </div> 
            </div>
          
                         
                         
                         }


                          

                     {edit &&


                     

                     <form className="edit-form" onSubmit={onSubmit}>
                           {inputFields.map((input)=>{
                            return( input.type === "select"?
                            <><select onChange={onChange}><option>true</option><option>false</option></select></>:
                            <input placeholder={input.placeholder}
                            name={input.name}
                            value={formData[input.name]}
                            type={input.type}
                            onChange={onChange}/>
                            
                            )})}

                        <Button type="submit"> Edit!</Button>
                        
                     </form>   
                      
                     
                    }




                            
                         
          
            
        </div>







<div className="bodyAudio">
<div class="col-xs-1 col-md-2"></div>
<div class="col-xs-10 col-md-8 base">
  <div class="row">
    <div class="col-xs-8 left">
      <div class="row info">
        <div class="col-xs-1 pause"><i class="glyphicon glyphicon-pause"></i></div>
        <div class="col-xs-6 songname">
          <p>City of Angels<br/><span>Thirty Seconds to Mars</span></p>
        </div>
        <div class="col-xs-1 comment"><i class="glyphicon glyphicon-comment"></i><span>9</span></div>
        <div class="col-xs-1 favourite"><i class="glyphicon glyphicon-heart-empty"></i><span>8</span></div>
        <div class="col-md-1 repeat"><i class="glyphicon glyphicon-repeat"></i></div>
        <div class="col-md-2 time">
          <p>3:56</p>
        </div>
      </div>
      <hr class="one"/>
      <hr class="two"/>
      <div class="track"></div>
      <div class="row info">
        <div class="col-xs-1 pause"><i class="glyphicon glyphicon-play"></i></div>
        <div class="col-xs-9 songname">
          <p>Up In The Air<br/><span>Thirty Seconds to Mars</span></p>
        </div>
        <div class="col-xs-2 time">
          <p>2:59</p>
        </div>
      </div>
      <hr class="one"/>
      <div class="row info">
        <div class="col-xs-1 pause"><i class="glyphicon glyphicon-play"></i></div>
        <div class="col-xs-9 songname">
          <p>Night of the Hunter<br/><span>Thirty Seconds to Mars</span></p>
        </div>
        <div class="col-xs-2 time">
          <p>3:34</p>
        </div>
      </div>
      <hr class="one"/>
      <div class="row info">
        <div class="col-xs-1 pause"><a href="https://youtu.be/GC63HGcsfEg" target="_blank"><i class="glyphicon glyphicon-play"></i></a></div>
        <div class="col-xs-9 songname">
          <p>Do or Die<br/><span>Thirty Seconds to Mars</span></p>
        </div>
        <div class="col-xs-2 time">
          <p>4:25</p>
        </div>
      </div>
      <hr class="one"/>
      <div class="row controls text-center">
        <div class="col-xs-2 back"><i class="glyphicon glyphicon-step-backward"></i></div>
        <div class="col-xs-2 bigpause"><i class="glyphicon glyphicon-pause"></i></div>
        <div class="col-xs-5 forward"><i class="glyphicon glyphicon-step-forward"></i></div>
        <div class="col-xs-1 random"><i class="glyphicon glyphicon-random"></i></div>
        <div class="col-xs-1 volume"><i class="glyphicon glyphicon-volume-up"></i></div>
        <div class="col-xs-1 fullscreen"><i class="glyphicon glyphicon-fullscreen"></i></div>
      </div>
    </div>
    <div class="col-xs-4 right"></div>
  </div>
</div>

</div>

</div>
    )



}

export default Drinkitem;

// This page pulls out information from the API and renders in on our components page using bootstrap.

//The component fetches data from an API using Axios and uses the useState and useEffect hooks to manage
//state and perform side effects. We used Bootstrap library for styling, and the code also includes a Placeholder
//component for displaying while the data is loading.

//The goal is to add a new Card to allow users to create a new drink.
//The commented out NewDrinkCard component provides a starting point for this implementation.
//The Card component will have a button that the user can click to navigate to a form for creating a new drink.



































