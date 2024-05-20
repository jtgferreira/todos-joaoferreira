package com.example.mymicroservice.domain
import io.micronaut.serde.annotation.Serdeable
import java.util.Optional

@Serdeable 
data class Todo(val id: Long, val title: String, val category: String, var description: Optional<String>)