var tabs = ['sakura', 'syaoran', 'tomoyo', 'kero'];
var currentTab = 0;

function showTab(tabName, button) {
    document.querySelector('.tab-content.active').classList.remove('active');
    document.querySelector('.tab-button.active').classList.remove('active');
    document.getElementById(tabName).classList.add('active');
    button.classList.add('active');
    currentTab = tabs.indexOf(tabName);
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        currentTab = e.key === 'ArrowLeft' ? (currentTab > 0 ? currentTab - 1 : 3) : (currentTab < 3 ? currentTab + 1 : 0);
        document.getElementsByClassName('tab-button')[currentTab].click();
    }
});