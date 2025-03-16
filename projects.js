const projects = [
    {
        title: "DoorDash",
        picture: "static/ddash.png",
        description: "Doordash ETA Prediction based on features such as type of cuisine, number of orders, number of drivers and more. Learn more about thisproject at the link below.",
        link: "https://github.com/Sherif-Elfiky/CSE151AProj"

      },


      {
        title: "Pantry Pal",
        picture: "static/burger.png",
        description: "We create breakfast lunch and dinner recipes from available ingredients. We provided recipes and an image of the final product as well. Learn more about this project at the link below.",
        link: "https://github.com/ucsd-cse110-fa23/cse-110-project-team-34"
      }
      ,
      {
        title: "Waster",
        picture: "static/basket.png",
        description: "Tracking Food Waste/Giving Shopping Recs. We are incorporating an IOT camera that will take a picture of receipts and track the food bought, then the user will input food wasted. Our app will respond with recommendations for better shopping leading to reduced enviromental waste. This product is still in the works. Below is an article about food waste in the United States.",
        link: "https://ballardbrief.byu.edu/issue-briefs/food-waste-in-the-united-states"
      }

      ,

      {
        title: "Chemistry Tutor at Monterey Peninsula College",
        picture: "static/chem.png",
        description: "I was a chemistry tutor for Chem30a at Monterey Peninsula College. I held office hours twice a week for 3 hours. I was able to help many students understand the basics of chemistry and improve their test scores. This experience was really cool as it taught me much about learning and teaching. For more info about chemistry at MPC click the link below.",
        link: "https://catalog.mpc.edu/course-descriptions/chem/"
      }

];


function loadLocalData() {
    const storedProjects = localStorage.getItem("projects");
    
    // Check if data exists in localStorage
    if (storedProjects) {
      const projects = JSON.parse(storedProjects); // Convert string back to array
  
      // Clear existing cards in case there's any old data
      const cardContainer = document.getElementById("project-cards");
      cardContainer.innerHTML = ""; // Clear previous cards
      
      // Create and append new cards from localStorage
      projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        card.innerHTML = `
          <img src="${project.picture}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">Learn more</a>
        `;
        cardContainer.appendChild(card);
      });
    } else {
      console.log("No projects found in localStorage.");
    }
  }
  
  // Attach event listener to "Load Local" button
  document.getElementById("load-local").addEventListener("click", loadLocalData);
