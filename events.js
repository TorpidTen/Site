const openBtn = document.querySelector(".socials");
const overlay = document.querySelector(".frame2");
const closeBtn = document.querySelector(".close");
const bg = document.querySelector("#overlayBg");
const yt = document.querySelector(".ytbtn")
const dc = document.querySelector(".discordbtn")
const x = document.querySelector(".xbtn")
const inst = document.querySelector(".instabtn")
const gbtn = document.querySelector(".get1")

openBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    bg.classList.add("active");
});

function closeMenu() {
    overlay.classList.remove("active");
    bg.classList.remove("active");
}

yt.addEventListener("click", () => {
    window.open("https://www.youtube.com/@TorpidTenArmy", "_blank")
})

dc.addEventListener("click", () => {
    window.open("auto:blank", "_blank")
})

inst.addEventListener("click", () => {
    window.open("auto:blank", "_blank")
})

x.addEventListener("click", () => {
    window.open("auto:blank", "_blank")
})

gbtn.addEventListener("click", () => {
    console.warn("HI");
})

closeBtn.addEventListener("click", closeMenu);
bg.addEventListener("click", closeMenu);