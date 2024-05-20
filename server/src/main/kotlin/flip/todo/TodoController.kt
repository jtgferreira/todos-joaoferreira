package com.example.mymicroservice.controller

import com.example.mymicroservice.domain.Todo
import io.micronaut.http.HttpResponse
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.PathVariable
import io.micronaut.http.annotation.Post
import io.micronaut.http.annotation.Delete
import java.util.concurrent.ConcurrentHashMap
import java.util.Optional


@Controller("/todos")
class TodoController {

    private val todos = ConcurrentHashMap<Long, Todo>()
    private var idSequence = 1L

    @Get
    fun list(): Collection<Todo> = todos.values

    @Post
    fun create(title: String, category: String, description: Optional<String>): HttpResponse<Todo> {
        val id = idSequence++
        val todo = Todo(id, title, category, description)
        todos[id] = todo
        return HttpResponse.created(todo)
    }

    @Delete("/{id}")
    fun remove(@PathVariable id: Long): HttpResponse<Todo> {
        var removedValue = this.todos.remove(id);
       
        if (removedValue == null) {
            return HttpResponse.notFound()
        }
        
        return HttpResponse.ok(removedValue)
    } 
}