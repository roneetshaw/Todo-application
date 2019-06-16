
/**
 * This interface communicates with the database and returns a Schedule entity
 * 
 * @author ShawRoneet
 */

package com.todo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.todo.model.Todo;

public interface TodoRepository extends CrudRepository<Todo, Long>{
	

}