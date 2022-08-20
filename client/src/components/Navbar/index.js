import React from "react";
// import { Link } from "react-router-dom";

// import Auth from "../../utils/auth";

// TODO: Add link components to redirect to other pages!

(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 

const Navbar = () => {
  return (
    <section class="navigation">
      <div class="nav-container">
        <div class="brand">
          <a href="#!">Purly</a>
        </div>
        <nav>
          <div class="nav-mobile">
            <a id="navbar-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul class="nav-list">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">User</a>
              <ul class="navbar-dropdown">
                <li>
                  <a href="#!">Dashboard</a>
                </li>
                <li>
                  <a href="#!">Pattern Search</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
