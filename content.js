let isMenuPage = false;

let wait = function() {
  setTimeout(function() {
    let items = $('div[id^="menu-item-"]');
    if (items.length === 0) {
      isMenuPage = false;
    } else if (!isMenuPage) {
      isMenuPage = true;
      items.each(hideIfTooExpensive);
    }
    wait();
  }, 1000);
}
wait();

function hideIfTooExpensive() {
  let priceElem = $(this).find("strong").eq(0);
  let priceText = priceElem.text().trim().substring(1);

  if (Number(priceText) > 16.00) {
    $(this).hide();
  }
}

