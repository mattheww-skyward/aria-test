const button = document.getElementById("go");

const form = document.createElement("form");
form.action = "/submit";
form.method = "POST";
form.target = "_blank";
const values = {
    huey: "helicoper",
    dewey: "yes we dew",
    louie: "guillotine-ee",
};
for (const [key, val] of Object.entries(values)) {
    const input = document.createElement("input");
    input.name = key;
    input.value = val;
    form.appendChild(input);
}
document.body.appendChild(form);

const submit = function() {
    form.submit();
}
button.addEventListener("click", submit);
button.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
        submit();
    }
});
