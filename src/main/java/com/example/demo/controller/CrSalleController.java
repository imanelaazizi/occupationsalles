package com.example.demo.controller;

import com.example.demo.model.CrSalle;
import com.example.demo.model.SalleCrenauKey;
import com.example.demo.repository.CrSalleRepository;
import com.example.demo.repository.CrenauxRepository;
import com.example.demo.repository.SalleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("crsalles")

public class CrSalleController {

	@Autowired
	private CrSalleRepository crSalleRepository;

	@Autowired
	private SalleRepository salleRepository;

	@Autowired
	private CrenauxRepository crenauxRepository;

	@GetMapping("/all")
	public List<CrSalle> findAll() {
		return crSalleRepository.findAll();
	}

	@PostMapping("/save")
	public void save(@RequestBody CrSalle crs) {
		crSalleRepository.save(new CrSalle(new SalleCrenauKey(crs.getSalle().getId(),crs.getCrenaux().getId()),crs.getDate(),crs.getSalle(),crs.getCrenaux()));
	}
	@PostMapping("/update")
	public void update(@RequestBody CrSalle crsalle) {
		crSalleRepository.update(new CrSalle(crsalle.getDate(),crsalle.getSalle(),crsalle.getCrenaux()));
	}


	@DeleteMapping(value = "/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		System.out.println("id = "+id);
		CrSalle crs = crSalleRepository.findById(Long.parseLong(id));
		crSalleRepository.delete(crs);
	}

	@GetMapping(value = "/count")
	public long count() {
		return crSalleRepository.count();
	}
	
}
