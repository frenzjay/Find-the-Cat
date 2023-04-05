let cat = document.getElementById("cat");
    let meow = document.getElementById("meow");
    let start = document.getElementById("start");
    let catX = cat.offsetLeft;
    let catY = cat.offsetTop;
    let catW = cat.offsetWidth;
    let catH = cat.offsetHeight;

    function randomizeCat() {
      let windowW = window.innerWidth;
      let windowH = window.innerHeight;

      let size = Math.floor(Math.random() * 100) + 50;

      let x = Math.floor(Math.random() * (windowW - size));
      let y = Math.floor(Math.random() * (windowH - size));

      let angle = Math.floor(Math.random() * 90) - 45;

      cat.style.width = size + "px";
      cat.style.height = size + "px";
      cat.style.left = x + "px";
      cat.style.top = y + "px";
      cat.style.transform = "rotate(" + angle + "deg)";

      catX = x;
      catY = y;
      catW = size;
      catH = size;
    }

    

    let audioCtx = new AudioContext();

    

    start.addEventListener("click", function() {
      randomizeCat();

      audioCtx.resume().then(() => {
        console.log("Audio context resumed successfully");
        start.style.display = "none";
        document.addEventListener("mousemove", function(e) {
          let mouseX = e.clientX;
          let mouseY = e.clientY;
          if (mouseX >= catX && mouseX <= catX + catW && mouseY >= catY && mouseY <= catY + catH) {
            cat.style.opacity = 1;
            meow.play();
            
          } else {
            cat.style.opacity = 0;
            meow.pause();
          }
        });
        document.addEventListener("touchmove", function(e) {
          let touchX = e.touches[0].clientX;
          let touchY = e.touches[0].clientY;
          if (touchX >= catX && touchX <= catX + catW && touchY >= catY && touchY <= catY + catH) {
            cat.style.opacity = 1;
            meow.play();
            
          } else {
            cat.style.opacity = 0;
            meow.pause();
          }
        });
        
      });
      
    });
    