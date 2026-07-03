function greetUser() {

    const name = document.getElementById("name").value;

    if (!name) {
        document.getElementById("result").innerHTML =
            "Vendos emrin!";
        return;
    }

    document.getElementById("result").innerHTML =
        `Pershendetje ${name}! Aplikacioni po ekzekutohet ne Docker.`;
}