const id = document.querySelector("#post_id").value;

const updatePostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#update-title").value.trim();
  const content = document.querySelector("#update-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const deletePostHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".update-form")
  .addEventListener("submit", updatePostFormHandler);

document
  .querySelector("#deleteBtn")
  .addEventListener("click", deletePostHandler);
