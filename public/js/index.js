var list = $(".list-items")[0];
var inputField = $(".form-control")[0];
var successToast = $(".success")[0];
var errorToast = $(".error")[0];
var showAlertsCheck = $("#flexSwitchCheckChecked")[0];


var showAlerts = JSON.parse(localStorage.getItem('showAlerts'));
if(showAlerts == null) showAlertsCheck.checked = true;
else showAlertsCheck.checked = showAlerts;

if(isEmpty) {
    list.classList.remove("add-height");
    inputField.setAttribute("placeHolder", "Add First Task")
}
else {
    list.classList.add("add-height");
    inputField.setAttribute("placeHolder", "New Task")
}

if(newItem == 1 && showAlertsCheck.checked){
    successToast.classList.remove("hidden");
}

if(newItem == -1 && showAlertsCheck.checked){
    errorToast.classList.remove("hidden");
}

showAlertsCheck.addEventListener("click", () => {
    localStorage.setItem('showAlerts', showAlertsCheck.checked);
})