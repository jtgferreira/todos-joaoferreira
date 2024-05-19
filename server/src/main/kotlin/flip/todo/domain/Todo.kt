package com.example.mymicroservice.domain
import io.micronaut.serde.annotation.Serdeable

@Serdeable 
data class Todo(val id: Long, val title: String, val category: String, var description: String)