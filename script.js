
const questions = {
    "P1 Viticulture": ['Describe how the choice of rootstock can affect viticultural decisions. (2016)', 'How does site climate influence canopy management decisions? (2022)', 'Compare the advantages and disadvantages of hand harvesting and machine harvesting. (2017)', 'Discuss the use and management of cover crops in sustainable viticulture. (2018)', 'Evaluate different methods of frost protection and their suitability in different vineyard conditions. (2015)'],
    "P2 Vinification": ['How does fermentation temperature affect the aromatic profile of white wines? (2019)', 'Discuss the use of cultured versus ambient yeast in red winemaking. (2016)', 'Evaluate the advantages of whole bunch fermentation in Pinot Noir production. (2021)', 'What are the risks and benefits of extended skin contact in white wine production? (2020)', 'Explain the role of malolactic fermentation in winemaking and its control. (2018)'],
    "P3 Handling of Wine": ['Compare the uses of different fining agents and their impact on wine quality. (2017)', 'Discuss the options available to reduce SO2 in winemaking and their limitations. (2020)', 'What quality control measures can be used during bottling? (2019)', 'Explain the advantages and disadvantages of different closure types. (2021)', 'Evaluate the effect of storage and transportation on wine quality. (2016)'],
    "P4 Wine Business": ['What have been the most important changes in global wine supply and demand in the past in years and what are their implications? (2018)', 'How can the role of intermediaries between producer and consumer be justified? (2017)', 'What matters more to consumers in today’s wine market: brand, varietal or appellation? (2018 S1)', 'How important are environmental credentials in marketing wine? (2023 S1)', 'What are the commercial advantages and disadvantages of packing/bottling wine in the local market of consumption? (2016)'],
};

function getRandomQuestion(category) {
    let selectedQuestions = [];
    if (category === "All Categories") {
        for (let key in questions) {
            selectedQuestions = selectedQuestions.concat(questions[key]);
        }
    } else {
        selectedQuestions = questions[category];
    }
    const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
    return selectedQuestions[randomIndex];
}

function displayQuestion() {
    const category = document.getElementById("category").value;
    const question = getRandomQuestion(category);
    document.getElementById("questionDisplay").innerText = question;
}

function searchQuestions() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const results = [];
    for (let key in questions) {
        results.push(...questions[key].filter(q => q.toLowerCase().includes(searchTerm)));
    }
    document.getElementById("questionDisplay").innerText = results.join('\n\n') || "No results found.";
}

function resetDisplay() {
    document.getElementById("search").value = "";
    document.getElementById("questionDisplay").innerText = "";
}
