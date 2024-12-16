/* global document */

function enhanceGalleryInteractivity() {
         // Select all elements with the &quot;card&quot; class
         const galleryCards = document.querySelectorAll('.card, .card-small');
    
         galleryCards.forEach((card) => {
         const cardStyle = card.style; // Create a reference to the style object

        card.addEventListener('mouseover', () => {
         cardStyle.transform = 'scale(1.05)';
        cardStyle.transition = 'transform 0.3s ease';
        });
    
         card.addEventListener('mouseout', () => {
        cardStyle.transform = 'scale(1)';
        });
         });
         }
         
        document.addEventListener('DOMContentLoaded', () => {
         enhanceGalleryInteractivity();
        });