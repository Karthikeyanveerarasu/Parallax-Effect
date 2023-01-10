import react from 'react';
export default function Content(props) {
return(
  <div class="text-center">
  <h3 style={{fontSize:"3rem",color:"red",letterSpacing:"5px"}}>
  {props.title}
  </h3>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
)


}