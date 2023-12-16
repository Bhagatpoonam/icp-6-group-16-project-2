let isOpen = false;
function togglesidebae() {
    const sidebar = document.getElementById('sidebar');
    if (isOpen) {
        sidebar.classList.add('sidebar-closed');
        isOpen = false;
    }
    else {
        sidebar.classList.remove('sidebar-closed');
        isOpen = true;
    }
}