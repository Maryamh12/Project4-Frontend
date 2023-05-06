import "../Index.css";
import "./Homepage.css"
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
const Homepage = () => {
    return(
        <div className="homepage" >
        
        <Link to={`/drinks`}>

          <button className="shrink-border">Music</button>

        </Link>
       
        <>
<div   className="containAnimate">
<h1><span>Get ready</span><span>Listen something more...</span><span>than just dream!</span><span>This is art of music...</span><span>I have more music for you ☹</span>
</h1>
<svg class="bg" viewBox="0 0 512.009 512.009">
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff8a00"></stop>
      <stop offset="100%" stop-color="#c8305f"></stop>
    </linearGradient>
  </defs>
  <path d="M504.473,401.071c4.713,0,8.533-3.821,8.533-8.533c0-4.713-3.821-8.533-8.533-8.533h-8.533				c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533H342.34c0-4.713-3.821-8.533-8.533-8.533				c-4.713,0-8.533,3.82-8.533,8.533h-8.533c-4.713,0-8.533,3.821-8.533,8.533c0,4.713,3.82,8.533,8.533,8.533h8.533v25.6h-8.533				c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h8.533v8.533h-8.533c-4.713,0-8.533,3.821-8.533,8.533				s3.82,8.533,8.533,8.533h8.533v25.6H180.206v-70.6c12.623,7.113,26.865,10.856,41.354,10.867				c48.46-0.698,87.215-40.48,86.646-88.942c0.263-33.693-18.552-64.638-48.588-79.908c9.888-13.462,15.186-29.747,15.113-46.45				c0.297-36.863-25.562-68.771-61.688-76.117c9.141-20.158,7.57-43.556-4.185-62.31c-11.754-18.755-32.126-30.37-54.253-30.931				c-0.253,0-0.497,0.036-0.749,0.039c-4.543-29.367-29.99-50.923-59.704-50.577c-29.714,0.346-54.651,22.49-58.509,51.955				C14.035,56.104-0.882,75.998,1.197,97.902c2.079,21.904,20.473,38.635,42.476,38.636h49.741c0.77,2.454,1.683,4.861,2.734,7.208				c-36.124,7.371-61.97,39.291-61.667,76.158c-0.073,16.703,5.225,32.988,15.112,46.45c-30.035,15.271-48.85,46.215-48.587,79.908				c-0.57,48.461,38.186,88.244,86.646,88.942c14.489-0.011,28.731-3.753,41.354-10.867v70.6H9.54c-4.713,0-8.533,3.82-8.533,8.533				s3.82,8.533,8.533,8.533h494.933c4.713,0,8.533-3.82,8.533-8.533s-3.821-8.533-8.533-8.533h-8.533v-25.6h8.533				c4.713,0,8.533-3.82,8.533-8.533s-3.821-8.533-8.533-8.533h-8.533v-8.533h8.533c4.713,0,8.533-3.82,8.533-8.533				s-3.821-8.533-8.533-8.533h-8.533v-25.6H504.473z M90.277,116.521c0,0.991,0.112,1.965,0.156,2.95h-46.76				c-14.138,0-25.6-11.461-25.6-25.6c0-14.139,11.462-25.6,25.6-25.6c2.263,0.001,4.434-0.898,6.035-2.499				c1.6-1.6,2.499-3.771,2.499-6.035c-0.044-22.27,17.079-40.812,39.282-42.538c22.203-1.727,41.986,13.946,45.386,35.955				C109.043,61.655,90.096,87.421,90.277,116.521z M163.14,494.938h-17.067v-83.145c3.058-2.848,5.91-5.91,8.533-9.163				c2.623,3.253,5.475,6.315,8.533,9.162V494.938z M164.176,386.502l56.197-56.198c3.281-3.341,3.256-8.701-0.054-12.012				s-8.671-3.335-12.012-0.054l-45.167,45.166v-86.8l40.166-40.166c3.296-3.338,3.28-8.711-0.038-12.029				c-3.317-3.317-8.69-3.334-12.029-0.038l-28.1,28.1v-39.133c0-4.713-3.821-8.533-8.533-8.533c-4.713,0-8.533,3.821-8.533,8.533				v39.133l-28.1-28.1c-3.338-3.296-8.711-3.279-12.029,0.038s-3.334,8.69-0.038,12.029l40.166,40.167v86.8l-45.167-45.167				c-3.338-3.296-8.711-3.279-12.029,0.038c-3.317,3.317-3.334,8.691-0.038,12.029l56.197,56.197				c-12.493,19.629-34.118,31.55-57.385,31.636c-39.038-0.687-70.159-32.835-69.579-71.875				c-0.362-30.873,19.152-58.485,48.375-68.45c2.825-0.931,4.961-3.266,5.637-6.163c0.676-2.897-0.207-5.936-2.328-8.021				c-11.73-11.515-18.298-27.288-18.208-43.725c-0.558-32.561,25.193-59.507,57.746-60.425c3.523,0.311,6.89-1.513,8.554-4.634				c1.455-2.868,1.17-6.311-0.737-8.9c-6.325-8.508-9.749-18.823-9.767-29.425c-0.416-26.542,20.722-48.416,47.262-48.908				c26.541,0.492,47.679,22.366,47.262,48.908c-0.018,10.602-3.442,20.917-9.767,29.425c-1.868,2.611-2.102,6.052-0.604,8.892				c1.508,2.881,4.494,4.683,7.746,4.675c32.789,0.59,58.918,27.601,58.421,60.392c0.09,16.437-6.479,32.21-18.208,43.725				c-2.122,2.085-3.004,5.124-2.328,8.021s2.812,5.232,5.637,6.163c32.774,11.46,52.753,44.622,47.565,78.952				s-34.072,60.109-68.769,61.373C198.293,418.052,176.669,406.131,164.176,386.502z M478.873,494.938H342.34v-25.6h136.533V494.938				z M478.873,452.271H342.34v-8.533h136.533V452.271z M478.873,426.671H342.34v-25.6h136.533V426.671z"></path>
  <path d="M367.94,213.338h102.4c22.002-0.001,40.396-16.732,42.476-38.636c2.079-21.904-12.838-41.798-34.447-45.939				c-3.905-29.73-29.244-51.958-59.229-51.958s-55.324,22.228-59.229,51.958c-21.609,4.141-36.526,24.035-34.447,45.939				S345.937,213.337,367.94,213.338z M367.94,145.071c2.263,0.001,4.434-0.898,6.035-2.499c1.6-1.6,2.499-3.771,2.499-6.035				c0-23.564,19.103-42.667,42.667-42.667s42.667,19.102,42.667,42.667c-0.001,2.263,0.898,4.434,2.499,6.035				c1.6,1.6,3.771,2.499,6.035,2.499c14.138,0,25.6,11.462,25.6,25.6s-11.461,25.6-25.6,25.6h-102.4				c-14.138,0-25.6-11.461-25.6-25.6S353.801,145.071,367.94,145.071z"></path>
</svg>
</div>


</>
        
        </div>
    )
}

export default Homepage;