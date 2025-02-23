const categories = Array.from(jCategory);

// use for active search bar
document.getElementById("searchBar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) =>
        item.title.toLowerCase().includes(searchData)
    );
    displayItems(filterData)
}); // ya pora function search bar ko active karne ke lia use hua hai.


const displayItems = (items) => {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";

    items.forEach((item) => {
        const { index, image, title, rate, av } = item;
        const jList = document.createElement("div");
        jList.className = "jList";
        jList.innerHTML = `
         <img src="${image}" alt="Not-Found">
                    <h3>${title}</h3>
                    <p>${rate}</p>
                  <div> <span id="key">${av}</span> </div>
                     `;

        rootElement.appendChild(jList);

        jList.addEventListener("click", () => {
            window.location.href = `2_job-details.html?id=${index}`;
        });

    });
};
displayItems(categories);