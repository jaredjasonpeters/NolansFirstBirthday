








window.onload = () => {
console.log('window ready');


document.getElementById("logo").addEventListener("mouseover", () => {
  console.log('hovered');
  document.querySelectorAll("span[id^=char]").forEach((v, i, o) => {
    console.log(v);
    console.log(i);
    console.log(o);
    o[i].style.WebkitAnimationPlayState = "running";

  });

});
};
