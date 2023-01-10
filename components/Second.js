import {Parallax } from 'react-parallax';
const img1="https://c4.wallpaperflare.com/wallpaper/406/199/642/tesla-motors-tesla-model-s-electric-car-red-cars-wallpaper-preview.jpg";
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
export default function Second() {
  return (
    <div>
    <Parallax bgImage={img1} strength={500}>
    <div style={{height:500}}>
    <div style={inlineStyle}>
    Tesla Family
    </div>
    </div>
    </Parallax>
          </div>

  );
}