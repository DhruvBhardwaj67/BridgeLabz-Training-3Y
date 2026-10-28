let productName = " wireless headphones PRO ";

let cleanedTitle = productName.trim().toLowerCase();

cleanedTitle = cleanedTitle
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

console.log(`Cleaned Product Title: ${cleanedTitle}`);
console.log(`Title Length: ${cleanedTitle.length}`);
