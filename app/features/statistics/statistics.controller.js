export default class StatisticsController {
    constructor($firebaseArray) {
        this.ref = new Firebase("to-do-app2.firebaseio.com/tasks");
        this.tasks = $firebaseArray(this.ref);
        this.setupStatistics();
        this.loaded = false;
    }
    
    setupStatistics() {
        this.tasks.$loaded().then(tasks => this.onLoadCallbackHandler(tasks));
    }
    
    onLoadCallbackHandler(tasks) {
        let myTasks = 0;
        let completed = 0;
        let todo = 0;
        let email = localStorage.getItem("session");
        tasks.forEach(function (item, index) {
            if (item.email === email) {
                myTasks++;
            }
            if (item.completed === true) {
                completed++;
            }
            if (item.completed === false) {
                todo++;
            }
        })
        
        this.myTasks = myTasks;
        this.allTasks = tasks.length;
        this.completed = completed;
        this.todo = todo;
        this.loaded = true;
    }
}