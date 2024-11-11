import { createCustomer } from './js/api.js';
import { CustomServer } from './js/pixabay-api.js';
import {
  renderBattons,
  renderCustomer,
  renderPaginationText,
} from './js/render-functions.js';

const nameCustom = new CustomServer();

const body = document.querySelector('body');

const sidebarList = document.querySelector('.sidebar__list');
const sidebarButtons = document.querySelectorAll('.sidebar__btn');
const contents = document.querySelectorAll('.content');
const customersList = document.querySelector('.custom__info');
const sidebar = document.querySelector('.sidebar');
const contView = document.querySelector('.cont__view');
// const header = document.querySelector('.header');
// const main = document.querySelector('.main__wind');
// ==========================================================================
const customBtn = document.getElementById('customers');

// =============================pagination=============================================
const paginationElemtText = document.querySelector('.pagination__text');
const pageButtonsCont = document.querySelector('.cont__buttons');
// const paginationElement = document.querySelector('.page-buttons');
const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');

let page = 1;
let maxPages;
// console.log(maxPages);

sidebarButtons.forEach(sidebarButton => {
  sidebarButton.addEventListener('click', () => {
    const targetContent = sidebarButton.getAttribute('data-content');
    contents.forEach(content => content.classList.remove('active'));

    if (window.innerWidth <= 767) {
      sidebar.classList.add('display__none');
    }

    document.getElementById(targetContent).classList.add('active');
    contView.classList.remove('display__none');

    if (targetContent === 'customers') {
      addCustomers(page);
    }
  });
});
// ============================Back button for all tabs мobile version========================================
contents.forEach(section => {
  const backButton = document.createElement('button');

  backButton.textContent = 'Back';
  backButton.classList.add('back__button');
  section.prepend(backButton);

  backButton.addEventListener('click', () => {
    sidebar.classList.remove('display__none');
    sidebar.classList.add('sidebar');

    if (window.innerWidth <= 767) {
      contView.classList.add('display__none');
    }
  });
});
// ========================================================================
async function addCustomers(page) {
  customersList.innerHTML = '';
  try {
    if (page > maxPages) {
      page = 1;
    }
    const data = await nameCustom.getCustomName(page);
    maxPages = Math.ceil(data.totalHits / nameCustom.pageSize);

    const customerHtml = renderCustomer(data.hits, createCustomer);
    customersList.insertAdjacentHTML('beforeend', customerHtml);
    const paginationText = renderPaginationText(page);
    paginationElemtText.innerHTML = paginationText;
    renderPagination();
  } catch (error) {
    console.log(error);
  } finally {
    page += 1;
  }
}

async function renderPagination() {
  pageButtonsCont.innerHTML = '';

  const buttons = await renderBattons(page, maxPages);

  buttons.forEach(button => {
    // Apply 'pressed__btn' class to the current page button
    if (Number(button.textContent) === page) {
      button.classList.add('pressed__btn');
    }

    // Add click event listener to each button
    button.addEventListener('click', () => {
      let content = button.textContent;
      let prevPage = page;

      if (content === '>') {
        if (page < maxPages) {
          page++;
        }
      } else if (content === '<') {
        if (page > 1) {
          page--;
        }
      } else if (content !== '...') {
        page = Number(content);
      }

      if (prevPage === page) return;

      // Fetch customers and update the pagination
      addCustomers(page);
      renderPaginationText(page);
      renderPagination(); // Re-render pagination to update buttons
    });

    pageButtonsCont.appendChild(button);
  });
}
