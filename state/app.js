const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page) {
  document.querySelector('.content').innerHTML = `
    <h1>Welcome to State Home Page</h1>

    <p>This is the default home page on http request</p>
  `;
};

// About State
const aboutState = function(page) {
  document.querySelector('.content').innerHTML = `
    <h2>This is the State About Page</h2>

    <p>You are seeing this page because you clicked the about link in the hero nav</p>
  `;
};

// Contact State
const contactState = function(page) {
  document.querySelector('.content').innerHTML = `
    <form>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input is-danger" type="text" placeholder="Enter your name">
        </div>
      </div>
            
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input is-danger" type="email" placeholder="Enter your email@address.example">
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>
      
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="How can we assist you today?"></textarea>
        </div>
      </div>
      
      <div class="field">
        <div class="control">
          <button class="button is-link" type="submit">Submit</button>
        </div>
      </div>
    </form>
  `;
};

// Instantiate PageState
const page = new PageState();

// Init the first state
page.init();

// UI const
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});