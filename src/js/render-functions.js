export function renderCustomer(customers, customerHtml) {
  const item = customers
    .map(el => {
      let { id, user } = el;
      const { lastName, company, phoneNumder, email, country, status } =
        customerHtml();
      const statusClass =
        status.toLowerCase() === 'active'
          ? 'status__active'
          : 'status__inactive';
      if (user.length > 10) {
        user = 'Bob';
      }
      return `
          <li class='customer__item'>
          <span class='customer__info--name'> ${user[0].toUpperCase()}${user.slice(
        1
      )} ${lastName}</span>
            <span class='customer__info--company'> ${company}</span>
            <span class='customer__info--phoneNumder'> ${phoneNumder}</span>
            <span class='customer__info--email'> ${user.toLowerCase()}${email}</span>
            <span class='customer__info--country'> ${country}</span>
            <span class='customer__info--status ${statusClass}'> ${status}</span>
          </li>
      `;
    })
    .join('');

  return item;
}

export function renderPaginationText(page) {
  return `<p class='text' >Showing data ${page * 8 - 7} to ${
    page * 8
  } of  504 entries</p>`;
}

export async function renderBattons(page, maxPages) {
  let buttons = [];

  const prevBtn = document.createElement('button');
  prevBtn.textContent = '<';
  prevBtn.classList.add('prev__btn');
  buttons.push(prevBtn);

  // Determine range of page buttons to show
  let startPage, endPage;

  // Show a sliding window of 5 buttons
  if (page <= 3) {
    startPage = 1;
    endPage = Math.min(5, maxPages);
  } else if (page >= maxPages - 2) {
    startPage = Math.max(maxPages - 4, 1);
    endPage = maxPages;
  } else {
    startPage = page - 2;
    endPage = page + 2;
  }

  // Add number buttons dynamically
  for (let i = startPage; i <= endPage; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('page__btn');
    if (i === page) button.classList.add('pressed__btn');
    buttons.push(button);
  }

  // Add ellipsis if needed
  if (endPage < maxPages && page < maxPages - 3) {
    const ellipsisBtn = document.createElement('button');
    ellipsisBtn.textContent = '...';
    ellipsisBtn.classList.add('page__btn');
    buttons.push(ellipsisBtn);
  }

  // Add last page button if not in range
  if (endPage < maxPages) {
    const lastBtn = document.createElement('button');
    lastBtn.textContent = maxPages;
    lastBtn.classList.add('page__btn');
    buttons.push(lastBtn);
  }

  // Add the next button
  const nextBtn = document.createElement('button');
  nextBtn.textContent = '>';
  nextBtn.classList.add('next__btn');
  buttons.push(nextBtn);

  return buttons;
}
