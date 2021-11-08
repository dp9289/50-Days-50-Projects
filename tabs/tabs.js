const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = Array.from(tabs.querySelectorAll("[role='tabpanel']"));

function handleTabClick(e) {
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  tabButtons.forEach((button) => {
    button.setAttribute("aria-selected", "false");
  });
  const { id } = e.currentTarget;
  e.currentTarget.setAttribute("aria-selected", "true");
  /* Method 1
  const tabPanel = tabs.querySelector(`[aria-labelledby=${id}`);
  tabPanel.hidden = false;
  */

  /* Method 2 */
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", handleTabClick);
});
