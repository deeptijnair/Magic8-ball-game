function displayRandomStrategy(){

    let strategies = [
        "Write a blog post or create a video tutorial about your learning journey.",
        "Write a blog post or create a video tutorial about your coding project.",
        "Write a blog post or create a video tutorial about your solution to a common problem.",
        "Share your project on a platform like GitHub and promote it on social media.",
        "Follow and interact with an influential developer on social media.",
        "Follow and interact with a tech community on social media.",
        "Join a coding group or Discord channel to ask questions, share knowledge, and network.",
        "Participate in an online coding challenge or hackathon and share your results.",
        "Optimize your LinkedIn profile with a professional photo, detailed experience, and a clear headline.",
        "Create a personal portfolio website to showcase your projects, skills, and experience.",
        "Share links to your portfolio, GitHub repositories, or any article you've written.",
        "Join a local or online tech meetup and network with other attendees.",
        "Volunteer to speak at a meetup or help organize an event.",
        "Reach out to a local small business and offer to build or improve their websites.",
        "Offer free or discounted services in exchange for testimonials and references.",
        "Join a local coding bootcamp or workshop as a mentor or volunteer.",
        "Attend a local business networking event, not just tech-specific. Be prepared to discuss your skills and projects.",
        "Engage with a local startup or co-working space to meet entrepreneurs who might need development help.",
        "Support others by commenting on their posts, sharing their content, or providing constructive feedback.",
        "List your services on a local business job board.",
        "Look for an internship or part-time opportunity with a local startup or small business.",
        "Develop a personal brand. Use the same username and profile picture across platforms for recognition."
      ]

      // randomly produce a number that will represent the index

      let randomIndex = Math.floor(Math.random() * strategies.length)

      //store the value that is produced from the index notation
      let randomStrategy = strategies[randomIndex];

      //replace the innerHTML with the strategy
      document.getElementById("strategy").innerHTML = randomStrategy;

}