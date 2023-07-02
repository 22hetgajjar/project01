
document.addEventListener("DOMContentLoaded", () => {
  const jobs = [
    {
      title: "Software Engineer",
      company: "ABC Technologies",
      location: "New York",
      description: "We are seeking a talented software engineer to join our team.",
    },
    {
      title: "Graphic Designer",
      company: "XYZ Creative Agency",
      location: "San Francisco",
      description: "We are looking for a skilled graphic designer with experience in Adobe Creative Suite.",
    },
   

  ];

  const jobsList = document.getElementById("jobs");
  const jobInfo = document.getElementById("job-info");

  // Display the list of jobs
  function displayJobs() {
    jobsList.innerHTML = "";

    jobs.forEach((job, index) => {
      const li = document.createElement("li");
      li.textContent = job.title;
      li.addEventListener("click", () => displayJobDetails(index));
      jobsList.appendChild(li);
    });
  }

 
  function displayJobDetails(index) {
    const job = jobs[index];

    jobInfo.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Description:</strong> ${job.description}</p>
    `;
  }

 
  displayJobs();
});
