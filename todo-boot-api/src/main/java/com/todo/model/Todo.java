package com.todo.model;

/**
 * This is a Model class for Todo 
 *  
 * @author ShawRoneet
 */

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Todo {
	
	@Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "todo_Sequence")
    @SequenceGenerator(name = "todo_Sequence", sequenceName = "TODO_SEQ")
	Long todoId;
	
	@Column(name = "todoTitle")
	String todoTitle;
	
	@Column(name = "description")
	String description;
	
	@Column(name = "eventTime")
	String eventTime;

	public Todo() {
	}

	public Long getTodoId() {
		return todoId;
	}

	public void setTodoId(Long todoId) {
		this.todoId = todoId;
	}

	public String getTodoTitle() {
		return todoTitle;
	}

	public void setTodoTitle(String todoTitle) {
		this.todoTitle = todoTitle;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEventTime() {
		return eventTime;
	}

	public void setEventTime(String eventTime) {
		this.eventTime = eventTime;
	}

}
