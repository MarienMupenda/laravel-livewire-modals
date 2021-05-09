window.bootstrap = require('bootstrap');

Livewire.on('showBootstrapModal', () => {
    let element = document.getElementById('laravel-livewire-modals');
    let modal = new window.bootstrap.Modal(element, {
        backdrop: 'static',
        keyboard: false,
    });

    modal.show();
});

Livewire.on('hideModal', () => {
    let element = document.getElementById('laravel-livewire-modals');
    let modal = bootstrap.Modal.getInstance(element);

    element.addEventListener('hidden.bs.modal', () => {
        Livewire.emit('resetModal');
    });

    modal.hide();
});
