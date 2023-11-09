let slider = document.querySelector('.slider')
let tip = slider.querySelector('.tip')
let container = document.querySelector('.slider__container')
function down(event) {
   tip.style.zIndex = 1000;
   tip.ondragstart = function () {
      return false;
   };
   let coords = slider.getBoundingClientRect()
   let tipCoords = tip.getBoundingClientRect()
   let shift = event.clientX - tipCoords.x
   function move(event) {
      tip.style.left = event.clientX - coords.x - shift + 'px'
      if (slider.querySelector('.trace')) {
         slider.querySelector('.trace').remove()
      }
      if (parseFloat(tip.style.left) <= 0) {
         tip.style.left = '0px'
      }
      if (parseFloat(tip.style.left) >= coords.width - tip.clientWidth) {
         tip.style.left = coords.width - tip.clientWidth + 'px';
      }
      track(slider, tip.style.left, slider.clientHeight)
   }
   function up(event) {
      document.removeEventListener('mousemove', move)
   }
   document.addEventListener('mousemove', move)
   document.addEventListener('mouseup', up)
}
tip.addEventListener('mousedown', down)
container.addEventListener('click', function (event) {
   tip.style.zIndex = 1000;
   let coords = slider.getBoundingClientRect()
   tip.style.left = event.clientX - coords.x - tip.clientWidth / 2 + 'px'
   if (slider.querySelector('.trace')) {
      slider.querySelector('.trace').remove()
   }
   track(slider, tip.style.left, slider.clientHeight)
   if (parseFloat(tip.style.left) <= 0) {
      tip.style.left = '0px'
      return
   }
   if (parseFloat(tip.style.left) >= coords.width - tip.clientWidth) {
      tip.style.left = coords.width - tip.clientWidth + 'px';
      return
   }
})
function track(current, length, height) {
   let trace = document.createElement('span')
   trace.classList.add('trace')
   trace.style.width = length
   trace.style.height = height + 'px'
   trace.style.position = 'absolute'
   trace.style.zIndex = 600;
   if (trace.style.width > current.clientWidth) {
      trace.style.width = current.clientWidth + 'px';
   }
   current.append(trace)
}