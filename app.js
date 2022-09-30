const Morty = document.querySelector(".Morty-div");
const rekt = Morty.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;
const eyes=document.querySelectorAll('.eye');

document.addEventListener("mousemove", (e) => {
  const MouseX = e.clientX;
  const MouseY = e.clientY;
  const angleDeg=angle(MouseX,MouseY,anchorX,anchorY);
  console.log(angleDeg);
  eyes.forEach(eye=>{
    eye.style.transform=`rotate(${90+angleDeg}deg)`;
  })

});

function angle(cx, cy, ax, ay) {
  const dy = ay - cy;
  const dx = ax - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
