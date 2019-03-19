/**************************************************************************************************************
  *
  * This script does two things:
  * 1. Visually hide the page title, but keep it discoverable for screen readers
  * 2. Insert the beacon brand logo in the page-heading element, in the centre of the hero
  *
  * Should be triggered in Google Tag Manager.
  *
  * USAGE:
  * Include two script elements in a 'custom HTML' GTM tag:
  *
  * <script src='http://www.bath.ac.uk/lens/universal/js/components/hero-beaconbrand.js'></script>
  * <script>
  *   createBeaconBrand({ data: '<g fill.../>',         // A string containing the innerhtml for the svg tag
                          width: 220,                   // Width of the element
                          height: 70,                   // Height of the element
                          class: 'beacon-brand' })      // The class of the svg element
  * </script>
  *
  **************************************************************************************************************/

function createBeaconBrand (params) {
   // Constants for insertion targeting
   var pageTitle = document.getElementsByClassName('page-title')[0]
   var pageHeading = document.getElementsByClassName('page-heading')[0]

   // Create the brand brand SVG element
   var beaconBrand = document.createElementNS('http://www.w3.org/2000/svg', 'svg') // A string containing the innerhtml for the svg tag
   beaconBrand.setAttribute('xmlns', 'http://www.w3.org/2000/svg') // Setting the document type
   beaconBrand.setAttribute('width', '450') // Forces the SVG width to 450px, scaling it up using the ratio set in the viewBox
   beaconBrand.setAttribute('viewBox', '0 0 ' + params.width + ' ' + params.height) // Maintains the SVG ratio
   beaconBrand.setAttribute('class', params.class + ' half-padding') // Setting the CSS class on the SVG
   beaconBrand.innerHTML = params.data

   // Add .text-center class to the.page-title block to centralise all elements
   document.getElementsByClassName('page-title')[0].classList.add('text-center')

   // Add .screen-reader class to .page-heading to visually hide the heading
   document.getElementsByClassName('page-heading')[0].classList.add('screen-reader')

   // Insert the beacon brand logo inside the .page-title element above the .page-heading
   pageTitle.insertBefore(beaconBrand, pageHeading)
}
