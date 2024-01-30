console.log("Welcome to Newsletter Signup Form");

const inp = document.getElementById("email");
const appendMail = document.getElementsByClassName("append-mail");
const btn = document.getElementById("sub-btn");
const btnDis = document.getElementById("sub-btn-dis");
const main = document.getElementById("main");


let mail = ""
inp.addEventListener("input", (e)=>{
    if(e.target.value) {
        btn.classList.add("active")
        mail = e.target.value
    }
});

const modal = document.getElementById("modal");
btn.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(mail) {
        modal.style.display = "flex";
        main.style.display = "none";
        console.log("mail : ", mail);
        let p = document.createElement("p")
        // appendMail.textContent = mail;
        p.textContent = `A confirmation mail has been sent to ${mail}. Please open it and click the button inside to confirm your subscription`;
        // btn.append
        appendMail[0].append(p);
    }
});
btnDis.addEventListener("click" , (e)=>{
    e.preventDefault();
    mail = "";
    inp.value = "";
    modal.style.display = "none";
    main.style.display = "flex";
});