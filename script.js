function toggleContent(collapseId, button) {
    var allCollapses = document.querySelectorAll('.collapse');
    
    // Hide all collapsible sections
    allCollapses.forEach(function(coll) {
        if (coll.id !== collapseId) {
            var collapseInstance = new bootstrap.Collapse(coll, {toggle: false});
            collapseInstance.hide();
        }
    });

    // Toggle the active class for buttons
    var allButtons = document.querySelectorAll('.btn-collapsible');
    allButtons.forEach(function(btn) {
        btn.classList.remove('active'); // Remove active class from all buttons
    });

    // Add active class to the clicked button
    button.classList.add('active');
    
    // Show the targeted content
    var targetCollapse = document.getElementById(collapseId);
    var collapseInstance = new bootstrap.Collapse(targetCollapse);
    collapseInstance.show();
}


function openImage(src) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;

    // Add slow-motion effect (fade-in)
    modalImage.style.opacity = 0;
    setTimeout(() => {
        modalImage.style.transition = "opacity 1s ease-in-out";
        modalImage.style.opacity = 1;
    }, 10);
}

// Function to load more images
function loadMoreImages(galleryId) {
    const moreImages = document.querySelectorAll(`#imageGallery${galleryId} .more-btn`);
    moreImages.forEach(image => {
        image.style.display = 'block';
    });
    document.getElementById(`moreViewButton${galleryId}`).style.display = 'none';
    document.getElementById(`lessViewButton${galleryId}`).style.display = 'inline';
}

// Function to load less images
function loadLessImages(galleryId) {
    const moreImages = document.querySelectorAll(`#imageGallery${galleryId} .more-btn`);
    moreImages.forEach(image => {
        image.style.display = 'none';
    });
    document.getElementById(`moreViewButton${galleryId}`).style.display = 'inline';
    document.getElementById(`lessViewButton${galleryId}`).style.display = 'none';
}

// Function to handle next image in the modal (if needed)
// Function to go to the next image
function nextImage() {
    const modalImage = document.getElementById('modalImage');
    let currentIndex = parseInt(modalImage.src.split('/').pop().split('.')[0]);  // Extract the current image index
    let nextIndex = (currentIndex % 37) + 1; // Loop back after image 37
    modalImage.src = `img/ag_icar_2023/${nextIndex}.JPG`;  // Update the image source
}

// Function to go to the previous image
function prevImage() {
    const modalImage = document.getElementById('modalImage');
    let currentIndex = parseInt(modalImage.src.split('/').pop().split('.')[0]);  // Extract the current image index
    let prevIndex = (currentIndex - 2 + 37) % 37 + 1; // Loop back after image 1
    modalImage.src = `img/ag_icar_2023/${prevIndex}.JPG`;  // Update the image source
}



function openImage1(src) {
    const modalImage = document.getElementById('modalImage1');
    modalImage.src = src;

    // Add slow-motion effect (fade-in)
    modalImage.style.opacity = 0;
    setTimeout(() => {
        modalImage.style.transition = "opacity 1s ease-in-out";
        modalImage.style.opacity = 1;
    }, 10);
}

function nextImage2() {
    const modalImage = document.getElementById('modalImage1');
    let currentIndex = parseInt(modalImage.src.split('/').pop().split('.')[0]);
    let nextIndex = (currentIndex % 10) + 1; // Loop back after image 30
    modalImage.src = `img/ag_icar_2022/${nextIndex}.JPG`;
}
function prevImage2() {
    const modalImage = document.getElementById('modalImage1');
    let currentIndex = parseInt(modalImage.src.split('/').pop().split('.')[0]);
    let prevIndex = (currentIndex - 2 + 10) % 10 + 1; // Loop back after image 1
    modalImage.src = `img/ag_icar_2022/${prevIndex}.JPG`;
}
