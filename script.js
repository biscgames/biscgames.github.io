const minIconScale = 0.5;
const maxIconScale = 0.6;

let sectionContainer = document.getElementById("section-container");
let buttonsContainer = document.getElementById("buttons-container");
let section = "resume";

function updateSectionContainer() {
    for (let i in sectionContainer.children) {
        const elem = sectionContainer.children[i];
        const associatedImage = buttonsContainer.children[i];
        if (associatedImage?.style) {
            associatedImage.style.transform = "scale("+minIconScale+")";
            associatedImage.addEventListener("click",()=>{
                section = associatedImage.id;
                updateSectionContainer();
            });
        } else continue;

        elem.style.display = "none";
        if (elem.id === section) {
            elem.style.display = "flex";
            associatedImage.style.transform = "scale("+maxIconScale+")";
        }
    }
}

updateSectionContainer();