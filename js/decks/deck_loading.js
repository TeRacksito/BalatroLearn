function loadingState() {
    let container = document.getElementById('main_section');

    container.innerHTML = "";

    for (let i = 0; i < 6; i++) {

        let loading = document.createElement('div');
        loading.innerHTML = `
        <div class="deck deck-ghost">
            <div class="deck-grey-container">
                <div class="deck-grey-block"></div>
            </div>
            <div class="pixelBox pixelBox-ghost">
                <div class="pixelBoxContent"></div>
            </div>
            <div class="pixelBox pixelBox-ghost">
                <div class="pixelBoxContent"></div>
            </div>
        </div>
        `;
        container.appendChild(loading);
    }
}

