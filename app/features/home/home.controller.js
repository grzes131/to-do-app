export default class HomeController {
    constructor(LoginService, $mdDialog, HomeService, $firebaseArray) {
        this.loginService = LoginService;
        this.$mdDialog = $mdDialog;
        this.homeService = HomeService;
        this.ref = new Firebase("to-do-app2.firebaseio.com/tasks");
        this.tasks = $firebaseArray(this.ref);
    }
    
    addTask() {
        if (this.loginService.isLoggedIn()) {
            this.homeService.saveTask(this.tasks, this.task);
        } else {
            this.$mdDialog.show(
                this.$mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('You are not logged in')
                    .textContent('You have to log in first')
                    .ariaLabel('Not logged in')
                    .ok('Got it!')
            );
        }
    }
    
    showTaskDetails(task) {
        this.homeService.setSelected(this.tasks[this.tasks.indexOf(task)]);
        this.$mdDialog.show({
            controller: 'HomeController',
            templateUrl: './features/home/task.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        });
    }
    
    completeTask(task) {
        if (task.completed === false) {
            task.status = "Completed";
            task.completed = true;
            this.homeService.updateTask(this.tasks, task);
        } else {
            task.status = "Waiting for complete";
            task.completed = false;
            this.homeService.updateTask(this.tasks, task);
        }
    }
    
    delete() {
        let id;
        let selectedId = this.homeService.selected.$id;
        this.tasks.forEach(function(item, index) {
            if (item.$id === selectedId) {
                id = index;
            }
        })
        this.homeService.remove(this.tasks, id);
    }
    
    showIfUserCreatedIt() {
        return localStorage.getItem("session") === this.homeService.selected.email;
    }
    
    cancel() {
        this.$mdDialog.hide();
    }
    
    logout() {
        this.loginService.logout();
    }
}