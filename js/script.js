{
    const welcome = () => {
        console.log("Welcome to my website");
    }
    
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const textName = document.querySelector(".js-header__textName");

        body.classList.toggle("dark");
        textName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".js-header__button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}