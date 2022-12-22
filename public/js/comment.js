const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector("#comment-content").value.trim();
    const post_id = document.querySelector("#post_id").value.trim()
  
    if (content) {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ content, post_id }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".comment-form")
    .addEventListener("submit", commentFormHandler);