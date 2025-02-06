
const darkmode = ()=>
    {
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }}

export default darkmode