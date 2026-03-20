export default function toggleModal() {
    const modal = document.getElementById("modal");

    if(modal.open) {
	modal.close();
    } else {
	modal.showModal();
    }
}
