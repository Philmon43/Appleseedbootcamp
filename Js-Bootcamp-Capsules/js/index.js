const selectros = {
    capsule_list: document.querySelector(".capsule_list"),
    userByCity: document.querySelectorAll(".city"),
}
const api = {
    userApi: "https://apple-seeds.herokuapp.com/api/users/",
    weather: "http://api.weatherapi.com/v1/current.json?key=562112cc3374407a88f134327211203&q={CITY}&aqi=no",
}

//fetch request
const request = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        return e
    }
}

//generate div elemnts
let myelement;
async function generateEl() {
    let parent = document.createElement("div");
    parent.classList.add("table_content")
    selectros.capsule_list.appendChild(parent)
    for (let i = 0; i < arguments.length; i++) {
        let ele = document.createElement("div");
        ele.classList.add(arguments[i][0])
        ele.innerText = arguments[i][1]
        parent.appendChild(ele)
        if (ele.className === "city") {
            try {
                let weather = await request(api.weather.replace("{CITY}", ele.innerText.replace(/ /g, '-')));
                ele.setAttribute("data-tooltip", weather.current.temp_c);
            } catch (e) {
                ele.setAttribute("data-tooltip", "not found");
            }
        }
    }
}

//setdata
const onPageLoad = async () => {
    let users = await request(api.userApi);
    users.forEach(async (user) => {
        const userDetaile = {...user,...await request(api.userApi + user.id)}
        userDetaile["edit_btn"] = "Edit"
        userDetaile["delete_btn"] = "Delete"
        generateEl.apply(null, Object.entries(userDetaile))
    });
}
onPageLoad()

//on edit list
const onEdit = (event) => {
    event.target.parentElement.childNodes.forEach(el => {
        el.setAttribute("contenteditable", true);
    })
    // console.log(selectros.capsule_list.childNodes)
}

//on delete list
const onDelete = (event) => {
    event.target.parentElement.remove();
}

//on onConfirm list
const onConfirm = (event) => {
    console.log(event)
}

//on onCancel list
const onCancel = (event) => {
    console.log(event)
}

//render data
const render = (node) => {

}

//click events
selectros.capsule_list.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "edit_btn":
            onEdit(e)
            break
        case "delete_btn":
            onDelete(e)
            break
        case "confirm_btn":
            onConfirm(e)
            break
        case "cancel_btn":
            onCancel(e)
            break
    }
});