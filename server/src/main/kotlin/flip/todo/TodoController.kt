package com.example.mymicroservice.controller

import com.example.mymicroservice.domain.Todo
import io.micronaut.http.HttpResponse
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.PathVariable
import io.micronaut.http.annotation.Post
import java.util.concurrent.ConcurrentHashMap

@Controller("/todos")
class TodoController {

    private val todos = ConcurrentHashMap<Long, Todo>()
    private var idSequence = 1L

    @Get
    fun list(): Collection<Todo> = todos.values
}