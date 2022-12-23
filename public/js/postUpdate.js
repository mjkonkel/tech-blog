const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#update-title").value.trim();
  const content = document.querySelector("#update-content").value.trim();

  if (title && content) {
    const response = await fetch("/api/posts", {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace("/api/posts");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".update-form")
  .addEventListener("submit", postFormHandler);