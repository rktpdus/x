document.getElementById("downloadAll")?.addEventListener("click", () => {

    document.querySelectorAll(".tweet iframe").forEach((f, i) => {

        const url = f.src.split("#")[0];

        const a = document.createElement("a");
        a.href = url;
        a.download = "";

        document.body.appendChild(a);

        setTimeout(() => {
            a.click();
            a.remove();
        }, i * 150);

    });

});