package com.todo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.model.Todo;
import com.todo.repositories.TodoRepository;

//Services are Singleton in Spring

@Service
public class TodoService {
	
	@Autowired
	private TodoRepository todoRepository;

	public List<Todo> getAllTodo()
	{
		List<Todo> todos = new ArrayList<Todo>();
		todoRepository.findAll().forEach(todos::add);
		return todos;
	}
	
	public Optional<Todo> getTodo(Long id)
	{
		return todoRepository.findById(id);
	}
	
	public void addTodo(Todo t)
	{
		todoRepository.save(t);
	}
	
	public void updateTodo(Todo t)
	{
		todoRepository.save(t);
	}
	
	public void deleteTodo(Long id) {

		todoRepository.deleteById(id);
	}
}
