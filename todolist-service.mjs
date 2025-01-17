export class TodolistService {

    todolist = ["Buat", "Zaman", "Programmer"];


    getJsonList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        })
    }

    getTodolist(request, response) {

        response.write(this.getJsonList());
        response.end();
    }

    createTodolist(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            response.write(this.getJsonList());
            response.end();
        });
    }

    updateTodolist(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            if (this.todolist[body.id]) {
                this.todolist[body.id] = body.todo;
            }

            response.write(this.getJsonList());
            response.end();
        });
    }

    deleteTodo(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            if (this.todolist[body.id]) {
                this.todolist.splice(body.id, 1);
            }

            response.write(this.getJsonList());
            response.end();
        })
    }
}