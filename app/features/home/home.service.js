export default class HomeService {
    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;
        this.selected = null;
    }
    
    saveTask(tasks, task) {
        tasks.$add({
            email: localStorage.getItem("session"),
            description: task,
            status: 'Waiting for complete',
            completed: false
        });
    }
    
    updateTask(tasks, task) {
        tasks.$save(task);
    }
    
    remove(tasks, id) {
        tasks.$remove(id).then((ref) => this.onRemoveCallbackHandler(ref));
    }

    onRemoveCallbackHandler(ref) {
        this.$mdDialog.hide();
    }
    
    setSelected(selected) {
        this.selected = selected;
    }
}