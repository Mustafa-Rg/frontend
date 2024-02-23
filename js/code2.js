let  require = document.querySelector(".post-requirments")

let  duties = document.querySelector(".post-duties")

let more = document.querySelector(".post-extra span")
console.log(require)



// function clickForMore(){
//  require.classList.toggle("despier")
//  duties.classList.toggle("despier")
//  console.log(this.parent)

// }





function create (){
    window.location.href = "create.html"
}

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 2);
    } else counter.innerText = target;
  };
  updateCounter();
});


function contact(){
  window.location.href = "contact.html"

}

dropo = document.querySelector(".dropprofileo")
function dropdownpro(){
dropo.classList.toggle("Hide")
}


