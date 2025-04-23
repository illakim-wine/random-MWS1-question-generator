
// Define all questions by category
const questions = {
    "all": [
        "What have been the most important changes in global wine supply and demand in the past in years and what are their implications? (2018)",
        "How have the recent fluctuations in grape harvest size changed the global supply and demand of wine? How do you see this affecting the wine market in the next 24 months? (2013)",
        "What would be the implications of a short harvest in 2014 in European vineyards? (2014)",
        
        "There is much talk of consolidation in the wine industry, but where is the industry fragmenting and why? Give examples of businesses that are succeeding as a result. (2016)",
        "Is consolidation among wine producers good or bad for consumers? (2015)",
        "Identify and assess the financial considerations when planning an investment in planting a vineyard and building a winery. (2021)",
        "You inherit the equivalent of US$ 10 million and want to invest in the wine industry. How would you spend your money to attract the greatest return on investment? Explain your logic. (2017)",
        
        "How can the role of the intermediaries between producer and on and off-trade retailers be justified? How is it changing? (2013)",
        "How can the role of the intermediaries between producer and consumer be justified? How is it changing? Use examples from several different wine markets. (2017)",
        "Have supermarkets been a positive or negative force for mainstream wine consumers around the globe? (2015, 2019 S1)",
        "Where are direct to consumer wine sales increasing and why? (2018)",
        "Can small independent wine retailers compete with large chains on price? How else can they compete effectively? (2017, 2022 S1)",
        "Why does a growing number of large retailers prefer to focus on own and exclusive labels over third-party brands? Is this good for the wine category? (2019)",
        "What are the key elements of a successful relationship between a wine producer and their distributor? (2023)",
        "As sales manager for a small, premium winery, outline your strategy to sell to the on-trade. (2024)",
        
        "What matters more to consumers in today’s wine market: brand, varietal or appellation? (2013)",
        "What matters more to consumers in today’s wine market; brand, varietal or appellation? (2018 S1)",
        "As a large corporation taking over a family wine business, should you keep the family values alive and, if so, how? (2013)",
        "Which factors are the most important for the long term success of a wine brand? (2014)",
        "As the brand manager of a 500,000 case wine brand, what five key statistics would you most closely monitor to gauge the performance of your brand, and why? (2015, 2021 S1)",
        "How important are environmental credentials in marketing wine? (2018, 2023 S1)",
        "What are the most quantifiable signs that a wine brand is strong? (2016)",
        "What measures determine the strength of a wine brand? How can brand managers most effectively influence their brand's long-term performance? (2022, 2024 S1)",
        "As a brand owner, what do you feel are the major strategic issues facing today’s wine industry? (2017 S1)",
        
        "As the owner of a Bordeaux Classified Growth from the Left Bank, what options are available to you today to present your wine to the market? Evaluate these options from commercial and brand-building standpoints. (2017)",
        "You are the global brand director for an internationally established, prestige Champagne house. You have an annual marketing budget of five million euros (approximately five million U.S. dollars), not including price promotions, and have been asked to present a three-year brand plan. What are your key areas of focus and expenditure? (2023)",
        "What are the biggest challenges facing wine brand managers looking to create and maintain a loyal customer base in today's competitive market? (2023)",
        
        "Examine the profitability of various wine packaging formats from both a production and a retail point of view. (2024)",
        "Evaluate the strengths and weaknesses of own-label projects for a medium-sized winery. (2024)",
        
        "Which are the most attractive markets for premium Italian wines, and why? (2022)",
        "With reference to Bordeaux and other regions, discuss the commercial viability of the en primeur model. Outline the pros and cons for all parties, from producer through to consumer. (2021)",
        "As an export manager for a medium sized wine estate, what strategies would you employ in the USA, Europe and China? (2013)",
        "Can Australia recover its export markets? (2014)",
        "You are Export Director of an established large wine company producing in excess of one million nine litre cases. How would you seek to capitalise on the potential of the growing Chinese market for imported wine? What are the risks and how can they be managed? (2017)",
        "As export director of a 100,000-case winery in the New World, you have been asked to increase exports from 10% to 25% of total production volume. What are the factors that would be most relevant to your strategy? (2021)",
        
        "Assess successful approaches to social media by the wine industry. (2015)",
        "In what ways have social media changed the marketing of wine brands over the past 10 years? (2017)",
        "Can social media drive brand loyalty in the wine category? (2019)",
        "How has the market transparency facilitated by the internet and social media influenced the supply, demand and pricing of wine? Who benefits? (2021)",
        
        "You are a wine producer in Pommard. What are your main marketing strengths? How can you grow your business? (2015)",
        "Which elements of the marketing mix are most effective in influencing the choices made by today’s wine consumers? (2016 S1)",
        "Which emerging wine-producing countries or regions have the best chance of establishing themselves as a significant force on the international wine market, and why? (2022)",
        
        "You are the production director of a one million-case winery which aspires to become carbon neutral by the end of the decade. What steps would you take to achieve this objective? (2022)",
        "Outline the challenges and opportunities facing wine producers in California. What is the long-term outlook for this region? (2023)",
        "Evaluate the commercial success of three different styles of rosé wine. (2024)",
        "Do emerging wine regions need international investment to succeed on the global stage? (2024)",
        
        "Are price promotions bad for the wine industry? (2014, 2015 S1)",
        "How can a sommelier or restaurant buying manager ensure he/she is delivering good value both to his/her customers and owner? How may sustainable profit in the on-trade be maximised? (2015)",
        "What are the advantages and disadvantages of private-label wines for wineries, distributors and retailers? (2018)",
        "Evaluate the extent to which scarcity/rarity is a positive attribute in wine marketing. (2018)",
        "Who or what are the most important influencers of consumer behaviour in today's world of wine? (2022)",
        "How close should a producer be to the end consumer? What are the best practical means of creating that relationship? (2014)",
        
        "How has the global coronavirus pandemic impacted consumer wine purchasing behaviours? Use examples from at least three significant markets to illustrate your answer. (2022)",
        "How do wine consumers in mainland China decide what wine to buy and what are the implications of their choices for producers and distributors? (2019)",
        "There has been a great deal of innovation in packaging design and formats in other alcoholic beverage categories. Why has the wine industry been slow to follow suit? Should it follow? (2018)",
        "Do today’s wine labels do a good job of communicating the most important information to consumers? (2016)",
        "What matters more, what's in the bottle or what's on the bottle? Does the wine industry take packaging seriously? (2014)",
        "How important is it for wine producers to develop new products? (2021)",
        "Outline key changes in consumer taste preferences over the past decade. Which wine-producing regions have evolved their offer successfully to match these changes? (2021)",
        "Consider the growth in demand for vegan, organic and sustainable wines. What can and should the wine industry be doing in response? (2019)",
        "How can the fortified wine category evolve to address current consumer trends? (2019)",
        
        "What are the commercial advantages and disadvantages of packing/bottling wine in the local market of consumption? Is this trend a good thing for the wine industry? (2106)",
        "Assess the role and importance of generic bodies (such as Wine Australia and Wines of Portugal). (2013)",
        "What is a "virtual winery"? Discuss the strengths and weaknesses of this business model. (2016)",
        
        "Outline the key changes in the fine wine investment market over the past decade. How do you see this developing over the next ten years? (2019)",
        "Which sectors of the wine industry are doing the most to advance the sustainability agenda? (2023)",
        "Who is making money in the wine industry and why? Discuss in detail three specific examples of profitable wine businesses from different parts of the wine industry supply chain. (2016)",
        "Which sectors of the wine industry are currently delivering the best return on investment? (2023)",
        "What are the financial barriers to success for a new wine producer and how can these be overcome? (2024)"
    ],
    "supply-demand": [
        "What have been the most important changes in global wine supply and demand in the past in years and what are their implications? (2018)",
        "How have the recent fluctuations in grape harvest size changed the global supply and demand of wine? How do you see this affecting the wine market in the next 24 months? (2013)",
        "What would be the implications of a short harvest in 2014 in European vineyards? (2014)"
    ],
    "industry-structure": [
        "There is much talk of consolidation in the wine industry, but where is the industry fragmenting and why? Give examples of businesses that are succeeding as a result. (2016)",
        "Is consolidation among wine producers good or bad for consumers? (2015)"
    ],
    "intermediaries": [
        "How can the role of the intermediaries between producer and on and off-trade retailers be justified? How is it changing? (2013)",
        "How can the role of the intermediaries between producer and consumer be justified? How is it changing? Use examples from several different wine markets. (2017)"
    ],
    "branding": [
        "What matters more to consumers in today’s wine market: brand, varietal or appellation? (2013)",
        "What matters more to consumers in today’s wine market; brand, varietal or appellation? (2018 S1)"
    ]
};

function generateQuestion() {
    const category = document.getElementById("category-dropdown").value;
    const categoryQuestions = questions[category];

    const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    const randomQuestion = categoryQuestions[randomIndex];

    document.getElementById("question-output").innerText = randomQuestion;
}

function resetGenerator() {
    document.getElementById("category-dropdown").value = "all";
    document.getElementById("question-output").innerText = "";
}
