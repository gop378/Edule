const jobs = [
    {
      title: "Grade school tutors(1-12)",
      image: "images/ts.png",
      details:
        "Enthusiastic and dedicated Online Grade School Teachers to join our team and help shape the future of education. As an Online Grade School tutors, you will play a crucial role in providing high-quality education to students from 1st standard to 12th standard." ,  

      openPositions: "8",
      link: "jd.html",
    },
  
    {
      title: "Kg tutors",
      image: "images/ts.png",
      details:
        "Building Foundations for Lifelong Learning.",
      openPositions: "3",
      link: "jd1.html",
    },
  
    {
      title: "Entrance Trainers",
      image: "images/ts.png",
      details:
        "seeking a highly motivated and experienced Trainers to join our team.",
      openPositions: "10",
      link: "jd4.html",
    },
  
    {
      title: "Language Trainers",
      image: "images/ts.png",
      details:"We require qualified, experienced native speaker language trainers to teach our clients.",
      openPositions: "4",
      link: "jdL.html",
    },
  
    {
      title: "Academic Counselors",
      image: "images/ts.png",
      details:
        "provide guidance and support to our learners, helping them navigate their educational journey with our platform. ",
      openPositions: "2",
      link: "jd3.html",
    },


    {
        title: "Recruitment officer",
        image: "images/m.jpg",
        details:
          "The Human Resources Recruitment Officer responsible for managing all aspects of staff recruitment. H/she works closely with hiring managers to process forms, shortlist candidates, schedule interviews, and communicate with candidates and provides a high quality and professional human resources Recruitment service through the effective administration of HR recruitment system based on Recruitment policies.",
        openPositions: "2",
        link: "jd5.html",
    },

    {
        title: "Graphic Designer ",
        image: "images/s.png",
        details:
          "play a crucial role in helping us create visually appealing and effective educational content that empowers learners of all ages.",
        openPositions: "3",
        link: "jd6.html",
    },

  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });