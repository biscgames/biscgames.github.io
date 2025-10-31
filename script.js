let stamps = [
    {
        innerText: "Hello! I am 16 years old and a programmer in Javascript, Lua!\nSo far i don't have much but one day i'll have an amazing resume!\n-"
    },
    {
        innerText: "Stamps vv"
    },
    {
        innerText: "I use arch btw.",
        href: "https://archlinux.org/"
    },
    {
        innerText: "Plasma: Simple by default, powerful when needed",
        href: "https://kde.org/plasma-desktop/"
    },
    {
        innerText: "JS is my favorite language and I'm not even lying. Array?.[1]??\"NO\" <3",
        href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/"
    },
    {
        innerText: "LuaJIT is cool!",
        href: "https://luajit.org/"
    },
    {
        innerText: "Projects below vv"
    },
    {
        innerText: "GoodForYou Animation",
        href: "https://biscgames.github.io/goodforyou"
    },
    {
        innerText: "WormySequences",
        href: "https://biscgames.github.io/WormySequences"
    },
];
for (let stamp of stamps) {
    console.log(stamp)
    const newStamp = document.createElement("a");
    for (let attr in stamp) {
        newStamp[attr]=stamp[attr];
    }
    document.body.appendChild(newStamp);
    newStamp.classList.add("normal");
    if (!newStamp.href) continue;
    newStamp.classList.remove("normal");
    newStamp.classList.add("link");
    newStamp.onmousedown = ()=>{
        newStamp.classList.add("click");
    };
    let mouseupfunc = ()=>{
        newStamp.classList.remove("click");
    };
    newStamp.onmouseup = mouseupfunc;
    newStamp.onmouseleave = mouseupfunc;
}
