
let element_page_title = document.getElementById("page_title")

function apply_random_page_title() {
    const page_title_list = [
        "Nimbot: the Reckoning",
        "Nimbot 2: Electric Boogaloo",
        "Nimbot: No Time to Nim",
        "Nimbot: Revenge of Nim",
        "Nimbot: 57 Shades of Nim",
        "Nimbot: The Rise of Nim",
        "Nimbot: 2 Nim 2 Furious",
        "Nimbot Origins",
        "Nimbot: Dawn of the Nim",
        "Nimbot: Now in 3D!",
        "Nimbot: A household classic!",
        "Nimbot: Fun for the whole family!",
        "Nimbot: Now with even more nim!",
        "Not your grandma's Nimbot!",
        "Nimbot Evolved",
        "Nimbot Advanced",
        "Nimbot Elevated",
        "Nimbot Synergized",
        "Nimbot Reimagined",
        "Whoa, you read these?"
    ];
    const custom_chance = 0.2;
    rand = Math.random();
    let text;
    if (rand < custom_chance) {
        len = page_title_list.length
        custom_index = Math.min(len - 1, Math.floor(rand * len / custom_chance))
        text = page_title_list[custom_index]
    }
    else text = "Nimbot";
    page_title.innerText = text 
}

apply_random_page_title()