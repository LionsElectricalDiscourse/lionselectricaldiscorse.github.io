const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let currentFellow = 0;

const fellows = [
  {
    name: "Alex Alford",
    image: "images/millenium_fellows/Alex_Alford.png",
    bio: "Alex Alford is a senior Film and Television Production student with minors in Business Administration and Screenwriting at Loyola Marymount University in Los Angeles, California. Originally from Dallas, Texas, Alex is passionate about telling real, relatable stories that can serve as a catalyst for positive social change. Currently, Alex is pursuing a career in screenwriting and works as a content development intern in Los Angeles."
  },
  {
    name: "Amanda Meegan",
    image: "images/millenium_fellows/Amanda_Meegan.png",
    bio: "Amanda Meegan is Marketing student in the Honors Program at Loyola Marymount University. She is passionate about global investment and international trade, with specific interests in clean technology and critical materials. She has presented her research focusing on cultural insights to US-Australia bilateral investment at Harvard University, and is a keynote speaker at the LEAP Foundation's annual leadership program at UCLA. Amanda has held internships with the California Governor's Office and Walt Disney Television, and is highly involved in her campus service organization that mentors at-risk youth."
  },
  {
    name: "Andrew Seaman",
    image: "images/millenium_fellows/Andrew_Seaman.png",
    bio: "Andrew Seaman was born in Littleton Colorado. He attended Mullen High School and is currently attending Loyola Marymount University. There he wishes to major Computer Science with an Applied Math minor. Additionally he is the Vice President of Service for Sursum Corda Service Organization which focuses on addressing food insecurity in the Los Angeles community."
  },
  {
    name: "Fosse Lin-Bianco",
    image: "images/millenium_fellows/Fosse_Lin.png",
    bio: "Fosse Lin-Bianco is a student at Loyola Marymount University studying Electrical Engineering as a major and Dance as a minor. He plans to combine both his passions of Engineering and Circus Arts to create innovative artistic experiences that change the way audiences view the world around them."
  },
  {
    name: "Kyle Wilson",
    image: "images/millenium_fellows/Kyle_Wislon.png",
    bio: "Kyle Wilson is a senior psychology major at Loyola Marymount University. He plans to begin his doctorate studies in clinical psychology in fall 2021. In addition to his passion for mental health, he also advocates for sustainability through ethical consumption and mindful lifestyle practices."
  },
  {
    name: "Leigh Lewis",
    image: "images/millenium_fellows/Leigh_Lewis.png",
    bio: "Leigh studies a psychology major with a computer science minor from Alabama!"
  },
  {
    name: "Mackenzie Clark",
    image: "images/millenium_fellows/Mackenzie_.png",
    bio: "Mackenzie is a Film Production and Spanish major who minors in Business Adminstration at Loyola Marymount University.  She is a member of the honors program and also an Arrupe scholar.  She additionally is a legal intern at Tsang & Associates, PLC!"
  },
  {
    name: "Megan West",
    image: "images/millenium_fellows/Megan_West.png",
    bio: "Megan West is a senior at Loyola Marymount University majoring in Electrical and Computer Engineering and minoring in Applied Mathematics. She is passionate about engineering renewable energy solutions and working to make power systems more efficient. She plans to pursue research in Electrical Engineering and Advanced Energy Systems after graduating from LMU in May."
  },
  {
    name: "Rebecca Davenport",
    image: "images/millenium_fellows/Rebecca_Davenport.png",
    bio: "Rebecca Davenport is an undergraduate Biology major at Loyola Marymount University. She is originally from Caldwell, New Jersey. She hopes to pursue a career in wildlife conservation and management to protect endangered species on islands around the world."
  },
  {
    name: "Taylor Flanagan",
    image: "images/millenium_fellows/Taylor_Flanagan.png",
    bio: "Taylor Flanagan is a senior at Loyola Marymount University studying mathematics and computer science. Taylor is passionate about the environment and hopes to someday work in environmental research."
  }
]

  rightArrow.addEventListener("click", ()=>{
    const lastFellow = fellows.length-1;
    let onLastFellow = currentFellow === fellows.length - 1;
    if (onLastFellow) {
      currentFellow--;
    } if (currentFellow === fellows.length - 2) {
      rightArrow.src = "images/icons/inactive-right-arrow.png";
    } else {
      rightArrow.src = "images/icons/selected_right_arrow.png";
      leftArrow.src = "images/icons/left_arrow.png";
    }
    currentFellow++;
    change_fellow(currentFellow);
  });

  rightArrow.addEventListener("mouseover", ()=>{
    let onLastFellow = currentFellow === fellows.length - 1;
    if (!onLastFellow) {
      rightArrow.src = "images/icons/selected_right_arrow.png";
    }
  });

  rightArrow.addEventListener("mouseout", ()=> {
    let onLastFellow = currentFellow === fellows.length - 1;
    if (!onLastFellow) {
      rightArrow.src = "images/icons/right_arrow.png";
    }
  })

  leftArrow.addEventListener("click", ()=>{
    const firstFellow = 0;
    let onFirstFellow = currentFellow === firstFellow;
    if (onFirstFellow) {
      currentFellow++;
    } if (currentFellow === 1) {
      leftArrow.src = "images/icons/inactive-left-arrow.png";
    } else {
      rightArrow.src = "images/icons/right_arrow.png";
      leftArrow.src = "images/icons/selected_left_arrow.png";
    }
    currentFellow--;
    change_fellow(currentFellow)
  })

  leftArrow.addEventListener("mouseover", ()=>{
    let onFirstFellow = currentFellow === 0;
    if (!onFirstFellow) {
      leftArrow.src = "images/icons/selected_left_arrow.png";
    }
  });

  leftArrow.addEventListener("mouseout", ()=> {
    let onFirstFellow = currentFellow === 0;
    if (!onFirstFellow) {
      leftArrow.src = "images/icons/left_arrow.png";
    }
  })

  function change_fellow(fellowIndex) {
    const fellowName = document.getElementById("fellow-name");
    const fellowImage = document.getElementById("fellow-image");
    const fellowBio = document.getElementById("fellow-bio");

    remove_all_child_nodes(fellowName);
    remove_all_child_nodes(fellowBio);

    const name = document.createElement('h2');
    name.appendChild(document.createTextNode(fellows[fellowIndex].name));
    fellowName.appendChild(name);

    fellowImage.src = fellows[fellowIndex].image;

    const bio = document.createElement('p');
    bio.appendChild(document.createTextNode(fellows[fellowIndex].bio));
    fellowBio.appendChild(bio);
  }

  function remove_all_child_nodes(parent) {
    while(parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  change_fellow(0);
