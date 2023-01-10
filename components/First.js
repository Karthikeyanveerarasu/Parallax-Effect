import {Parallax} from 'react-parallax';
const img="https://c4.wallpaperflare.com/wallpaper/151/322/565/tesla-motors-logo-wallpaper-preview.jpg";
const inlineStyle={
  background:'#fff',
  left:'50%',
  top:'50%',
  position:'absolute',
  padding:'20px',
  transform:'translate(-50%,-50%)',
  fontSize:'1rem',
  borderRadius:'10px',
}
export default function First() {
  return (
    <div className="App">
    <Parallax bgImage={img} strength={500}>
    <div style={{height:"100vh"}}>
    <div style={inlineStyle}>
    Welcome to Parallax Effect
    </div>
    </div>
    </Parallax>
          </div>

  );
}