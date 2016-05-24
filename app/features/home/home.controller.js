export default class HomeController {
    constructor(LoginService, $mdDialog, HomeService, $firebaseArray) {
        this.loginService = LoginService;
        this.$mdDialog = $mdDialog;
        this.homeService = HomeService;
        this.showMyTasksFlag = false;
    }
    
    addTask() {
        if (this.loginService.isLoggedIn()) {
            this.homeService.saveTask(this.task);
        } else {
            this.showDialogErrorDialog();
        }
    }
    
    showDialogErrorDialog() {
        this.$mdDialog.show(
                this.$mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('You are not logged in')
                    .textContent('You have to log in first')
                    .ariaLabel('Not logged in')
                    .ok('Got it!')
            );
    }
    
    showTaskDetails(task) {
        this.homeService.setSelected(this.homeService.tasks[this.homeService.tasks.indexOf(task)]);
        this.$mdDialog.show({
            controller: 'HomeController',
            templateUrl: './features/home/task.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        });
    }
    
    completeTask(task) {
        if (this.loginService.isLoggedIn()) {
            this.complete(task);
        } else {
            this.showDialogErrorDialog();
        }
    }
    
    complete(task) {
        if (task.completed === false) {
            task.status = "Completed";
            task.completed = true;
            this.homeService.updateTask(task);
        } else {
            task.status = "Waiting for complete";
            task.completed = false;
            this.homeService.updateTask(task);
        }
    }
    
    delete() {
        let id;
        let selectedId = this.homeService.selected.$id;
        this.homeService.tasks.forEach(function(item, index) {
            if (item.$id === selectedId) {
                id = index;
            }
        })
        this.homeService.remove(id);
    }
    
    showIfUserCreatedIt() {
        return localStorage.getItem("session") === this.homeService.selected.email;
    }
    
    showMyTasks(actual, expected) {
        if (expected === true && (localStorage.getItem("session") === actual.email)) {
            return true;
        }
        
        if (expected === false) {
            return true;
        }
        
        return false;
    }
    
    cancel() {
        this.$mdDialog.hide();
    }
    
    logout() {
        this.loginService.logout();
    }
}