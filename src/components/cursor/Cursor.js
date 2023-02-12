import React from 'react'

export const Cursor = (url) => {
    if(typeof document !=='undefined') {
        let body = document.querySelector("body");
        let cursor = document.getElementById('cursor');
        let imageToZoom = document.getElementById("imagetozoom");
        cursor.style.backgroundImage = `url(${url.url})`;
      
      function getCursorBackground(imageToZoom, positionX, positionY) {
        let imagePourcentX = positionX - imageToZoom.offsetLeft;
        imagePourcentX = imagePourcentX * 100;
        imagePourcentX = imagePourcentX / imageToZoom.clientWidth;
      
        let imagePourcentY = positionY - imageToZoom.offsetTop;
        imagePourcentY = imagePourcentY * 100;
        imagePourcentY = imagePourcentY / imageToZoom.clientHeight;
        cursor.style.backgroundPosition = "" + imagePourcentX + "% " + imagePourcentY + "%";
      }
      
      //Place la loupe à l'emplacement du cursseur
      function cursorPlace(cursor, positionX, positionY) {
        cursor.style.left = positionX + 'px';
        cursor.style.top = positionY + 'px';
      }
      
      body.addEventListener('mousemove', function (ev) {
        cursorPlace(cursor, ev.clientX, ev.clientY);
        getCursorBackground(imageToZoom, ev.clientX, ev.clientY);
      });

        }
  return (
    <div id="cursor" className='cursor'>
    </div>
  )
}
