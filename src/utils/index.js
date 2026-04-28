export const getRandomBG = () => {
    const colors = [
        "bg-[#f6b100]",
        "bg-[#025cca]",
        "bg-[#be3e3f]",
        "bg-[#02ca3a]",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

export const getBgColor = () => {
    const bgarr =["#b73e3e","#5b45b0","#7f167f","#1d2569","#285430"]
    const randomBg = Math.floor(Math.random() * bgarr.length);
    const color = bgarr[randomBg];
    return color;
}