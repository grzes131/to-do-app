export default class HomeService {
    constructor($mdDialog, $firebaseArray) {
        this.$mdDialog = $mdDialog;
        this.$firebaseArray = $firebaseArray;
        this.ref = new Firebase("to-do-app2.firebaseio.com/tasks");
        this.tasks = this.$firebaseArray(this.ref);
        this.selected = null;
    }
    
    saveTask(task) {
        this.tasks.$add({
            email: localStorage.getItem("session"),
            description: task,
            status: 'Waiting for complete',
            completed: false
        });
    }
    
    updateTask(task) {
        this.tasks.$save(task);
    }
    
    remove(id) {
        this.tasks.$remove(id).then((ref) => this.onRemoveCallbackHandler(ref));
    }

    onRemoveCallbackHandler(ref) {
        this.$mdDialog.hide();
    }
    
    setSelected(selected) {
        this.selected = selected;
    }
}