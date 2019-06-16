package com.todo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.todo.model.Todo;
import com.todo.service.TodoService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TodoController {
	
	//Scans the service initialize it and then injects it here (All this is done by spring/spring container)
	@Autowired
	private TodoService topicService;
	
	@RequestMapping(value = "/check", method = RequestMethod.GET, produces = "application/json")
	public String check() {
		
		return "HelloWorld! I am alive";
	}
	
	@RequestMapping("/todo")
	public List<Todo> getAllTodo() {
		
		return topicService.getAllTodo();
	}
	
	// or @RequestMapping("/topics/{id}"); In that case we do not have to provide foo parameter in @pathVariable
	@RequestMapping("/todo/{foo}")
	public Optional<Todo> getTodo(@PathVariable("foo") Long id)
	{
		return topicService.getTodo(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/todo")
	public void addTodo(@RequestBody Todo t)
	{
		topicService.addTodo(t);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/todo")
	public void updateTodo(@RequestBody Todo t)
	{
		topicService.updateTodo(t);
	}

	@RequestMapping(method=RequestMethod.DELETE, value="/todo/{foo}")
	public void deleteTodo(@PathVariable("foo") long id)
	{
		topicService.deleteTodo(id);
	}
}
