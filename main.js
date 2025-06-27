// Categories for filtering
const categories = [
  { id: 'all', name: 'All' },
  { id: 'travel', name: 'Travel' },
  { id: 'photography', name: 'Photography' },
  { id: 'food', name: 'Food & Drink' },
  { id: 'tech', name: 'Technology' },
  { id: 'lifestyle', name: 'Lifestyle' },
  { id: 'design', name: 'Design' }
];

// Sample data for pins with themed images
const pins = [
  // Travel Pins
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    title: 'Mountain Sunrise',
    description: 'Breathtaking view of the first light hitting the mountain peaks',
    likes: 356,
    saves: 124,
    author: 'Nature Explorer',
    category: 'travel',
    tags: ['mountains', 'sunrise', 'landscape']
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop',
    title: 'Tropical Paradise',
    description: 'Crystal clear waters and white sandy beaches',
    likes: 412,
    saves: 298,
    author: 'Beach Lover',
    category: 'travel',
    tags: ['beach', 'tropical', 'vacation']
  },
  // Photography Pins
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop',
    title: 'Urban Exploration',
    description: 'Capturing the essence of city life',
    likes: 289,
    saves: 187,
    author: 'City Photographer',
    category: 'photography',
    tags: ['urban', 'city', 'photography']
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop',
    title: 'Nature\'s Beauty',
    description: 'The stunning colors of nature in autumn',
    likes: 387,
    saves: 254,
    author: 'Nature Photog',
    category: 'photography',
    tags: ['nature', 'landscape', 'seasons']
  },
  // Food & Drink Pins
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1504674900247-087703934869?w=800&auto=format&fit=crop',
    title: 'Gourmet Delights',
    description: 'Exquisite culinary creations from top chefs',
    likes: 421,
    saves: 312,
    author: 'Food Critic',
    category: 'food',
    tags: ['food', 'gourmet', 'cooking']
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop',
    title: 'Cocktail Hour',
    description: 'Artisanal cocktails for every occasion',
    likes: 298,
    saves: 187,
    author: 'Mixologist',
    category: 'food',
    tags: ['drinks', 'cocktails', 'mixology']
  },
  // Technology Pins
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop',
    title: 'Tech Gadgets',
    description: 'Latest technology and innovative devices',
    likes: 432,
    saves: 345,
    author: 'Tech Enthusiast',
    category: 'tech',
    tags: ['gadgets', 'tech', 'devices']
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
    title: 'AI Revolution',
    description: 'The future of artificial intelligence',
    likes: 387,
    saves: 298,
    author: 'Tech Guru',
    category: 'tech',
    tags: ['ai', 'future', 'technology']
  },
  // Lifestyle Pins
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    title: 'Minimalist Living',
    description: 'Less is more in modern home design',
    likes: 345,
    saves: 276,
    author: 'Minimalist',
    category: 'lifestyle',
    tags: ['minimalism', 'interior', 'design']
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    title: 'Work From Home',
    description: 'Productive home office setups',
    likes: 412,
    saves: 321,
    author: 'Remote Worker',
    category: 'lifestyle',
    tags: ['wfh', 'workspace', 'productivity']
  },
  // Design Pins
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop',
    title: 'Modern Architecture',
    description: 'Cutting-edge architectural designs',
    likes: 398,
    saves: 287,
    author: 'Design Enthusiast',
    category: 'design',
    tags: ['architecture', 'design', 'modern']
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04ed?w=800&auto=format&fit=crop',
    title: 'Interior Inspo',
    description: 'Beautiful interior design ideas',
    likes: 376,
    saves: 289,
    author: 'Interior Designer',
    category: 'design',
    tags: ['interior', 'decor', 'home']
  },
  // Additional Pins
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop',
    title: 'Mountain Hiking',
    description: 'Breathtaking trails and scenic views',
    likes: 412,
    saves: 298,
    author: 'Adventure Seeker',
    category: 'travel',
    tags: ['hiking', 'mountains', 'adventure']
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo 1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    title: 'Street Photography',
    description: 'Capturing life in the city',
    likes: 356,
    saves: 245,
    author: 'Street Photog',
    category: 'photography',
    tags: ['street', 'urban', 'photography']
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    title: 'Food Styling',
    description: 'Artistic food presentation',
    likes: 387,
    saves: 254,
    author: 'Food Artist',
    category: 'food',
    tags: ['food', 'styling', 'presentation']
  },
  {
    id: 16,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    title: 'Data Science',
    description: 'The art of data visualization',
    likes: 421,
    saves: 312,
    author: 'Data Scientist',
    category: 'tech',
    tags: ['data', 'visualization', 'analytics']
  },
  {
    id: 17,
    image: 'https://images.unsplash.com/photo 1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    title: 'Self Care',
    description: 'Wellness and self-care routines',
    likes: 345,
    saves: 267,
    author: 'Wellness Coach',
    category: 'lifestyle',
    tags: ['wellness', 'selfcare', 'health']
  },
  {
    id: 18,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902b5be9?w=800&auto=format&fit=crop',
    title: 'Graphic Design',
    description: 'Creative design inspiration',
    likes: 398,
    saves: 312,
    author: 'Designer',
    category: 'design',
    tags: ['graphic', 'design', 'creativity']
  },
  {
    id: 19,
    image: 'https://images.unsplash.com/photo 1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    title: 'Travel Photography',
    description: 'Capturing moments around the world',
    likes: 432,
    saves: 345,
    author: 'Travel Photog',
    category: 'photography',
    tags: ['travel', 'photography', 'adventure']
  },
  {
    id: 20,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop',
    title: 'Coding Setup',
    description: 'Perfect workspace for developers',
    likes: 412,
    saves: 321,
    author: 'Developer',
    category: 'tech',
    tags: ['coding', 'workspace', 'setup']
  }
];

// Current state
let currentCategory = 'all';
let currentView = 'home'; // 'home', 'explore', 'create'
let savedPins = [];
let createdPins = [];

// DOM Elements
const pinsContainer = document.querySelector('.pins-container');
const searchInput = document.querySelector('.search-input');
const categoryButtons = document.querySelectorAll('.category-btn');
const navLinks = document.querySelectorAll('.nav-link');
const createPinBtn = document.querySelector('.create-btn');
const createPinModal = document.createElement('div');
createPinModal.className = 'modal';
createPinModal.innerHTML = `
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <h2>Create New Pin</h2>
    <form id="create-pin-form">
      <div class="form-group">
        <label for="pin-image">Image URL</label>
        <input type="url" id="pin-image" required>
      </div>
      <div class="form-group">
        <label for="pin-title">Title</label>
        <input type="text" id="pin-title" required>
      </div>
      <div class="form-group">
        <label for="pin-description">Description</label>
        <textarea id="pin-description" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="pin-category">Category</label>
        <select id="pin-category" required>
          <option value="">Select a category</option>
          ${categories.slice(1).map(cat => `<option value="${cat.id}">${cat.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label for="pin-tags">Tags (comma separated)</label>
        <input type="text" id="pin-tags" placeholder="e.g., travel, adventure, nature">
      </div>
      <button type="submit" class="btn btn-primary">Create Pin</button>
    </form>
  </div>
`;
document.body.appendChild(createPinModal);

// Modal elements
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const createPinForm = document.getElementById('create-pin-form');

// Initialize the app
function init() {
  renderPins(pins);
  setupEventListeners();
  renderCategories();
  updateActiveNav();
}

// Render pins to the DOM
function renderPins(pinsToRender) {
  // Clear existing pins
  pinsContainer.innerHTML = '';
  
  // Create and append pin elements
  pinsToRender.forEach(pin => {
    const pinElement = createPinElement(pin);
    pinsContainer.appendChild(pinElement);
  });
}

// Create a single pin element
function createPinElement(pin) {
  const pinElement = document.createElement('div');
  pinElement.className = 'pin';
  pinElement.innerHTML = `
    <div class="pin-image-wrapper">
      <img src="${pin.image}" alt="${pin.title}" class="pin-image" loading="lazy">
      <div class="pin-hover-actions">
        <button class="btn btn-outline" aria-label="Save">
          <i class="fas fa-bookmark"></i>
          <span>Save</span>
        </button>
      </div>
    </div>
    <div class="pin-info">
      <h3 class="pin-title">${pin.title}</h3>
      <p class="pin-description">${pin.description}</p>
      <div class="pin-footer">
        <div class="pin-author">
          <i class="fas fa-user-circle"></i>
          <span>${pin.author}</span>
        </div>
        <div class="pin-actions">
          <div class="pin-action" data-action="like" data-pin-id="${pin.id}">
            <i class="far fa-heart"></i>
            <span>${pin.likes}</span>
          </div>
          <div class="pin-action" data-action="save" data-pin-id="${pin.id}">
            <i class="far fa-bookmark"></i>
            <span>${pin.saves}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add click handler to open pin in a new tab
  pinElement.addEventListener('click', (e) => {
    // Don't trigger if clicking on interactive elements
    if (!e.target.closest('.pin-action, .btn')) {
      window.open(pin.image, '_blank');
    }
  });
  
  return pinElement;
}

// Set active view
function setActiveView(view) {
  currentView = view;
  updateActiveNav();
  
  switch(view) {
    case 'home':
      filterPins();
      break;
    case 'explore':
      showExploreView();
      break;
    case 'create':
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      break;
  }
}

// Update active navigation
function updateActiveNav() {
  navLinks.forEach(link => {
    if (link.getAttribute('data-view') === currentView) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Show explore view with categories
function showExploreView() {
  const exploreContent = `
    <div class="explore-container">
      <h2>Explore Categories</h2>
      <div class="categories-grid">
        ${categories.slice(1).map(cat => `
          <div class="category-card" data-category="${cat.id}">
            <div class="category-image" style="background-image: url('https://source.unsplash.com/random/400x300/?${cat.name}')"></div>
            <h3>${cat.name}</h3>
            <p>Discover amazing ${cat.name.toLowerCase()} content</p>
          </div>
        `).join('')}
      </div>
      
      <div class="trending-section">
        <h3>Trending Now</h3>
        <div class="trending-pins">
          ${[...pins].sort(() => 0.5 - Math.random()).slice(0, 6).map(pin => `
            <div class="trending-pin">
              <img src="${pin.image}" alt="${pin.title}">
              <div class="trending-pin-info">
                <h4>${pin.title}</h4>
                <p>${pin.likes} likes</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  pinsContainer.innerHTML = exploreContent;
  
  // Add click handlers for category cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      currentCategory = category;
      filterPins();
      setActiveView('home');
    });
  });
}

// Render categories
function renderCategories() {
  const categoriesContainer = document.querySelector('.categories');
  if (categoriesContainer) {
    categoriesContainer.innerHTML = categories.map(cat => `
      <button class="category-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
        ${cat.name}
      </button>
    `).join('');
  }
}

// Handle create pin form submission
function handleCreatePin(e) {
  e.preventDefault();
  
  const newPin = {
    id: Date.now(),
    image: document.getElementById('pin-image').value,
    title: document.getElementById('pin-title').value,
    description: document.getElementById('pin-description').value,
    category: document.getElementById('pin-category').value,
    tags: document.getElementById('pin-tags').value.split(',').map(tag => tag.trim()),
    likes: 0,
    saves: 0,
    author: 'You',
    createdAt: new Date().toISOString()
  };
  
  // Add to the beginning of the pins array
  pins.unshift(newPin);
  createdPins.push(newPin);
  
  // Reset form
  createPinForm.reset();
  
  // Close modal
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  
  // Show success message
  showNotification('Welcome to VisualDiscoveryInterface!');
  
  // Update the view
  if (currentView === 'home') {
    filterPins();
  }
}

// Filter pins by category or search
function filterPins() {
  let filteredPins = [...pins];
  
  // Filter by category
  if (currentCategory && currentCategory !== 'all') {
    filteredPins = filteredPins.filter(pin => pin.category === currentCategory);
  }
  
  // Filter by search query
  const searchQuery = searchInput.value.toLowerCase();
  if (searchQuery) {
    filteredPins = filteredPins.filter(pin => 
      pin.title.toLowerCase().includes(searchQuery) ||
      pin.description.toLowerCase().includes(searchQuery) ||
      pin.author.toLowerCase().includes(searchQuery) ||
      (pin.tags && pin.tags.some(tag => tag.toLowerCase().includes(searchQuery)))
    );
  }
  
  renderPins(filteredPins);
}

// Load more pins (mock)
function loadMorePins() {
  console.log('Loading more pins...');
  // In a real app, you would fetch more pins from an API
  // For now, we'll just show a notification
  showNotification('Loading more pins...');
}

// Search pins
function searchPins(query) {
  if (!query.trim()) {
    renderPins(pins);
    return;
  }
  
  const searchTerm = query.toLowerCase();
  const filteredPins = pins.filter(pin => 
    pin.title.toLowerCase().includes(searchTerm) ||
    pin.description.toLowerCase().includes(searchTerm) ||
    pin.author.toLowerCase().includes(searchTerm)
  );
  
  renderPins(filteredPins);
}

// Handle pin interactions
function handlePinInteraction(e) {
  const actionElement = e.target.closest('.pin-action, .btn');
  if (!actionElement) return;
  
  e.stopPropagation();
  
  const pinId = parseInt(actionElement.dataset.pinId);
  const action = actionElement.dataset.action || 'save';
  const pin = pins.find(p => p.id === pinId);
  
  if (!pin) return;
  
  if (action === 'like') {
    const icon = actionElement.querySelector('i');
    const countElement = actionElement.querySelector('span');
    
    if (actionElement.classList.contains('liked')) {
      pin.likes--;
      icon.classList.remove('fas', 'text-red-500');
      icon.classList.add('far');
    } else {
      pin.likes++;
      icon.classList.remove('far');
      icon.classList.add('fas', 'text-red-500');
    }
    
    countElement.textContent = pin.likes;
    actionElement.classList.toggle('liked');
    
  } else if (action === 'save') {
    const icon = actionElement.querySelector('i') || actionElement;
    const countElement = actionElement.querySelector('span');
    
    if (actionElement.classList.contains('saved')) {
      pin.saves--;
      icon.classList.remove('fas', 'text-blue-500');
      icon.classList.add('far');
    } else {
      pin.saves++;
      icon.classList.remove('far');
      icon.classList.add('fas', 'text-blue-500');
    }
    
    if (countElement) {
      countElement.textContent = pin.saves;
    }
    
    actionElement.classList.toggle('saved');
    
    // Show a temporary notification
    showNotification('Pin saved to your VisualDiscoveryInterface collection!');
  }
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Trigger reflow
  notification.offsetHeight;
  
  // Add show class
  notification.classList.add('show');
  
  // Remove notification after delay
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Set up event listeners
function setupEventListeners() {
  // Navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.getAttribute('data-view');
      if (view) {
        setActiveView(view);
      }
    });
  });

  // Create pin button
  createPinBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Create pin form submission
  createPinForm.addEventListener('submit', handleCreatePin);
  
  // Category filter
  document.querySelector('.categories').addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
      // Remove active class from all buttons
      document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      // Add active class to clicked button
      e.target.classList.add('active');
      // Filter pins
      currentCategory = e.target.dataset.category || 'all';
      filterPins();
    }
  });
  
  // Search input
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchPins(e.target.value);
    }, 300);
  });
  
  // Pin interactions
  document.addEventListener('click', handlePinInteraction);
  
  // Infinite scroll (mock)
  window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
      loadMorePins();
    }
  });
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
