const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector("#comment-content").value.trim();
  
    if (content) {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".comment-form")
    .addEventListener("submit", commentFormHandler);