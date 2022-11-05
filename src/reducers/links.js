export default function(links = '', action) {
    if (action.type === "clicked") {
        console.log('item?', action.clicked);

    return action.clicked;
    } else {
    return links;
    }
}