// Handle the "Add to Cart" functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      productCard.style.transform = "scale(1.1)";  // Animation on add to cart
  
      setTimeout(() => {
        productCard.style.transform = "scale(1)";
        alert("Product added to cart!");
      }, 300);
    });
  });
  