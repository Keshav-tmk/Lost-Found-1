document.addEventListener("DOMContentLoaded", () => {
  const imageUpload = document.getElementById("imageUpload");
  const previewBox = document.getElementById("previewBox");
  const previewImage = document.getElementById("previewImage");
  const postForm = document.getElementById("postForm");
  const postsContainer = document.getElementById("postsContainer");
  const searchInput = document.getElementById("searchInput");

  let uploadedImage = "";

  // Preview uploaded image
  imageUpload.addEventListener("change", () => {
    const file = imageUpload.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        uploadedImage = e.target.result;
        previewImage.src = uploadedImage;
        previewBox.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  // Handle form submission
  postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const description = document.getElementById("description").value;
    const link = document.getElementById("linkInput").value;

    // Create post card
    const postCard = document.createElement("div");
    postCard.classList.add("post-card");

    if (uploadedImage) {
      const img = document.createElement("img");
      img.src = uploadedImage;
      postCard.appendChild(img);
    }

    const descPara = document.createElement("p");
    descPara.textContent = description;
    postCard.appendChild(descPara);

    if (link) {
      const linkTag = document.createElement("a");
      linkTag.href = link;
      linkTag.target = "_blank";
      linkTag.textContent = "View Link";
      postCard.appendChild(linkTag);
    }

    // Add to feed
    postsContainer.prepend(postCard);

    // Reset form
    postForm.reset();
    previewBox.style.display = "none";
    uploadedImage = "";
  });

  // Search filter
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const posts = postsContainer.querySelectorAll(".post-card");

    posts.forEach(post => {
      const text = post.textContent.toLowerCase();
      post.style.display = text.includes(query) ? "block" : "none";
    });
  });
});
