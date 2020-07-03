var donedisplay = document.getElementById("donedisplay");
var rows = document.querySelectorAll(".normalrow");
var stages = document.querySelectorAll(".stage");
var boxes = document.querySelectorAll(".checkbox");

let kmdone = 0;
let kmtogo = 1168.4;
let stamps = 0;

donedisplay.textContent = kmdone;
togodisplay.textContent = kmtogo;
stampdisplay.textContent = stamps;

 
//--------------------------------------------------------------------------------------
// stage number click

stages.forEach(function(c) {
    c.addEventListener("click", function(e) {  

        this.parentElement.classList.toggle("done");
        let kmstr = this.parentElement.cells[5].textContent;        //string from cell
        let kmnum = parseFloat(kmstr);                              //convert string to number
   
        console.log(kmstr);
        console.log(kmnum);

        const styles = e.currentTarget.parentElement.classList;     //styles array -> classlist of target element

        if(styles.contains('done')){                                //if styles contains "done"
            kmdone += kmnum;
        } 
        else {
            kmdone -= kmnum;
        }

        let kmround = Math.round(kmdone * 10) / 10;                 //round to 1 decimal
        donedisplay.textContent = kmround;

        kmtogo = Math.round((1168.4-kmround) * 10) / 10;
        togodisplay.textContent = kmtogo;
    });
  });

  //--------------------------------------------------------------------------------------
  // checkbox click

  boxes.forEach(function(c) {
    c.addEventListener("click", function() {  
        if (this.checked) {
            console.log("checked in");
            stamps++;
        } else {
            console.log("checked out");
            stamps--;
        }
        console.log("stamps: "+stamps);
        stampdisplay.textContent = stamps;
    })
});






//--------------------------------------------------------------------------------------
// BACKUP
//--------------------------------------------------------------------------------------
// // full row click

// rows.forEach(function(c) {
//     c.addEventListener("click", function(e) {
//         this.classList.toggle("done");
//         let kmstr = this.cells[5].textContent;      //string from cell
//         let kmnum = parseFloat(kmstr);              //convert string to number
   
//         console.log(kmstr);
//         console.log(kmnum);
      
//         const styles = e.currentTarget.classList;     //styles array -> classlist of target element

//         if(styles.contains('done')){                //if styles contains "done"
//             kmdone += kmnum;
//         } 
//         else {
//             kmdone -= kmnum;
//         }

//         let kmround = Math.round(kmdone * 10) / 10; //round to 1 decimal
//         donedisplay.textContent = kmround;

//         kmtogo = Math.round((1168.4-kmround) * 10) / 10;
//         togodisplay.textContent = kmtogo;

//     });
//   });