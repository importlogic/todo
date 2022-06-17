var list = $(".list-items")[0];
var inputField = $(".form-control")[0];
var successToast = $(".success")[0];
var errorToast = $(".error")[0];

if(isEmpty) {
    list.classList.remove("add-height");
    inputField.setAttribute("placeHolder", "Add First Task")
}
else {
    list.classList.add("add-height");
    inputField.setAttribute("placeHolder", "New Task")
}

if(newItem == 1){
    successToast.classList.remove("hidden");
}

if(newItem == -1){
    errorToast.classList.remove("hidden");
}