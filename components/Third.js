import {Parallax } from 'react-parallax';
const img1="https://images.unsplash.com/photo-1553260188-75a8d6205b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
const inlineStyle={
  background:'#fff',
  left:'50%',
  top:'50%',
  position:'absolute',
  padding:'20px',
  transform:'translate(-50%,-50%)',
  fontSize:'1.1rem',
  borderRadius:'10px',
  letterSpacing:"5px",
}
export default function Third() {
  return (
    <div>
    <Parallax bgImage={img1} strength={250}>
    <div style={{height:500}}>
    <div style={inlineStyle}>
    Tesla Family
    </div>
    </div>
    </Parallax>
          </div>

  );
}
